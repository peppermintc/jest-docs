class Stack {
  constructor(initialValue) {
    if (initialValue) this.state = initialValue;
    else this.state = [];
  }

  size() {
    return this.state.length;
  }

  push(inputValue) {
    this.state.push(inputValue);
  }

  pop() {
    return this.state.pop();
  }
}

module.exports = Stack;
