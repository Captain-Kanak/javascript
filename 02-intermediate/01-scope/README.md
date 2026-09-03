# JavaScript Scope

Scope is one of the fundamental concepts in JavaScript.

It determines **where a variable or function can be accessed in a program**.

Understanding scope is essential for writing predictable JavaScript code and for understanding concepts such as:

- Local variables
- Global variables
- Block scope
- Function scope
- Lexical scope
- Scope chains
- Nested scopes
- `var`, `let`, and `const`
- Closures
- Modules

---

## 1. What Is Scope?

**Scope** is the region of a program where a variable or function is accessible.

For example:

```js
const name = "Alice";

console.log(name);
```

The variable `name` is accessible where its scope allows it to be accessed.

Consider:

```js
function greet() {
  const message = "Hello";

  console.log(message);
}

greet();
```

The variable `message` is accessible inside the `greet` function.

But this causes an error:

```js
function greet() {
  const message = "Hello";
}

console.log(message);
```

Why?

Because `message` belongs to the scope created by the function.

---

## 2. Why Is Scope Important?

Scope helps JavaScript control:

- Where variables can be accessed
- Where variables cannot be accessed
- Which variables are available to a function
- How nested code can access outer variables
- How different parts of a program can use the same variable names safely

For example:

```js
const name = "Alice";

function greet() {
  const name = "Bob";

  console.log(name);
}

greet();

console.log(name);
```

Output:

```text
Bob
Alice
```

The two `name` variables belong to different scopes.

---

## 3. Types of Scope in JavaScript

The major scope concepts you should understand are:

- Global scope
- Function scope
- Block scope
- Lexical scope
- Module scope

These scopes determine variable accessibility.

---

## 4. Global Scope

A variable declared outside functions and blocks may belong to the global scope.

Example:

```js
const appName = "My Application";

console.log(appName);
```

`appName` is available from code that can access the global scope.

---

## 5. Global Variables

A variable declared in the global scope is commonly called a **global variable**.

Example:

```js
const siteName = "Example";

function showSiteName() {
  console.log(siteName);
}

showSiteName();
```

Output:

```text
Example
```

The function can access `siteName` because the variable exists in an outer scope.

---

## 6. Avoid Unnecessary Global Variables

Although global variables can be useful in some situations, creating too many global variables can make programs difficult to manage.

For example:

```js
let user;
let product;
let order;
let cart;
let settings;
```

If many parts of an application can modify these variables, it becomes harder to understand where a value came from or why it changed.

Prefer narrower scopes whenever possible.

---

## 7. Function Scope

A function creates its own scope.

Example:

```js
function calculate() {
  const result = 100;

  console.log(result);
}

calculate();
```

`result` is accessible inside the function.

It is not accessible outside:

```js
function calculate() {
  const result = 100;
}

console.log(result);
```

This causes a `ReferenceError`.

---

## 8. Function Parameters Are Function-Scoped

Function parameters are available inside the function.

```js
function greet(name) {
  console.log(name);
}

greet("Alice");
```

The parameter `name` belongs to the function's scope.

It cannot be accessed outside the function:

```js
function greet(name) {
  console.log(name);
}

console.log(name);
```

---

## 9. Block Scope

A block is code surrounded by curly braces `{}`.

For example:

```js
{
  const message = "Hello";

  console.log(message);
}
```

The block creates a scope for `let` and `const`.

```js
{
  const message = "Hello";
}

console.log(message);
```

This causes a `ReferenceError`.

---

## 10. What Creates a Block?

Common examples of blocks include:

`if`

```js
if (true) {
  const message = "Hello";
}
```

`for`

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

`while`

```js
while (false) {
  const value = 10;
}
```

**Standalone block**

```js
{
  const value = 10;
}
```

---

## 11. `let` and Block Scope

Variables declared with `let` are block-scoped.

```js
if (true) {
  let message = "Hello";

  console.log(message);
}
```

But:

```js
if (true) {
  let message = "Hello";
}

console.log(message);
```

The second example cannot access `message`.

---

## 12. `const` and Block Scope

`const` is also block-scoped.

```js
if (true) {
  const age = 25;

  console.log(age);
}
```

Outside the block:

```js
if (true) {
  const age = 25;
}

console.log(age);
```

`age` is not accessible.

---

## 13. `var` and Function Scope

`var` behaves differently.

`var` is **function-scoped**, not block-scoped.

Example:

```js
if (true) {
  var message = "Hello";
}

console.log(message);
```

Output:

```text
Hello
```

The `if` block does not create a separate `var` scope.

However, a function does:

```js
function test() {
  var message = "Hello";

  console.log(message);
}

test();
```

Outside the function:

```js
console.log(message);
```

`message` is not accessible.

---

## 14. `var` vs `let` vs `const` Scope

| Keyword | Function Scope | Block Scope |
| ------- | -------------: | ----------: |
| `var`   |            Yes |          No |
| `let`   |            Yes |         Yes |
| `const` |            Yes |         Yes |

This difference is one of the important reasons modern JavaScript code generally prefers `let` and `const` over `var`.

---

## 15. Nested Scope

Scopes can exist inside other scopes.

Example:

```js
const outer = "Outer";

function test() {
  const middle = "Middle";

  if (true) {
    const inner = "Inner";

    console.log(outer);
    console.log(middle);
    console.log(inner);
  }
}

test();
```

Output:

```text
Outer
Middle
Inner
```

The innermost scope can access variables from its outer scopes.

---

## 16. Outer Scope Access

Inner scopes can generally access variables from outer scopes.

```js
const name = "Alice";

function greet() {
  console.log(name);
}

greet();
```

Output:

```text
Alice
```

The function can access `name` because `name` exists in an outer scope.

---

## 17. Outer Scopes Cannot Access Inner Variables

The relationship does not work in the opposite direction.

```js
function greet() {
  const message = "Hello";
}

console.log(message);
```

The outer code cannot access the function's local variable.

Think of scope as an access boundary.

---

## 18. Scope Chain

When JavaScript tries to find a variable, it searches the current scope first.

If it cannot find the variable, it looks in the outer scope.

It continues searching outward until it finds the variable or reaches the outermost scope.

This is called the **scope chain**.

Example:

```js
const a = 10;

function outer() {
  const b = 20;

  function inner() {
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
  }

  inner();
}

outer();
```

The `inner` function can access:

```text
c → current scope
b → outer scope
a → outer/global scope
```

---

## 19. Variable Lookup

Consider:

```js
const x = "global";

function outer() {
  const x = "outer";

  function inner() {
    const x = "inner";

    console.log(x);
  }

  inner();
}

outer();
```

Output:

```text
inner
```

JavaScript finds `x` in the current scope first.

It does not need to continue searching the outer scopes.

---

## 20. Shadowing

When an inner scope declares a variable with the same name as a variable in an outer scope, the inner variable shadows the outer variable.

Example:

```js
const name = "Alice";

function greet() {
  const name = "Bob";

  console.log(name);
}

greet();

console.log(name);
```

Output:

```text
Bob
Alice
```

The inner `name` shadows the outer `name` inside the function.

---

## 21. Block Shadowing

Shadowing can also happen with blocks.

```js
let value = "outer";

{
  let value = "inner";

  console.log(value);
}

console.log(value);
```

Output:

```text
inner
outer
```

The inner variable exists only inside the block.

---

## 22. Scope and `var`

Because `var` is function-scoped, block shadowing behaves differently.

Example:

```js
var value = "outer";

{
  var value = "inner";

  console.log(value);
}

console.log(value);
```

Output:

```text
inner
inner
```

The block does not create a separate scope for `var`.

---

## 23. Scope and Loops

`let` is block-scoped, which is especially important in loops.

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

After the loop:

```js
console.log(i);
```

`i` is not accessible.

This prevents the loop variable from leaking into the surrounding scope.

---

## 24. Scope and `const` in Loops

`const` can also be block-scoped.

For example:

```js
const numbers = [10, 20, 30];

for (const number of numbers) {
  console.log(number);
}
```

The `number` variable belongs to the loop's scope.

---

## 25. Lexical Scope

JavaScript uses **lexical scoping**.

This means the accessibility of variables is determined by where functions and blocks are **written in the source code**, not where they are called.

Example:

```js
const name = "Alice";

function greet() {
  console.log(name);
}

function execute() {
  const name = "Bob";

  greet();
}

execute();
```

Output:

```text
Alice
```

Why?

Because `greet` was defined in the scope where the global `name` is visible.

Calling `greet()` from `execute()` does not change where `greet` looks for variables.

---

## 26. Lexical Scope Example

Consider:

```js
const value = "global";

function outer() {
  const value = "outer";

  function inner() {
    console.log(value);
  }

  inner();
}

outer();
```

Output:

```text
outer
```

`inner` was defined inside `outer`, so it can access `outer`'s variables.

This relationship is determined by the code's structure.

---

## 27. Scope Is Determined by Where Code Is Written

Compare:

```js
const message = "global";

function first() {
  const message = "first";

  second();
}

function second() {
  console.log(message);
}

first();
```

Output:

```text
global
```

Even though `second()` is called from `first()`, `second()` does not use `first()`'s local `message`.

Its lexical environment is determined by where `second` was defined.

---

## 28. Scope and Functions

Functions create their own local scope.

```js
const globalValue = 10;

function calculate() {
  const localValue = 20;

  console.log(globalValue);
  console.log(localValue);
}

calculate();
```

The function can access both:

- Its own local variables
- Accessible variables from outer scopes

---

## 29. Scope and Arrow Functions

Arrow functions also participate in lexical scoping.

```js
const name = "Alice";

const greet = () => {
  console.log(name);
};

greet();
```

Output:

```text
Alice
```

Arrow functions do not create a special new `this` binding, but their variable scope still follows JavaScript's lexical scoping rules.

The detailed behavior of `this` will be covered separately.

---

## 30. Module Scope

JavaScript modules have their own module scope.

For example:

```js
const secret = "hidden";

export function getSecret() {
  return secret;
}
```

The variable `secret` belongs to the module unless it is explicitly exported.

Modules provide a way to organize code and avoid unnecessary global variables.

The JavaScript module system will be covered in its dedicated topic.

---

## 31. Scope in Browser JavaScript

In browser environments, global declarations and global object properties have specific rules.

For example:

```js
var name = "Alice";
```

and:

```js
let age = 25;
```

do not behave identically with respect to the global object.

This is one reason understanding the distinction between global scope and the global object is important.

The browser environment and global object will be explored more deeply when runtime and modules are discussed.

---

## 32. Scope and `var` Hoisting

`var` declarations are function-scoped and are also hoisted.

Example:

```js
function test() {
  console.log(value);

  var value = 10;
}

test();
```

This produces:

```text
undefined
```

This behavior involves **hoisting**, which is covered in detail in the dedicated hoisting topic.

For now, remember:

- `var` is function-scoped.
- `let` and `const` are block-scoped.

---

## 33. Scope Does Not Mean Lifetime

Scope and lifetime are related but different concepts.

**Scope**

Answers:

> Where can this variable be accessed?

**Lifetime**

Answers:

> How long does this variable/value remain available?

Do not treat these terms as synonyms.

JavaScript's execution contexts, garbage collection, and closures make lifetime more nuanced than simply saying "the variable exists until its scope ends."

---

## 34. Scope and Closures

A function can retain access to variables from its surrounding lexical scope.

Example:

```js
function createCounter() {
  let count = 0;

  return function () {
    count++;

    return count;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
```

Output:

```text
1
2
```

The returned function continues to access `count`.

This behavior is called a **closure**.

Closures are an important topic and will be covered separately in detail.

For now, remember:

> A closure allows a function to retain access to variables from its lexical environment.

---

## 35. Practical Example: Shopping Cart

Scope is useful for keeping temporary values local.

```js
function calculateTotal(price, quantity) {
  const subtotal = price * quantity;

  return subtotal;
}

console.log(calculateTotal(100, 3));
```

`subtotal` does not need to exist outside the function.

Keeping it local makes the code easier to understand and prevents unnecessary global variables.

---

## 36. Practical Example: Authentication

Consider a function that validates a user:

```js
function authenticateUser(username, password) {
  const isValid = username === "admin" && password === "secret";

  return isValid;
}
```

The `isValid` variable only needs to exist during the function's work.

It does not need to be globally accessible.

---

## 37. Practical Example: Loop Variables

```js
const products = ["Laptop", "Mouse", "Keyboard"];

for (const product of products) {
  console.log(product);
}
```

The `product` variable is scoped to the loop.

This keeps temporary iteration variables from unnecessarily becoming available outside the loop.

---

## 38. Practical Example: Configuration

A function can have local configuration values:

```js
function createUser(name) {
  const defaultRole = "user";

  return {
    name,
    role: defaultRole,
  };
}

console.log(createUser("Alice"));
```

`defaultRole` only exists where it is needed.

---

## 39. Common Mistakes

**Mistake 1: Assuming All Variables Are Global**

```js
function test() {
  const value = 10;
}

console.log(value);
```

value is local to the function.

**Mistake 2: Assuming Blocks Do Not Create Scope**

With `let`:

```js
{
  let value = 10;
}

console.log(value);
```

This does not work because `let` is block-scoped.

**Mistake 3: Forgetting That `var` Is Function-Scoped**

```js
if (true) {
  var value = 10;
}

console.log(value);
```

This works because the `if` block does not create a separate `var` scope.

**Mistake 4: Confusing Scope With Hoisting**

Scope answers:

> Where can a variable be accessed?

Hoisting answers questions about how declarations are processed before execution.

They are related concepts but are not the same thing.

**Mistake 5: Assuming Function Calls Change Lexical Scope**

```js
const value = "global";

function show() {
  console.log(value);
}

function test() {
  const value = "local";

  show();
}

test();
```

Output:

```text
global
```

`show()` uses its lexical environment based on where it was defined.

**Mistake 6: Creating Too Many Global Variables**

Avoid putting application data into global scope unnecessarily.

Prefer local variables and appropriate module boundaries.

---

## 40. Scope Rules to Remember

**Global Scope**

Accessible from code that can reach the global scope.

**Function Scope**

Created by functions.

**Block Scope**

Created by blocks for `let` and `const`.

`var`

Function-scoped.

`let`

Block-scoped.

`const`

Block-scoped.

**Lexical Scope**

Determined by where code is written.

**Scope Chain**

JavaScript searches from the current scope outward.

**Shadowing**

An inner declaration can hide an outer declaration with the same name.

---

## 41. Scope Visualization

Consider:

```js
const a = 1;

function outer() {
  const b = 2;

  function inner() {
    const c = 3;

    console.log(a);
    console.log(b);
    console.log(c);
  }

  inner();
}

outer();
```

The scope relationship can be visualized as:

```text
Global Scope
│
├── a
│
└── outer Function Scope
    │
    ├── b
    │
    └── inner Function Scope
        │
        └── c
```

The `inner` scope can access:

```text
c → current scope
b → outer scope
a → global scope
```

But the global scope cannot access `b` or `c`.

---

## 42. Scope and Encapsulation

Scope can help hide implementation details.

For example:

```js
function createUser() {
  const secret = "hidden";

  return {
    getSecret() {
      return secret;
    },
  };
}
```

The `secret` variable is not directly accessible from outside.

This idea becomes especially powerful when combined with closures and modules.

---

## 43. Scope vs Context

Do not confuse scope with execution context.

**Scope**

Concerned primarily with variable accessibility and lexical relationships.

**Execution Context**

Represents the environment in which JavaScript executes code and includes information needed during execution.

They are related but not interchangeable terms.

Execution contexts and the JavaScript execution model will be explored separately.

---

## 44. Key Takeaways

- Scope determines where variables and functions can be accessed.
- JavaScript has global, function, block, lexical, and module scope concepts.
- Functions create function scopes.
- Blocks create scopes for `let` and `const`.
- `var` is function-scoped.
- `let` is block-scoped.
- `const` is block-scoped.
- Inner scopes can generally access variables from outer scopes.
- Outer scopes cannot directly access variables declared in inner scopes.
- JavaScript uses lexical scoping.
- Lexical scope is determined by where code is written.
- JavaScript uses a scope chain to resolve variables.
- Variable lookup starts in the current scope and moves outward.
- An inner variable can shadow an outer variable.
- Scope helps prevent unnecessary global variables.
- Object and function behavior can involve scope, but scope itself is separate from object properties.
- Scope and hoisting are related but different concepts.
- Scope and execution context are related but not the same concept.
- Closures depend on lexical scoping and will be studied separately.
- Modules create their own scope and help organize JavaScript applications.

---

## 45. Interview Questions

**Basic**

1. What is scope in JavaScript?
2. Why is scope important?
3. What is global scope?
4. What is function scope?
5. What is block scope?
6. Which JavaScript keywords are block-scoped?
7. Which JavaScript keyword is function-scoped?
8. What is the difference between `var`, `let`, and `const` in terms of scope?

**Scope Chain**

9. What is the scope chain?
10. How does JavaScript look for a variable?
11. Can an inner scope access variables from an outer scope?
12. Can an outer scope access variables from an inner scope?
13. What happens if a variable cannot be found in the scope chain?

**Lexical Scope**

14. What is lexical scope?
15. Is JavaScript lexically scoped or dynamically scoped?
16. Does calling a function from another function change its lexical scope?
17. Explain lexical scope with an example.

**Shadowing**

18. What is variable shadowing?
19. Can `let` variables shadow variables in an outer scope?
20. How does `var` behave differently from `let` and `const` with block scope?

**Practical**

21. What is the output?

```js
let name = "Alice";

function test() {
  let name = "Bob";

  console.log(name);
}

test();

console.log(name);
```

22. What is the output?

```js
const value = "global";

function first() {
  const value = "first";

  function second() {
    console.log(value);
  }

  second();
}

first();
```

23. What is the output?

```js
const value = "global";

function show() {
  console.log(value);
}

function test() {
  const value = "local";

  show();
}

test();
```

24. What is the output?

```js
if (true) {
  let value = 10;
}

console.log(value);
```

25. What is the output?

```js
if (true) {
  var value = 10;
}

console.log(value);
```

26. What is the output?

```js
const a = 10;

function outer() {
  const b = 20;

  function inner() {
    const c = 30;

    console.log(a, b, c);
  }

  inner();
}

outer();
```

27. Explain why the following code behaves differently for `var` and `let`:

```js
if (true) {
  var a = 10;
  let b = 20;
}

console.log(a);
console.log(b);
```

28. What is shadowing? Identify the shadowed variable:

```js
const value = "outer";

function test() {
  const value = "inner";

  console.log(value);
}

test();
```

---

## 46. Practice

Try solving these exercises yourself.

**Exercise 1 — Global Scope**

Create a global variable and access it from a function.

**Exercise 2 — Function Scope**

Create a variable inside a function.

Try accessing it:

1. Inside the function
2. Outside the function

Observe the result.

**Exercise 3 — Block Scope**

Create a `let` variable inside an `if` block.

Try accessing it outside the block.

**Exercise 4 — `var` Scope**

Repeat Exercise 3 using `var`.

Observe the difference.

**Exercise 5 — `const` Scope**

Create a `const` variable inside a block.

Try accessing it outside the block.

**Exercise 6 — Nested Scope**

Create three nested scopes.

Declare one variable in each scope.

Determine which variables can be accessed from each level.

**Exercise 7 — Scope Chain**

Create:

```text
Global
  ↓
outer()
  ↓
inner()
```

Declare one variable at each level.

From `inner()`, access all three variables.

**Exercise 8 — Reverse Access**

Using the previous example, try accessing the `inner()` variable from the global scope.

Observe what happens.

**Exercise 9 — Shadowing**

Create a variable named `value` in the global scope.

Create another `value` inside a function.

Print both values from their respective scopes.

**Exercise 10 — Block Shadowing**

Create a variable outside a block and another variable with the same name inside the block.

Print the value inside and outside the block.

**Exercise 11 — `var` vs `let`**

Create the same example using:

- `var`
- `let`

Observe how block scope changes the result.

**Exercise 12 — Loop Scope**

Create a loop using `let`.

Try accessing the loop variable after the loop finishes.

**Exercise 13 — Function Parameter Scope**

Create a function that accepts:

```text
name
age
```

Try using these parameters inside and outside the function.

**Exercise 14 — Lexical Scope**

Create a global variable.

Create a function that reads the variable.

Call that function from another function that declares a variable with the same name.

Determine which value is used and explain why.

**Exercise 15 — Scope Chain Challenge**

Create:

```text
globalValue
outerValue
middleValue
innerValue
```

using nested functions.

From the deepest function, print all four values.

**Exercise 16 — Identify the Scope**

For each variable, identify its scope:

```js
const a = 1;

function test() {
  const b = 2;

  if (true) {
    const c = 3;
  }

  var d = 4;
}
```

Determine where `a`, `b`, `c`, and `d` are accessible.

**Exercise 17 — Scope Debugging**

Given:

```js
let message = "Hello";

function test() {
  let message = "Hi";

  if (true) {
    let message = "Welcome";

    console.log(message);
  }

  console.log(message);
}

test();

console.log(message);
```

Predict the output before running it.

Explain why each output is different.

**Exercise 18 — Scope and Functions**

Create a function that contains several local variables.

Return only the value that should be exposed to the outside.

Keep the other variables inaccessible from outside the function.

**Exercise 19 — Practical Cart Example**

Create a function:

```text
calculateCartTotal()
```

Inside the function:

- Create a local subtotal.
- Create a local tax amount.
- Create a local final total.
- Return the final total.

Make sure none of these variables are unnecessarily global.

**Exercise 20 — Practical Authentication Example**

Create a function that accepts a username and password.

Inside the function:

- Create a local validation variable.
- Return whether authentication succeeded.
- Keep the validation variable inaccessible from outside.

**Exercise 21 — Nested Scope Challenge**

Create an outer function with:

```text
username
```

Create an inner function with:

```text
role
```

The inner function should be able to access both.

The outer function should not directly access `role`.

**Exercise 22 — Scope Chain Prediction**

Without running the code, predict the output:

```js
const value = "A";

function first() {
  const value = "B";

  function second() {
    const value = "C";

    console.log(value);
  }

  second();
}

first();
```

Then explain the variable lookup process.

**Exercise 23 — Lexical Scope Challenge**

Predict the output:

```js
const value = "global";

function showValue() {
  console.log(value);
}

function test() {
  const value = "local";

  showValue();
}

test();
```

Explain why the result is what it is.

**Exercise 24 — Scope Design**

Create a small program where:

- Global scope contains only necessary application-level data.
- Functions contain their own temporary variables.
- Blocks contain temporary block-specific variables.

Focus on designing clean scopes rather than simply making the program work.

**Exercise 25 — Scope Analysis**

Take one of your previous JavaScript programs.

Identify:

- Global variables
- Function-scoped variables
- Block-scoped variables
- Shadowed variables
- Variables accessed through the scope chain

Then refactor the program to reduce unnecessary global variables.

---

## Final Goal

Before moving to the next topic, make sure you can confidently explain:

- What scope means
- Global scope
- Function scope
- Block scope
- `var` function scope
- `let` block scope
- `const` block scope
- Nested scopes
- Scope chains
- Lexical scope
- Variable lookup
- Shadowing
- Scope and functions
- Scope and loops
- Scope and modules
- The basic relationship between scope and closures
- The difference between scope, hoisting, and execution context

The goal is not just to memorize definitions.

> You should be able to look at a JavaScript program and determine **where every variable can and cannot be accessed, and why**.
