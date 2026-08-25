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
