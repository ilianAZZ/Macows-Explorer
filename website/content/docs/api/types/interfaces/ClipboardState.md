---
title: ClipboardState
description: Reference — ClipboardState in the Mutka module API.
---

# Interface: ClipboardState

Defined in: [types.ts:49](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L49)

## Properties

### items

```ts
items: FileItem[];
```

Defined in: [types.ts:51](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L51)

Items currently held in the clipboard

***

### operation

```ts
operation: "copy" | "cut" | null;
```

Defined in: [types.ts:53](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L53)

Whether items were copied or cut. Null when clipboard is empty.
