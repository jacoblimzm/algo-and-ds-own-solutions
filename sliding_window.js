/** ================== SAMPLE QUESTION 1 ==================
 * Write a function maxSubarraySum which accepts an array of integers and an integer n. The function should calculate and return the maximum sum of n consecutive integers in the array.
 * */

// the naive solution

const maxSubarraySum = (arr, n) => {
  if (arr.length === 0) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    // the first loop will count through the start to the end which is defined by n consecutive numbers. does not make sense to count if we have less than n integers left.
    let temp = 0; // every new start needs a temp
    for (let j = i; j < i + n; j++) {
      // count of j will take the cue from i, and will never count beyond n
      temp += arr[j]; // add the numbers together.
    }
    if (temp > max) {
      // store new max
      max = temp;
    }
  }
  return max;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));

// SLIDNG WINDOW APPROACH

const maxSubarraySum1 = (arr, n) => {
  if (arr.length === 0) return null;
  // create variable to store tempSUm
  // create variable to store maxSUm
  let tempSum = 0;
  let maxSum = 0;

  // loop over the first set of n integers (index of n-1) to get the first 'max' sum - window starts here
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  // store 'max' sum in temp.
  tempSum = maxSum;
  // start the sliding window with a loop that begins from n, which is the next index. and goes to the end of the array
  for (let j = n; j < arr.length; j++) {
    // calculate the next consecutive sum by taking the existing sum stored in tempSUm, subtracting the left most int, and adding the right most integer.  
    tempSum = tempSum - arr[j - n] + arr[j]; // on first run, j === n so it will subtract arr[0] and add arr[n] which slides the window right
    // if the tempSum is higher than maxSum, reassign.
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  // loop carries on which moves window right

  return maxSum;
};

console.log(maxSubarraySum1([1, 2, 5, 2, 10, 1, 5], 2));
