---
title: SidebarItem
description: Reference — SidebarItem in the Mutka module API.
---

# Interface: SidebarItem

Defined in: [module-registry/module-registry.types.ts:81](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L81)

A declarative entry a module contributes to the left "Places" sidebar.
Serializable — crosses the worker boundary. Clicking navigates to `path`
or runs `command` (provide one).

## Properties

### category?

```ts
optional category?: string;
```

Defined in: [module-registry/module-registry.types.ts:87](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L87)

Group header. Use SidebarCategories or any custom string.

***

### command?

```ts
optional command?: string;
```

Defined in: [module-registry/module-registry.types.ts:91](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L91)

Or run this command id when clicked.

***

### icon?

```ts
optional icon?: string;
```

Defined in: [module-registry/module-registry.types.ts:85](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L85)

Icon registry key (e.g. "cloud", "folder") or an emoji.

***

### id

```ts
id: string;
```

Defined in: [module-registry/module-registry.types.ts:82](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L82)

***

### label

```ts
label: string;
```

Defined in: [module-registry/module-registry.types.ts:83](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L83)

***

### path?

```ts
optional path?: string;
```

Defined in: [module-registry/module-registry.types.ts:89](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L89)

Navigate here when clicked.

***

### removable?

```ts
optional removable?: boolean;
```

Defined in: [module-registry/module-registry.types.ts:96](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L96)

Show a remove (✕) affordance. Clicking it emits "sidebar:item-remove" with
this item's id — the owning module listens and updates its dynamic items.
