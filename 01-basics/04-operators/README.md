# JavaScript Operators

Operators are special symbols or keywords that allow JavaScript to perform operations on values.

For example:

```js
const total = 10 + 5;

console.log(total); // 15
```

Here:

- `10` and `5` are **operands**
- `+`is the **operator**
- `15` is the resulting value

Operators are fundamental to JavaScript because they are used for calculations, comparisons, assignments, logical operations, and many other tasks.

---

## 1. What Is an Operator?

An **operator** performs an operation on one or more values.

```js
10 + 5;
```

Here:

- `10` and `5` → operands
- `+` → operator
- `15` → result

Another example:

```js
age >= 18;
```

Here:

- `age` and `18` → operands
- `>=` → operator
- The expression produces a boolean value.

---

## 2. Types of Operators

JavaScript provides several categories of operators:

- Arithmetic operators
- Assignment operators
- Comparison operators
- Equality operators
- Logical operators
- Unary operators
- Increment and decrement operators
- Ternary operator
- Nullish coalescing operator
- Optional chaining operator
- Bitwise operators
- `typeof` operator
- `delete` operator
- `in` operator
- `instanceof` operator
- Operator precedence
- Operator associativity

---

## 3. Arithmetic Operators

Arithmetic operators are used to perform mathematical operations.

| Operator | Name           | Example  | Result |
| -------- | -------------- | -------- | -----: |
| `+`      | Addition       | `10 + 5` |   `15` |
| `-`      | Subtraction    | `10 - 5` |    `5` |
| `*`      | Multiplication | `10 * 5` |   `50` |
| `/`      | Division       | `10 / 5` |    `2` |
| `%`      | Remainder      | `10 % 3` |    `1` |
| `**`     | Exponentiation | `2 ** 3` |    `8` |

**Addition**

```js
const result = 10 + 5;

console.log(result); // 15
```

**Subtraction**

```js
console.log(10 - 5); // 5
```

**Multiplication**

```js
console.log(10 * 5); // 50
```

**Division**

```js
console.log(10 / 5); // 2
```

**Remainder**

The `%` operator returns the remainder after division.

```js
console.log(10 % 3); // 1
console.log(15 % 5); // 0
```

A common practical use is checking whether a number is even or odd:

```js
// Is this number is even?
const number = 10;

console.log(number % 2 === 0); // true
```

**Exponentiation**

```js
console.log(2 ** 3); // 8
```

This means:

```text
2 × 2 × 2 = 8
```

---

## 4. The + Operator and Strings

The `+` operator has an important special behavior.

It can perform numeric addition:

```js
console.log(10 + 5); // 15
```

Or string concatenation:

```js
console.log("Hello" + " World"); // "Hello World"
```

When a string is involved:

```js
console.log("10" + 5); // "105"
```

The number is converted to a string and concatenated.

Compare:

```js
console.log("10" + 5); // "105"
console.log("10" - 5); // 5
```

> This behavior is related to JavaScript's type coercion, which was covered in the **Type Conversion** topic.

---

## 5. Assignment Operators

Assignment operators assign values to variables.

**Basic Assignment**

```js
let score = 100;
```

The `=` operator assigns `100` to `score`.

**Compound Assignment Operators**
JavaScript provides shorthand operators for modifying an existing value.

| Operator | Equivalent       |
| -------- | ---------------- |
| `=`      | `a = value`      |
| `+=`     | `a = a + value`  |
| `-=`     | `a = a - value`  |
| `*=`     | `a = a * value`  |
| `/=`     | `a = a / value`  |
| `%=`     | `a = a % value`  |
| `**=`    | `a = a ** value` |

Examples:

```js
let score = 100;

score += 20;
console.log(score); // 120

score -= 10;
console.log(score); // 110

score *= 2;
console.log(score); // 220

score /= 2;
console.log(score); // 110
```

Remainder assignment:

```js
let value = 10;

value %= 3;

console.log(value); // 1
```

Exponentiation assignment:

```js
let value = 2;

value **= 3;

console.log(value); // 8
```

---

## 6. Comparison Operators

Comparison operators compare values and produce a boolean result.

| Operator | Meaning               |
| -------- | --------------------- |
| `>`      | Greater than          |
| `<`      | Less than             |
| `>=`     | Greater than or equal |
| `<=`     | Less than or equal    |

Examples:

```js
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 10); // true
```

Comparison operators are commonly used in conditions:

```js
const age = 20;

if (age >= 18) {
  console.log("Adult");
}
```

---

## 7. Equality Operators

JavaScript has two main forms of equality comparison.

**Strict Equality `===`**

Strict equality compares both `value` and `type`.

```js
console.log(5 === 5); // true
console.log(5 === "5"); // false
```

The second comparison is false because:

```text
5   → number
"5" → string
```

**Strict Inequality `!==`**

```js
console.log(5 !== 10); // true
console.log(5 !== 5); // false
console.log(5 !== "5"); // true
```

**Loose Equality `==`**

Loose equality can perform type coercion before comparison.

```js
console.log(5 == "5"); // true
```

**Loose Inequality `!=`**

```js
console.log(5 != "10"); // true
```

In most application code, prefer: `===` and `!==`.

Because they make type differences explicit and make code easier to reason about.

---

## 8. Logical Operators

Logical operators are commonly used to combine or invert conditions.

JavaScript provides:

`&&`, `||` and `!`

**Logical AND `&&`**

`&&` evaluates multiple expressions and requires both conditions to be truthy for a typical boolean condition to succeed.

```js
const age = 25;
const hasId = true;

console.log(age >= 18 && hasId); // true
```

If one condition is false:

```js
const age = 16;
const hasId = true;

console.log(age >= 18 && hasId); // false
```

**Logical OR `||`**

`||` evaluates expressions from left to right and returns the first truthy value.

```js
console.log(false || true); // true
```

Another example:

```js
const username = "";
const fallback = "Guest";

const name = username || fallback;

console.log(name); // "Guest"
```

**Logical NOT `!`**

`!` reverses the truthiness of a value.

```js
console.log(!true); // false
console.log(!false); // true
```

It can also convert a value to boolean and then invert it:

```js
console.log(!0); // true
console.log(!"hello"); // false
```

---

## 9. Short-Circuit Evaluation

Logical operators do not always evaluate every operand.

**AND Short-Circuiting**

With `&&`, if the left side is falsy, JavaScript does not need to evaluate the right side.

```js
const isLoggedIn = false;

isLoggedIn && console.log("Dashboard");
```

The message is not printed.

**OR Short-Circuiting**

With `||`, if the left side is truthy, JavaScript does not need to evaluate the right side.

```js
const name = "Alex";

const displayName = name || "Guest";

console.log(displayName); // "Alex"
```

These operators return operands, not necessarily boolean values.

```js
console.log("Hello" && "World"); // "World"
console.log("" && "World"); // ""
console.log("Hello" || "World"); // "Hello"
console.log("" || "World"); // "World"
```

---

## 10. Nullish Coalescing ??

The nullish coalescing operator returns the right-hand value only when the left-hand value is `null` or `undefined`.

```js
const username = null;

const displayName = username ?? "Guest";

console.log(displayName); // "Guest"
```

Compare it with ||:

```js
const count = 0;

console.log(count || 10); // 10
console.log(count ?? 10); // 0
```

Why?

Because `0` is falsy, but it is not nullish.

The nullish values are:

```js
null;
undefined;
```

This makes `??` useful when `0`, `false`, or `""` are valid values that should not be replaced.

---

## 11. Optional Chaining `?`.

Optional chaining safely accesses a property or method when part of a value may be `null` or `undefined`.

```js
const user = {
  profile: {
    name: "Alex",
  },
};

console.log(user.profile?.name); // "Alex"
```

If profile does not exist:

```js
const user = {};

console.log(user.profile?.name); // undefined
```

Optional chaining can also be used with method calls:

```js
const user = {};

user.getName?.();
```

If `getName` does not exist, the expression safely evaluates to `undefined` instead of throwing an error because the method is missing.

---

## 12. Unary Operators

A unary operator works with one operand.

Examples include:

```js
+
-
!
typeof
delete
void
```

**Unary Plus `+`**

Unary `+` attempts to convert a value to a number.

```js
console.log(+"10"); // 10
console.log(+true); // 1
console.log(+false); // 0
```

This is a form of explicit numeric coercion, although `Number()` is often clearer.

Unary Minus `-`

Unary `-` converts a value to a number and negates it.

```js
console.log(-10); // -10
console.log(-"10"); // -10
```

---

## 13. Increment Operator `++`

The increment operator increases a numeric value by one.

```js
let count = 5;

count++;

console.log(count); // 6
```

It has two forms:

```js
count++;
++count;
```

Both increase the variable, but they differ when used inside a larger expression.

**Post-Increment**

```js
let count = 5;

const result = count++;

console.log(result); // 5
console.log(count); // 6
```

The current value is used first, then incremented.

**Pre-Increment**

```js
let count = 5;

const result = ++count;

console.log(result); // 6
console.log(count); // 6
```

The value is incremented first, then used.

---

## 14. Decrement Operator `--`

The decrement operator decreases a numeric value by one.

```
let count = 5;

count--;

console.log(count); // 4
```

It also has pre-decrement and post-decrement forms.

**Post-Decrement**

```js
let count = 5;

const result = count--;

console.log(result); // 5
console.log(count); // 4
```

**Pre-Decrement**

```js
let count = 5;

const result = --count;

console.log(result); // 4
console.log(count); // 4
```

---

## 15. Ternary Operator

The ternary operator is a compact way to write a simple conditional expression.

Syntax:

```js
condition ? valueIfTrue : valueIfFalse;
```

Example:

```js
const age = 20;

const status = age >= 18 ? "Adult" : "Minor";

console.log(status); // "Adult"
```

This is useful when assigning a value based on a simple condition.

Avoid deeply nested ternary expressions because they can make code difficult to read.

---

## 16. typeof Operator

`typeof` returns a string describing the type of a value.

```js
console.log(typeof "hello"); // "string"
console.log(typeof 100); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof 100n); // "bigint"
console.log(typeof Symbol()); // "symbol"
```

For objects:

```js
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
```

A function is:

```js
console.log(typeof function () {}); // "function"
```

One important historical behavior is:

```js
console.log(typeof null); // "object"
```

This is a well-known JavaScript language quirk.

---

## 17. `delete` Operator

The `delete` operator removes a property from an object.

```js
const user = {
  name: "Alex",
  age: 25,
};

delete user.age;

console.log(user);
// { name: "Alex" }
```

It does not delete a variable declared with `const`, `let`, or `var`.

Use `delete` specifically for object properties when appropriate.

---

## 18. `in` Operator

The `in` operator checks whether a property exists in an object or anywhere in its prototype chain.

```js
const user = {
  name: "Alex",
  age: 25,
};

console.log("name" in user); // true
console.log("email" in user); // false
```

The general form is:

```js
"propertyName" in object;
```

---

## 19. `instanceof` Operator

The `instanceof` operator checks whether an object is an instance of a particular constructor or class.

```js
const numbers = [];

console.log(numbers instanceof Array); // true
```

Another example:

```js
const date = new Date();

console.log(date instanceof Date); // true
```

This operator is especially useful when working with objects, constructors, and classes.

---

### 20. Bitwise Operators

Bitwise operators work with the binary representation of numbers.

Common bitwise operators include:

| Operator | Meaning                      |
| -------- | ---------------------------- |
| `&`      | Bitwise AND                  |
| `\|`     | Bitwise OR                   |
| `^`      | Bitwise XOR                  |
| `~`      | Bitwise NOT                  |
| `<<`     | Left shift                   |
| `>>`     | Sign-propagating right shift |
| `>>>`    | Zero-fill right shift        |

Example:

```js
console.log(5 & 1); // 1
console.log(5 | 1); // 5
```

Bitwise operations are more advanced and are generally less common in everyday application code.

---

## 21. Operator Precedence

When an expression contains multiple operators, JavaScript follows operator precedence rules to determine the order of evaluation.

For example:

```js
const result = 10 + 5 * 2;

console.log(result); // 20
```

Multiplication happens before addition:

```text
5 * 2 = 10
10 + 10 = 20
```

Parentheses can explicitly control the order:

```js
const result = (10 + 5) \* 2;

console.log(result); // 30
```

A useful rule is:

> When an expression could be confusing, use parentheses to make your intention clear.

You do not need to memorize the entire precedence table immediately. Learn the common rules and use parentheses when clarity matters.

## 22. Operator Associativity

When operators have the same precedence, associativity can determine the evaluation direction.

For example, arithmetic multiplication and division are left-associative:

```js
const result = 20 / 5 \* 2;

console.log(result); // 8
```

It is evaluated from left to right:

```text
20 / 5 = 4
4 \* 2 = 8
```

Exponentiation behaves differently:

```js
console.log(2 ** (3 ** 2)); // 512
```

Exponentiation is right-associative:

```text
3 ** 2 = 9
2 ** 9 = 512
```

Parentheses can make the intended order clearer.

---

## 23. Expressions and Operators

An expression is code that produces a value.

For example:

```js
10 + 5;
```

produces:

```js
15;
```

Another example:

age >= 18

produces:

true

Expressions can be combined:

```js
const canVote = age >= 18 && hasId;
```

Understanding operators means understanding how expressions produce values.

---

## 24. Practical Example: Shopping Cart

```js
const price = 500;
const quantity = 3;

const subtotal = price \* quantity;

const discount = subtotal >= 1000 ? 100 : 0;

const total = subtotal - discount;

console.log(total);
```

This example combines:

- Multiplication
- Comparison
- Ternary operator
- Subtraction
- Assignment

---

## 25. Practical Example: Access Control

```js
const isLoggedIn = true;
const isAdmin = false;

const canAccessDashboard = isLoggedIn && isAdmin;

console.log(canAccessDashboard); // false
```

Logical operators are commonly used to combine permissions and conditions.

## 26. Practical Example: Default Values

```js
const username = "";

const displayName = username || "Guest";

console.log(displayName); // "Guest"
```

When `0`, `false`, or an empty string are valid values, `??` may be more appropriate:

```js
const score = 0;

const finalScore = score ?? 100;

console.log(finalScore); // 0
```

---

### 27. Common Mistakes

**Mistake 1: Confusing `=` with `===`**

```js
let age = 20; // assignment
age === 20; // comparison
```

`=` assigns a value.

`===` compares value and type.

**Mistake 2: Forgetting the string behavior of `+`**

```js
console.log("5" + 2); // "52"
```

Do not assume `+` always performs numeric addition.

**Mistake 3: Using `==` without understanding coercion**

```js
console.log(0 == false); // true
```

Loose equality can produce surprising results if you do not understand coercion.

Prefer strict equality in most application code.

Mistake 4: Confusing `||` and `??`

```js
console.log(0 || 100); // 100
console.log(0 ?? 100); // 0
```

`||` checks truthiness.

`??` checks specifically for `null` or `undefined`.

**Mistake 5: Confusing pre-increment and post-increment**

let count = 5;

console.log(count++); // 5
console.log(count); // 6

versus:

let count = 5;

console.log(++count); // 6
console.log(count); // 6

Mistake 6: Writing difficult nested ternaries

Avoid deeply nested ternary expressions when they make the logic difficult to read.

Use `if...else` or another clearer structure when appropriate.

Mistake 7: Assuming `typeof null` is `null`

```js
console.log(typeof null); // "object"
```

This is a historical JavaScript quirk.

### 28. Key Takeaways

- Operators perform operations on values.
- Values used by operators are called operands.
- Arithmetic operators perform mathematical operations.
- Assignment operators assign or update values.
- Comparison operators produce boolean results.
- `===` compares value and type without the coercive behavior of ==.
- Logical operators include `&&`, `||`, and `!`.
- `&&` and `||` use short-circuit evaluation and can return operands.
- `??` provides a fallback only for `null` and `undefined`.
- `?.` safely accesses potentially missing properties or methods.
- Unary operators work with one operand.
- `++` and `--` can be used before or after an operand, affecting expression results differently.
- The ternary operator provides a compact conditional expression.
- `typeof`, `delete`, `in`, and `instanceof` are also JavaScript operators.
- Bitwise operators work with binary representations of numbers.
- Operator precedence determines the order in which operators are evaluated.
- Parentheses can make complex expressions clearer.

---

## 29. Interview Questions

1. What is an operator in JavaScript?
2. What is the difference between an operator and an operand?
3. What are the main categories of JavaScript operators?
4. What is the difference between `+` and the other arithmetic operators when strings are involved?
5. What does the `%` operator return?
6. What is the difference between `=` and `===`?
7. What is the difference between `==` and `===`?
8. Why is `===` generally preferred over `==?`
9. What are logical &&, `||`, and `!` operators?
10. What is short-circuit evaluation?
11. What does `||` return when both operands are not boolean values?
12. What is the difference between `||` and `??`?
13. What does optional chaining `?.` do?
14. What is the difference between pre-increment and post-increment?
15. What is the ternary operator?
16. What does `typeof` return?
17. Why does `typeof null` return `object`?
18. What does the `delete` operator do?
19. What does the `in` operator check?
20. What does `instanceof` check?
21. What are bitwise operators?
22. What is operator precedence?
23. What is operator associativity?
24. Why can parentheses be useful in complex expressions?
25. What is the output of `"5" + 2` and why?
26. What is the output of `"5" - 2` and why?
27. What is the difference between `0 || 100` and `0 ?? 100`?

---

## 30. Practice

Try these exercises yourself before looking for solutions.

**Exercise 1 — Arithmetic Operators**

Create variables for two numbers and perform:

- Addition
- Subtraction
- Multiplication
- Division
- Remainder
- Exponentiation

Print every result.

**Exercise 2 — Even or Odd**

Create a program that checks whether a number is even or odd using the `%` operator.

Test it with several numbers.

**Exercise 3 — Assignment Operators**

Start with:

```js
let score = 100;
```

Use compound assignment operators to:

1. Add 20
2. Subtract 10
3. Multiply by 2
4. Divide by 5

Print the value after each operation.

**Exercise 4 — Comparison Operators**

Create two numbers and check:

- Which number is greater
- Which number is smaller
- Whether they are equal
- Whether the first number is greater than or equal to the second
- Whether the first number is less than or equal to the second

**Exercise 5 — Equality Prediction**

Predict the result before running each expression:

```js
5 == "5";
5 === "5";
0 == false;
0 === false;
null == undefined;
null === undefined;
```

Then verify your answers.

**Exercise 6 — Logical AND**

Create variables:

```js
const age = 25;
const hasTicket = true;
```

Use `&&` to determine whether the person can enter an event.

The person must:

- Be at least 18
- Have a ticket

**Exercise 7 — Logical OR**

Create a program where a user can access a resource if they are either:

- An admin
- Or a moderator

Use `||`.

**Exercise 8 — Logical NOT**

Create a boolean variable and use `!` to reverse its value.

Then test the behavior with:

```js
true;
false;
0;
1;
("");
("hello");
```

**Exercise 9 — Short-Circuit Evaluation**

Predict the output:

```js
console.log(false && "Hello");
console.log(true && "Hello");
console.log(false || "Hello");
console.log("JavaScript" || "Hello");
```

Then explain why each result occurs.

**Exercise 10 — Nullish Coalescing**

Given:

```js
const username = null;
const score = 0;
const isActive = false;
```

Use `??` to provide fallback values.

Make sure valid values such as `0` and `false` are not replaced.

**Exercise 11 — Optional Chaining**

Given:

```js
const user = {
  profile: {
    name: "Alex",
  },
};
```

Safely access:

```js
user.profile.name;
user.profile.email;
user.settings.theme;
```

Use optional chaining where necessary.

**Exercise 12 — Ternary Operator**

Create a program that determines whether a person is:

```text
Adult
```

or:

```text
Minor
```

using the ternary operator.

**Exercise 13 — Increment**

Predict the output:

```js
let count = 5;

console.log(count++);
console.log(count);
```

Then do the same with:

```js
let count = 5;

console.log(++count);
console.log(count);
```

Explain the difference.

**Exercise 14 — Decrement**

Repeat the previous exercise using:

```js
count--;
```

and:

```js
--count;
```

**Exercise 15 — typeof**

Use `typeof` to determine the types of:

```js
"JavaScript"
100
100n
true
undefined
null
{}
[]
function () {}
Symbol("id")
```

Pay particular attention to `null`, `arrays`, and `functions`.

**Exercise 16 — delete**

Create an object:

```js
const product = {
  name: "Laptop",
  price: 50000,
  category: "Electronics",
};
```

Delete the `category` property and print the object.

**Exercise 17 — in**

Using the same object, check whether these properties exist:

```js
name;
price;
stock;
category;
```

**Exercise 18 — instanceof**

Create:

```js
const numbers = [];
const date = new Date();
```

Use `instanceof` to determine:

- Whether `numbers` is an `Array`
- Whether `date` is a `Date`
- Whether `numbers` is an `Object`

**Exercise 19 — Operator Precedence**

Predict the output:

```js
console.log(10 + 5 _ 2);
console.log((10 + 5) _ 2);
console.log(20 / 5 \* 2);
console.log(2 ** 3 ** 2);
```

Explain the evaluation order.

**Exercise 20 — Debug the Code**

Find and fix the problem:

```js
const price = "500";
const quantity = "2";

const total = price + quantity;

console.log(total);
```

The expected numeric result is:

```js
1000;
```

**Exercise 21 — Shopping Cart**

Create:

```js
const price = 1200;
const quantity = 3;
const discount = 200;
```

Calculate:

1. Subtotal
2. Discounted total
3. Final price

Use arithmetic and assignment operators.

**Exercise 22 — Access Control**

Create:

```js
const isLoggedIn = true;
const isAdmin = false;
const isModerator = true;
```

Allow access if the user is logged in and is either an admin or moderator.

Use:

```js
&&
||
```

**Exercise 23 — Default Value**

Create:

const username = "";

Use both `||` and `??` to provide a default username.

Observe the difference and explain why the results differ.

**Exercise 24 — Output Challenge**

Predict every output before running:

```js
console.log(10 + 5);
console.log("10" + 5);
console.log("10" - 5);
console.log(10 === "10");
console.log(10 == "10");
console.log(false || "JavaScript");
console.log(false && "JavaScript");
console.log(0 || 100);
console.log(0 ?? 100);
console.log(typeof null);
```

**Exercise 25 — Mini Challenge**

Build a small program that calculates whether a customer receives free shipping.

Rules:

- Order total must be at least 1000
- Customer must be logged in

Use:

- Arithmetic operators
- Comparison operators
- Logical operators
- A variable to store the final result

Do not use nested `if` statements for this exercise.
