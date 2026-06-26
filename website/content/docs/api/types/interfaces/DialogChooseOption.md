---
title: DialogChooseOption
description: Reference — DialogChooseOption in the Mutka module API.
---

# Interface: DialogChooseOption

Defined in: [types.ts:94](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L94)

One selectable row in a `choose` dialog.

## Properties

### detail?

```ts
optional detail?: string;
```

Defined in: [types.ts:100](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L100)

Optional secondary line shown smaller (e.g. a file path).

***

### icon?

```ts
optional icon?: string;
```

Defined in: [types.ts:102](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L102)

Optional leading icon as an <img> src (data-URI or URL).

***

### label

```ts
label: string;
```

Defined in: [types.ts:96](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L96)

Primary text shown for the row.

***

### value

```ts
value: string;
```

Defined in: [types.ts:98](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L98)

The value `choose` resolves with when this row is picked.
