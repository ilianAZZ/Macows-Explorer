fn main() {
    // QLPreviewPanel (native Quick Look) lives in the Quartz umbrella framework,
    // which is not otherwise linked. Required by src/preview.rs on macOS.
    if std::env::var("CARGO_CFG_TARGET_OS").as_deref() == Ok("macos") {
        println!("cargo:rustc-link-lib=framework=Quartz");
    }
    tauri_build::build()
}
