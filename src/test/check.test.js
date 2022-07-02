const check = require("../check");

describe("check", () => {
  let mockPredicate;
  let mockOnSuccess;
  let mockOnFail;

  beforeEach(() => {
    mockOnSuccess = jest.fn((string) => string);
    mockOnFail = jest.fn((string) => string);
  });

  it("should call onSuccess when predicate is true", () => {
    mockPredicate = jest.fn(() => true);

    check(mockPredicate, mockOnSuccess, mockOnFail);

    expect(mockOnSuccess).toHaveBeenCalledTimes(1);
    expect(mockOnSuccess).toHaveBeenCalledWith("yes");
    expect(mockOnFail).toHaveBeenCalledTimes(0);
  });

  it("should call onFail when predicate is fail", () => {
    mockPredicate = jest.fn(() => false);

    check(mockPredicate, mockOnSuccess, mockOnFail);

    expect(mockOnFail).toHaveBeenCalledTimes(1);
    expect(mockOnFail).toHaveBeenCalledWith("no");
    expect(mockOnSuccess).toHaveBeenCalledTimes(0);
  });
});
