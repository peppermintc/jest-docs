const fetchProduct = require("../async");

describe("fetchProduct", () => {
  test("fetch success", async () => {
    const fetchResult = await fetchProduct();
    expect(fetchResult).toEqual({ item: "Milk", price: 2000 });
  });

  test("fetch fail, throw error message network error", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
