// !-----------------------
// ! Object property access
// !-----------------------

// ? 🐒 [Questions]: Answer the following questions:
// ?
// ? 1. What are the three different ways in JS to access object properties?
// Your answer:
//
// const property = myObj.property
// const property = myObj["property"]
// const { property } = myObj
//
// ? 2. When using the `dot property accessor` the property has to be an `identifier`.
// ?    Use https://developer.mozilla.org/en-US/docs/Glossary/Identifier to explain what an idenifier is.
// Your answer:
//
// An identifier is a sequence of characters in the code that identifies a variable, function, or property.
// In JavaScript, identifiers are case-sensitive and can contain Unicode letters, $, _, and digits (0-9),
// but may not start with a digit.
//

// -----------------------------------------------------------------------------

// !---------------
// ! var, let, const
// !---------------

// ! Sopce (var)

var newWord = "hello";
const testScope = () => {
  newWord = "goodbye";
};
console.log(newWord);

// ! Scope (const)
if (true) {
  const word = "hello";
  word;
}

word; // undefined

// ! Scope (var)
if (1 == 1) {
  var word = "hello";
}
word; // "hello"

// ? 🐒 [Question]: Explain the different results for `var` and `const`
// Your answer:
//
// var: function-/globally-scoped and hoisted
// const/let: block-scoped and not hoisted

// ! Re-assignment (const)

const mySum = (one, two, three) => {
  return one + two + three;
};

const returnValue = {};
returnValue.sds = mySum(2, 6, 1); // assignment
console.log(returnValue.sds);

// ? 🐒 [Question]: Why is this assignment to property of a `const` possible?
// Your answer:
//
// There is no assignment to the actual variable `returnValue` happening, but to a property of the variable.
// Using `const` doesn’t freeze the properties of the object and allows them to be re-assigned if they are writable.

// -----------------------------------------------------------------------------

// !-------------------------------
// ! Array destructuring and spread
// !-------------------------------

// ! Array spread
// !-------------

const coordinates = [39, 21]; // lat, lng

// Extract second argument only
const [, lng] = coordinates; // equivalent to: `const lng = coordinates[1];`

// ! Spread function arguments
// !--------------------------

const values = [1, 2, 3];
// Elegant solution with spread operator:
const result = mySum(...values);
// Verbose solution without spread operator:
const resultVerbose = mySum(values[0], values[1], values[2]);

console.log(result);

// ! Array destructuring (nested)
// !----------------------

const myArray = [1, [2, 3]];
const [, [, third]] = myArray;
console.log(third);

// ! Array destructuring (fake useState function)
// !----------------------

// Attention: This is a fake `useState` function
// It's not how React.useState function is implemented
const useState = (initialValue) => {
  const stateValue = initialValue;
  const setStateValue = (newValue) => {
    stateValue.count = newValue.count;
  };
  return [stateValue, setStateValue];
};

// Array destructuring
const [count, setCount] = useState({ count: 0 });

setCount({ count: 5 });
console.log(count);

// ! Object destructuring (nested)
// !----------------------

const props = { data: { a: [1, 2, 3], b: [1, 2, 3] } };
const {
  data: { a: dataA },
} = props; // nested destructuring + renaming of `a` to `dataA`

console.log(dataA);

// -----------------------------------------------------------------------------

// !---------------------------------------------------------------------
// ! nullish coalescing operator (??) and optional chaining operator (?.)
// !---------------------------------------------------------------------

// let greeting = { say: "hi" };
// console.log(greeting.say?.toUpperCase() ?? "not available"); // "HI"
// console.log(greeting.dontSay?.toUpperCase() ?? "not available"); // "not available"

// ? 🐒 [Question]: Explain this interplay of nullish coalescing operator (??) and optional chaining operator (?.)
// Your answer:
//
// The chaining operator is used to safely access a property of the object, `toUpperCase` will only be called if the property exists.
// The nullish coalescing operator returns the right-side of the expression, if the left side is `undefined` or `null` and
// will provide a default if the respective property doesn’t exist.

// -----------------------------------------------------------------------------

// !---------------
// ! Type Coercion
// !---------------

// ? 🐆 [Task]: Guess the result of each line first and then uncomment the `console.log` statement:

const one = true + false; // number
console.log(one);

const two = 1 + 2 + " hello world" + 5 + 3 + 43; // string
console.log(two);

const three = 1 + true; // number
console.log(three);

const four = "hello" + true; // string
console.log(four);

const five = {} + {}; // string
console.log(five);

const six = {} === {}; // boolean
console.log(six);

const seven = [1, 2] == "1,2"; // boolean
console.log(seven);

// !--------------------------------
// ! Object.is() comparison operator
// ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// !--------------------------------

const eight = Object.is(+0, -0);
console.log(eight);

const nine = +0 === -0;
console.log(nine);

const car1 = { wheels: 4 };
const car2 = car1;
const ten = Object.is(car1, car2);
console.log(ten);

car1.wheels = 5; // mutate original car1 object
const eleven = Object.is(car1, car2);
console.log(eleven);

const twelve = Object.is(car1, { wheels: 5 });
console.log(twelve);

console.log(Object.is({ a: "blue" }, { a: "red" }));
