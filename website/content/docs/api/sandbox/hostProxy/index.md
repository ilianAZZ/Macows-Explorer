---
title: sandbox/hostProxy
description: Reference — sandbox/hostProxy in the Mutka module API.
---

# sandbox/hostProxy

## Interfaces

| Interface | Description |
| ------ | ------ |
| [NetDownloadOptions](interfaces/NetDownloadOptions.md) | Options for host.net.download — saves a URL to a temp file, returns its path. |
| [NetRequestOptions](interfaces/NetRequestOptions.md) | Options for host.net.request — a host-proxied HTTP call (bypasses CORS). |
| [NetUploadOptions](interfaces/NetUploadOptions.md) | Options for host.net.upload — PUTs a local file's bytes to a URL. |
| [SandboxHostApi](interfaces/SandboxHostApi.md) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [ColumnProvider](type-aliases/ColumnProvider.md) | - |
| [CommandHandler](type-aliases/CommandHandler.md) | - |
| [EventHandler](type-aliases/EventHandler.md) | - |
| [ListHandler](type-aliases/ListHandler.md) | - |
| [OpenFileHandler](type-aliases/OpenFileHandler.md) | - |
| [OpenHandler](type-aliases/OpenHandler.md) | - |
| [ProviderHandler](type-aliases/ProviderHandler.md) | - |
| [ProviderMethod](type-aliases/ProviderMethod.md) | The file-system provider operations a module may implement (mirrors hostProxy). |
| [RenameProviderHandler](type-aliases/RenameProviderHandler.md) | - |
| [TransferHandler](type-aliases/TransferHandler.md) | - |
| [UIEventHandler](type-aliases/UIEventHandler.md) | A UI-event handler (button/list/form interaction) registered via host.onUIEvent. |
| [WriteHandler](type-aliases/WriteHandler.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [createHostProxy](functions/createHostProxy.md) | - |
