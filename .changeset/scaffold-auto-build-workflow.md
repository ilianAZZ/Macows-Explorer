---
bump: patch
---

Scaffolded modules ship a build workflow so GitHub discovery can find them. A TS
module's repo only has `src/index.ts` until it's built, but discovery
(`github-discovery.ts`) fetches `dist/index.js` from the repo's default branch. The
`@mutka-explorer/create` scaffolder now generates `.github/workflows/build.yml`, which on
every push to `main` rebuilds and commits `dist/index.js` (loop-guarded via
`paths-ignore: dist/**` + a `[skip ci]` commit). Authors push only TypeScript and
discovery always sees a fresh build — no change to the discovery module was needed.
Requires the repo's Actions workflow permissions to be "Read and write" (noted in the
generated README).
