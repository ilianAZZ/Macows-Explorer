---
title: UIEventHandler
description: Reference — UIEventHandler in the Mutka module API.
---

# Type Alias: UIEventHandler

```ts
type UIEventHandler = (value) => void | Promise<void>;
```

Defined in: [sandbox/hostProxy.ts:24](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L24)

A UI-event handler (button/list/form interaction) registered via host.onUIEvent.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

## Returns

`void` \| `Promise`\<`void`\>
