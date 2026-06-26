---
title: SandboxHostApi
description: Reference — SandboxHostApi in the Mutka module API.
---

# Interface: SandboxHostApi

Defined in: [sandbox/hostProxy.ts:48](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L48)

## Properties

### board

```ts
board: {
  readFiles: Promise<unknown>;
  writeFiles: Promise<unknown>;
};
```

Defined in: [sandbox/hostProxy.ts:63](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L63)

#### readFiles()

```ts
readFiles(): Promise<unknown>;
```

##### Returns

`Promise`\<`unknown`\>

#### writeFiles()

```ts
writeFiles(paths, operation): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `paths` | `string`[] |
| `operation` | `"copy"` \| `"cut"` |

##### Returns

`Promise`\<`unknown`\>

***

### config

```ts
config: {
  get: Promise<unknown>;
  set: Promise<unknown>;
};
```

Defined in: [sandbox/hostProxy.ts:146](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L146)

Per-module persisted config (gated by the `storage` permission).

#### get()

```ts
get(key): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### set()

```ts
set(key, value): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `string` |

##### Returns

`Promise`\<`unknown`\>

***

### db

```ts
db: {
  query: Promise<unknown>;
};
```

Defined in: [sandbox/hostProxy.ts:158](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L158)

Read-only SQL against a SQLite file (gated by `database`). Resolves to
`{ columns: string[]; rows: (string | null)[][] }`.

#### query()

```ts
query(path, sql): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `sql` | `string` |

##### Returns

`Promise`\<`unknown`\>

***

### dialog

```ts
dialog: {
  choose: Promise<unknown>;
  confirm: Promise<unknown>;
  prompt: Promise<unknown>;
};
```

Defined in: [sandbox/hostProxy.ts:90](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L90)

#### choose()

```ts
choose(options): Promise<unknown>;
```

Show a single-choice list. Resolves with the chosen option's value, or null.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | \{ `message`: `string`; `options`: \{ `detail?`: `string`; `icon?`: `string`; `label`: `string`; `value`: `string`; \}[]; \} |
| `options.message` | `string` |
| `options.options` | \{ `detail?`: `string`; `icon?`: `string`; `label`: `string`; `value`: `string`; \}[] |

##### Returns

`Promise`\<`unknown`\>

#### confirm()

```ts
confirm(options): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | \{ `destructive?`: `boolean`; `detail?`: `string`; `message`: `string`; \} |
| `options.destructive?` | `boolean` |
| `options.detail?` | `string` |
| `options.message` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### prompt()

```ts
prompt(options): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | \{ `defaultValue?`: `string`; `message`: `string`; `placeholder?`: `string`; \} |
| `options.defaultValue?` | `string` |
| `options.message` | `string` |
| `options.placeholder?` | `string` |

##### Returns

`Promise`\<`unknown`\>

***

### events

```ts
events: {
  on: void;
};
```

Defined in: [sandbox/hostProxy.ts:192](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L192)

Subscribe to a whitelisted app event.

#### on()

```ts
on(event, handler): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| `handler` | [`EventHandler`](../type-aliases/EventHandler.md) |

##### Returns

`void`

***

### fs

```ts
fs: {
  cloudStatus: Promise<unknown>;
  copyFiles: Promise<unknown>;
  createFile: Promise<unknown>;
  createFolder: Promise<unknown>;
  deleteItem: Promise<unknown>;
  moveFiles: Promise<unknown>;
  openItem: Promise<unknown>;
  readBytes: Promise<unknown>;
  readDir: Promise<unknown>;
  renameItem: Promise<unknown>;
};
```

Defined in: [sandbox/hostProxy.ts:49](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L49)

#### cloudStatus()

```ts
cloudStatus(path): Promise<unknown>;
```

Whether a file is materialized locally or cloud-only ("downloaded" | "cloud").

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### copyFiles()

```ts
copyFiles(paths, dest): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `paths` | `string`[] |
| `dest` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### createFile()

```ts
createFile(path): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### createFolder()

```ts
createFolder(path): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### deleteItem()

```ts
deleteItem(path): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### moveFiles()

```ts
moveFiles(paths, dest): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `paths` | `string`[] |
| `dest` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### openItem()

```ts
openItem(path): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### readBytes()

```ts
readBytes(path): Promise<unknown>;
```

Read a file's raw bytes (resolves to a Uint8Array).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### readDir()

```ts
readDir(path): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### renameItem()

```ts
renameItem(from, to): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `from` | `string` |
| `to` | `string` |

##### Returns

`Promise`\<`unknown`\>

***

### home

```ts
home: {
  get: Promise<unknown>;
  set: Promise<unknown>;
};
```

Defined in: [sandbox/hostProxy.ts:97](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L97)

The app's home directory store (distinct from the OS home, sys.homeDir).

#### get()

```ts
get(): Promise<unknown>;
```

Read the current app home directory.

##### Returns

`Promise`\<`unknown`\>

#### set()

```ts
set(path): Promise<unknown>;
```

Set the app home directory (any module may override it).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

##### Returns

`Promise`\<`unknown`\>

***

### nav

```ts
nav: {
  goBack: Promise<unknown>;
  goForward: Promise<unknown>;
  goUp: Promise<unknown>;
  navigate: Promise<unknown>;
};
```

Defined in: [sandbox/hostProxy.ts:67](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L67)

#### goBack()

```ts
goBack(): Promise<unknown>;
```

##### Returns

`Promise`\<`unknown`\>

#### goForward()

```ts
goForward(): Promise<unknown>;
```

##### Returns

`Promise`\<`unknown`\>

#### goUp()

```ts
goUp(): Promise<unknown>;
```

##### Returns

`Promise`\<`unknown`\>

#### navigate()

```ts
navigate(path): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

##### Returns

`Promise`\<`unknown`\>

***

### net

```ts
net: {
  download: Promise<unknown>;
  request: Promise<unknown>;
  upload: Promise<unknown>;
};
```

Defined in: [sandbox/hostProxy.ts:140](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L140)

Host-proxied HTTP (avoids CORS, gated by the `network` permission).

#### download()

```ts
download(options): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`NetDownloadOptions`](NetDownloadOptions.md) |

##### Returns

`Promise`\<`unknown`\>

#### request()

```ts
request(options): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`NetRequestOptions`](NetRequestOptions.md) |

##### Returns

`Promise`\<`unknown`\>

#### upload()

```ts
upload(options): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`NetUploadOptions`](NetUploadOptions.md) |

##### Returns

`Promise`\<`unknown`\>

***

### secrets

```ts
secrets: {
  delete: Promise<unknown>;
  get: Promise<unknown>;
  set: Promise<unknown>;
};
```

Defined in: [sandbox/hostProxy.ts:151](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L151)

Per-module credentials in the macOS Keychain (gated by `secrets`).

#### delete()

```ts
delete(key): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### get()

```ts
get(key): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### set()

```ts
set(key, value): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `string` |

##### Returns

`Promise`\<`unknown`\>

***

### selection

```ts
selection: {
  set: Promise<unknown>;
};
```

Defined in: [sandbox/hostProxy.ts:79](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L79)

Drive view state: the current selection and the active sort.

#### set()

```ts
set(items): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | [`FileItem`](../../../types/interfaces/FileItem.md)[] |

##### Returns

`Promise`\<`unknown`\>

***

### settings

```ts
settings: {
  toggle: Promise<unknown>;
};
```

Defined in: [sandbox/hostProxy.ts:104](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L104)

Toggle the settings overlay open/closed.

#### toggle()

```ts
toggle(): Promise<unknown>;
```

##### Returns

`Promise`\<`unknown`\>

***

### sidebar

```ts
sidebar: {
  set: void;
};
```

Defined in: [sandbox/hostProxy.ts:190](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L190)

Replace this module's dynamic left-sidebar items (e.g. a bookmarks list).

#### set()

```ts
set(items): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | [`SidebarItem`](../../../module-registry/module-registry.types/interfaces/SidebarItem.md)[] |

##### Returns

`void`

***

### statusbar

```ts
statusbar: {
  remove: Promise<unknown>;
  set: Promise<unknown>;
};
```

Defined in: [sandbox/hostProxy.ts:117](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L117)

Bottom status-bar items (e.g. a git widget). Gated by `ui`.

#### remove()

```ts
remove(itemId): Promise<unknown>;
```

Remove a status-bar item by id.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `itemId` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### set()

```ts
set(item): Promise<unknown>;
```

Add or replace one status-bar item (keyed by its id).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | `StatusBarItem` |

##### Returns

`Promise`\<`unknown`\>

***

### sys

```ts
sys: {
  appsForFile: Promise<unknown>;
  homeDir: Promise<unknown>;
  lastDir: Promise<unknown>;
  openWith: Promise<unknown>;
  previewUpdate: Promise<unknown>;
  quickLook: Promise<unknown>;
  startDrag: Promise<unknown>;
  writeTempFile: Promise<unknown>;
};
```

Defined in: [sandbox/hostProxy.ts:123](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L123)

#### appsForFile()

```ts
appsForFile(path): Promise<unknown>;
```

Apps that can open a file (Launch Services), default flagged + first.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### homeDir()

```ts
homeDir(): Promise<unknown>;
```

##### Returns

`Promise`\<`unknown`\>

#### lastDir()

```ts
lastDir(): Promise<unknown>;
```

The last visited local directory (for restoring navigation at launch).

##### Returns

`Promise`\<`unknown`\>

#### openWith()

```ts
openWith(path, appPath): Promise<unknown>;
```

Open a file with a specific application bundle path.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `appPath` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### previewUpdate()

```ts
previewUpdate(path): Promise<unknown>;
```

Refresh an already-open Quick Look panel to preview `path` (else no-op).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### quickLook()

```ts
quickLook(path): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### startDrag()

```ts
startDrag(paths, icon?): Promise<unknown>;
```

Start a native OS file drag of `paths`, previewed by `icon` (data-URI/path).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `paths` | `string`[] |
| `icon?` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### writeTempFile()

```ts
writeTempFile(filename, base64): Promise<unknown>;
```

Write bytes (base64) to a temp file and return its path. Gated by `fs:temp`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `filename` | `string` |
| `base64` | `string` |

##### Returns

`Promise`\<`unknown`\>

***

### tabs

```ts
tabs: {
  isActive: Promise<unknown>;
  openTab: Promise<unknown>;
  openTabInBackground: Promise<unknown>;
};
```

Defined in: [sandbox/hostProxy.ts:73](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L73)

#### isActive()

```ts
isActive(): Promise<unknown>;
```

##### Returns

`Promise`\<`unknown`\>

#### openTab()

```ts
openTab(path): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### openTabInBackground()

```ts
openTabInBackground(path): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

##### Returns

`Promise`\<`unknown`\>

***

### ui

```ts
ui: {
  clear: Promise<unknown>;
  modal: Promise<unknown>;
  render: Promise<unknown>;
};
```

Defined in: [sandbox/hostProxy.ts:108](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L108)

Render declarative UI (a serializable UINode tree). Gated by `ui`.

#### clear()

```ts
clear(surfaceId): Promise<unknown>;
```

Clear a surface so it renders empty.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `surfaceId` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### modal()

```ts
modal(node): Promise<unknown>;
```

Open a modal with `node`, or pass null to close the current one.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | `UINode` \| `null` |

##### Returns

`Promise`\<`unknown`\>

#### render()

```ts
render(surfaceId, node): Promise<unknown>;
```

Render/replace the UINode shown in a named surface (panel/settings/popover).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `surfaceId` | `string` |
| `node` | `UINode` |

##### Returns

`Promise`\<`unknown`\>

***

### view

```ts
view: {
  setShowHidden: Promise<unknown>;
  setSort: Promise<unknown>;
  toggleHidden: Promise<unknown>;
  toggleSort: Promise<unknown>;
};
```

Defined in: [sandbox/hostProxy.ts:82](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L82)

#### setShowHidden()

```ts
setShowHidden(value): Promise<unknown>;
```

Explicitly set whether hidden/system files are shown.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`Promise`\<`unknown`\>

#### setSort()

```ts
setSort(sort): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `sort` | \{ `dir`: `"asc"` \| `"desc"`; `key`: `string`; \} |
| `sort.dir` | `"asc"` \| `"desc"` |
| `sort.key` | `string` |

##### Returns

`Promise`\<`unknown`\>

#### toggleHidden()

```ts
toggleHidden(): Promise<unknown>;
```

Toggle whether hidden/system files (dotfiles) are shown.

##### Returns

`Promise`\<`unknown`\>

#### toggleSort()

```ts
toggleSort(key): Promise<unknown>;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

##### Returns

`Promise`\<`unknown`\>

## Methods

### activate()

```ts
activate(item): Promise<unknown>;
```

Defined in: [sandbox/hostProxy.ts:164](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L164)

Run an item through the open-resolution pipeline (keyboard double-click).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`FileItem`](../../../types/interfaces/FileItem.md) |

#### Returns

`Promise`\<`unknown`\>

***

### log()

```ts
log(...args): void;
```

Defined in: [sandbox/hostProxy.ts:194](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L194)

Forwarded to the host console, prefixed with the module id.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `unknown`[] |

#### Returns

`void`

***

### onColumn()

```ts
onColumn(columnId, provider): void;
```

Defined in: [sandbox/hostProxy.ts:170](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L170)

Register the value provider for one of this module's custom columns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `columnId` | `string` |
| `provider` | [`ColumnProvider`](../type-aliases/ColumnProvider.md) |

#### Returns

`void`

***

### onCommand()

```ts
onCommand(commandId, handler): void;
```

Defined in: [sandbox/hostProxy.ts:166](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L166)

Register the function that runs when one of this module's commands fires.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `commandId` | `string` |
| `handler` | [`CommandHandler`](../type-aliases/CommandHandler.md) |

#### Returns

`void`

***

### onCopyFiles()

```ts
onCopyFiles(scheme, handler): void;
```

Defined in: [sandbox/hostProxy.ts:186](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L186)

Register the copy handler (sources may be local → upload, or same-scheme).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `scheme` | `string` |
| `handler` | [`TransferHandler`](../type-aliases/TransferHandler.md) |

#### Returns

`void`

***

### onCreateFile()

```ts
onCreateFile(scheme, handler): void;
```

Defined in: [sandbox/hostProxy.ts:180](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L180)

Register the create-file handler for a file system provider scheme.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `scheme` | `string` |
| `handler` | [`WriteHandler`](../type-aliases/WriteHandler.md) |

#### Returns

`void`

***

### onCreateFolder()

```ts
onCreateFolder(scheme, handler): void;
```

Defined in: [sandbox/hostProxy.ts:178](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L178)

Register the create-folder handler for a file system provider scheme.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `scheme` | `string` |
| `handler` | [`WriteHandler`](../type-aliases/WriteHandler.md) |

#### Returns

`void`

***

### onDeleteItem()

```ts
onDeleteItem(scheme, handler): void;
```

Defined in: [sandbox/hostProxy.ts:182](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L182)

Register the delete handler for a file system provider scheme.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `scheme` | `string` |
| `handler` | [`WriteHandler`](../type-aliases/WriteHandler.md) |

#### Returns

`void`

***

### onList()

```ts
onList(scheme, handler): void;
```

Defined in: [sandbox/hostProxy.ts:174](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L174)

Register the directory-listing handler for a file system provider scheme.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `scheme` | `string` |
| `handler` | [`ListHandler`](../type-aliases/ListHandler.md) |

#### Returns

`void`

***

### onMoveFiles()

```ts
onMoveFiles(scheme, handler): void;
```

Defined in: [sandbox/hostProxy.ts:188](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L188)

Register the move handler (same-scheme sources).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `scheme` | `string` |
| `handler` | [`TransferHandler`](../type-aliases/TransferHandler.md) |

#### Returns

`void`

***

### onOpen()

```ts
onOpen(handlerId, handler): void;
```

Defined in: [sandbox/hostProxy.ts:168](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L168)

Register the function that runs when an item matches one of this module's open handlers.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handlerId` | `string` |
| `handler` | [`OpenHandler`](../type-aliases/OpenHandler.md) |

#### Returns

`void`

***

### onOpenFile()

```ts
onOpenFile(scheme, handler): void;
```

Defined in: [sandbox/hostProxy.ts:176](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L176)

Register the file-open handler for a file system provider scheme.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `scheme` | `string` |
| `handler` | [`OpenFileHandler`](../type-aliases/OpenFileHandler.md) |

#### Returns

`void`

***

### onRenameItem()

```ts
onRenameItem(scheme, handler): void;
```

Defined in: [sandbox/hostProxy.ts:184](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L184)

Register the rename/move handler for a file system provider scheme.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `scheme` | `string` |
| `handler` | [`RenameProviderHandler`](../type-aliases/RenameProviderHandler.md) |

#### Returns

`void`

***

### onUIEvent()

```ts
onUIEvent(handlerId, handler): void;
```

Defined in: [sandbox/hostProxy.ts:172](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L172)

Register a handler fired when a button/list/form in this module's UI is used.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handlerId` | `string` |
| `handler` | [`UIEventHandler`](../type-aliases/UIEventHandler.md) |

#### Returns

`void`

***

### refresh()

```ts
refresh(): Promise<unknown>;
```

Defined in: [sandbox/hostProxy.ts:162](https://github.com/ilianAZZ/mutka/blob/d2cef9d01e9e44d7e996bd56cb88b353dacce576/src/core/sandbox/hostProxy.ts#L162)

Re-read the current directory after a mutation.

#### Returns

`Promise`\<`unknown`\>
