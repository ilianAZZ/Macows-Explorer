---
title: MutkaAction
description: Reference — MutkaAction in the Mutka module API.
---

# Interface: MutkaAction

Defined in: [module-registry/module-registry.types.ts:107](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L107)

## Properties

### contextMenuCategory?

```ts
optional contextMenuCategory?: string;
```

Defined in: [module-registry/module-registry.types.ts:129](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L129)

Context menu category. Actions in the same category share a section header.
Use ContextMenuCategories or any custom string.

***

### contextMenuZones?

```ts
optional contextMenuZones?: readonly ("file" | "background" | "breadcrumb" | "sidebar")[];
```

Defined in: [module-registry/module-registry.types.ts:135](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L135)

UI regions this action appears in when right-clicked. Undefined → the default
zones (file rows + empty background). The registry filters context-menu
actions by the zone the user clicked. See core/menu/menuZone.ts.

***

### execute

```ts
execute: () => void | Promise<void>;
```

Defined in: [module-registry/module-registry.types.ts:137](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L137)

The operation to perform. May be async. Acts via the module's `host` capabilities.

#### Returns

`void` \| `Promise`\<`void`\>

***

### icon?

```ts
optional icon?: string;
```

Defined in: [module-registry/module-registry.types.ts:117](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L117)

Optional icon key from the icon registry (e.g. "trash", "copy", "cloud").
Unknown keys render as nothing. Only string keys reach the renderer.
Full registry: src/components/ContextMenu/icon-registry.ts

***

### id

```ts
id: string;
```

Defined in: [module-registry/module-registry.types.ts:109](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L109)

Globally unique ID, format: "module-id.action-name", e.g. "core.clipboard.copy"

***

### isEnabled?

```ts
optional isEnabled?: (context) => boolean;
```

Defined in: [module-registry/module-registry.types.ts:142](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L142)

Whether this action can run right now. Disabled actions are greyed out.
Default: always enabled.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`BaseContext`](../../../types/interfaces/BaseContext.md) |

#### Returns

`boolean`

***

### isVisible?

```ts
optional isVisible?: (context) => boolean;
```

Defined in: [module-registry/module-registry.types.ts:148](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L148)

Whether this action is shown at all. Hidden actions don't appear in the menu
and their shortcut is suppressed. Default: always visible. Built from a
module's serializable `when` clause for sandboxed modules.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`BaseContext`](../../../types/interfaces/BaseContext.md) |

#### Returns

`boolean`

***

### label

```ts
label: string;
```

Defined in: [module-registry/module-registry.types.ts:111](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L111)

Human-readable label shown in menus and tooltips

***

### shortcut?

```ts
optional shortcut?: string;
```

Defined in: [module-registry/module-registry.types.ts:122](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L122)

Keyboard shortcut in normalized form. Keys: meta, ctrl, alt, shift + key
name (lowercase). Examples: "meta+c", "meta+shift+n", "f2", "meta+backspace"

***

### showInContextMenu?

```ts
optional showInContextMenu?: boolean;
```

Defined in: [module-registry/module-registry.types.ts:124](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L124)

Show this action in the right-click context menu. Default: true.
