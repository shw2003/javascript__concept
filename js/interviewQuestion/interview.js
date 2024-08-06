// first interview
// ----------------------------------------------------------------------------------------------------

// import { it } from "node:test";

// 1. Create a promise without using new promise? Make it pending state

// Answer: solution 1

function createPendingPromise() {
  return Promise.race([]);
}

const pendingPromise = createPendingPromise();
console.log(pendingPromise, "1");

// Promise { <pending> }

setTimeout(() => {
  console.log(pendingPromise, "2");
}, 1000);

// Promise { <pending> }

// solution 2

async function createAsyncPendingPromise() {
  await new Promise(() => {});
}

const pendingAsyncPromise = createAsyncPendingPromise();

console.log(pendingAsyncPromise, "3");

setTimeout(() => {
  console.log(pendingAsyncPromise, "4");
}, 1000);

// solution 3

function createReturnpendingPromise() {
  return (async () => {
    await new Promise(() => {});
  })();
}

const pendingReturnPromise = createReturnpendingPromise();

console.log(pendingReturnPromise, "5");

// ------------------ COMPLETE----------------------------

// 2. Create a promise when button is clicked?

// Method 1: Using a Simple Event Listener with a Promise

// document.addEventListener("DOMContentLoaded", () => {
//   const button = document.getElementById("muButton");

//   function createButtonClickPromise() {
//     return new Promise((resolve, reject) => {
//       button.addEventListener("click", () => {
//         resolve("button eas clicked");
//       });
//     });
//   }

//   createButtonClickPromise().then((message) => {
//     console.log(message);
//   });
// });

// Method 2: Using an Immediately Invoked Function Expression (IIFE)

// document.addEventListener("DOMContentLoaded", () => {
//   const button = document.getElementById("muButton");

//   (async function () {
//     const message = await new Promise((resolve) => {
//       button.addEventListener("click", () => resolve("button was clicked"));
//     });
//     console.log(message);
//   })();
// });

// ===================================================================
// ===================================================================
// ===================================================================
// ---------------------------OUTPUT QUESTION-------------------------
const obj = [
  {
    key: "Sample 1",
    data: "Data1",
  },
  {
    key: "Sample 1",
    data: "Data1",
  },
  {
    key: "Sample 2",
    data: "Data2",
  },
  {
    key: "Sample 1",
    data: "Data1",
  },
  {
    key: "Sample 3",
    data: "Data1",
  },
  {
    key: "Sample 4",
    data: "Data1",
  },
];

// Initialize the output object with all possible keys
let output = {
  "Sample 1": [],
  "Sample 2": [],
  "Sample 3": [],
  "Sample 4": [],
};

// Use reduce to group objects by their key
obj.reduce((acc, curr) => {
  if (acc[curr.key]) {
    acc[curr.key].push(curr);
  } else {
    acc[curr.key] = [curr];
  }
  return acc;
}, output);

console.log(output, "1");

//  --------------------------------FOREACH------------------------------

obj.forEach((item) => {
  if (output[item.key]) {
    output[item.key].push(item);
  } else {
    output[item.key] = [item];
  }
});

console.log(output, "2");

//  --------------------------------MAP------------------------------

obj.map((item) => {
  if (output[item.key]) {
    output[item.key].push(item);
  } else {
    output[item.key] = [item];
  }
});

console.log("MAP", output);

// ======================================================================
// ======================================================================
// ======================================================================

//  ----------------------momoized add function------------------------------

// Create a Cache: Use an object to store previously computed results.
// Check Cache: Before computing the sum, check if the result is already in the cache.
// Store in Cache: If the result is not in the cache, compute it and store it for future reference

function memoizedAdd() {
  const cache = {};

  return function (a, b) {
    const key = `${a}, ${b}`;
    if (key in cache) {
      console.log("FROM CACHE");
      return cache[key];
    } else {
      console.log("result");
      const result = a + b;
      cache[key] = result;
      return result;
    }
  };
}

const add = memoizedAdd();

console.log(add(1, 2));
console.log(add(1, 2));
console.log(add(1, 3));
console.log(add(1, 3));
console.log(add(1, 7));

// / ======================================================================
// ======================================================================
// ======================================================================

//  ----------------------FLATTEN ARRAY FUNCTION------------------------------

// USING FLAT METHOD

const nestedArray = [1, [2, [3, 4, [5, 7, 9], [9, 8]]]];

const flattenArrayDepth1 = nestedArray.flat(1);
const flattenArrayDepth2 = nestedArray.flat(2);
const flattenArrayDepth3 = nestedArray.flat(5);
const flattenArrayDepth4 = nestedArray.flat(Infinity);

console.log("1", flattenArrayDepth1);
console.log("2", flattenArrayDepth2);
console.log("3", flattenArrayDepth3);
console.log("INFITY", flattenArrayDepth4);

// USING RECURSION METHOD

function flatenArray(arr) {
  let result = [];
  arr.forEach((ele) => {
    if (Array.isArray(ele)) {
      result = result.concat(flatenArray(ele));
    } else {
      result.push(ele);
    }
  });

  return result;
}

const nestedArrays = [1, [2, [3, [4, 5]]]];
const flattenedArray = flatenArray(nestedArray);
console.log(flattenedArray); // [1, 2, 3, 4, 5]

//reduce method

function flatArray(arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flatArray(curr) : curr);
  }, []);
}

const nestedArrayReduce = [
  1,
  [2, 3],
  { a: 1, b: 2 },
  [4, [5, 6, { c: 3, d: 4 }]],
  7,
  [{ e: 5 }, 8],
];
const flattenedArrayReduce = flatArray(nestedArrayReduce);
console.log(flattenedArrayReduce); // [1, 2, 3, 4, 5]

// =========================================================
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// 4
// 4
// 4
// 4
// ============================================================

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// 1
// 2
// 3
// ==================================================================
for (var i = 1; i <= 3; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })(i);
}
// 1
// 2
// 3
// ===================================================================

async function foo() {
  return "Hello World";
}

const result = foo();
console.log(result);

// Promise { <state>: "fulfilled", <value>: "Hello World" }
// =======================================================================
// / Using async/await
async function foo() {
  return "Hello World";
}

async function main() {
  const result = await foo();
  console.log(result); // Output: "Hello World"
}

main();

// Using .then()
foo().then((result) => {
  console.log(result); // Output: "Hello World"
});

// =======================================================================

const objects = {
  id: 123,
  name: "John Doe",
};

Object.defineProperty(objects, "id", {
  value: 123,
  writable: false, // Prevents modification of the property
  configurable: false, // Prevents deletion or redefinition of the property
});

// Trying to change the id property will not work
objects.id = 456; // This will have no effect

console.log(objects.id); // Output: 123

// The name property can still be changed
objects.name = "Jane Doe";
console.log(objects.name); // Output: Jane Doe

// Trying to delete the id property will also not work
delete objects.id; // This will have no effect

console.log(objects.id); // Output: 123

// ===================================================================================

// What are closures and why we need closures?

function counter() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

const counters = counter();
console.log(counters(), "counter");
console.log(counters(), "counter");
console.log(counters(), "counter");

// ======================================================================================
("use strict");

function foo() {
  console.log(this); // Will output the receiver object
}

// Define a receiver object
const receiver = { name: "Receiver Object" };

// Call foo with 'receiver' as the explicit receiver
foo.call(receiver); // Output: { name: 'Receiver Object' }

// ============================================================================================

const intervalIds = setInterval(() => {
  console.log("This message is displayed every 1 second");
}, 1000);

setTimeout(() => {
  clearInterval(intervalIds);
  console.log("finicsh");
}, 2000);
// Stop the interval after 5 seconds

const intervalId = setTimeout(() => {
  console.log("This message is displayed after 1 second");
}, 1000);

function multiply(num) {
  return function (factor) {
    return num * factor;
  };
}

const double = multiply(2);

console.log(double(4));
// =========================================================

// spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2);

arr1.push(7);

console.log(arr1, "arr1");
console.log(arr2, "arr2");

const arr3 = [...arr1, ...arr2];
console.log(arr3, "arr3");

const numbers = [1, 2, 3];
console.log(Math.max(...numbers));

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };
console.log("obj2", obj2);

obj1.c = 4;

console.log("obj2", obj1);
