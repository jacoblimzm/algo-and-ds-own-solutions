/***    Frequency Counter    ***/

// Write a function called sameFrequency
// Given two positive integers, find out if the two
// numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)

//  sameFrequency(182, 281) // true
//  sameFrequency(34, 14) // false
//  sameFrequency(3589578, 5879385) // true
//  sameFrequency(22, 222) // false

const sameFreqency = (num1, num2) => {
  // if integers do not have same number of digits, must be false
  const num1Array = num1.toString().split("");
  const num2Array = num2.toString().split("");

  if (num1Array.length !== num2Array.length) return false;

  const store = {};
  // loop through num1, and store count of digits in an object
  for (const num of num1Array) {
    // if digit is in store, increase count by 1
    if (num in store) {
      store[num]++;
    } else {
      // else start count at 1
      store[num] = 1;
    }
  }

  // using store as reference, loop through num2
  for (const num of num2Array) {
    // if digit is in store, decrease count by 1
    if (num in store) {
      store[num]--;
    } else {
      // if not, return false, because this means a digit exists in num2 that is not in num1
      return false;
    }
  }

  // loop through store, and check all counts of digits are 0
  for (const [num, count] of Object.entries(store)) {
    if (count !== 0) {
      // if any count of digit is !== 0, which means digit exists in num1 that is not in num2. return false
      return false;
    }
  }

  return true;
};
console.log(sameFreqency(18001, 10081));

// alternative solution
const sameFrequency2 = (num1, num2) => {
  const num1Str = num1.toString();
  const num2Str = num2.toString();

  // if numbers aren't the same length then it is false
  if (num1Str.length !== num2Str.length) return false;

  const store1 = {};
  const store2 = {};

  // loop and store the count of digits in num1
  for (const digit of num1Str) {
    store1[digit] = (store1[digit] || 0) + 1;
  }

  // loop and store the count of digits in num2
  for (const digit of num2Str) {
    store2[digit] = (store2[digit] || 0) + 1;
  }

  // loop over store1 and compare the counts of digits in store1 vs store2
  for (const key in store1) {
    // any mismatch in counts will return false
    if (store1[key] !== store2[key]) return false;
  }
  return true;
};

console.log(sameFrequency2(8101, 1081));
