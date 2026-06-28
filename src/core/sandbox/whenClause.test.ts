import { describe, it, expect } from "vitest";
import { evaluateWhen } from "./whenClause";
import type { BaseContext, FileItem } from "../types";

function file(name: string, extension?: string): FileItem {
  return {
    name,
    path: `/x/${name}`,
    isDir: false,
    size: 0,
    modified: 0,
    extension,
    isHidden: false,
    isSymlink: false,
    isPackage: false,
    hasCustomIcon: false,
  };
}

function ctx(items: FileItem[]): BaseContext {
  // evaluateWhen only reads selectedItems + clipboard; cast past the unused fields.
  return { selectedItems: items, clipboard: { operation: null, items: [] } } as unknown as BaseContext;
}

describe("when-clause fileNames / extensions", () => {
  it("fileNames shows only when every selected item matches (the index.js gate)", () => {
    expect(evaluateWhen({ fileNames: ["index.js"] }, ctx([file("index.js", "js")]))).toBe(true);
    expect(evaluateWhen({ fileNames: ["index.js"] }, ctx([file("main.js", "js")]))).toBe(false);
    expect(evaluateWhen({ fileNames: ["index.js"] }, ctx([]))).toBe(false); // empty selection
    // every item must match
    expect(
      evaluateWhen({ fileNames: ["index.js"] }, ctx([file("index.js", "js"), file("other.js", "js")]))
    ).toBe(false);
  });

  it("extensions matches case-insensitively and requires files", () => {
    expect(evaluateWhen({ extensions: ["js"] }, ctx([file("a.js", "js")]))).toBe(true);
    expect(evaluateWhen({ extensions: ["js"] }, ctx([file("a.JS", "JS")]))).toBe(true);
    expect(evaluateWhen({ extensions: ["js"] }, ctx([file("a.ts", "ts")]))).toBe(false);
  });

  it("combines with selection shape (AND)", () => {
    expect(
      evaluateWhen({ selection: "singleFile", fileNames: ["index.js"] }, ctx([file("index.js", "js")]))
    ).toBe(true);
    expect(
      evaluateWhen({ selection: "single", fileNames: ["index.js"] }, ctx([file("index.js", "js"), file("index.js", "js")]))
    ).toBe(false); // selection:single fails for 2 items
  });
});
