---
title: FileItem
description: Reference — FileItem in the Mutka module API.
---

# Interface: FileItem

Defined in: [types.ts:14](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L14)

A single entry returned by the Rust `read_dir` command.

## Properties

### extension?

```ts
optional extension?: string;
```

Defined in: [types.ts:26](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L26)

Lowercase extension without dot, e.g. "pdf". Undefined for dirs or extensionless files.

***

### hasCustomIcon

```ts
hasCustomIcon: boolean;
```

Defined in: [types.ts:44](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L44)

True if this folder carries a custom Finder icon (an "Icon\r" file). Still
navigable, but the UI shows its real icon instead of the generic folder one.

***

### isDir

```ts
isDir: boolean;
```

Defined in: [types.ts:20](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L20)

True if this entry is a directory

***

### isHidden

```ts
isHidden: boolean;
```

Defined in: [types.ts:28](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L28)

True for dotfiles (name starts with "."). The UI dims these like Finder.

***

### isPackage

```ts
isPackage: boolean;
```

Defined in: [types.ts:39](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L39)

True if this directory is a macOS package/bundle (.app, .bundle, …). Though
`isDir` is true, the UI launches it like a file and shows its real icon
instead of navigating into it.

***

### isSymlink

```ts
isSymlink: boolean;
```

Defined in: [types.ts:33](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L33)

True if this entry is a symbolic link. `isDir`/`size`/`modified` reflect the
link's TARGET (Rust follows it), so a link to a folder navigates in-app.

***

### modified

```ts
modified: number;
```

Defined in: [types.ts:24](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L24)

Last-modified timestamp in UNIX seconds

***

### name

```ts
name: string;
```

Defined in: [types.ts:16](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L16)

Filename without path, e.g. "document.pdf"

***

### path

```ts
path: string;
```

Defined in: [types.ts:18](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L18)

Absolute POSIX path, e.g. "/Users/ilian/Documents/document.pdf"

***

### size

```ts
size: number;
```

Defined in: [types.ts:22](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/types.ts#L22)

File size in bytes. 0 for directories.
