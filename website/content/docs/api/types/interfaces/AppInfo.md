---
title: AppInfo
description: Reference — AppInfo in the Mutka module API.
---

# Interface: AppInfo

Defined in: [types.ts:122](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L122)

An application able to open a file — returned by the `sys.appsForFile` capability.

## Properties

### icon

```ts
icon: string;
```

Defined in: [types.ts:128](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L128)

The app's icon as a base64 PNG data-URI (empty if unavailable).

***

### isDefault

```ts
isDefault: boolean;
```

Defined in: [types.ts:130](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L130)

True for the app macOS would use by default for this file.

***

### name

```ts
name: string;
```

Defined in: [types.ts:124](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L124)

Display name, e.g. "Visual Studio Code".

***

### path

```ts
path: string;
```

Defined in: [types.ts:126](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L126)

Absolute bundle path, e.g. "/Applications/Visual Studio Code.app".
