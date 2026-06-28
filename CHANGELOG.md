# Changelog

## [1.0.0](https://github.com/ilianAZZ/mutka/compare/v0.2.0...v1.0.0) (2026-06-28)


### ⚠ BREAKING CHANGES

* stabilize the module API for the first stable release

### Features

* add dev community modules for folder inspection, image dimensions, SQLite browsing, and WebDAV support ([31e376f](https://github.com/ilianAZZ/mutka/commit/31e376f3da37d89ca6cf103826431542c4dbad5c))
* add DownloadIcon component and enhance HomePage layout with GitHub and download links ([ce50f78](https://github.com/ilianAZZ/mutka/commit/ce50f78f112aa366b49aadd148505029601f512d))
* add feature articles and visuals components ([b9f2bfd](https://github.com/ilianAZZ/mutka/commit/b9f2bfd504ff09de4e73e2e26c47228fa675a850))
* **cli:** add CLI support — mutka &lt;path&gt;, --picker, --run, --list-actions ([56feab2](https://github.com/ilianAZZ/mutka/commit/56feab24381d16e10666d9aa4aaadcb1e754168f))
* **create-module:** ship a build workflow so discovery finds TS modules ([5a951b8](https://github.com/ilianAZZ/mutka/commit/5a951b8a199fee5e28f2093854c191eba446e0de))
* **create-module:** ship a build workflow so discovery finds TS modules ([2f178fe](https://github.com/ilianAZZ/mutka/commit/2f178feb3a7e0fb91cc3c106e535c251e9cf7f07))
* **discovery:** fall back to dist/index.js for TS modules ([6cde555](https://github.com/ilianAZZ/mutka/commit/6cde555470a0a17313cb013de553bc4961311e64))
* **discovery:** transform module discovery into a pluggable module system ([746f2ab](https://github.com/ilianAZZ/mutka/commit/746f2ab99ed1db0da6e09a18708141f16f3147a0))
* **docs:** update installation instructions and permissions for modules ([56a9c4a](https://github.com/ilianAZZ/mutka/commit/56a9c4afc24d27ef3041c68dbf1be68b5ef45382))
* **events:** expand event whitelist for sandboxed modules with two tiers ([ac498cd](https://github.com/ilianAZZ/mutka/commit/ac498cd722ff6bbe38f9fcd4544aab369db8de7e))
* **icons:** improve folder opening speed by rendering icons off the main thread and caching ([f84d1f6](https://github.com/ilianAZZ/mutka/commit/f84d1f6e550db704df31d0e98a976718f7488f5c))
* **modules:** infer command ids → type-check host.onCommand ([5877d97](https://github.com/ilianAZZ/mutka/commit/5877d9727047065481bf0e40e7dab415bae1eb37))
* **modules:** infer command ids → type-check host.onCommand ([b8499cd](https://github.com/ilianAZZ/mutka/commit/b8499cd27c664883cce0868b029579f57f8b3157))
* **modules:** install a local index.js from the explorer context menu ([994d32e](https://github.com/ilianAZZ/mutka/commit/994d32e8372fec09fd9fb9fe3dcbabee11b3b402))
* **modules:** make the install review update-aware ([f928aa4](https://github.com/ilianAZZ/mutka/commit/f928aa4b5e3b56a718b29353f50002a1050f1b6f))
* **modules:** module-contributed buttons + a Mutka file picker (local install Stage 2) ([f9339c8](https://github.com/ilianAZZ/mutka/commit/f9339c8ef100832fe04b3759b3c06c3286b8ca37))
* **modules:** pluggable discovery registry + richer module cards ([715364f](https://github.com/ilianAZZ/mutka/commit/715364f17fa3da04482f2c40b7655b2125fd0cc8))
* **modules:** typed host + [@mutka-explorer](https://github.com/mutka-explorer) npm tooling for authors ([60b41ac](https://github.com/ilianAZZ/mutka/commit/60b41accd83390d875b05328243f24a8328dffb7))
* **modules:** typed host + [@mutka-explorer](https://github.com/mutka-explorer) npm tooling for authors ([e4a282d](https://github.com/ilianAZZ/mutka/commit/e4a282d129734f84c602a33153b01b6c1bbfe0a9))
* **permissions:** split network into network:public / network:local tiers ([b01c396](https://github.com/ilianAZZ/mutka/commit/b01c3969871ea42310355fba4bbb16591d5f239a))
* **picker:** add mode option (file/folder/any) to file picker ([462f37a](https://github.com/ilianAZZ/mutka/commit/462f37a234f3576fca5fd646ce984c3b1bfb7ce8))
* stabilize the module API for the first stable release ([1fe13cc](https://github.com/ilianAZZ/mutka/commit/1fe13cc42069f45d4f9555c1e62f7cc4d2ab22d4))
* **telemetry:** add core.telemetry module to track folder open timing with lifecycle events ([125ed48](https://github.com/ilianAZZ/mutka/commit/125ed48a15e8610d7aee04c576cc414d15852603))


### Bug Fixes

* **build:** drop deprecated cocoa crate, silence objc cfg warnings ([ed9b3ca](https://github.com/ilianAZZ/mutka/commit/ed9b3ca8fa5eb8289df2aaf2868e4f13f21642b6))
* **cli:** add missing trait imports and Result return types ([d2738f6](https://github.com/ilianAZZ/mutka/commit/d2738f60610e053d99d3fa97909bcbd8df34d34e))
* **cli:** remove unsupported `long` field from CLI arg config ([b1a8881](https://github.com/ilianAZZ/mutka/commit/b1a88813e9932116f510ee094a2b0f21c0a10da0))
* **create-module:** force-add dist in the build workflow ([613cfc9](https://github.com/ilianAZZ/mutka/commit/613cfc9e8cb3e43449cd5ec42289d5875de9d46e))
* **module-sdk:** keep author-facing types React-free (no react dep) ([28e9cdc](https://github.com/ilianAZZ/mutka/commit/28e9cdca476d84ab5e0bdbc87598357e5ffabee1))
* **module-sdk:** keep author-facing types React-free (no react dep) ([355e220](https://github.com/ilianAZZ/mutka/commit/355e2203e7ebcaba86ab40e49249d6f88edee689))
* **module-sdk:** keep author-facing types React-free (no react dep) ([34f3387](https://github.com/ilianAZZ/mutka/commit/34f33874a45312215ee8c2018889241ff16bb564))
* **modules:** cap module source size on install, read, and probe (5 MiB) ([c025de8](https://github.com/ilianAZZ/mutka/commit/c025de8c107286306f5f252688cf266816fb5e2c))
* **network:** make the network capability pure I/O (one role, one permission) ([7da819d](https://github.com/ilianAZZ/mutka/commit/7da819d4b62ae97682030eaf6537a4042a8e8b60))
* **picker:** clarify button labels — "Open Current Folder" vs "Open &lt;file&gt;" ([89cf7ef](https://github.com/ilianAZZ/mutka/commit/89cf7eff1544c982a88432c33931d386f23c990d))
* **release:** create annotated tag so --follow-tags pushes it ([09816a9](https://github.com/ilianAZZ/mutka/commit/09816a94a44d78b719e49eadbdb6c60105efe4ae))
* **security:** disable withGlobalTauri (drop the ambient window.__TAURI__) ([3c875c3](https://github.com/ilianAZZ/mutka/commit/3c875c35195fa679352221dddd515540e39a754b))
* **security:** force module network egress through the gated host.net via CSP ([325b3f7](https://github.com/ilianAZZ/mutka/commit/325b3f7113e2dbd7643485cfaabb93ad77373bc6))
* **security:** no redirect-following, tighter IP tiers, config + module-file isolation ([e68c6f5](https://github.com/ilianAZZ/mutka/commit/e68c6f504d008e674b9da90e1d22d2ac1e40cb37))
* **security:** require fs:read to receive file:external-drop (it carries file bytes) ([3a15ce2](https://github.com/ilianAZZ/mutka/commit/3a15ce2ad9b992537dcc79d417f0d3362b82b01a))
* **sidebar:** ensure activeId syncs correctly on tab click ([b82f980](https://github.com/ilianAZZ/mutka/commit/b82f98035da697f96d9aa30779f2fe5d889e504b))

## 0.2.0 — 2026-06-26

### Minor

- Add changeset to handle versionning and auto release pipeline
- Manage modules with UI, store config in home dir
