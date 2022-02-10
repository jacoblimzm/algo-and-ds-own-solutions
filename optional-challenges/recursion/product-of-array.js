// productOfArray
// Write a function called productOfArray which takes in an array of numbers
// and returns the product of them all.

const productOfArray = (arr) => {
  // since total PRODUCT of all numbers, the sum must be initialised with 1 and NOT 0
  let sum = 1;

  const helper = (input) => {
    // BASE CASE: end when array is empty
    if (input.length === 0) return;
    sum = sum * input[0];
    helper(input.slice(1));
  };

  helper(arr);

  return sum;
};

console.log(productOfArray([1, 3, 5]));
console.log(productOfArray([3, 4, 5]));
