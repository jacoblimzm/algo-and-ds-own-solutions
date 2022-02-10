/** ================== SAMPLE QUESTION 1 ==================
 * Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If value is not found, return -1
 * */

// NAIVE SOLUTION - linear search ( 1 for loop, O(n) time complexity. either find it or not. )

// BINARY SEARCH - splitting down the middle (O(log(n)) time complexity)

const search = (arr, value) => {
  let min = 0;
  let max = arr.length - 1;

  // condition must be min <= max because if value is at start/end of array, the last try is (0 + 0)/2 or (n + n)/2 to get the index at the end
  while (min < max) {
    // grab the middle index
    const middle = Math.floor((min + max) / 2);
    const currentElement = arr[middle];
    // Case 1: the currentElement is smaller than the value. means value is on the 'right'
    if (currentElement < value) {
      min = middle + 1;
    } else if (currentElement > value) {
      max = middle - 1;
    } else {
        return middle
    }
  }
  return -1
};

console.log(search([1,2,3,4,5,6,7,8,9], 8))