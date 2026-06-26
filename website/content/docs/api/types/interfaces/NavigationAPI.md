---
title: NavigationAPI
description: Reference — NavigationAPI in the Mutka module API.
---

# Interface: NavigationAPI

Defined in: [types.ts:58](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L58)

## Properties

### canGoBack

```ts
canGoBack: boolean;
```

Defined in: [types.ts:68](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L68)

Whether there is a previous entry to go back to

***

### canGoForward

```ts
canGoForward: boolean;
```

Defined in: [types.ts:70](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L70)

Whether there is a next entry to go forward to

***

### goBack

```ts
goBack: () => void;
```

Defined in: [types.ts:62](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L62)

Go back one step in history

#### Returns

`void`

***

### goForward

```ts
goForward: () => void;
```

Defined in: [types.ts:64](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L64)

Go forward one step in history

#### Returns

`void`

***

### goUp

```ts
goUp: () => void;
```

Defined in: [types.ts:66](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L66)

Navigate to the parent of the current directory

#### Returns

`void`

***

### navigate

```ts
navigate: (path) => void;
```

Defined in: [types.ts:60](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L60)

Navigate to a directory, adding it to the history stack

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`void`
