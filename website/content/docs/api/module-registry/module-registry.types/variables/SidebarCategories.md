---
title: SidebarCategories
description: Reference — SidebarCategories in the Mutka module API.
---

# Variable: SidebarCategories

```ts
const SidebarCategories: {
  Cloud: "Cloud";
  Devices: "Devices";
  Favorites: "Favorites";
  Locations: "Locations";
  Tags: "Tags";
};
```

Defined in: [module-registry/module-registry.types.ts:68](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L68)

Suggested categories for sidebar items. A module may use any custom string;
items sharing a category are grouped together under that header.

## Type Declaration

### Cloud

```ts
readonly Cloud: "Cloud" = "Cloud";
```

### Devices

```ts
readonly Devices: "Devices" = "Devices";
```

### Favorites

```ts
readonly Favorites: "Favorites" = "Favorites";
```

### Locations

```ts
readonly Locations: "Locations" = "Locations";
```

### Tags

```ts
readonly Tags: "Tags" = "Tags";
```
