---
title: BaseContext
description: Reference — BaseContext in the Mutka module API.
---

# Interface: BaseContext

Defined in: [types.ts:141](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L141)

Read-only view of app state — used by isEnabled / isVisible (when) checks and
passed to the ContextMenu component for rendering. Modules never act through
this; all privileged operations go through the `host` capabilities (see
core/sandbox). This is purely for visibility/enablement predicates.

## Properties

### clipboard

```ts
clipboard: ClipboardState;
```

Defined in: [types.ts:144](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L144)

***

### currentDirectory

```ts
currentDirectory: string;
```

Defined in: [types.ts:143](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L143)

***

### navigation

```ts
navigation: NavigationAPI;
```

Defined in: [types.ts:145](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L145)

***

### selectedItems

```ts
selectedItems: FileItem[];
```

Defined in: [types.ts:142](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L142)
