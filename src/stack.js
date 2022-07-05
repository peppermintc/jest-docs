class Stack {
  constructor() {
    this.state = [];
  }

  push(inputValue) {
    this.state.push(inputValue);
  }

  pop() {
    return this.state.pop();
  }
}

module.exports = Stack;
