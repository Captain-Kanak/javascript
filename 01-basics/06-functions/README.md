# JavaScript Functions

Functions are one of the most important building blocks of JavaScript.

A function is a reusable block of code designed to perform a specific task.

Instead of writing the same code repeatedly, we can place that code inside a function and execute it whenever we need it.

For example:

```js
function greet(userName) {
  console.log(`Hello! ${userName}.`);
}

greet("Alex");
greet("Jhon");
greet("Jack");
```

Output:

```text
Hello! Alex.
Hello! Jhon.
Hello! Jack.
```

The function allows us to define the behavior once and reuse it multiple times.

---

## 1. Why Functions Are Important

Without functions, large programs would contain a lot of repeated code.

For example:

```js
console.log("Welcome to the application");
console.log("Welcome to the application");
console.log("Welcome to the application");
```

A function allows us to reuse the same logic:

```js
function showWelcomeMessage() {
  console.log("Welcome to the application");
}

showWelcomeMessage();
showWelcomeMessage();
showWelcomeMessage();
```

Functions help us:

- Reuse code
- Avoid repetition
- Organize code
- Break large problems into smaller problems
- Improve readability
- Make code easier to test and maintain

---

## 2. What Is a Function?

A function is a reusable block of code that can be called to perform a particular task.

Basic example:

```js
function sayHello() {
  console.log("Hello, JavaScript!");
}
```

The function has been **defined**, but the code inside it has not yet executed.

To execute the function, we **call** it:

```js
sayHello();
```

Output:

```text
Hello, JavaScript!
```

---

## 3. Function Declaration

A function declaration uses the `function` keyword.

Syntax

```js
function functionName() {
  // function body
}
```

Example:

```js
function greet() {
  console.log("Hello!");
}
```

Here:

- `function` → keyword
- `greet` → function name
- `()` → parameter list
- `{}` → function body

---

## 4. Calling a Function

Defining a function does not automatically execute it.

You need to call it.

```js
function greet() {
  console.log("Hello!");
}

greet();
```

You can call a function multiple times:

```js
function greet() {
  console.log("Hello!");
}

greet();
greet();
greet();
```

Each call executes the function body.

---

## 5. Function Parameters

Parameters allow a function to receive data.

```js
function greet(name) {
  console.log("Hello, " + name);
}

greet("Alice");
```

Output:

```text
Hello, Alice
```

Here:

```js
name;
```

is a `parameter`.

The value passed during the function call is called an `argument`.

```js
greet("Alice");
```

Here:

```text
name    → parameter
"Alice" → argument
```

---

## 6. Multiple Parameters

A function can have multiple parameters.

```js
function add(a, b) {
  console.log(a + b);
}

add(10, 20);
```

Output:

```text
30
```

The function receives:

```text
a = 10
b = 20
```

Parameters are separated by commas.

---

## 7. Arguments

Arguments are the actual values passed to a function when it is called.

```js
function introduce(name, age) {
  console.log(name);
  console.log(age);
}

introduce("Alice", 25);
```

Here:

```text
name → "Alice"
age  → 25
```

The function can then use those values.

---

## 8. Parameters vs Arguments

This distinction is commonly asked in interviews.

**Parameters**

Parameters are variables listed in the function definition.

```js
function add(a, b) {
  // a and b are parameters
}
```

**Arguments**

Arguments are values passed to the function when calling it.

```js
add(10, 20);
// 10 and 20 are arguments
```

A simple rule:

> Parameters receive values; arguments provide values.

---

## 9. Return Statement

A function can return a value using `return`.

```js
function add(a, b) {
  return a + b;
}

const result = add(10, 20);

console.log(result);
```

Output:

```text
30
```

The returned value can be stored in a variable.

---

## 10. return Stops Function Execution

When JavaScript reaches a `return` statement, the function immediately stops executing.

```js
function test() {
  console.log("Before return");

  return;

  console.log("After return");
}

test();
```

Output:

```text
Before return
```

The statement after `return` is not executed.

---

## 11. Returning Different Values

A function can return different types of values.

**String**

```js
function getMessage() {
  return "Hello";
}
```

**Number**

```js
function getNumber() {
  return 100;
}
```

**Boolean**

```js
function isAdult(age) {
  return age >= 18;
}
```

**Object**

```js
function getUser() {
  return {
    name: "Alice",
    age: 25,
  };
}
```

A function can return any JavaScript value.

---

## 12. `return` vs `console.log`

These two are not the same.

`console.log()` displays a value:

```js
function add(a, b) {
  console.log(a + b);
}
```

`return` sends a value back to the caller:

```js
function add(a, b) {
  return a + b;
}
```

This allows the returned value to be reused:

```js
const result = add(10, 20);

console.log(result * 2);
```

Output:

```text
60
```

---

## 13. Functions Without `return`

A function does not have to return a value.

```js
function greet() {
  console.log("Hello!");
}

greet();
```

If a function does not explicitly return a value, its return value is `undefined`.

```js
function greet() {
  console.log("Hello!");
}

const result = greet();

console.log(result);
```

Output:

```text
Hello!
undefined
```

---

## 14. Default Parameters

A parameter can have a default value.

```js
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();
```

Output:

```text
Hello, Guest
```

If an argument is provided, it replaces the default value:

```js
greet("Alice");
```

Output:

```text
Hello, Alice
```

Default parameters are useful when a value is optional.

---

## 15. Function Expression

A function can be stored inside a variable.

```js
const greet = function () {
  console.log("Hello!");
};

greet();
```

This is called a **function expression**.

The function itself is assigned to the variable:

```js
greet;
```

The variable can then be used to call the function.

---

## 16. Named Function Expression

A function expression can also have its own name.

```js
const greet = function sayHello() {
  console.log("Hello!");
};

greet();
```

Here:

- `greet` is the variable holding the function.
- `sayHello` is the function's internal name.

Named function expressions can be useful for debugging and recursive functions.

---

## 17. Function Declaration vs Function Expression

**Function Declaration**

```js
function add(a, b) {
  return a + b;
}
```

**Function Expression**

```js
const add = function (a, b) {
  return a + b;
};
```

Both create functions, but they have different syntax and different hoisting behavior.

Function declarations are hoisted in a way that allows them to be called before their declaration.

```js
greet();

function greet() {
  console.log("Hello");
}
```

This works.

A function expression assigned to a `const` variable cannot be called before the initialization:

```js
greet();

const greet = function () {
  console.log("Hello");
};
```

This results in an error.

> The deeper details of hoisting and the temporal dead zone belong to the dedicated **Hoisting** and **Scope** topics.

---

## 18. Arrow Functions

Arrow functions provide a shorter syntax for writing functions.

Traditional function:

```js
function add(a, b) {
  return a + b;
}
```

Arrow function:

```js
const add = (a, b) => {
  return a + b;
};
```

For simple functions, arrow functions can be even shorter.

```js
const add = (a, b) => a + b;
```

---

## 19. Arrow Function Syntax

General syntax:

```js
const functionName = (parameters) => {
  // function body
};
```

Example:

```js
const greet = (name) => {
  console.log("Hello, " + name);
};

greet("Alice");
```

---

## 20. Arrow Functions With One Parameter

When an arrow function has exactly one parameter, parentheses can be omitted.

```js
const square = (number) => {
  return number * number;
};
```

This is equivalent to:

```js
const square = (number) => {
  return number * number;
};
```

Although parentheses are optional in this case, many codebases keep them for consistency.

---

## 21. Implicit Return

An arrow function can automatically return an expression when curly braces are omitted.

```js
const square = (number) => number * number;
```

This is equivalent to:

```js
const square = (number) => {
  return number * number;
};
```

The first version is called an **implicit return**.

---

## 22. Explicit Return

When curly braces are used, you generally need an explicit `return` if you want to return a value.

```js
const add = (a, b) => {
  return a + b;
};
```

Without `return`:

```js
const add = (a, b) => {
  a + b;
};
```

The function returns `undefined`.

---

## 23. Immediately Invoked Function Expression — IIFE

An IIFE is a function expression that is executed immediately after it is created.

Example:

```js
(function () {
  console.log("Executed immediately");
})();
```

Output:

```text
Executed immediately
```

An arrow function can also be used:

```js
(() => {
  console.log("Executed immediately");
})();
```

IIFEs were historically used to create isolated scopes and avoid polluting the global scope.

Modern JavaScript modules provide better mechanisms for organizing code, so IIFEs are less common in modern applications.

---

## 24. Functions as Values

Functions are values in JavaScript.

This means a function can be:

- Stored in a variable
- Stored in an object
- Stored in an array
- Passed to another function
- Returned from another function

Example:

```js
const greet = function () {
  console.log("Hello!");
};

const anotherFunction = greet;

anotherFunction();
```

Both variables refer to the same function.

---

## 25. Passing Functions as Arguments

Because functions are values, they can be passed to other functions.

```js
function greet() {
  console.log("Hello!");
}

function executeFunction(fn) {
  fn();
}

executeFunction(greet);
```

Output:

```text
Hello!
```

Here:

```js
greet;
```

is passed as an argument.

Notice that we do not write:

```js
executeFunction(greet());
```

because `greet()` would execute immediately.

---

## 26. Callback Functions

A function passed to another function is commonly called a **callback function**.

Example:

```js
function processUser(callback) {
  console.log("Processing user...");
  callback();
}

function complete() {
  console.log("Done!");
}

processUser(complete);
```

Output:

```js
Processing user...
Done!
```

Callbacks are extremely important in JavaScript and are widely used in:

- Array methods
- Event handling
- Timers
- Asynchronous programming
- APIs
- Node.js

The deeper concept of callbacks and asynchronous execution can be explored in their dedicated topics.

---

## 27. Function Returning a Function

A function can also return another function.

```js
function createGreeting() {
  return function () {
    console.log("Hello!");
  };
}

const greet = createGreeting();

greet();
```

Output:

```text
Hello!
```

This behavior becomes particularly important when learning closures and higher-order functions.

---

## 28. Higher-Order Functions

A higher-order function is a function that:

- Takes one or more functions as arguments, or
- Returns a function.

Example:

```js
function execute(fn) {
  fn();
}

execute(() => {
  console.log("Hello!");
});
```

`execute` is a higher-order function because it receives a function.

Higher-order functions are heavily used throughout modern JavaScript.

---

## 29. Rest Parameters

A function can accept an arbitrary number of arguments using a rest parameter.

```js
function sum(...numbers) {
  console.log(numbers);
}

sum(10, 20, 30, 40);
```

Output:

```text
[10, 20, 30, 40]
```

The rest parameter collects the remaining arguments into an array.

Example:

```js
function sum(...numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}

console.log(sum(10, 20, 30));
```

Output:

```text
60
```

Rest parameters are different from the older `arguments` object and provide a cleaner modern approach.

---

## 30. The `arguments` Object

Regular functions have access to an `arguments` object containing the arguments passed to them.

```js
function showArguments() {
  console.log(arguments);
}

showArguments(10, 20, 30);
```

The `arguments` object is array-like but is not a real array.

Arrow functions do not have their own `arguments` object.

```js
const showArguments = () => {
  // arguments is not available from this arrow function's own scope
};
```

For modern code, rest parameters are usually preferred when you need to collect function arguments.

---

## 31. Function Scope

Variables declared inside a function are generally local to that function.

```js
function test() {
  const message = "Hello";

  console.log(message);
}

test();
```

The variable cannot normally be accessed outside the function:

```js
function test() {
  const message = "Hello";
}

console.log(message);
```

This produces a `ReferenceError`.

> Function scope and lexical scope will be explored more deeply in the dedicated `Scope` topic.

---

## 32. Local and Global Variables

A variable declared outside a function can be accessed inside the function.

```js
const message = "Hello";

function greet() {
  console.log(message);
}

greet();
```

A variable declared inside the function is local:

```js
function greet() {
  const message = "Hello";

  console.log(message);
}
```

The exact rules become more important when studying lexical scope, closures, and execution contexts.

---

## 33. Nested Functions

A function can be defined inside another function.

```js
function outer() {
  function inner() {
    console.log("Inside inner function");
  }

  inner();
}

outer();
```

The inner function is available within the appropriate scope of the outer function.

Nested functions are important for understanding closures later.

---

## 34. Pure Functions

A pure function produces the same output for the same input and does not cause observable side effects.

Example:

```js
function add(a, b) {
  return a + b;
}
```

For the same inputs:

```js
add(10, 20);
```

the result is always:

```text
30
```

A pure function does not modify external state.

---

## 35. Side Effects

A side effect occurs when a function interacts with or changes something outside its local calculation.

For example:

```js
let total = 0;

function addToTotal(amount) {
  total += amount;
}
```

The function modifies the external variable `total`.

Other examples of side effects include:

- Modifying external variables
- Changing objects or arrays outside the function
- Writing to files
- Making network requests
- Updating the DOM
- Logging to the console

Side effects are not automatically bad, but understanding them helps you reason about program behavior.

---

## 36. Functions and Objects

Functions can be stored as object properties.

```js
const user = {
  name: "Alice",

  greet: function () {
    console.log("Hello!");
  },
};

user.greet();
```

The function stored as an object property is commonly called a `method`.

> This distinction becomes especially important when learning `this`.

---

## 37. Methods

A method is a function associated with an object.

```js
const calculator = {
  add: function (a, b) {
    return a + b;
  },
};

console.log(calculator.add(10, 20));
```

Output:

```text
30
```

Modern JavaScript also provides shorthand method syntax:

```js
const calculator = {
  add(a, b) {
    return a + b;
  },
};
```

---

## 38. Function Naming

Good function names should describe what the function does.

Good:

```js
function calculateTotal() {}
function getUser() {}
function validateEmail() {}
function sendMessage() {}
```

Avoid vague names:

```js
function doSomething() {}
function process() {}
function test() {}
```

A good function name makes code easier to understand.

Common naming patterns include verbs such as:

- get
- set
- calculate
- create
- update
- delete
- validate
- check
- find
- fetch

---

## 39. Functions Should Generally Do One Thing

A function is easier to understand when it has a clear responsibility.

Instead of:

```js
function processUser() {
  // validate user
  // save user
  // send email
  // generate report
}
```

consider separating responsibilities:

```js
function validateUser() {}

function saveUser() {}

function sendWelcomeEmail() {}

function generateReport() {}
```

Small, focused functions are generally easier to:

- Understand
- Test
- Reuse
- Debug
- Maintain

---

## 40. Function Declaration Example

```js
function calculateArea(width, height) {
  return width * height;
}

const area = calculateArea(10, 5);

console.log(area);
```

Output:

```text
50
```

---

## 41. Practical Example: Shopping Cart

```js
function calculateItemTotal(price, quantity) {
  return price * quantity;
}

const laptopTotal = calculateItemTotal(800, 2);
const mouseTotal = calculateItemTotal(20, 3);

console.log(laptopTotal);
console.log(mouseTotal);
```

Output:

```text
1600
60
```

The same function can be reused for different products.

---

## 42. Practical Example: User Validation

```js
function isValidUser(user) {
  if (!user.name) {
    return false;
  }

  if (!user.email) {
    return false;
  }

  return true;
}

const user = {
  name: "Alice",
  email: "alice@example.com",
};

console.log(isValidUser(user));
```

Output:

```text
true
```

The function encapsulates the validation logic.

---

## 43. Practical Example: Temperature Conversion

```js
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
```

Output:

```text
32
212
```

---

## 44. Practical Example: Discount Calculation

```js
function calculateDiscount(price, discountPercentage) {
  return price * (discountPercentage / 100);
}

function calculateFinalPrice(price, discountPercentage) {
  const discount = calculateDiscount(price, discountPercentage);

  return price - discount;
}

console.log(calculateFinalPrice(1000, 20));
```

Output:

```text
800
```

Here, one function uses another function.

---

## 45. Practical Example: Callback

```js
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));
```

Output:

```text
15
50
```

The `calculate` function accepts another function as an argument.

---

## 46. Common Mistakes

**Mistake 1: Forgetting to Call the Function**

Defining:

```js
function greet() {
  console.log("Hello");
}
```

does not execute it.

You need:

```js
greet();
```

**Mistake 2: Calling Instead of Passing a Function**

Incorrect:

```js
function execute(fn) {
  fn();
}

function greet() {
  console.log("Hello");
}

execute(greet());
```

`greet()` executes immediately and its return value is passed to `execute`.

Correct:

```js
execute(greet);
```

**Mistake 3: Forgetting `return`**

Incorrect:

```js
function add(a, b) {
  a + b;
}

const result = add(10, 20);

console.log(result);
```

`result` is `undefined`.

Correct:

```js
function add(a, b) {
  return a + b;
}
```

**Mistake 4: Confusing `console.log` with `return`**

```js
function add(a, b) {
  console.log(a + b);
}
```

This displays the result but does not return it.

If another part of the program needs the result:

```js
function add(a, b) {
  return a + b;
}
```

**Mistake 5: Unexpected `undefined`**

If no value is returned:

```js
function greet() {
  console.log("Hello");
}

const result = greet();

console.log(result);
```

The result is:

```text
undefined
```

**Mistake 6: Mutating External State Unnecessarily**

Be careful with functions that modify variables outside themselves.

```js
let balance = 100;

function withdraw(amount) {
  balance -= amount;
}
```

This can be valid, but excessive external state changes can make programs harder to reason about.

**Mistake 7: Overly Large Functions**

A function containing hundreds of lines and many unrelated responsibilities is usually difficult to maintain.

Look for opportunities to break it into smaller functions with clear responsibilities.

---

## 47. Function Declaration vs Function Expression vs Arrow Function

| Feature           | Function Declaration             | Function Expression              | Arrow Function                     |
| ----------------- | -------------------------------- | -------------------------------- | ---------------------------------- |
| Syntax            | `function name() {}`             | `const fn = function () {}`      | `const fn = () => {}`              |
| Can have a name   | Yes                              | Yes                              | Variable usually provides the name |
| Hoisting behavior | Function declaration is hoisted  | Variable rules apply             | Variable rules apply               |
| `this` behavior   | Has its own `this` based on call | Has its own `this` based on call | Does not create its own `this`     |
| `arguments`       | Available                        | Available                        | No own `arguments`                 |
| Common use        | General-purpose functions        | Functions stored as values       | Callbacks and concise functions    |

The behavior of this is a separate and deeper topic.

---

## 48. Function Parameters and Arguments — Important Cases

JavaScript allows flexibility in the number of arguments passed.

For example:

```js
function add(a, b) {
  return a + b;
}

console.log(add(10));
```

Here, `b` receives `undefined`.

Therefore:

```text
10 + undefined
```

produces:

```text
NaN
```

Default parameters can help:

```js
function add(a, b = 0) {
  return a + b;
}

console.log(add(10));
```

Output:

```text
10
```

---

## 49. Functions Are First-Class Values

JavaScript treats functions as first-class values.

This means functions can be handled like other values.

For example:

```js
const greet = () => {
  console.log("Hello");
};

const functions = [greet];

functions[0]();
```

Functions can also be passed around:

```js
function execute(fn) {
  fn();
}

execute(greet);
```

And returned:

```js
function createFunction() {
  return greet;
}

const newFunction = createFunction();

newFunction();
```

This property of JavaScript is fundamental to functional programming and many modern JavaScript APIs.

---

## 50. Key Takeaways

- A function is a reusable block of code.
- Functions help organize and reuse logic.
- A function must generally be called to execute its body.
- Parameters receive values.
- Arguments provide values.
- return sends a value back to the caller.
- return also immediately stops function execution.
- A function without an explicit return value returns undefined.
- Default parameters provide fallback values.
- Functions can be declared using function declarations.
- Functions can be stored in variables using function expressions.
- Arrow functions provide concise function syntax.
- Arrow functions can use implicit returns.
- Functions are first-class values in JavaScript.
- Functions can be passed to other functions.
- Functions passed to other functions are commonly called callbacks.
- Functions that receive or return functions are higher-order functions.
- Rest parameters can collect multiple arguments.
- Regular functions have an arguments object; arrow functions do not have their own.
- Functions create their own execution and scope behavior.
- A function stored as an object property is commonly called a method.
- Pure functions produce predictable results without observable side effects.
- Functions should generally have a clear and focused responsibility.
- Understanding functions is essential for understanding callbacks, closures, asynchronous JavaScript, and many other JavaScript concepts.

---

## 51. Interview Questions

**Basic**

1. What is a function in JavaScript?
2. Why are functions important?
3. How do you declare a function?
4. How do you call a function?
5. What is the difference between defining and calling a function?
6. What are parameters?
7. What are arguments?
8. What is the difference between parameters and arguments?
9. What happens when a function is called without providing a required argument?
10. What does a function return when there is no explicit return statement?

**return**

11. What is the purpose of the return statement?
12. Does return stop function execution?
13. What is the difference between return and console.log()?
14. Can a function return an object?
15. Can a function return another function?
16. What happens when return is used without a value?

**Function Types**

17. What is a function declaration?
18. What is a function expression?
19. What is an arrow function?
20. What is the difference between a function declaration and function expression?
21. What is the difference between regular functions and arrow functions?
22. What is an implicit return?
23. When can parentheses around an arrow-function parameter be omitted?

**Parameters**

24. What are default parameters?
25. What are rest parameters?
26. What is the arguments object?
27. Do arrow functions have their own arguments object?
28. What happens when more arguments are passed than parameters?

**First-Class Functions**

29. What does it mean that functions are first-class values?
30. Can functions be stored in variables?
31. Can functions be passed as arguments?
32. Can functions return other functions?
33. What is a callback function?
34. What is a higher-order function?

**Scope**

35. Can a function access variables declared outside it?
36. Can variables declared inside a function be accessed outside it?
37. What is function scope?
38. What are nested functions?

**Practical / Output Questions**

39. What is the output?

```js
function add(a, b) {
  return a + b;
}

console.log(add(5, 10));
```

40. What is the output?

```js
function test() {
  console.log("A");
  return;
  console.log("B");
}

test();
```

41. What is the output?

```js
function greet(name = "Guest") {
  return `Hello, ${name}`;
}

console.log(greet());
console.log(greet("Alice"));
```

42. What is the difference between these two?

```js
execute(greet);
```

and

```js
execute(greet());
```

43. What is the output?

```js
const square = (number) => number \* number;

console.log(square(5));
```

44. What is wrong with this function?

```js
function add(a, b) {
  a + b;
}
```

45. Explain what happens here:

```js
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);

console.log(double(5));
```

---

## 52. Practice

Try solving these exercises yourself before looking at any solutions.

**Exercise 1 — Greeting Function**

Create a function called `greet` that prints:

```text
Hello, JavaScript!
```

Call the function three times.

**Exercise 2 — Greeting With Parameter**

Create a function that accepts a person's name and prints:

```text
Hello, <name>!
```

Example:

```js
greet("Alice");
```

Expected output:

```text
Hello, Alice!
```

**Exercise 3 — Add Two Numbers**

Create a function that accepts two numbers and returns their sum.

Example:

```js
add(10, 20);
```

Expected result:

```text
30
```

**Exercise 4 — Subtract Two Numbers**

Create a function that accepts two numbers and returns the difference.

**Exercise 5 — Multiply Two Numbers**

Create a function that accepts two numbers and returns their product.

**Exercise 6 — Divide Two Numbers**

Create a function that accepts two numbers and returns their division result.

Also consider what should happen when the second number is `0`.

**Exercise 7 — Even or Odd**

Create a function that accepts a number and returns:

```text
"Even"
```

or:

```text
"Odd"
```

**Exercise 8 — Positive, Negative, or Zero**

Create a function that accepts a number and returns:

```text
"Positive"
"Negative"
"Zero"
```

depending on the value.

**Exercise 9 — Find Maximum**

Create a function that accepts two numbers and returns the larger number.

**Exercise 10 — Find Maximum of Three**

Create a function that accepts three numbers and returns the largest.

**Exercise 11 — Square a Number**

Create a function that accepts a number and returns its square.

Try writing it using:

1. Function declaration
2. Function expression
3. Arrow function

**Exercise 12 — Calculate Rectangle Area**

Create a function:

```js
calculateArea(width, height);
```

that returns the area of a rectangle.

Formula:

```text
area = width × height
```

**Exercise 13 — Celsius to Fahrenheit**

Create a function that converts Celsius to Fahrenheit.

Formula:

```text
F = (C × 9 / 5) + 32
```

**Exercise 14 — Calculate Discount**

Create a function that accepts:

- Price
- Discount percentage

Return the discount amount.

Example:

```text
Price: 1000
Discount: 20%
Result: 200
```

**Exercise 15 — Final Price**

Create a function that calculates the final price after applying a discount.

Example:

```text
Price: 1000
Discount: 20%
Final price: 800
```

**Exercise 16 — Default Parameter**

Create a `greet` function with a default name of `"Guest"`.

These should work:

```js
greet();
greet("Alice");
```

**Exercise 17 — Return vs Console**

Create two functions:

1. One that prints a result using `console.log()`.
2. One that returns the result using `return`.

Compare how their results can be used.

**Exercise 18 — Function Expression**

Rewrite a normal function declaration as a function expression.

**Exercise 19 — Arrow Function**

Rewrite the following function as an arrow function:

```js
function multiply(a, b) {
  return a * b;
}
```

**Exercise 20 — Implicit Return**

Rewrite an arrow function so that it uses an implicit return.

```js
const square = (number) => {
  return number * number;
};
```

**Exercise 21 — Rest Parameters**

Create a function that accepts any number of numbers and returns their sum.

Example:

```js
sum(10, 20, 30, 40);
```

Expected:

```text
100;
```

Use a rest parameter.

**Exercise 22 — Callback Function**

Create:

```js
function process(number, callback) {
  // ...
}
```

Pass another function as the callback.

The callback should process the number in some way.

**Exercise 23 — Calculator With Callback**

Create a function:

```js
calculate(a, b, operation);
```

where `operation` is another function.

Create separate functions for:

- Addition
- Subtraction
- Multiplication
- Division

Then pass them to `calculate`.

**Exercise 24 — Higher-Order Function**

Create a function that accepts another function and executes it three times.

Example idea:

```js
executeThreeTimes(someFunction);
```

**Exercise 25 — Return a Function**

Create a function that returns another function.

The returned function should print a message when called.

**Exercise 26 — Multiplier Factory**

Create:

```js
createMultiplier(number);
```

It should return a function that multiplies another number by the original value.

Example:

```js
const double = createMultiplier(2);

double(10);
```

Expected:

```text
20
```

**Exercise 27 — Array of Functions**

Create several functions and store them inside an array.

Then loop through the array and execute every function.

**Exercise 28 — Object Methods**

Create a `calculator` object with methods:

- add
- subtract
- multiply
- divide

Each method should accept two numbers.

**Exercise 29 — User Validation**

Create a function that accepts a user object:

```js
const user = {
  name: "Alice",
  email: "alice@example.com",
  age: 25,
};
```

Return `true` only when:

- Name exists
- Email exists
- Age is at least 18

Otherwise return `false`.

**Exercise 30 — Shopping Cart Total**

Given:

```js
const cart = [
  { name: "Laptop", price: 800, quantity: 1 },
  { name: "Mouse", price: 20, quantity: 2 },
  { name: "Keyboard", price: 50, quantity: 1 },
];
```

Create a function that calculates the total cart price.

**Exercise 31 — Find Product**

Create a function that accepts:

- An array of products
- A product name

The function should search for the product and return it if found.

**Exercise 32 — Count Positive Numbers**

Create a function that accepts an array of numbers and returns how many numbers are positive.

Example:

```js
countPositive([-2, 5, 10, -3, 0, 7]);
```

Expected:

```text
3
```

**Exercise 33 — Check Password**

Create a function that accepts a password and checks whether it meets these requirements:

- At least 8 characters
- Contains at least one number

Return `true` or `false`.

**Exercise 34 — Temperature Category**

Create a function that accepts a temperature and returns:

```text
"Cold"
"Normal"
"Hot"
```

Define your own reasonable temperature ranges.

**Exercise 35 — Prime Number Function**

Create a function that accepts a number and determines whether it is prime.

Return:

```js
true;
```

or:

```js
false;
```

**Exercise 36 — Factorial Function**

Create a function that calculates the factorial of a number.

Example:

```text
5! = 5 × 4 × 3 × 2 × 1 = 120
```

Use a loop inside the function.

**Exercise 37 — Fibonacci Function**

Create a function that generates the first `n` Fibonacci numbers.

Example:

```text
0 1 1 2 3 5 8 13 ...
```

**Exercise 38 — Function Composition**

Create two functions:

```js
double(number);
square(number);
```

Then create another function that can combine them.

Try to understand how the output of one function can become the input of another.

**Exercise 39 — Debugging Challenge**

Find the problem:

```js
function add(a, b) {
  console.log(a + b);
}

const result = add(10, 20);

console.log(result * 2);
```

Explain why the final result is not what you might expect.

**Exercise 40 — Debugging Challenge**

Find the problem:

```js
function execute(callback) {
  callback();
}

function greet() {
  console.log("Hello");
}

execute(greet());
```

Explain the difference between:

```js
greet;
```

and:

```js
greet();
```

**Exercise 41 — Output Prediction**

Without running the code, predict the output:

```js
function test() {
  console.log("A");

  return;

  console.log("B");
}

test();
```

Explain why.

**Exercise 42 — Output Prediction**

Predict the output:

```js
function add(a, b = 10) {
  return a + b;
}

console.log(add(5));
console.log(add(5, 20));
```

**Exercise 43 — Output Prediction**

Predict the output:

```js
const greet = function () {
  return "Hello";
};

console.log(greet());
```

**Exercise 44 — Output Prediction**

Predict the output:

```js
const multiply = (a, b) => a * b;

console.log(multiply(4, 5));
```

**Exercise 45 — Final Challenge: Mini Calculator**

Build a reusable calculator using functions.

Requirements:

- Addition
- Subtraction
- Multiplication
- Division
- Handle division by zero
- Use functions for each operation
- Use another function to select the operation
- Return results rather than only printing them

Try implementing it first with regular functions and then experiment with arrow functions.
