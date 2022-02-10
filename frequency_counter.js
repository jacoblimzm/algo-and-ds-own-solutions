// FREQUENCY COUNTER PATTERN

// =============== SQUARED ARRAYS ===============

/**
 * Write a function called 'same', which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
 */
const same = (arrA, arrB) => {
  // if either array is empty OR not the same length, return false
  if (arrA.length <= 0 || arrB.length <= 0 || arrA.length !== arrB.length) {
    return false;
  }

  // create object to store for comparison
  const compare = {};

  // LOOP 1: taking the square of each number, and storing inside compare
  for (const num of arrA) {
    // square the number
    const squared = num ** 2;
    // if the number is already inside compare, increase count by 1
    if (squared in compare) {
      compare[squared] += 1;

      // otherwise, set count to be 1
    } else {
      compare[squared] = 1;
    }
  }
  // console.log("LOOP 1", compare);

  // LOOP 2: looping through array B, to compare against compare
  for (const num of arrB) {
    // if current number is in compare, reduce the count by 1
    if (num in compare) {
      compare[num] -= 1;
      // if the count becomes less than 0, means the square is not 1-1, return false
      if (compare[num] < 0) {
        return false;
      }
      // if num is not in compare, then a match does not exist with a squared value in a, return false
    } else {
      return false;
    }
  }
  // console.log("LOOP 2", compare);
  return true;
};

// console.log(same([1, 2, 3], [4, 1, 9]));

// ALTERNATIVE SOLUTION.
/**
 * store both arrays in their objects (2 objects)
 * loop and compare Obj 1 to Obj 2
 * if key in Obj 1 not in Obj 2, return false
 * if value of Obj 1[key**2] !== value of Obj 2[key], return false
 */

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// =============== ANAGRAMS ===============

/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * an anagram is a word, phrase, name formed by rearranging the letters of another.
 * such as cinema, formed from iceman.
 */

const validAnagram = (str1, str2) => {

  /**
   * ASSUMPTIONS
   * single worded strings
   * no spaces
   * no numbers
   * no special characters
   * all lower case
   */
  // if length of both strings are not the same, return false immediately
  if (str1.length !== str2.length) {
    return false;
  }

  // create two objects two store information of both strings
  const store1 = {};
  const store2 = {};

  // loop through string 1 and store the count of each letter as key value pairs
  for (const letter of str1) {
    store1[letter] = store1[letter] ? store1[letter]++ : 1;
  }
  console.log("STORE1", store1);
  // loop through string 2 and store the count of each letter as key value pairs
  for (const letter of str2) {
    store2[letter] = store2[letter] ? store2[letter]++ : 1;
  }
  console.log("STORE2", store2);

  // loop through object store 1 and compare keys and values with object store 2
  for (const key in store1) {
    // we want to make sure that there is no letter that belongs in just 1 string, anagram not possible otherwise
    // if key of store 1 is not in store 2, return false
    if (!(key in store2)) {
      return false;
    }
    // we want to make sure that if the letter exists, it appears the same no. of times in both strings, anagram not possible otherwise
    // if value of key of store 1 is not equal of value of key of store 2, return false
    if (store1[key] !== store2[key]) {
      return false;
    }
  }
  return true;
  // return true
};

console.log(validAnagram("ytrewq", "qwerty"));



