// power
// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow().
// Do not worry about negative bases and exponents.

const power = (base, exponent) => {
  // base case: always return the base when the exponent is 1.
  if (exponent === 1) return base;
  return base * power(base, exponent - 1);
};

console.log(power(3, 3));
console.log(power(4, 4));
console.log(power(8, 2));
