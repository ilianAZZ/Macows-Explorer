---
title: ModulePermission
description: Reference — ModulePermission in the Mutka module API.
---

# Type Alias: ModulePermission

```ts
type ModulePermission = 
  | "fs:read"
  | "fs:write"
  | "fs:temp"
  | "clipboard:read"
  | "clipboard:write"
  | "navigation"
  | "view"
  | "dialog"
  | "network"
  | "storage"
  | "secrets"
  | "ui"
  | "database"
  | "shell";
```

Defined in: [module-registry/module-registry.types.ts:21](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L21)

Permissions a module may request. A module must declare every capability it
uses; the gateway (core/sandbox/gateway.ts) denies any capability whose
permission is absent from the module's manifest.
