import arrayInsertRandom = require("./")
import { test, run } from "t0"
import { strict as assert } from "assert"
const { deepStrictEqual } = assert

test("single item", () => {
  const arr = ["a", "b", "c"]
  const item = "d"
  arrayInsertRandom(arr, item)
  arr.sort()
  deepStrictEqual(arr, ["a", "b", "c", "d"])
})

test("multiple items", () => {
  const arr = ["a", "b"]
  const items = ["c", "d"]
  arrayInsertRandom(arr, items)
  arr.sort()
  deepStrictEqual(arr, ["a", "b", "c", "d"])
})

run()
