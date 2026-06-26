---
title: ContextMenuGroup
description: Reference — ContextMenuGroup in the Mutka module API.
---

# Interface: ContextMenuGroup

Defined in: [module-registry/module-registry.types.ts:56](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L56)

A group of context menu actions rendered under a shared category header.

## Properties

### actions

```ts
actions: MutkaAction[];
```

Defined in: [module-registry/module-registry.types.ts:59](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L59)

***

### label?

```ts
optional label?: string;
```

Defined in: [module-registry/module-registry.types.ts:58](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L58)

Category label shown as a small header. Undefined for the default (no-header) group.
