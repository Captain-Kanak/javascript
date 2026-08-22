# JavaScript Variables

## 1. What is a Variable?

A variable is a named container used to store a value in a JavaScript program.

```js
const passion = "Developer";
```

Here:

- `passion` is the variable name.
- `"Developer"` is the value.
- `const` declares the variable.

We can access the stored value later:

```js
console.log(passion);
```

### Why Do We Need Variables?

Variables allow us to store and reuse data.

```js
const price = 100;
const quantity = 2;

const total = price * quantity;

console.log(total);
```

---

## 2. Variable Declaration

JavaScript provides three keywords for declaring variables:

```js
var
let
const
```

Example:

### Declaration

```js
let age;
```

The variable exists, but no value has been assigned to it yet.

### Initialization

```js
age = 25;
```

The variable is declared and given its initial value.

### Declaration & Initialization

```js
let age = 25;
```

A variable can also be declared and initialized at the same time:

---

## 3. `var`

`var` is the older way of declaring variables in JavaScript.

```js
var name = "Jhon";

console.log(name);
```

A `var` variable can be reassigned:

```js
var age = 20;

age = 25;

console.log(age);
```

It can also be redeclared in the same scope:

```js
var name = "Alex";
var name = "John";

console.log(name);
```

### Important Characteristics of `var`

- Function-scoped.
- Can be reassigned.
- Can be redeclared in the same scope.
- Hoisted and initialized with `undefined`.

---

## 4. `let`

`let` was introduced in ECMAScript 2015 (ES6).

It is used when a variable's value needs to change.

```js
let age = 20;

age = 21;

console.log(age);
```

A `let` variable can be reassigned but cannot be redeclared in the same scope.

### Important Characteristics of `let`

- Block-scoped.
- Can be reassigned.
- Cannot be redeclared in the same scope.
- Hoisted but remains in the Temporal Dead Zone (TDZ) until its declaration is reached.
- During TDZ period The variable exists, but you cannot access it yet.

---

## 5. `const`

`const` is used when a variable should not be reassigned.

```js
const name = "Jhon";
```

A `const` variable must be initialized when it is declared.

```js
// Error
const name;
```

A `const` variable cannot be reassigned:

```js
const age = 25;

// Error
// age = 30;
```

### Important Characteristics of `const`

- Block-scoped.
- Must be initialized when declared.
- Cannot be reassigned.
- Cannot be redeclared in the same scope.
- Hoisted but remains in the Temporal Dead Zone (TDZ) until its declaration is reached.

---

## 6. `var` vs `let` vs `const`

| Feature                     | `var`            | `let`                            | `const`         |
| --------------------------- | ---------------- | -------------------------------- | --------------- |
| Scope                       | Function         | Block                            | Block           |
| Reassign                    | Yes              | Yes                              | No              |
| Redeclare in same scope     | Yes              | No                               | No              |
| Must initialize immediately | No               | No                               | Yes             |
| Introduced                  | Older JavaScript | ES6                              | ES6             |
| Recommended for modern code | Usually no       | Yes, when reassignment is needed | Yes, by default |

### General Rule

Use `const` by default.

Use `let` when the variable needs to be reassigned.

Avoid `var` in modern JavaScript unless you specifically need its behavior or are working with older code.

---

## 7. Variable Naming Rules

JavaScript has rules for naming variables.

### Letters

```js
const name = "Jhon";
```

### Numbers

Numbers are allowed, but a variable name cannot start with a number.

```js
const user1 = "Alex";
const user2 = "John";
```

Invalid:

```js
// const 1user = "Alex";
```

### Underscore

```js
const user_name = "Alex";
```

### Dollar Sign

```js
const $price = 100;
```

### Case Sensitivity

These are different variables:

```js
const name = "Jack";
const Name = "John";
const NAME = "Alex";
```

### Reserved Words

Reserved keywords cannot be used as variable names.

```js
// const class = "JavaScript";
```

---

## 8. Variable Naming Conventions

JavaScript developers commonly use **camelCase**.

```js
const firstName = "Jhon";
const lastName = "Doe";
const userAge = 25;
const totalPrice = 500;
```

Prefer meaningful names:

```js
const productPrice = 100;
const userAge = 25;
const totalAmount = 500;
```

### Boolean Naming

Boolean variables are often named using:

- `is`
- `has`
- `can`
- `should`

Examples:

```js
const isLoggedIn = true;
const hasPermission = false;
const canEdit = true;
const shouldUpdate = false;
```

---

## 9. Declaration vs Initialization

### Declaration

Creating a variable without assigning a value:

```js
let username;
```

### Initialization

Assigning the initial value:

```js
username = "Jhon";
```

You can also do both together:

```js
let username = "Jhon";
```

### Example

```js
let score; // Declaration

score = 100; // Initialization

console.log(score);
```

---

## 10. Reassignment

Reassignment means changing the value stored in a variable.

With `let`:

```js
let score = 10;

score = 20;

console.log(score);
```

With `const`, reassignment is not allowed:

```js
const score = 10;

// Error
// score = 20;
```

### Important

`const` means the variable binding cannot be reassigned.

It does not mean that every value stored inside a `const` variable is completely immutable.

For example:

```js
const user = {
  name: "Alex",
};

user.name = "John";

console.log(user.name);
```

This works because we are modifying the object, not reassigning the `user` variable.

---

## 11. Scope Introduction

Scope determines where a variable can be accessed.

JavaScript has different kinds of scope, including:

- Global scope
- Function scope
- Block scope
- Module scope

For now, the important distinction is between `var` and `let`/`const`.

### `var` is Function-Scoped

```js
function example() {
  var message = "Hello";

  console.log(message);
}
```

### `let` and `const` are Block-Scoped

```js
if (true) {
  let message = "Hello";
  const language = "JavaScript";

  console.log(message);
  console.log(language);
}
```

The variables only exist within the block where they were declared.

---

## 12. Hoisting Introduction

Hoisting is JavaScript's behavior of processing declarations before code execution.

Consider:

```js
console.log(name);

var name = "Jhon";
```

The `var` declaration is hoisted, and its value is initially `undefined`.

Conceptually:

```js
var name;

console.log(name);

name = "Jhon";
```

### `let` and `const`

`let` and `const` are also hoisted in the technical sense, but they cannot be accessed before their declaration because they are in the **Temporal Dead Zone (TDZ)**.

```js
console.log(name);

let name = "Jhon";
```

This results in a `ReferenceError`.

The same applies to `const`.

---

## Key Takeaways

- A variable stores a value that can be used by a program.
- JavaScript provides `var`, `let`, and `const`.
- `var` is function-scoped.
- `let` and `const` are block-scoped.
- `let` can be reassigned.
- `const` cannot be reassigned.
- `const` must be initialized when declared.
- `var` can be redeclared in the same scope.
- `let` and `const` cannot be redeclared in the same scope.
- Variable names are case-sensitive.
- JavaScript commonly uses camelCase.
- Declaration and initialization are different concepts.
- Reassignment means changing an existing variable's value.
- `var`, `let`, and `const` have different hoisting behavior.
- Prefer `const` by default and use `let` when reassignment is required.
- Avoid `var` in modern JavaScript unless its specific behavior is needed.

---

## Interview Questions

### Beginner

1. What is a variable?
2. How do you declare a variable in JavaScript?
3. What is the difference between `var`, `let`, and `const`?
4. Can a `const` variable be reassigned?
5. Can a `let` variable be reassigned?
6. Can a `let` variable be redeclared?
7. Can a `var` variable be redeclared?
8. What is the difference between declaration and initialization?
9. What is reassignment?
10. What are the rules for naming JavaScript variables?

### Intermediate

11. What is the difference between function scope and block scope?
12. Why is `var` generally avoided in modern JavaScript?
13. What does hoisting mean?
14. What happens when you access a `var` variable before its declaration?
15. What happens when you access a `let` variable before its declaration?
16. What is the Temporal Dead Zone?
17. Are `let` and `const` hoisted?
18. What does `const` actually prevent?
19. Can an object declared with `const` be modified?
20. When should you use `let` instead of `const`?

---

## Practice

### Practice 1

Declare a variable containing your name and print it.

### Practice 2

Declare two variables containing numbers and print their sum.

### Practice 3

Create a variable using `let`, assign it an initial value, then reassign it.

### Practice 4

Create a `const` variable and try to reassign it. Observe the error.

### Practice 5

Create variables for:

- First name
- Last name
- Age
- Profession

Use appropriate variable names and print all values.

### Practice 6

Create a product using:

```text
productName
price
quantity
```

Calculate and print the total price.

### Practice 7

Create:

```js
const isLoggedIn = true;
```

Print a suitable message based on its value.

### Practice 8

Create a variable using `var` inside a function and try to access it outside the function. Observe what happens.

### Practice 9

Create a variable using `let` inside an `if` block and try to access it outside the block. Observe what happens.

### Practice 10

Predict the output before running:

```js
console.log(name);

var name = "Jhon";
```

Then explain why you got that result.

### Practice 11

Predict what happens here:

```js
console.log(name);

let name = "Jhon";
```

Run it and explain the result.

### Practice 12

Create an object using `const`, then change one of its properties.

Explain why modifying the property works even though the variable was declared with `const`.
