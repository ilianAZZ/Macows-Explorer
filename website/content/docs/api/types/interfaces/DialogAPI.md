---
title: DialogAPI
description: Reference — DialogAPI in the Mutka module API.
---

# Interface: DialogAPI

Defined in: [types.ts:112](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L112)

## Methods

### choose()

```ts
choose(options): Promise<string | null>;
```

Defined in: [types.ts:118](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L118)

Show a single-choice list. Resolves with the chosen option's value, or null if cancelled.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`DialogChooseOptions`](DialogChooseOptions.md) |

#### Returns

`Promise`\<`string` \| `null`\>

***

### confirm()

```ts
confirm(options): Promise<boolean>;
```

Defined in: [types.ts:116](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L116)

Show a yes/no confirmation dialog. Resolves with true (confirm) or false (cancel).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`DialogConfirmOptions`](DialogConfirmOptions.md) |

#### Returns

`Promise`\<`boolean`\>

***

### prompt()

```ts
prompt(options): Promise<string | null>;
```

Defined in: [types.ts:114](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L114)

Show a text-input dialog. Resolves with the entered string or null if cancelled.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`DialogPromptOptions`](DialogPromptOptions.md) |

#### Returns

`Promise`\<`string` \| `null`\>
