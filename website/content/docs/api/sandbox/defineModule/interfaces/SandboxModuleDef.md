---
title: SandboxModuleDef
description: Reference — SandboxModuleDef in the Mutka module API.
---

# Interface: SandboxModuleDef

Defined in: [sandbox/defineModule.ts:11](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/defineModule.ts#L11)

## Properties

### columns?

```ts
optional columns?: ColumnContribution[];
```

Defined in: [sandbox/defineModule.ts:36](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/defineModule.ts#L36)

Custom list-view columns. Each column declares declarative applicability
(which directories it shows in, which items get a value) and its value is
produced by a provider registered in setup via host.onColumn(id, handler).

***

### commands?

```ts
optional commands?: SandboxCommand[];
```

Defined in: [sandbox/defineModule.ts:20](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/defineModule.ts#L20)

Commands surfaced into the app's menus / toolbar.

***

### description?

```ts
optional description?: string;
```

Defined in: [sandbox/defineModule.ts:16](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/defineModule.ts#L16)

***

### fileIcons?

```ts
optional fileIcons?: FileIconContribution[];
```

Defined in: [sandbox/defineModule.ts:30](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/defineModule.ts#L30)

File-type icon overrides: ship your own logo (a base64 data:image/... URI)
for a set of extensions, replacing the native macOS icon. Rendered via
<img src> only, so it's injection-safe.

***

### fileSystemProviders?

```ts
optional fileSystemProviders?: string[];
```

Defined in: [sandbox/defineModule.ts:57](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/defineModule.ts#L57)

URI schemes this module provides a virtual file system for (e.g. "nextcloud").
Register the handlers in setup with host.onList(scheme, …) / host.onOpenFile(…).
Works in BOTH runtimes: built-ins call providers in-process; community modules
serve each op over a worker round-trip. Note the worker realm has no DOM APIs
(DOMParser, etc.), so providers needing those should ship as built-ins.

***

### id

```ts
id: string;
```

Defined in: [sandbox/defineModule.ts:13](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/defineModule.ts#L13)

Unique module id, "author.name" convention.

***

### name?

```ts
optional name?: string;
```

Defined in: [sandbox/defineModule.ts:14](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/defineModule.ts#L14)

***

### openHandlers?

```ts
optional openHandlers?: SandboxOpenHandler[];
```

Defined in: [sandbox/defineModule.ts:22](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/defineModule.ts#L22)

Open handlers (double-click behavior) by item type.

***

### panels?

```ts
optional panels?: PanelContribution[];
```

Defined in: [sandbox/defineModule.ts:43](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/defineModule.ts#L43)

Declarative side-pane panels. Each declares a tab (id/title/icon/side); fill
it from setup with host.ui.render(id, node) — a serializable UINode tree the
host renders natively. Buttons/lists/forms in the tree fire UI-event handlers
registered via host.onUIEvent(id, handler). Requires the `ui` permission.

***

### permissions?

```ts
optional permissions?: ModulePermission[];
```

Defined in: [sandbox/defineModule.ts:18](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/defineModule.ts#L18)

Every privileged capability this module uses MUST be listed here.

***

### settingsSections?

```ts
optional settingsSections?: SettingsSectionContribution[];
```

Defined in: [sandbox/defineModule.ts:49](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/defineModule.ts#L49)

Declarative settings sections shown inside the app's Settings panel. Same
model as `panels`: declare {id, title}, fill via host.ui.render(id, node).
Requires the `ui` permission.

***

### setup?

```ts
optional setup?: (host) => void | Promise<void>;
```

Defined in: [sandbox/defineModule.ts:62](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/defineModule.ts#L62)

Runs once after load. Register command/open handlers and event subscriptions
here. Reaches the system only through `host.*` (each gated by permissions).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `host` | [`SandboxHostApi`](../../hostProxy/interfaces/SandboxHostApi.md) |

#### Returns

`void` \| `Promise`\<`void`\>

***

### sidebarItems?

```ts
optional sidebarItems?: SidebarItem[];
```

Defined in: [sandbox/defineModule.ts:24](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/defineModule.ts#L24)

Declarative entries in the left "Places" sidebar, grouped by category.

***

### version?

```ts
optional version?: string;
```

Defined in: [sandbox/defineModule.ts:15](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/defineModule.ts#L15)
