import { createLanguageService } from "typescript";

/**
 * greet(name):
 * - Accepts a "name" parameter of type "string"
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name: string): void {
  // Your code here
 console.log(`Hello ${name}`)
}

/**
 * isOdd(n):
 * - Accepts a "n" parameter of type "number"
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n: number): boolean {
  // Your code here
  if(n%2 == 0 || n==0){
    return false
  }
  return true; // replace false with what you see is fit
}

/**
 * oddsSmallerThan(n):
 * - Accepts a "n" parameter of type "number"
 * - returns the number of ODD numbers smaller than "n"
 *
 * e.g.
 * oddsSmallerThan(7) -> 3; // the odd numbers being 1, 3, 5
 * oddsSmallerThan(15) -> 7; // the odd numbers being 1, 3, 5, 7, 9, 11, 13
 */
function oddsSmallerThan(n: number): number {
  // Your code here
  var counter = 0;
  if(n === 1) return 0;
  n = n-1;
  while (n > 0) {
    if(n%2 !== 0){
      counter++;
    }
    n--;
  }
  return counter; // replace -1 with what you see is fit
}

/**
 * squareOrDouble(n):
 * - Accepts a "n" parameter of type "number"
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32; // (16 * 2)
 * squareOrDouble(9) -> 81; // (9 ^ 2)
 */
function squareOrDouble(n: number): number {
  // Your code here
  var result: number
  if(n%2 !== 0){
    result = Math.pow(n,2)
  }
  else{
    result = n+n;
  }
  return result;
   // replace -1 with what you see is fit
}

export { greet, isOdd, oddsSmallerThan, squareOrDouble };
