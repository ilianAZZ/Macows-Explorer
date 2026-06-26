---
title: ListHandler
description: Reference — ListHandler in the Mutka module API.
---

# Type Alias: ListHandler

```ts
type ListHandler = (path) => 
  | FileItem[]
| Promise<FileItem[]>;
```

Defined in: [sandbox/hostProxy.ts:17](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L17)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

## Returns

  \| [`FileItem`](../../../types/interfaces/FileItem.md)[]
  \| `Promise`\<[`FileItem`](../../../types/interfaces/FileItem.md)[]\>
