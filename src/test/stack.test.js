const Stack = require("../stack");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("has empty array initially", () => {
    expect(stack.state).toEqual([]);
  });

  it("contructor initiallize state value with argument passed in", () => {
    stack = new Stack([1, 2, 3]);
    expect(stack.state).toEqual([1, 2, 3]);
  });

  describe("size() method", () => {
    it("returns 0 with empty array", () => {
      expect(stack.size()).toBe(0);
    });

    it("return value increase when element push", () => {
      stack.push(1);
      expect(stack.size()).toBe(1);
      stack.push(2);
      expect(stack.size()).toBe(2);
    });

    it("return value decrease when element pop", () => {
      stack.push(1);
      stack.push(2);

      stack.pop();
      expect(stack.size()).toBe(1);
      stack.pop();
      expect(stack.size()).toBe(0);
    });
  });

  test("stack.push() pushes element into stack", () => {
    stack.push(1);
    expect(stack.state).toEqual([1]);
  });

  test("stack.pop() return undefined if stack array empty", () => {
    const popValue = stack.pop();

    expect(popValue).toBeUndefined();
    expect(stack.state).toEqual([]);
  });

  test("stack.pop() pops last element of stack", () => {
    stack.push(1);
    const popValue = stack.pop();

    expect(popValue).toEqual(1);
    expect(stack.state).toEqual([]);
  });
});
