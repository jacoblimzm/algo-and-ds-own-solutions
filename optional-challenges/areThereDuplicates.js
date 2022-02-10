/*** Coding Exercise 4: Frequency Counter / Multiple Pointers - areThereDuplicates ***/

// Implement a function called, areThereDuplicates which accepts a
// variable number of arguments, and checks whether there are any
// duplicates among the arguments passed in. You can solve this using
// the frequency counter pattern OR the multiple pointers pattern.

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // false

// Restrictions:
//     Time - O(N)
//     Space - O(N)
// Bonus:
//     Time - O(N LOG N)
//     Space - O(1)

// Frequency Counter Solution

const areThereDuplicates = (...args) => {
  // always false if there are no arguments
  if (args.length === 0) return false;

  const store = {};
  // loop through and store count of arguments.
  for (const element of args) {
    // if the element has been encountered before
    if (element in store) return true;
    store[element] = 1;
  }
  return false;
};

// console.log(areThereDuplicates("a", "b", "c", "d"));

// Multiple Pointers Solution

const areThereDuplicatesPointers = (...args) => {
  if (typeof args[0] === "string") {
    args.sort(); // sorts alphabetically by strings
  } else {
    args.sort((a, b) => a - b); // sorts numerically
  }
  let left = 0;
  for (let right = 1; right < args.length; right++) {
    if (args[left] === args[right]) return true;
    left++;
  }
  return false;
};

console.log(areThereDuplicatesPointers("a", "b", "c", "d", "a"));
console.log(areThereDuplicatesPointers(3, 1, 2, 3, 4, 5, 6, 7));
