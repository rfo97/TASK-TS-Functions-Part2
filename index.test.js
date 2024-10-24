const { greet, isOdd, oddsSmallerThan, squareOrDouble } = require("./index"); // Replace with the correct file name

describe("greet", () => {
  it("should log 'Hello <name>' when name is provided", () => {
    console.log = jest.fn(); // Mock console.log
    greet("Hamza");
    expect(console.log).toHaveBeenCalledWith("Hello Hamza");
  });
});

describe("isOdd", () => {
  it("should return true if the number is odd", () => {
    expect(isOdd(7)).toBe(true);
  });

  it("should return false if the number is even", () => {
    expect(isOdd(10)).toBe(false);
  });

  it("should return false for zero", () => {
    expect(isOdd(0)).toBe(false);
  });
});

describe("oddsSmallerThan", () => {
  it("should return the correct number of odd numbers smaller than the input", () => {
    expect(oddsSmallerThan(7)).toBe(3); // Odd numbers: 1, 3, 5
  });

  it("should return the correct number of odd numbers smaller than a larger number", () => {
    expect(oddsSmallerThan(15)).toBe(7); // Odd numbers: 1, 3, 5, 7, 9, 11, 13
  });

  it("should return 0 if there are no odd numbers smaller than 1", () => {
    expect(oddsSmallerThan(1)).toBe(0);
  });
});

describe("squareOrDouble", () => {
  it("should return the square if the number is odd", () => {
    expect(squareOrDouble(9)).toBe(81);
  });

  it("should return double if the number is even", () => {
    expect(squareOrDouble(16)).toBe(32);
  });

  it("should return 0 if the number is 0", () => {
    expect(squareOrDouble(0)).toBe(0);
  });
});
