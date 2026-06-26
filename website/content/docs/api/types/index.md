---
title: types
description: Reference — types in the Mutka module API.
---

# types

## Interfaces

| Interface | Description |
| ------ | ------ |
| [AppInfo](interfaces/AppInfo.md) | An application able to open a file — returned by the `sys.appsForFile` capability. |
| [BaseContext](interfaces/BaseContext.md) | Read-only view of app state — used by isEnabled / isVisible (when) checks and passed to the ContextMenu component for rendering. Modules never act through this; all privileged operations go through the `host` capabilities (see core/sandbox). This is purely for visibility/enablement predicates. |
| [ClipboardState](interfaces/ClipboardState.md) | - |
| [DialogAPI](interfaces/DialogAPI.md) | - |
| [DialogChooseOption](interfaces/DialogChooseOption.md) | One selectable row in a `choose` dialog. |
| [DialogChooseOptions](interfaces/DialogChooseOptions.md) | - |
| [DialogConfirmOptions](interfaces/DialogConfirmOptions.md) | - |
| [DialogPromptOptions](interfaces/DialogPromptOptions.md) | - |
| [FileItem](interfaces/FileItem.md) | A single entry returned by the Rust `read_dir` command. |
| [NavigationAPI](interfaces/NavigationAPI.md) | - |
