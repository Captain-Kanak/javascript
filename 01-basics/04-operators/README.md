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
