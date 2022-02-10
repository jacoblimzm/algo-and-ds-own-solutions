// fib
// Write a recursive function called fib which accepts a number
// and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
// which starts with 1 and 1, and where every number thereafter
// is equal to the sum of the previous two numbers.

const fib = (num) => {
  // BASE CASE: cover position 1 which is 1, and the case of num = 0 which will return 0. cannot use num === 1 as num = 2 will execute fib(2-2) and will cause never ending recursion.
  if (num < 2) return num;
  return fib(num - 1) + fib(num - 2);
};

console.log(fib(5)); // 5
console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
