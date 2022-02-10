const test = {
  key1: "value",
  foo: "bar",
  hello: "world",
  best: "thing",
};

console.log("KEYS", Object.keys(test));
console.log("VALUES", Object.values(test));
console.log("ENTRIES", Object.entries(test));

for (const [key, value] of Object.entries(test)) {
  console.log(key);
  console.log(value);
}

console.log("has own prop?", test.hasOwnProperty("key1"));

const countStr = (str) => {
  const lowerCaseStr = str.toLowerCase();
  const obj = {};

  for (const letter of lowerCaseStr) {
    if (letter.match(/^[0-9a-zA-Z]+$/)) {
      if (letter in obj) {
        obj[letter] += 1;
      } else {
        obj[letter] = 1;
      }
    }
  }
  return obj;
};

console.log(countStr("hHello !234@#12432 sdfds"));

// Example Step 3 - BREAK IT DOWN
// write a function that takes in a string and returns counts of each character in the string

const charCount = (str) => {
  // make object to return at end
  // loop over string, for each character,
  // if char is a number/letter AND a key in object, add one to count
  // if the char is a number/letter AND not in the object, add it and set value to 1
  // if char is NOT a number/letter (space, period, etc), don't do anything
  // return object at end
};

// Step 4 - Solve/Simplify

const charCount2 = (str) => {
  // make object to return at end
  const lowerCased = str.toLowerCase();
  const count = {};
  // loop over string, for each character,
  for (const letter of lowerCased) {
    // if char is a number/letter AND a key in object, add one to count
    if (letter in count && letter.match(/[a-z0-9]/)) {
      count[letter] += 1;
    } else {
      // if the char is a number/letter AND not in the object, add it and set value to 1
      if (letter.match(/[a-z0-9]/)) count[letter] = 1;
    }
  }
  // if char is NOT a number/letter (space, period, etc), don't do anything
  // return object at end
  return count;
};

console.log(charCount2("hello world 123 !!@@##"));

// Step 5 - Look Back and Refactor

const isAlphaNum = (str, idx) => {
  const code = str.charCodeAt(idx || 0);
  const isNum = code > 47 && code < 58; // numeric (0-9)
  const isUpperCase = code > 64 && code < 91; // upper (A-Z)
  const isLowerCase = code > 96 && code < 123; // lower (a-z)
  if (!isNum && !isUpperCase && !isLowerCase) {
    return false;
  }
  return true;
};

const charCount3 = (str) => {
  // make object to return at end
  const lowerCased = str.toLowerCase();
  const count = {};
  // loop over string, for each character,
  for (const letter of lowerCased) {
    // if char is a number/letter AND a key in object, add one to count
    // if the char is a number/letter AND not in the object, add it and set value to 1
    if (letter.match(/[a-z0-9]/)) {
      // RegExp is actually quite slow. can do better?
      letter in count ? (count[letter] += 1) : (count[letter] = 1);
    }
  }
  // if char is NOT a number/letter (space, period, etc), don't do anything
  // return object at end
  return count;
};


