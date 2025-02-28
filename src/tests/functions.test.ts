import { faker } from "@faker-js/faker";

import { greet, isOdd, oddsSmallerThan, squareOrDouble } from "../functions";

describe("functions", () => {
  describe("greet", () => {
    it("should log 'Hello <name>' when name is provided", () => {
      console.log = jest.fn(); // Mock console.log
      const name = faker.person.firstName();
      greet(name);
      expect(console.log).toHaveBeenCalledWith(`Hello ${name}`);
    });
  });

  describe("isOdd", () => {
    const numbers = Array(50)
      .fill(0)
      .map(() => faker.number.int({ min: 1, max: 100 }));
    const odds = numbers.filter((n) => n % 2);
    const evens = numbers.filter((n) => !(n % 2));

    it("should return true if the number is odd", () => {
      odds.forEach((n) => expect(isOdd(n)).toBe(true));
    });

    it("should return false if the number is even", () => {
      evens.forEach((n) => expect(isOdd(n)).toBe(false));
    });

    it("should return false for zero", () => {
      expect(isOdd(0)).toBe(false);
    });
  });

  describe("oddsSmallerThan", () => {
    const numbers = Array(50)
      .fill(0)
      .map(() => faker.number.int({ min: 1, max: 100 }));
    const odds = numbers.filter((n) => n % 2);
    const evens = numbers.filter((n) => !(n % 2));

    it("should return the correct number of odd numbers smaller than an odd number", () => {
      odds.forEach((n) => expect(oddsSmallerThan(n)).toBe(Math.floor(n / 2)));
    });

    it("should return the correct number of odd numbers smaller than an even number", () => {
      evens.forEach((n) => expect(oddsSmallerThan(n)).toBe(n / 2));
    });

    it("should return 0 if there are no odd numbers smaller than 1", () => {
      expect(oddsSmallerThan(1)).toBe(0);
    });
  });

  describe("squareOrDouble", () => {
    const numbers = Array(50)
      .fill(0)
      .map(() => Math.floor(Math.random() * 100));
    const odds = numbers.filter((n) => n % 2);
    const evens = numbers.filter((n) => !(n % 2));

    it("should return the square if the number is odd", () => {
      odds.forEach((n) => expect(squareOrDouble(n)).toBe(n * n));
    });

    it("should return double if the number is even", () => {
      evens.forEach((n) => expect(squareOrDouble(n)).toBe(2 * n));
    });

    it("should return 0 if the number is 0", () => {
      expect(squareOrDouble(0)).toBe(0);
    });
  });
});
