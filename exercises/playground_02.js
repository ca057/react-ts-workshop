// !--------------------------------------------------
// ! Passing variables in JavaScript + Spread operator
// !--------------------------------------------------

// ! Simple Example

const numbers = {
  one: 1,
  two: 2,
  three: 3,
};
const b = { ...numbers, four: 4 };
console.log(b);

// ! 🍝 [Copy object via spread operator]
// !-------------------------------------

// 1. Let's define an object
const myObject = {
  foo: ["a", "b", "c"],
  baz: 3,
  bar: { a: 1, b: 2 },
  qux: "one",
};

// 2. Now we create two "copies":
// A: Simple copy
const myObjectCopied = myObject;
// B: Copy via spread operator
const myObjectCopiedSpread = { ...myObject };

// ? 🐆 [Task]: For each of the below mutations of `myObject`,
// ?            write whether it changes one or several of the other objects:
// You can use 1️⃣ for `myObject`
// You can use 2️⃣ for `myObjectCopied`
// You can use 3️⃣ for `myObjectCopiedSpread`

myObject.foo[2] = 6; // Which objects change?   1  1️⃣2️⃣
myObject.baz = 6; // Which objects change?      2  1️⃣2️⃣
myObject.bar.b = 6; // Which objects change?    3  1️⃣2️⃣3️⃣
myObject.qux = "two"; // Which objects change?  4  1️⃣2️⃣
myObject.quux = "?"; // Which objects change?   5  1️⃣2️⃣

// ? 🐒 [Question]: Explain your decisions
// Your answer:
//
// 1) myObject and its referential copy
// 2) myObject and its referential copy
// 3) myObject, its referential copy and the object inside the shallow copy (which is a reference to the same object as in myObject)
// 4) myObject and its referential copy
// 5) myObject and its referential copy
//

// ? Uncomment the next two lines to check whether your choices are correct:
console.log(myObjectCopiedSpread);
console.log(myObjectCopied);
console.log(myObject);

// ! Deep copies in vanilla JS?
// New global method: https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
// Will be supported by browsers soon.
// !-------------------

// ! Referential Equality?
// !----------------------

const objectCopy1 = myObjectCopied === myObject; // true
const objectCopy2 = myObjectCopiedSpread === myObject; // false

// ? 🐒 [Question]: Explain the result of these two boolean values
// Your answer:
//
// true: myObjectCopied references the same object in the heap as myObject
// false: myObjectCopiedSpread is a new object in the heap with the same objects (and references) as myObject
//

// ! Spread vs. no-spread in reduce function
// !----------------------------------------

// Example of `reduce` function:

const sum = [0, 1, 2, 3, 4].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
// ? Steps:
// accumulator: 0, currentValue: 0,
// accumulator: 0, currentValue: 1
// accumulator: 1, currentValue: 2
// accumulator: 3, currentValue: 3
// accumulator: 6, currentValue: 4

const data = [
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Zhang" },
  { id: 3, name: "Sophie" },
];

/**
 * Function to transform an array into an object.
 * This decreases access to array elements by id from O(n) to O(1).
 * O(1) is equivalent to a direct access in only one calculation step.
 *
 * Example: This array
 *
 * [
 *   { id: 1, name: "Ahmed" },
 *   { id: 2, name: "Zhang" },
 *   { id: 3, name: "Sophie" },
 * ];
 *
 * gets transformed to this object:
 *
 * {
 *   1: { id: 1, name: 'Ahmed' },
 *   2: { id: 2, name: 'Zhang' },
 *   3: { id: 3, name: 'Sophie' },
 * };
 */
const normalize = data.reduce((accumulator, currentValue) => {
  // add new value with key `id`
  accumulator[currentValue.id] = currentValue;
  return accumulator;
}, {});

// ? Steps:
// accumulator: {}, currentValue: {}
// accumulator: { 1: { id: 1, name: 'Ahmed' } }, currentValue: { id: 1, name: 'Ahmed' }
// accumulator: { 1: { id: 1, name: 'Ahmed' }, 2: { id: 2, name: 'Zhang' } }, currentValue: { id: 2, name: 'Zhang' }

// ---
// Note: `find` has complexity of O(n)
const user = data.find((name) => name.id == 3);
// ---

const normalizeSpread = data.reduce((accumulator, currentValue) => {
  // add new value (copied with spread operator) with key `id`
  accumulator[currentValue.id] = { ...currentValue };
  return accumulator;
}, {});

// Change name of first entry in `data` array
data[0].name = "Franz";

console.log(normalize); // 'Franz' instead of 'Ahmed'
console.log(normalizeSpread); // 'Ahmed' remains (no 'Franz')

// ? 🐒 [Question]: Explain the different results
// Your answer:
//
// normalize references the original objects in the array as objects of the respective id; therefore changing the original object also changes all references
// normalizeSpread creats new objects, copying the contents (only primitive values)
//

// -----------------------------------------------------------------------------

// !---------------
// ! Promises
// !---------------

// ! Callback based request:

const httpRequest = (url, callback) =>
  setTimeout(() => {
    if (!url) {
      callback({ status: 400 });
    } else {
      callback({ data: [], status: 200, url });
    }
  }, 1000);

const performAction = (value, action) => action(value);
const makeRequest = (url) =>
  httpRequest(url, (response) => {
    performAction(response, (result) => {
      console.log(`Status: ${result.status}`);
    });
  });

// successful request
makeRequest("http://localhost:3000"); // logs `Status: 200`
// failed request
makeRequest(); // logs `Status: 400`

// ! Promise-based request with async/await:

const httpRequestWithPromise = (url) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!url) {
        reject({ status: 400 });
      } else {
        resolve({ data: [], status: 200, url });
      }
    }, 1000);
  });

// ? 🐆 [Task]: Complete the async/await function `makeRequestAsyncAwait` which
// ?            calls `httpRequestWithPromise` and `console.log`s `response.status` as above.

const makeRequestAsyncAwait = async (url) => {
  try {
    const response = await httpRequestWithPromise(url);
    console.log(`Status: ${response.status}`);
  } catch (error) {
    console.log(`Status: ${error.status}`);
  }
};

// ! Uncoment these two calls after you implemented `makeRequestAsyncAwait`
// passed url causes resolved Promise
makeRequestAsyncAwait("http://localhost:3000");

// no passed url causes rejected Promise
makeRequestAsyncAwait();
