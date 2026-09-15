# Hoisting

Hoisting is a JavaScript behavior where declarations are processed before the code in their scope is executed.

This does **not** mean JavaScript literally moves your code to the top.

Instead, during the creation/setup phase of execution, JavaScript registers declarations so they can be handled when the code runs.

Understanding hoisting helps explain why some variables can be accessed before their declaration, while others produce errors.

---

## 1. What Is Hoisting?

Consider this code:

```js
console.log(name);

var name = "Alice";
```

You might expect an error because `name` is declared after `console.log()`.

But the result is:

```text
undefined
```

This happens because the `var` declaration is processed before execution.

Conceptually, JavaScript behaves somewhat like:

```js
var name;

console.log(name);

name = "Alice";
```

The important point is:

> JavaScript hoists the declaration, not the initialization.

---

## 2. Declaration vs Initialization

To understand hoisting, first understand the difference between declaration and initialization.

**Declaration**

Declaring a variable means telling JavaScript that the variable exists.

```js
var name;
```

**Initialization**

Initialization means assigning the first value.

```js
name = "Alice";
```

These can happen separately:

```js
var name; // declaration
name = "Alice"; // initialization
```

Or together:

```js
var name = "Alice";
```

Conceptually, JavaScript still treats these as separate steps for hoisting purposes.

```js
var name; // declaration is processed first

name = "Alice"; // assignment happens during execution
```

---

## 3. Hoisting Does Not Mean Moving Code

A common misconception is:

> "JavaScript moves variable declarations to the top of the file."

That is not what actually happens.

For example:

```js
console.log(name);

var name = "Alice";
```

It is better to think of JavaScript as processing the declaration during the setup phase:

```md
1. Register the variable `name`
2. Initialize it according to the declaration type
3. Execute the code line by line
```

So hoisting is about how JavaScript prepares declarations before execution.

---

## 4. Hoisting with `var`

Variables declared with `var` are hoisted and initialized with `undefined`.

Example:

```js
console.log(name);

var name = "Alice";
```

Output:

```text
undefined
```

Conceptually:

```js
var name;

console.log(name);

name = "Alice";
```

---

## 5. `var` Declaration Is Hoisted

Consider:

```js
console.log(age);

var age;

console.log(age);

age = 25;

console.log(age);
```

Output:

```text
undefined
undefined
25
```

Why?

Before execution:

```js
var age;
```

exists in the current scope.

The assignment:

```js
age = 25;
```

does not happen until execution reaches that line.

---

## 6. `var` Initialization Is Not Hoisted

This is important.

```js
console.log(name);

var name = "Alice";
```

The declaration is effectively available:

```js
var name;
```

But this assignment:

```js
name = "Alice";
```

has not happened yet.

Therefore:

```js
console.log(name);
```

prints:

```text
undefined
```

**Remember**

```text
Declaration    → hoisted
Initialization → not hoisted
```

---

## 7. Hoisting with `let`

`let` declarations are also hoisted in the sense that the binding is created during the setup of its scope.

However, unlike `var`, a `let` variable is not initialized to `undefined`.

Example:

```js
console.log(name);

let name = "Alice";
```

This produces:

```text
ReferenceError
```

You cannot access the variable before its declaration is evaluated.

---

## 8. Hoisting with `const`

`const` behaves similarly to let.

Example:

```js
console.log(age);

const age = 25;
```

Result:

```text
ReferenceError
```

The `const` binding exists, but it cannot be accessed before its declaration is evaluated.

---

## 9. Temporal Dead Zone (TDZ)

The **Temporal Dead Zone**, commonly called the **TDZ**, is the period between entering a scope where a `let` or `const` binding exists and the point where its declaration is evaluated.

Example:

```js
console.log(name);

let name = "Alice";
```

The `name` binding exists, but it is inaccessible before:

```js
let name = "Alice";
```

is evaluated.

That inaccessible period is called the Temporal Dead Zone.

---

## 10. Simple TDZ Example

```js
{
  // Temporal Dead Zone starts

  console.log(value); // ReferenceError

  let value = 10;

  // Temporal Dead Zone ends
}
```

The TDZ ends when execution reaches the declaration:

```js
let value = 10;
```

---

## 11. TDZ with `const`

The same behavior occurs with `const`.

```js
{
  console.log(value); // ReferenceError

  const value = 100;
}
```

The variable cannot be accessed before its declaration.

---

## 12. `var` vs `let` vs `const`

| Feature                       | `var`               | `let` | `const` |
| ----------------------------- | ------------------- | ----- | ------- |
| Declaration hoisted           | Yes                 | Yes   | Yes     |
| Initialized during hoisting   | `undefined`         | No    | No      |
| Accessible before declaration | Yes, as `undefined` | No    | No      |
| TDZ                           | No                  | Yes   | Yes     |
| Can be reassigned             | Yes                 | Yes   | No      |
| Scope                         | Function            | Block | Block   |

Example:

```js
console.log(a); // undefined
var a = 10;
```

```js
console.log(b); // ReferenceError
let b = 20;
```

```js
console.log(c); // ReferenceError
const c = 30;
```

---

## 13. Function Declaration Hoisting

Function declarations are also hoisted.

For example:

```js
sayHello();

function sayHello() {
  console.log("Hello!");
}
```

Output:

```text
Hello!
```

The function can be called before its declaration in the source code.

---

## 14. Function Declaration Example

```js
greet();

function greet() {
  console.log("Welcome!");
}
```

JavaScript knows about the function declaration before execution reaches it.

Conceptually:

```text
Function declaration is registered
        ↓
Code execution starts
        ↓
greet() is called
        ↓
Function executes
```

---

## 15. Function Expressions and Hoisting

Function expressions behave differently.

Example:

```js
sayHello();

var sayHello = function () {
  console.log("Hello!");
};
```

The result is:

```text
TypeError
```

Why?

The `var` declaration is hoisted:

```js
var sayHello;
```

But the function assignment happens later:

```js
sayHello = function () {
  console.log("Hello!");
};
```

So when JavaScript executes:

```js
sayHello();
```

the value is still:

```text
undefined
```

Calling `undefined` as a function causes a `TypeError`.

---

## 16. `let` with Function Expressions

Consider:

```js
sayHello();

let sayHello = function () {
  console.log("Hello!");
};
```

This produces:

```text
ReferenceError
```

The `sayHello` binding is in the Temporal Dead Zone.

---

## 17. Arrow Functions and Hoisting

Arrow functions are also function expressions.

Example:

```js
sayHello();

const sayHello = () => {
  console.log("Hello!");
};
```

This produces:

```text
ReferenceError
```

The `const` variable cannot be accessed before its declaration.

---

## 18. Function Declaration vs Function Expression

Compare:

**Function Declaration**

```js
greet();

function greet() {
  console.log("Hello!");
}
```

Works because function declarations are hoisted with their function value available.

**Function Expression**

```js
greet();

var greet = function () {
  console.log("Hello!");
};
```

Does not work.

The variable declaration is hoisted, but the function assignment is not.

---

## 19. Hoisting Inside Functions

Hoisting happens within the relevant scope.

Example:

```js
function test() {
  console.log(value);

  var value = 10;
}

test();
```

Output:

```text
undefined
```

Conceptually:

```js
function test() {
  var value;

  console.log(value);

  value = 10;
}
```

The `value` variable belongs to the function scope.

---

## 20. Function Scope and Hoisting

Consider:

```js
var value = "global";

function test() {
  console.log(value);

  var value = "local";

  console.log(value);
}

test();
```

Output:

```text
undefined
local
```

Why?

Inside the function, the local declaration:

```js
var value;
```

is hoisted.

Therefore the first `console.log()` refers to the local variable, not the global variable.

Conceptually:

```js
var value = "global";

function test() {
  var value;

  console.log(value);

  value = "local";

  console.log(value);
}
```

---

## 21. Hoisting and Scope

Hoisting happens within a variable's scope.

For example:

```js
function example() {
  console.log(value);

  var value = 10;
}
```

The variable is hoisted inside the function.

It does not become a global variable.

```text
Global Scope
└── example()
    └── value
```

This is why understanding `scope` is important for understanding `hoisting`.

---

## 22. Block Scope and Hoisting

`let` and `const` are block-scoped.

Example:

```js
{
  console.log(value); // ReferenceError

  let value = 10;
}
```

The binding belongs to that block and is subject to the TDZ.

The same applies to `const`:

```js
{
  console.log(value); // ReferenceError

  const value = 10;
}
```

---

## 23. `var` Inside a Block

`var` does not have block scope.

Example:

```js
{
  var value = 10;
}

console.log(value);
```

Output:

```text
10
```

The block does not create a separate scope for `var`.

---

## 24. `let` Inside a Block

Compare it with `let`:

```js
{
  let value = 10;
}

console.log(value);
```

Result:

```text
ReferenceError
```

Because `let` is block-scoped.

---

## 25. Hoisting in Loops

Hoisting behavior can also be observed in loops.

Example:

```js
for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);
```

Output:

```text
0
1
2
3
```

Because `var` is function-scoped, not block-scoped.

With `let`:

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);
```

The final `console.log(i)` produces:

```text
ReferenceError
```

because `i` is scoped to the loop block.

---

## 26. Hoisting and `typeof`

`typeof` has some special behavior with undeclared variables.

Example:

```js
console.log(typeof unknownVariable);
```

Output:

```text
"undefined"
```

However, `typeof` does not bypass the Temporal Dead Zone.

Example:

```js
console.log(typeof value);

let value = 10;
```

Result:

```text
ReferenceError
```

The `value` binding exists but is still in the TDZ.

---

## 27. Hoisting and `var` Redeclaration

`var` allows redeclaration within the same scope.

Example:

```js
var name = "Alice";

var name = "Bob";

console.log(name);
```

Output:

```text
Bob
```

This behavior is different from `let` and `const`.

```js
let name = "Alice";

let name = "Bob";
```

This produces a:

```text
SyntaxError
```

---

## 28. Multiple `var` Declarations

Consider:

```js
console.log(value);

var value = 10;

var value = 20;

console.log(value);
```

Output:

```text
undefined
20
```

Conceptually:

```js
var value;

console.log(value);

value = 10;

value = 20;

console.log(value);
```

---

## 29. Hoisting and Nested Functions

Function declarations can also be hoisted inside their scope.

```js
function outer() {
  inner();

  function inner() {
    console.log("Inside inner function");
  }
}

outer();
```

Output:

```text
Inside inner function
```

The `inner` function declaration is available within the `outer` function's scope.

---

## 30. Function Hoisting vs Variable Hoisting

Consider:

```js
console.log(value);

var value = 10;

function test() {
  console.log("Hello");
}
```

The variable is initialized as:

```js
value = undefined;
```

while the function declaration is available for invocation.

Example:

```js
test();

function test() {
  console.log("Hello");
}
```

This works.

---

## 31. Important Hoisting Rule

A useful mental model is:

Before execution:

```md
1. JavaScript creates/registers declarations.
2. `var` bindings are initialized with `undefined`.
3. `let` and `const` bindings exist but remain uninitialized.
4. Function declarations are available for use.
5. Execution then proceeds through the code.
```

This is a simplified mental model, but it is useful for understanding everyday JavaScript behavior.

---

## 32. Hoisting Is Related to Execution

JavaScript execution can be thought of as having two broad stages:

```text
Creation / Setup
       ↓
Execution
```

During setup, JavaScript prepares things such as:

- Variables
- Function declarations
- Scope-related bindings

During execution, JavaScript runs statements and performs assignments.

For example:

```js
console.log(value);

var value = 10;
```

**Setup**

```text
value → undefined
```

Execution

```js
console.log(value) → undefined

value = 10
```

---

## 33. Hoisting Does Not Hoist Assignments

Consider:

```js
console.log(value);

var value = 100;
```

The declaration is processed before execution.

But this:

```js
value = 100;
```

happens only when execution reaches that line.

Therefore:

```text
Declaration → prepared before execution
Assignment  → happens during execution
```

---

## 34. Common Hoisting Mistakes

**Mistake 1: Thinking `let` and `const` Are Not Hoisted**

It is common to hear:

> "`let` and `const` are not hoisted."

This is an oversimplification.

A better explanation is:

> `let` and `const` bindings are created during scope setup, but they remain uninitialized and cannot be accessed before their declaration is evaluated.

This results in the Temporal Dead Zone.

**Mistake 2: Thinking the Entire Line Is Hoisted**

Consider:

```js
var age = 25;
```

The entire assignment is not hoisted.

Only the declaration is conceptually processed early:

```js
var age;
```

The assignment:

```js
age = 25;
```

occurs during execution.

**Mistake 3: Confusing Function Declarations with Function Expressions**

This works:

```js
greet();

function greet() {
  console.log("Hello");
}
```

This does not:

```js
greet();

var greet = function () {
  console.log("Hello");
};
```

They use different declaration patterns and therefore have different hoisting behavior.

**Mistake 4: Assuming Scope and Hoisting Are the Same**

Scope answers:

> Where can this variable be accessed?

Hoisting answers:

> How are declarations handled before execution?

They are related, but they are not the same concept.

---

## 35. Practical Example: Avoiding Hoisting Confusion

Instead of relying on hoisting:

```js
console.log(name);

var name = "Alice";
```

Prefer declaring variables before using them:

```js
var name = "Alice";

console.log(name);
```

With modern JavaScript, prefer:

```js
const name = "Alice";

console.log(name);
```

or:

```js
let score = 0;

score += 10;

console.log(score);
```

This makes the code easier to read and reason about.

---

## 36. Practical Example: Function Declaration

Function declarations can intentionally be used before their source location:

```js
startApplication();

function startApplication() {
  console.log("Application started");
}
```

Although valid, many developers still prefer organizing code so the definition appears before its use when that improves readability.

---

## 37. Practical Example: `var` Hoisting

```js
function calculateTotal() {
  console.log(total);

  var total = 500;

  return total;
}

console.log(calculateTotal());
```

Output:

```text
undefined
500
500
```

The local `total` declaration is hoisted inside the function.

---

## 38. Practical Example: TDZ

```js
function calculate() {
  console.log(amount);

  let amount = 500;
}

calculate();
```

This produces:

```text
ReferenceError
```

because `amount` is accessed while it is in the Temporal Dead Zone.

---

## 39. Practical Example: Function Declaration vs Expression

```js
// Function declaration
sayHello();

function sayHello() {
  console.log("Hello");
}
```

Works.

```js
// Function expression
sayGoodbye();

const sayGoodbye = function () {
  console.log("Goodbye");
};
```

Produces:

```text
ReferenceError
```

---

## 40. Practical Example: Arrow Function

```js
calculate();

const calculate = () => {
  return 10 + 20;
};
```

Result:

```text
ReferenceError
```

The `calculate` binding is in the Temporal Dead Zone until its declaration is evaluated.

---

## 41. A Simple Hoisting Visualization

Consider:

```js
console.log(a);

var a = 10;

function test() {
  console.log("test");
}
```

A simplified setup phase can be visualized as:

```text
Global Scope
│
├── a    → undefined
│
└── test → function
```

Then execution begins:

```text
console.log(a)
      ↓
undefined

a = 10
      ↓
a now contains 10
```

---

## 42. Hoisting Cheat Sheet

```text
var
├── Declaration hoisted
├── Initialized with undefined
├── Can access before declaration
└── Function-scoped

let
├── Binding created during setup
├── Not initialized before declaration
├── TDZ
└── Block-scoped

const
├── Binding created during setup
├── Not initialized before declaration
├── TDZ
├── Block-scoped
└── Must be initialized at declaration

Function Declaration
├── Hoisted
└── Can generally be called before declaration

Function Expression
├── Depends on variable declaration
└── Function value is assigned during execution

Arrow Function
├── Function expression
└── Depends on variable declaration
```

---

## 43. Key Takeaways

- Hoisting describes how JavaScript handles declarations before execution.
- JavaScript does not literally move source code to the top.
- var declarations are hoisted and initialized with undefined.
- let and const bindings are created but remain uninitialized until their declarations are evaluated.
- Accessing let or const during the Temporal Dead Zone causes a ReferenceError.
- Function declarations are hoisted and can generally be called before their declaration.
- Function expressions are not available before their assignment.
- Arrow functions are function expressions.
- Hoisting happens within the relevant scope.
- var is function-scoped.
- let and const are block-scoped.
- Declaration and initialization are different concepts.
- Scope and hoisting are related but different concepts.
- Understanding hoisting makes many JavaScript undefined, ReferenceError, and TypeError situations easier to explain.

---

## 44. Interview Questions

**Beginner**

1. What is hoisting in JavaScript?
2. Does JavaScript actually move declarations to the top?
3. What happens when a `var` variable is accessed before its declaration?
4. Are `let` and `const` hoisted?
5. What is the difference between declaration and initialization?
6. What is the Temporal Dead Zone?
7. What happens when you access a `let` variable inside the TDZ?
8. What happens when you access a `const` variable inside the TDZ?

**Intermediate**

9. Why does `var` return `undefined` before declaration?
10. Why does `let` produce a `ReferenceError` before declaration?
11. Why can a function declaration be called before it is declared?
12. Why does a function expression behave differently from a function declaration?
13. How are arrow functions affected by hoisting?
14. What is the difference between `var`, `let`, and `const` hoisting?
15. How does hoisting work inside a function?
16. How does hoisting interact with scope?
17. What is the Temporal Dead Zone and why does JavaScript have it?
18. What is the difference between a function declaration and a function expression?
19. Why does this code produce `undefined`?

```js
console.log(value);

var value = 10;
```

20. Why does this code produce a `ReferenceError`?

```js
console.log(value);

let value = 10;
```

**Advanced**

21. Explain hoisting using the creation/setup and execution phases.
22. What happens to a `var` binding during the setup phase?
23. What happens to a `let` or `const` binding before its declaration is evaluated?
24. How does function declaration hoisting differ from variable hoisting?
25. How can hoisting interact with shadowing?
26. How does hoisting behave in nested scopes?
27. What is the difference between hoisting and lexical scope?
28. Why is saying "`let` and `const` are not hoisted" considered an oversimplification?

---

## 45. Practice

Try solving these questions without looking back at the explanations.

**Exercise 1**

What will this code output?

```js
console.log(name);

var name = "Alice";
```

**Exercise 2**

What will happen?

```js
console.log(age);

let age = 25;
```

Explain why.

**Exercise 3**

What will happen?

```js
console.log(score);

const score = 100;
```

**Exercise 4**

What will this code output?

```js
greet();

function greet() {
  console.log("Hello");
}
```

Explain why.

**Exercise 5**

What will happen?

```js
greet();

var greet = function () {
  console.log("Hello");
};
```

Explain the difference from a function declaration.

**Exercise 6**

What will happen?

```js
greet();

const greet = () => {
  console.log("Hello");
};
```

**Exercise 7**

Predict the output:

```js
var value = "global";

function test() {
  console.log(value);

  var value = "local";

  console.log(value);
}

test();
```

Explain why the first output is not `"global"`.

**Exercise 8**

Predict the output:

```js
console.log(a);
console.log(b);

var a = 10;
let b = 20;
```

**Exercise 9**

Identify which variables are affected by the Temporal Dead Zone:

```js
console.log(a);
console.log(b);
console.log(c);

var a = 10;
let b = 20;
const c = 30;
```

**Exercise 10**

Predict the output:

```js
function test() {
  console.log(value);

  var value = 10;

  console.log(value);
}

test();
```

**Exercise 11**

Explain why this works:

```js
start();

function start() {
  console.log("Started");
}
```

but this does not:

```js
start();

const start = function () {
  console.log("Started");
};
```

**Exercise 12**

Predict the output:

```js
{
  console.log(value);

  let value = 50;
}
```

Explain the error.

**Exercise 13**

Compare the behavior of these three examples:

```js
console.log(a);
var a = 10;
```

```js
console.log(b);
let b = 20;
```

```js
console.log(c);
const c = 30;
```

Explain why they behave differently.

**Exercise 14**

Rewrite this code so it does not rely on hoisting:

```js
console.log(name);

var name = "Alice";
```

**Exercise 15**

Create your own examples demonstrating:

1. `var` hoisting
2. `let` and TDZ
3. `const` and TDZ
4. Function declaration hoisting
5. Function expression behavior
6. Arrow function behavior
7. Hoisting inside a function
8. Hoisting with nested scopes

## Final Summary

Hoisting becomes much easier when you remember three ideas:

```md
1. Declarations are processed before execution.
2. `var` is initialized as undefined.
3. `let` and `const` remain inaccessible in the Temporal Dead Zone.
```

And for functions:

```text
Function declaration
        ↓
Available before its declaration

Function expression
        ↓
Depends on the variable declaration/assignment

Arrow function
        ↓
Function expression behavior
```

The most important mental model is:

```text
Declaration ≠ Initialization

Hoisting prepares declarations.
Execution performs assignments and runs statements.
```
