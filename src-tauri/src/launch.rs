// ─── Launch Services: "Open With" ────────────────────────────────────────────
// Lists the applications able to open a given file (what Finder's "Open With…"
// submenu shows) and opens a file with a chosen app. The logic that DECIDES what
// to present and what the user picked lives in the open-with module; this is only
// the thin Launch Services bridge.

use serde::Serialize;

/// Error `open_item` returns when no application claims a file. The frontend
/// recognises this sentinel and offers the "Open With" picker instead of failing.
pub const NO_OPENER_ERROR: &str = "NO_OPENER";

/// True if Launch Services has any application that can open `path`. Used by
/// `open_item` to fall back to the picker for files no app claims (e.g. .DS_Store).
#[cfg(target_os = "macos")]
pub fn has_opener(path: &str) -> bool {
    unsafe { native_has_opener(path) }
}

#[cfg(target_os = "macos")]
unsafe fn native_has_opener(path: &str) -> bool {
    use std::ffi::CString;
    type Id = *mut objc::runtime::Object;

    let c = match CString::new(path) {
        Ok(c) => c,
        Err(_) => return false,
    };
    let ns_path: Id = msg_send![class!(NSString), stringWithUTF8String: c.as_ptr()];
    let url: Id = msg_send![class!(NSURL), fileURLWithPath: ns_path];
    if url.is_null() {
        return false;
    }
    let workspace: Id = msg_send![class!(NSWorkspace), sharedWorkspace];
    let app: Id = msg_send![workspace, URLForApplicationToOpenURL: url];
    !app.is_null()
}

// camelCase so TypeScript receives the fields verbatim (isDefault, not is_default).
#[derive(Serialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct AppInfo {
    /// Display name, e.g. "Visual Studio Code".
    pub name: String,
    /// Absolute bundle path, e.g. "/Applications/Visual Studio Code.app".
    pub path: String,
    /// The app's icon as a base64 PNG data-URI (for the picker). Empty if unavailable.
    pub icon: String,
    /// True for the app Launch Services would use by default for this file.
    pub is_default: bool,
}

/// Applications that can open `path`, the way Finder's "Open With…" submenu lists
/// them. The default app is flagged and sorted first.
#[tauri::command]
pub fn apps_for_file(path: String) -> Result<Vec<AppInfo>, String> {
    #[cfg(target_os = "macos")]
    unsafe {
        return native_apps_for_file(&path);
    }
    #[cfg(not(target_os = "macos"))]
    {
        let _ = path;
        Err("\"Open With\" is only available on macOS".into())
    }
}

/// Open `path` with the application bundle at `app_path` (the `open -a` route, the
/// same Launch Services launch Finder's "Open With" performs).
#[tauri::command]
pub fn open_with(path: String, app_path: String) -> Result<(), String> {
    #[cfg(target_os = "macos")]
    std::process::Command::new("open")
        .arg("-a")
        .arg(&app_path)
        .arg(&path)
        .spawn()
        .map_err(|e| e.to_string())?;
    #[cfg(not(target_os = "macos"))]
    {
        let _ = (&path, &app_path);
    }
    Ok(())
}

#[cfg(target_os = "macos")]
unsafe fn native_apps_for_file(path: &str) -> Result<Vec<AppInfo>, String> {
    use std::ffi::CString;
    type Id = *mut objc::runtime::Object;

    let c = CString::new(path).map_err(|e| e.to_string())?;
    let ns_path: Id = msg_send![class!(NSString), stringWithUTF8String: c.as_ptr()];
    let url: Id = msg_send![class!(NSURL), fileURLWithPath: ns_path];
    if url.is_null() {
        return Err("invalid file path".into());
    }
    let workspace: Id = msg_send![class!(NSWorkspace), sharedWorkspace];

    // The default handler — flagged and sorted first. Null for files no app claims
    // (e.g. a bare .DS_Store), in which case nothing is marked default.
    let default_url: Id = msg_send![workspace, URLForApplicationToOpenURL: url];
    let default_path = ns_url_path(default_url);

    // Every candidate application (macOS 12+). Returns NSArray<NSURL>.
    let apps: Id = msg_send![workspace, URLsForApplicationsToOpenURL: url];
    if apps.is_null() {
        return Ok(Vec::new());
    }
    let count: usize = msg_send![apps, count];
    let mut out: Vec<AppInfo> = Vec::with_capacity(count);
    for i in 0..count {
        let app_url: Id = msg_send![apps, objectAtIndex: i];
        let app_path = match ns_url_path(app_url) {
            Some(p) => p,
            None => continue,
        };
        let name = app_display_name(&app_path);
        let icon = crate::icons::path_icon_data_uri(&app_path).unwrap_or_default();
        let is_default = default_path.as_deref() == Some(app_path.as_str());
        out.push(AppInfo { name, path: app_path, icon, is_default });
    }
    // Default app first, then alphabetically by name — like Finder's submenu.
    out.sort_by(|a, b| {
        b.is_default
            .cmp(&a.is_default)
            .then(a.name.to_lowercase().cmp(&b.name.to_lowercase()))
    });
    Ok(out)
}

/// `[url path]` as an owned String, or None if the URL or its path is null.
#[cfg(target_os = "macos")]
unsafe fn ns_url_path(url: *mut objc::runtime::Object) -> Option<String> {
    use std::ffi::CStr;
    type Id = *mut objc::runtime::Object;
    if url.is_null() {
        return None;
    }
    let ns_str: Id = msg_send![url, path];
    if ns_str.is_null() {
        return None;
    }
    let cstr: *const std::os::raw::c_char = msg_send![ns_str, UTF8String];
    if cstr.is_null() {
        return None;
    }
    Some(CStr::from_ptr(cstr).to_string_lossy().to_string())
}

/// "/Applications/Visual Studio Code.app" → "Visual Studio Code".
#[cfg(target_os = "macos")]
fn app_display_name(app_path: &str) -> String {
    std::path::Path::new(app_path)
        .file_stem()
        .map(|s| s.to_string_lossy().to_string())
        .unwrap_or_else(|| app_path.to_string())
}
