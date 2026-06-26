---
title: MutkaOpenHandler
description: Reference — MutkaOpenHandler in the Mutka module API.
---

# Interface: MutkaOpenHandler

Defined in: [module-registry/module-registry.types.ts:153](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L153)

## Properties

### handle

```ts
handle: (item) => void | Promise<void>;
```

Defined in: [module-registry/module-registry.types.ts:164](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L164)

Execute the open operation. Acts via the module's `host` capabilities.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`FileItem`](../../../types/interfaces/FileItem.md) |

#### Returns

`void` \| `Promise`\<`void`\>

***

### id

```ts
id: string;
```

Defined in: [module-registry/module-registry.types.ts:155](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L155)

Globally unique ID, format: "module-id.handler-name"

***

### matches

```ts
matches: (item) => boolean;
```

Defined in: [module-registry/module-registry.types.ts:162](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L162)

Return true if this handler wants to handle the given item.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`FileItem`](../../../types/interfaces/FileItem.md) |

#### Returns

`boolean`

***

### priority?

```ts
optional priority?: number;
```

Defined in: [module-registry/module-registry.types.ts:160](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L160)

Priority for conflict resolution. Higher number wins.
Core defaults are at 0. Community overrides should use 1–100.
