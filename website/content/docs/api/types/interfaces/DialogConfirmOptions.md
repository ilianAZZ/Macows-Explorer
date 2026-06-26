---
title: DialogConfirmOptions
description: Reference — DialogConfirmOptions in the Mutka module API.
---

# Interface: DialogConfirmOptions

Defined in: [types.ts:84](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L84)

## Properties

### destructive?

```ts
optional destructive?: boolean;
```

Defined in: [types.ts:90](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L90)

When true the confirm button is styled red. Use for destructive actions.

***

### detail?

```ts
optional detail?: string;
```

Defined in: [types.ts:88](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L88)

Secondary descriptive text, shown smaller below the message

***

### message

```ts
message: string;
```

Defined in: [types.ts:86](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L86)

Main question shown in the dialog
