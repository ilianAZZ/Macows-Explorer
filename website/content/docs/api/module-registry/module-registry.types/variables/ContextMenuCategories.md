---
title: ContextMenuCategories
description: Reference — ContextMenuCategories in the Mutka module API.
---

# Variable: ContextMenuCategories

```ts
const ContextMenuCategories: {
  Edit: "Edit";
  File: "File";
  Selection: "Selection";
  Share: "Share";
  View: "View";
};
```

Defined in: [module-registry/module-registry.types.ts:44](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L44)

Well-known context menu category labels. Use these for consistent grouping
across modules. Any custom string also works. Actions without a category appear
in an unlabeled default group shown first.

## Type Declaration

### Edit

```ts
readonly Edit: "Edit" = "Edit";
```

### File

```ts
readonly File: "File" = "File";
```

### Selection

```ts
readonly Selection: "Selection" = "Selection";
```

### Share

```ts
readonly Share: "Share" = "Share";
```

### View

```ts
readonly View: "View" = "View";
```
