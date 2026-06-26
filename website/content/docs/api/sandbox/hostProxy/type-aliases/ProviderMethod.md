---
title: ProviderMethod
description: Reference — ProviderMethod in the Mutka module API.
---

# Type Alias: ProviderMethod

```ts
type ProviderMethod = 
  | "list"
  | "openFile"
  | "createFolder"
  | "createFile"
  | "deleteItem"
  | "renameItem"
  | "copyFiles"
  | "moveFiles";
```

Defined in: [sandbox/protocol.ts:315](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/protocol.ts#L315)

The file-system provider operations a module may implement (mirrors hostProxy).
