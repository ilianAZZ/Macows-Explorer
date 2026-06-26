---
title: MutkaSidebarPanel
description: Reference — MutkaSidebarPanel in the Mutka module API.
---

# Interface: MutkaSidebarPanel

Defined in: [module-registry/module-registry.types.ts:179](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L179)

## Properties

### component

```ts
component: ComponentType<SidebarPanelProps>;
```

Defined in: [module-registry/module-registry.types.ts:191](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L191)

React component rendered inside the panel

***

### defaultWidth?

```ts
optional defaultWidth?: number;
```

Defined in: [module-registry/module-registry.types.ts:189](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L189)

Default panel width in pixels. Min 180, max 480.

***

### icon

```ts
icon: string;
```

Defined in: [module-registry/module-registry.types.ts:183](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L183)

Icon shown in the sidebar tab strip (emoji or SF Symbol name)

***

### id

```ts
id: string;
```

Defined in: [module-registry/module-registry.types.ts:181](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L181)

Globally unique ID, format: "module-id.panel-name"

***

### side?

```ts
optional side?: "left" | "right";
```

Defined in: [module-registry/module-registry.types.ts:187](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L187)

Which side the panel prefers. Core may override based on layout.

***

### title

```ts
title: string;
```

Defined in: [module-registry/module-registry.types.ts:185](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/module-registry/module-registry.types.ts#L185)

Tooltip / accessible label for the panel tab
