---
title: module-registry/module-registry.types
description: Reference — module-registry/module-registry.types in the Mutka module API.
---

# module-registry/module-registry.types

## Interfaces

| Interface | Description |
| ------ | ------ |
| [ContextMenuGroup](interfaces/ContextMenuGroup.md) | A group of context menu actions rendered under a shared category header. |
| [DeclarativePanelContribution](interfaces/DeclarativePanelContribution.md) | - |
| [MutkaAction](interfaces/MutkaAction.md) | - |
| [MutkaModule](interfaces/MutkaModule.md) | - |
| [MutkaOpenHandler](interfaces/MutkaOpenHandler.md) | - |
| [MutkaSidebarPanel](interfaces/MutkaSidebarPanel.md) | - |
| [SettingsSectionContribution](interfaces/SettingsSectionContribution.md) | - |
| [SidebarItem](interfaces/SidebarItem.md) | A declarative entry a module contributes to the left "Places" sidebar. Serializable — crosses the worker boundary. Clicking navigates to `path` or runs `command` (provide one). |
| [SidebarItemGroup](interfaces/SidebarItemGroup.md) | A group of sidebar items rendered under a shared category header. |
| [SidebarPanelProps](interfaces/SidebarPanelProps.md) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [BuiltinContextMenuCategory](type-aliases/BuiltinContextMenuCategory.md) | - |
| [ModulePermission](type-aliases/ModulePermission.md) | Permissions a module may request. A module must declare every capability it uses; the gateway (core/sandbox/gateway.ts) denies any capability whose permission is absent from the module's manifest. |

## Variables

| Variable | Description |
| ------ | ------ |
| [ContextMenuCategories](variables/ContextMenuCategories.md) | Well-known context menu category labels. Use these for consistent grouping across modules. Any custom string also works. Actions without a category appear in an unlabeled default group shown first. |
| [SidebarCategories](variables/SidebarCategories.md) | Suggested categories for sidebar items. A module may use any custom string; items sharing a category are grouped together under that header. |
