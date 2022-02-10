/** ================== FIRST RECURSIVE FUNCTION ==================
 * Countdown numbers with an input
 * */

// ===== ITERATIVE VERSION

const countDownIter = (num) => {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
  console.log("DONE");
};

// countDownIter(5);

// ===== RECURSIVE VERSION

const countDownRecur = (num) => {
  // BASE CASE
  if (num <= 0) {
    console.log(num);
    console.log("DONE");
    return;
  }
  console.log(num);
  num--;
  // CALLING ITSELF WITH A DIFFERENT INPUT
  countDownRecur(num);
};

// countDownRecur(10);

/** ================== SECOND RECURSIVE FUNCTION ==================
 * Create a function sumRange which returns the sum of numbers starting from input num, to 0
 * */

const sumRangeRecur = (num) => {
  if (num === 1) return 1;
  return num + sumRangeRecur(num - 1);
};

// the call stack!! with sumRange(3)

/**
 * THE RECURSIVE CALL
 * sumRange(3) - waiting
 *    return 3 + sumRange(2) - waiting
 *               return 2 + sumRange(1) - waiting
 *                          return 1 (BASE CASE) - resolved
 *
 * sumRange(3) - waiting
 *    return 3 + sumRange(2) - waiting
 *               return 2 + 1 - resolved
 *
 * sumRange(3) - waiting
 *    return 3 + 3 - resolved
 *
 * * sumRange(3) - resolved with value of 6
 */

// console.log(sumRangeRecur(3))

/** ================== FACTORIAL ==================
 * Create a function which finds the factorial of a number
 * */

// ===== ITERATIVE VERSION

const factorialIter = (num) => {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
};

console.log(factorialIter(5));

// ===== RECURSIVE VERSION

const factorialRecur = (num) => {
  // THE BASE CASE, the END.
  if (num === 1) return 1;

  // RETURN A RESULT WITH A DIFFERENT INPUT
  return num * factorialRecur(num - 1);
};

// THE IDEA IS THE SAME WITH recursive sumRange
// console.log(factorialRecur(4));

/** ================== HELPER METHOD RECURSION ==================
 * Create a function which collects all of the odd values in an array
 * */

const collectOddValues = (arr) => {
  // THE OUTER FUNCTION. WHICH IS NOT RECURSIVE
  const result = [];

  const helper = (input) => {
    // helper function is recursive
    // BASE CASE - when the array is empty
    if (input.length === 0) return;
    if (input[0] % 2 !== 0) result.push(input[0]);

    // CALL FUNCTION AGAIN, INPUT IS CHANGED - a sub array with the first element removed
    helper(input.slice(1));
  };

  helper(arr);

  return result;
};

// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 6, 7, 8, 9]));

// ===== PURE RECURSION

const collectOddValuesPureRecur = (arr) => {
  let store = [];

  if (arr.length === 0) return store;

  if (arr[0] % 2 !== 0) store.push(arr[0]);

  // concat is used to merge two or more arrays. does not change the existing arrays, but returns a new array.
  // this part is KEY in helping build up the array. concat store + returned value of collectOddValuesPureRecur()
  store = store.concat(collectOddValuesPureRecur(arr.slice(1)));

  return store;
};

console.log(collectOddValuesPureRecur([1,2,3,4,5]))

/**
 * THE RECURSIVE CALL
 * on execution
 * collectOddValuesPureRecur([1,2,3,4,5]) - waiting
 *    store -> [1]
 *    store = [1].concat(collectOddValuesPureRecur([2,3,4,5])) 
 *        store -> []
 *        store = [].concat(collectOddValuesPureRecur([3,4,5]))
 *            store -> [3]
 *            store = [3].concat(collectOddValuesPureRecur([4,5]))
 *                store -> []
 *                store = [].concat(collectOddValuesPureRecur([5]))
 *                    store -> [5]
 *                    store = [5].concat(collectOddValuesPureRecur([]))
 *                        store -> []
 *                        return store = [] - BASE CASE
 * 
 * WORK YOUR WAY BACK UPWARDS
 * 
  * collectOddValuesPureRecur([1,2,3,4,5]) - waiting
 *    store -> [1]
 *    store = [1].concat([3, 5]) 
 *        store -> []
 *        store = [].concat([3,5])
 * *      return store = [3, 5] - store will be the array in concat in the call before
 *            store -> [3]
 *            store = [3].concat([5])
 * *          return store = [3, 5] - store will be the array in concat in the call before
 *                store -> []
 *                store = [].concat([5])
 * *              return store = [5] - store will be the array in concat in the call before
 *                    store -> [5]
 *                    store = [5].concat([])
 * *                  return store = [5] - store will be the array in concat in the call before
 *                        store -> []
 * *                      return store = [] - BASE CASE - store will be the array in concat in the call before
 *
 * * return store = [1, 3, 5]
 */