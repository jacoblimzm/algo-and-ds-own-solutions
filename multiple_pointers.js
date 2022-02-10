/** ================== SAMPLE QUESTION 1 ==================
 * Write a function sumZero that accepts a sorted array of integers. The function should find the first pair that sums to zero. Return an array with both values that sum to zero, and undefined if
 * such a pair does not exist.
 * */

// NAIVE SOLUTION ( 2 for loops, O(n2) time complexity )

const sumZero = (arr) => {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
};
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

// REFACTORED SOLUTION ( 1 while loop, O(n) time complexity as we are counting down from both ends.)

const sumZero1 = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  // we need the loop to run until the indexes meet in the middle. all matches exhausted.
  while (left < right) {
    // need to end the loop before left === right as if there is a 0, sum would total 0 which would be a false positive
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] > 0) {
      // since arr is sorted, if the sum is > 0, means right is > left and we need to move back from the right side as it is possible a number still exists to make sum === 0
      right--;
    } else {
      // if sum is < 0, there is no point moving down anymore as it would just make it more negative.
      left++;
    }
  }
  return undefined;
};

console.log(sumZero1([-3, -2, -1, 0, 4, 5]));

/** ================== SAMPLE QUESTION 2 ==================
 * Write a function countUniqueValues that accepts a sorted array, and counts the unique values in the array. There can be negative values in the array, but it will always be sorted
 * */

const countUniqueValues = (arr) => {
  // previous example had two indexes counting from opposite ends.
  // this one has two counters, but each one counting from the left, one after another.
  // a 'unique' value to be stored which will count up whenever arr[left] !== arr[right]

  if (arr.length === 0) return 0;

  let left = 0;

  for (let right = 1; right < arr.length; right++) {
    // we want to do one loop to check all the numbers
    if (arr[left] !== arr[right]) {
      // if we encounter a unique value, we want to keep the store of unique values towards the left side of the array.
      // before storing, we increase the left counter by one, so we don't override the previous value
      left++;
      arr[left] = arr[right];
    }
    // otherwise if the numbers are the same, not unique values and the loop carries on to check the next number
  }

  // we need to add 1 to the left index because 'left' will be the index of the last unique number.
  return left + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 2]));
