const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const test = require("node:test");

test("demo.txt contains the expected text", () => {
  const contents = readFileSync("demo.txt", "utf8").trim();

  assert.equal(contents, "this is a test");
});
