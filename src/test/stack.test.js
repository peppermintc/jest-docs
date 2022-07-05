const Stack = require("../stack");

describe("stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("stack has empty array initially", () => {
    expect(stack.state).toEqual([]);
  });

  it("stack.push() pushes element into stack", () => {
    stack.push(1);
    expect(stack.state).toEqual([1]);
  });

  it("stack.pop() return undefined if stack array empty", () => {
    const popValue = stack.pop();

    expect(popValue).toBeUndefined();
    expect(stack.state).toEqual([]);
  });

  it("stack.pop() pops last element of stack", () => {
    stack.push(1);
    const popValue = stack.pop();

    expect(popValue).toEqual(1);
    expect(stack.state).toEqual([]);
  });
});
