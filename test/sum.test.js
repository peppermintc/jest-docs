const sum = require("../src/sum.js");

test("sum function returns the sum of two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
