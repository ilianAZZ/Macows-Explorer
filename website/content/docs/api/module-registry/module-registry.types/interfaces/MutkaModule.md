---
title: MutkaModule
description: Reference — MutkaModule in the Mutka module API.
---

# Interface: MutkaModule

Defined in: [module-registry/module-registry.types.ts:220](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L220)

## Properties

### actions

```ts
actions: MutkaAction[];
```

Defined in: [module-registry/module-registry.types.ts:232](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L232)

Actions this module contributes.

***

### declarativePanels?

```ts
optional declarativePanels?: DeclarativePanelContribution[];
```

Defined in: [module-registry/module-registry.types.ts:240](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L240)

Declarative side-pane panels filled from a UINode tree (sandbox-friendly).

***

### description?

```ts
optional description?: string;
```

Defined in: [module-registry/module-registry.types.ts:228](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L228)

One-sentence description.

***

### id

```ts
id: string;
```

Defined in: [module-registry/module-registry.types.ts:222](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L222)

Unique module ID. Follows the "author.name" convention.

***

### name

```ts
name: string;
```

Defined in: [module-registry/module-registry.types.ts:224](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L224)

Display name.

***

### onMount?

```ts
optional onMount?: () => void | (() => void) | () => void[];
```

Defined in: [module-registry/module-registry.types.ts:246](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L246)

Called once after registration. Return unsub fn(s) to run on unregister.

#### Returns

`void` \| (() => `void`) \| () => `void`[]

***

### onUnmount?

```ts
optional onUnmount?: () => void;
```

Defined in: [module-registry/module-registry.types.ts:248](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L248)

Called once before unregistration, for non-EventBus cleanup (timers, etc.).

#### Returns

`void`

***

### openHandlers?

```ts
optional openHandlers?: MutkaOpenHandler[];
```

Defined in: [module-registry/module-registry.types.ts:234](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L234)

Open handlers this module contributes (optional).

***

### permissions?

```ts
optional permissions?: readonly ModulePermission[];
```

Defined in: [module-registry/module-registry.types.ts:230](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L230)

Permissions this module declared — enforced by the capability gateway.

***

### runUIEvent?

```ts
optional runUIEvent?: (handlerId, value) => void;
```

Defined in: [module-registry/module-registry.types.ts:244](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L244)

Dispatch a UI-event (button/list/form interaction) into this module's runtime.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handlerId` | `string` |
| `value` | `unknown` |

#### Returns

`void`

***

### settingsSections?

```ts
optional settingsSections?: SettingsSectionContribution[];
```

Defined in: [module-registry/module-registry.types.ts:242](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L242)

Declarative settings sections filled from a UINode tree (sandbox-friendly).

***

### sidebarItems?

```ts
optional sidebarItems?: SidebarItem[];
```

Defined in: [module-registry/module-registry.types.ts:236](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L236)

Declarative left-sidebar entries this module contributes (optional).

***

### sidebarPanels?

```ts
optional sidebarPanels?: MutkaSidebarPanel[];
```

Defined in: [module-registry/module-registry.types.ts:238](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L238)

Sidebar panels this module contributes as React components (core UI only).

***

### version

```ts
version: string;
```

Defined in: [module-registry/module-registry.types.ts:226](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L226)

SemVer string, e.g. "1.0.0".
