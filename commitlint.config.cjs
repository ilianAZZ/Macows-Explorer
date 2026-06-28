// Conventional Commits config. Used by the Commitlint PR check
// (.github/workflows/commitlint.yml). The commit type drives the release that
// release-please computes:
//   fix:      → patch (1.0.0 → 1.0.1)
//   feat:     → minor (1.0.0 → 1.1.0)
//   feat!: / "BREAKING CHANGE:" footer → major (1.0.0 → 2.0.0)
// Other types (docs, chore, refactor, test, ci, build, style, perf, revert) do
// not by themselves trigger a release.
module.exports = {
  extends: ["@commitlint/config-conventional"],
};
