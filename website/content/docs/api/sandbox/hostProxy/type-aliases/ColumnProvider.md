---
title: ColumnProvider
description: Reference — ColumnProvider in the Mutka module API.
---

# Type Alias: ColumnProvider

```ts
type ColumnProvider = (item) => ColumnCell | null | Promise<ColumnCell | null>;
```

Defined in: [sandbox/hostProxy.ts:15](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L15)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`FileItem`](../../../types/interfaces/FileItem.md) |

## Returns

`ColumnCell` \| `null` \| `Promise`\<`ColumnCell` \| `null`\>
