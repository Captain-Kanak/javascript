# JavaScript Data Types

Data types describe **what kind of value** a variable contains.

JavaScript is a **dynamically typed** language, which means a variable does not have a fixed data type. The value stored in the variable determines its type at runtime.

```js
let value = "Hello";
console.log(typeof value); // "string"

value = 100;
console.log(typeof value); // "number"
```

---

## 1. What Are Data Types?

A data type tells JavaScript how a value should be treated and what kind of data it represents.

```js
const name = "Jhon"; // String
const age = 25; // Number
const isDeveloper = true; // Boolean
```

JavaScript data types can be divided into two major categories:

1. **Primitive data types**
2. **Non-primitive (reference) data types**

---

## 2. Primitive vs Non-Primitive

### Primitive Data Types

Primitive values represent a single, simple value.

JavaScript has **7 primitive data types**:

| Type      | Example             |
| --------- | ------------------- |
| String    | `"Hello"`           |
| Number    | `42`                |
| BigInt    | `9007199254740991n` |
| Boolean   | `true`              |
| Undefined | `undefined`         |
| Null      | `null`              |
| Symbol    | `Symbol("id")`      |

Primitive values are immutable.

### Non-Primitive Data Types

Objects are non-primitive values.

Common examples include:

- Object
- Array
- Function

```js
const user = {
  name: "Jack",
  age: 25,
};

const numbers = [10, 20, 30];

function greet() {
  console.log("Hello");
}
```

Arrays and functions are technically objects, although they have specialized behavior.

---

## 3. String

A string represents text.

Strings can be written using:

- Single quotes `'...'`
- Double quotes `"..."`
- Backticks `` `...` ``

```js
const firstName = "Jhon";
const lastName = "Doe";
const message = `Hello, ${firstName}`;
```

You can check a string using `typeof`:

```js
console.log(typeof firstName); // "string"
```

### Template Literals

Template literals use backticks and allow expressions inside `${}`.

```js
const name = "Jhon";
const age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);
```

### Important Point

Strings are primitive and immutable.

```js
let text = "hello";

text[0] = "H";

console.log(text); // "hello"
```

The original string was not changed.

---

## 4. Number

JavaScript uses the `number` type for both integers and floating-point numbers.

```js
const age = 25;
const price = 99.99;
const temperature = -5;
```

JavaScript can also represent special numeric values:

```js
console.log(10 / 0); // Infinity
console.log("hello" * 2); // NaN
```

`NaN` means **Not-a-Number**, although its type is still `number`.

```js
console.log(typeof NaN); // "number"
```

Unlike some languages, JavaScript does not have separate `int` and `float` types.

---

## 5. BigInt

`BigInt` is used for integers larger than the safe range of JavaScript's `Number` type.

```js
const bigNumber = 9007199254740993n;

console.log(bigNumber);
console.log(typeof bigNumber); // "bigint"
```

You can also use `BigInt()`:

```js
const value = BigInt("9007199254740993");

console.log(value);
```

### Important Point

You can't directly mix `Number` and `BigInt` in arithmetic.

```js
const number = 10;
const bigInt = 20n;

// number + bigInt; // TypeError
```

Convert them explicitly when necessary.

---

## 6. Boolean

A Boolean represents one of two values:

```js
true;
false;
```

Example:

```js
const isLoggedIn = true;
const isAdmin = false;
```

Booleans are commonly used in conditions:

```js
const age = 20;

if (age >= 18) {
  console.log("Adult");
}
```

---

## 7. Undefined

`undefined` usually means a value has not been assigned.

```js
let username;

console.log(username); // undefined
```

You can also explicitly assign it:

```js
let value = undefined;
```

Check its type:

```js
console.log(typeof undefined); // "undefined"
```

An uninitialized variable declared with `let` or `var` has the value `undefined`.

---

## 8. Null

`null` represents an intentional absence of a value.

```js
const selectedUser = null;
```

It can be useful when you intentionally want to say:

> "There is currently no value."

### `typeof null`

There is a famous JavaScript historical behavior/bug:

```js
console.log(typeof null); // "object"
```

This is a long-standing JavaScript quirk.

Even though `typeof null` returns `"object"`, `null` is considered a **primitive value**.

---

## 9. Symbol

`Symbol` creates a unique primitive value.

```js
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false
```

Even if two Symbols have the same description, they are different values.

Symbols are often useful when you need unique object property keys.

```js
const id = Symbol("id");

const user = {
  name: "Jhon",
  [id]: 101,
};

console.log(user[id]); // 101
```

Symbol is generally an advanced primitive and is not commonly needed in everyday beginner code.

---

## 10. Object

An object stores data using key-value pairs.

```js
const user = {
  name: "Jhon",
  age: 25,
  isDeveloper: true,
};
```

Access properties:

```js
console.log(user.name);
console.log(user.age);
console.log(user[isDeveloper]);
```

Objects are non-primitive values.

```js
console.log(typeof user); // "object"
```

---

## 11. Array

An array stores an ordered collection of values.

```js
const fruits = ["apple", "banana", "mango", "orange"];
```

Access elements using an index:

```js
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[3]); // "orange"
```

Arrays can contain different types:

```js
const mixArray = ["hello", 100, true, null];
```

### Important Point

Arrays are technically objects.

```js
console.log(typeof fruits); // "object"
```

To check whether a value is specifically an array:

```js
console.log(Array.isArray(fruits)); // true
```

---

## 12. Function

Functions are callable objects.

```js
function greet() {
  console.log("Hello!");
}
```

You can call a function:

```js
greet();
```

`typeof` reports functions as `"function"`:

```js
console.log(typeof greet); // "function"
```

Although functions are objects in JavaScript's object model, `typeof` gives them the special result `"function"`.

---

## 13. `typeof` Operator

The `typeof` operator tells you the type of a value.

```js
console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof 42n); // "bigint"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol()); // "symbol"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"
```

### Important `typeof` Quirks

```js
console.log(typeof null); // "object" => historical bug
console.log(typeof []); // "object"
console.log(typeof NaN); // "number"
```

These results can be surprising, so remember them for debugging and interviews.

---

## 14. Dynamic Typing

JavaScript is dynamically typed.

A variable can hold a value of one type and later hold a value of another type.

```js
let value = "Hello";

console.log(typeof value); // "string"

value = 100;

console.log(typeof value); // "number"

value = true;

console.log(typeof value); // "boolean"
```

The variable itself does not have a permanently fixed type.

The current value determines its type.

---

## 15. Primitive Values and Immutability

Primitive values are immutable.

**Immutable** means the existing primitive value cannot be changed.

For example:

```js
let text = "Hello";

text = "World";
```

This does not modify `"Hello"`.

Instead, the variable `text` is reassigned to a different string value.

Another example:

```js
let number = 10;

number = 20;
```

The value `10` itself was not changed. The variable now contains `20`.

### Important Distinction

**Reassignment is not the same as mutation.**

```js
let name = "Jhon";

name = "Alex"; // reassignment

// Not Allowed
// name[0] = "j" // mutation
```

---

## 16. Primitive Values vs Object Values

Primitive values and objects behave differently when assigned.

### Primitive Example

```js
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

The primitive value is copied.

### Object Example

```js
const user1 = {
  name: "Jhon",
};

const user2 = user1;

user2.name = "Alex";

console.log(user1.name); // "Jhon"
console.log(user2.name); // "Jhon"
```

Both variables refer to the same object.

### Key Idea

For beginners, think of it this way:

- Primitive assignment copies the **value**.
- Object assignment copies the **reference to the object**.

A deeper discussion of references and object behavior can be explored later with objects and related topics.

---

## 17. `null` vs `undefined`

Both can represent an absence of a value, but they usually communicate different intentions.

| `undefined`                                 | `null`                                                   |
| ------------------------------------------- | -------------------------------------------------------- |
| Usually means a value has not been assigned | Usually means an intentional absence of value            |
| Common with uninitialized variables         | Common when intentionally clearing/representing no value |
| `typeof` returns `"undefined"`              | `typeof` returns `"object"`                              |

Example:

```js
let username;

const selectedUser = null;

console.log(username); // undefined
console.log(selectedUser); // null
```

### Simple Rule

Think:

- `undefined` → **not assigned / unavailable**
- `null` → **intentionally empty**

This is a useful mental model, although actual JavaScript code can use them in different ways.

---

## 18. Truthy and Falsy Values

JavaScript converts values to Boolean in many situations, such as conditions.

Some values are **falsy**, meaning they behave like `false` in a Boolean context.

Common falsy values include:

```js
false;
0 - 0;
0n;
("");
null;
undefined;
NaN;
```

Most other values are truthy.

Examples:

```js
if ("hello") {
  console.log("Truthy");
}

if (" ") {
  console.log("Truthy");
}

if (42) {
  console.log("Truthy");
}

if ([]) {
  console.log("Truthy");
}

if ({}) {
  console.log("Truthy");
}
```

### Important Point

An empty array `[]` and empty object `{}` are truthy.

```js
Boolean([]); // true
Boolean({}); // true
```

You will learn more about Boolean conversion and conditions in the operators/control-flow topics.

---

## 19. Quick Data Type Reference

| Data Type | Category               | Example            |
| --------- | ---------------------- | ------------------ |
| String    | Primitive              | `"Hello"`          |
| Number    | Primitive              | `42`               |
| BigInt    | Primitive              | `42n`              |
| Boolean   | Primitive              | `true`             |
| Undefined | Primitive              | `undefined`        |
| Null      | Primitive              | `null`             |
| Symbol    | Primitive              | `Symbol("id")`     |
| Object    | Non-primitive          | `{ name: "Jhon" }` |
| Array     | Object / non-primitive | `[1, 2, 3]`        |
| Function  | Object / callable      | `function () {}`   |

---

## 20. Common Mistakes

### Mistake 1: Thinking `null` is an object

```js
typeof null; // "object"
```

This is a historical JavaScript quirk. `null` is a primitive.

### Mistake 2: Thinking arrays have their own `typeof` result

```js
typeof []; // "object"
```

to check for an array.
Use:

```js
Array.isArray([]);
```

### Mistake 3: Thinking `NaN` has a special `typeof`

```js
typeof NaN; // "number"
```

`NaN` belongs to the Number type.

### Mistake 4: Confusing reassignment with mutation

```js
let value = "hello";

value = "world";
```

This is reassignment.

The original string was not mutated.

### Mistake 5: Thinking JavaScript variables have permanent types

```js
let value = 10;

value = "hello";
```

This is valid because JavaScript is dynamically typed.

### Mistake 6: Mixing Number and BigInt

```js
const a = 10;
const b = 20n;

// a + b; // TypeError
```

Number and BigInt should not be mixed directly in arithmetic.

---

## 21. Key Takeaways

- A data type describes what kind of value JavaScript is working with.
- JavaScript has **7 primitive data types**: String, Number, BigInt, Boolean, Undefined, Null, and Symbol.
- Objects are non-primitive values.
- Arrays and functions are specialized forms of objects.
- `typeof` can be used to inspect the type of a value.
- `typeof null` returns `"object"` because of a historical JavaScript quirk.
- `typeof []` returns `"object"`.
- `typeof NaN` returns `"number"`.
- JavaScript is dynamically typed.
- Primitive values are immutable.
- Reassignment is different from mutation.
- `undefined` commonly represents an unassigned value.
- `null` commonly represents an intentional absence of a value.
- `[]` and `{}` are truthy.
- Number and BigInt are different types and cannot be mixed directly in arithmetic.

---

## 22. Interview Questions

### Beginner

1. What is a data type?
2. What are the primitive data types in JavaScript?
3. What is the difference between primitive and non-primitive values?
4. What is a string?
5. What is the difference between `Number` and `BigInt`?
6. What are the two Boolean values?
7. What is `undefined`?
8. What is `null`?
9. What is a Symbol?
10. What is an object?
11. What is an array?
12. What is a function?

### Intermediate

13. What does the `typeof` operator do?
14. What is the result of `typeof null` and why?
15. What is the result of `typeof []`?
16. What is the result of `typeof NaN`?
17. Why is JavaScript called dynamically typed?
18. What does immutable mean?
19. What is the difference between reassignment and mutation?
20. What is the difference between `null` and `undefined`?
21. What are truthy and falsy values?
22. Why are empty arrays and objects truthy?
23. What happens when a primitive value is assigned to another variable?
24. What happens when an object is assigned to another variable?
25. Why can't you directly add a `Number` and a `BigInt`?

### Interview Practice

Before moving to the next topic, try explaining these without looking at your notes:

```js
console.log(typeof null);
console.log(typeof []);
console.log(typeof NaN);
console.log(typeof function () {});
```

Then explain **why** each result occurs.

---

## 23. Practice

Complete the exercises in `practice.js`.

**Do not look for solutions immediately. Try to solve each problem yourself first.**

### Practice 01 — Identify Data Types

Create variables containing:

- Your name
- Your age
- A Boolean value
- An undefined value
- A null value
- A BigInt value
- A Symbol

Use `typeof` to inspect each value.

### Practice 02 — `typeof` Challenge

Predict the output before running:

```js
console.log(typeof "JavaScript");
console.log(typeof 100);
console.log(typeof 100n);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});
console.log(typeof function () {});
console.log(typeof NaN);
```

Then run the code and compare your predictions.

### Practice 03 — Dynamic Typing

Create a variable named `value`.

Assign it:

1. A string
2. A number
3. A Boolean
4. An object

After each assignment, use `typeof` to check the current type.

### Practice 04 — Primitive Immutability

Create a string variable.

Try to change one character of the string directly.

Observe whether the original string changes.

### Practice 05 — Primitive Copy

Create:

```js
let a = 10;
let b = a;
```

Change `b`.

Check whether `a` changes.

Explain why.

### Practice 06 — Object Reference

Create an object:

```js
const user1 = {
  name: "Your Name",
};
```

Assign it to another variable.

Change the `name` property through the second variable.

Check both variables and explain the result.

### Practice 07 — `null` vs `undefined`

Create:

- One variable that is declared but not initialized.
- One variable explicitly assigned `null`.

Print both values and their types.

Explain the difference.

### Practice 08 — Truthy or Falsy

Predict whether each value is truthy or falsy:

```js
false
0
1
""
"hello"
null
undefined
NaN
[]
{}
```

Then verify your answers using `Boolean()`.

### Practice 09 — Array Check

Create an array and check:

```js
typeof yourArray;
Array.isArray(yourArray);
```

Explain why the two results are different.

### Practice 10 — BigInt

Create a BigInt value.

Try performing arithmetic between the BigInt and a Number.

Observe the result and explain why JavaScript behaves that way.

### Practice 11 — Real-World User Data

Create an object representing a user with:

- `name`
- `age`
- `isLoggedIn`
- `email`
- `profilePicture`

Use appropriate values, including `null` where appropriate.

Then inspect the type of each property.

### Practice 12 — Final Challenge

Create a variable named `data` and assign different types to it one at a time.

For every assignment:

1. Print the value.
2. Print its type.
3. Decide whether it is primitive or non-primitive.

Include at least:

- String
- Number
- BigInt
- Boolean
- Undefined
- Null
- Symbol
- Object
- Array
- Function
