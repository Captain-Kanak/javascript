# JavaScript Type Conversion

Type conversion is the process of converting a value from one JavaScript data type to another.

JavaScript often needs to work with values of different types. For example, data received from a form or an API may be a string even when we want to use it as a number.

Understanding type conversion is important because JavaScript supports dynamic typing and can also perform implicit type conversion (type coercion) in many operations.

---

## 1. What Is Type Conversion?

Type conversion means changing a value from one data type to another.

```js
const age = "25";

console.log(typeof age); // string

const numberAge = Number(age);

console.log(numberAge); // 25
console.log(typeof numberAge); // number
```

Here:

```text
"25" → 25
string → number
```

JavaScript provides several built-in ways to explicitly convert values.

---

## 2. Explicit vs Implicit Conversion

There are two major forms of type conversion in JavaScript.

### Explicit Type Conversion

The developer intentionally converts a value.

```js
const value = "100";

const number = Number(value);

console.log(number); // 100
```

### Implicit Type Conversion

JavaScript automatically converts a value during an operation.

```js
console.log("10" - 5); // 5
```

JavaScript converts `"10"` to a number before performing subtraction.

This automatic conversion is commonly called **type coercion**.

---

## 3. Converting to String

### Using String()

The most explicit approach is `String()`.

```js
const value = 123;

const result = String(value);

console.log(result); // "123"
console.log(typeof result); // string
```

More examples:

```js
String(100); // "100"
String(true); // "true"
String(false); // "false"
String(null); // "null"
String(undefined); // "undefined"
```

Arrays and objects can also be converted:

```js
String([1, 2, 3]); // "1,2,3"
String({}); // "[object Object]"
```

### Using toString()

Many values have a `toString()` method.

```js
const number = 100;

console.log(number.toString()); // "100"
```

However, `toString()` cannot be called directly on `null` or `undefined`.

```js
const value = null;

// value.toString(); // TypeError
```

When the value may be `null` or `undefined`, `String(value)` is safer.

### Template Literals

Template literals also produce strings:

```js
const age = 25;

const message = `I am ${age} years old.`;

console.log(message);
console.log(typeof message); // string
```

---

## 4. Converting to Number

Common numeric conversion tools are:

```js
Number();
parseInt();
parseFloat();
```

They do not behave exactly the same way.

### Using Number()

```js
const value = "42";

const result = Number(value);

console.log(result); // 42
console.log(typeof result); // number
```

Examples:

```js
Number("100"); // 100
Number("3.14"); // 3.14
Number(""); // 0
Number("   "); // 0
Number(true); // 1
Number(false); // 0
Number(null); // 0
Number(undefined); // NaN
Number("hello"); // NaN
```

`NaN` means **Not-a-Number**. Its JavaScript type is still `number`.

```js
console.log(typeof NaN); // number
```

---

## 5. parseInt()

`parseInt()` parses an integer from the beginning of a value.

```js
console.log(parseInt("42", 10)); // 42
console.log(parseInt("42.99", 10)); // 42
```

It can stop when it reaches a character that cannot be part of the parsed integer:

```js
parseInt("100px", 10); // 100
```

The second argument is the radix (number base):

```js
parseInt("101", 2); // 5
```

For decimal integers, prefer:

```js
parseInt("42", 10);
```

---

## 6. parseFloat()

`parseFloat()` parses a floating-point number from the beginning of a value.

```js
console.log(parseFloat("42.75")); // 42.75
```

It can stop at invalid characters:

```js
parseFloat("42.75px"); // 42.75
```

---

## 7. Number() vs parseInt() vs parseFloat()

| Input       | Number() | parseInt() | parseFloat() |
| ----------- | -------: | ---------: | -----------: |
| `"42"`      |       42 |         42 |           42 |
| `"42.75"`   |    42.75 |         42 |        42.75 |
| `"42px"`    |      NaN |         42 |           42 |
| `"42.75px"` |      NaN |         42 |        42.75 |
| `""`        |        0 |        NaN |          NaN |

Key difference:

- `Number()` tries to convert the whole value.
- `parseInt()` parses an integer from the beginning.
- `parseFloat()` parses a floating-point number from the beginning.

---

## 8. Converting to Boolean

Use `Boolean()` for explicit conversion to a boolean.

```js
Boolean(1); // true
Boolean(0); // false
Boolean("hello"); // true
Boolean(""); // false
```

The result is always `true` or `false`.

---

## 9. Truthy and Falsy Values

Values that behave like `false` in boolean contexts are called **falsy values**.

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

```js
Boolean("hello"); // true
Boolean(" "); // true
Boolean("0"); // true
Boolean([]); // true
Boolean({}); // true
Boolean("false"); // true
```

The last value is truthy because it is a non-empty string.

---

## 10. Converting to BigInt

BigInt is used for integers larger than the safe integer range of the Number type.

You can create a BigInt from an integer string:

```js
const value = BigInt("9007199254740993");

console.log(value);
```

You can also convert an integer number:

```js
const value = BigInt(100);

console.log(value); // 100n
```

Be careful when converting numbers that are already outside the safe integer range because the original Number may already have lost precision.

```js
typeof 100; // "number"
typeof 100n; // "bigint"
```

---

## 11. Converting to Object

Primitive values can be wrapped in objects using wrapper constructors, although this is generally unnecessary in normal JavaScript.

```js
const value = Object(10);

console.log(value); // [Number: 10]
console.log(typeof value); // "object"
```

Do not confuse:

```js
10;
```

with:

```js
new Number(10);
```

The first is a primitive number. The second is a Number object.

In normal code, prefer primitive values unless you have a specific reason to use wrapper objects.

---

## 12. Implicit Type Conversion

JavaScript sometimes converts values automatically.

```js
console.log("10" + 5); // "105"
```

The `+` operator can perform string concatenation, so the number is converted to a string.

But:

```js
console.log("10" - 5); // 5
```

Subtraction requires numeric operands, so `"10"` is converted to a number.

This is why JavaScript type coercion can sometimes be surprising.

---

## 13. The + Operator and Type Coercion

The `+` operator is especially important.

```js
console.log(10 + 5); // 15
console.log("10" + 5); // "105"
console.log(10 + "5"); // "105"
console.log("10" + "5"); // "105"
```

Compare that with:

```js
console.log("10" - 5); // 5
console.log("10" * 5); // 50
console.log("10" / 5); // 2
```

These operators perform numeric conversion.

---

## 14. Equality and Type Conversion

Strict equality:

```js
5 === "5"; // false
```

Strict equality checks both value and type.

Loose equality:

```js
5 == "5"; // true
```

Loose equality can perform type coercion before comparing.

For predictable code, prefer strict equality in most situations:

```js
===
!==
```

The detailed equality rules will be covered in the **Operators** topic.

---

## 15. Converting User Input

A common real-world example is form input.

```js
const age = "25";

console.log(typeof age); // string

const numericAge = Number(age);

console.log(typeof numericAge); // number
```

This matters when performing calculations:

```js
const price = "100";
const quantity = "3";

const total = Number(price) * Number(quantity);

console.log(total); // 300
```

---

## 16. Checking for NaN

After numeric conversion, you may need to check whether the result is `NaN`.

```js
const value = Number("hello");

console.log(value); // NaN
```

Use:

```js
Number.isNaN(value);
```

Example:

```js
console.log(Number.isNaN(Number("hello"))); // true
console.log(Number.isNaN(Number("100"))); // false
```

---

## 17. Practical Example: Shopping Cart

Suppose a product price and quantity arrive as strings:

```js
const price = "499";
const quantity = "2";

const total = Number(price) * Number(quantity);

console.log(total); // 998
```

This is a common real-world use of explicit type conversion.

---

## 18. Practical Example: Form Data

Imagine a form provides an age:

```js
const inputAge = "24";

const age = Number(inputAge);

if (age >= 18) {
  console.log("Adult");
}
```

The conversion makes the intended data type explicit.

---

## 19. Practical Example: API Data

Data received from an external source may not always have the type you expect.

```js
const response = {
  price: "1299",
};

const price = Number(response.price);

console.log(price + 100); // 1399
```

Understanding the incoming type helps prevent accidental string concatenation.

---

## 20. Common Mistakes

### Mistake 1: Assuming all strings containing numbers behave the same

```js
console.log("10" + 5); // "105"
console.log("10" - 5); // 5
```

The operator matters.

### Mistake 2: Assuming Number() and parseInt() are interchangeable

```js
Number("100px"); // NaN
parseInt("100px", 10); // 100
```

They have different purposes.

### Mistake 3: Forgetting that NaN has type number

```js
const value = Number("hello");

console.log(typeof value); // number
```

### Mistake 4: Thinking `"false"` is false

```js
Boolean("false"); // true
```

### Mistake 5: Using toString() on null or undefined

```js
const value = null;

// value.toString(); // TypeError
```

Prefer:

```js
String(value);
```

### Mistake 6: Mixing BigInt and Number directly

```js
10n + 5; // TypeError
```

BigInt and Number should not be mixed directly in arithmetic operations.

---

## 21. Important Conversion Rules

### String

```js
String(value);
```

### Number

```js
Number(value);
```

### Integer parsing

```js
parseInt(value, 10);
```

### Decimal parsing

```js
parseFloat(value);
```

### Boolean

```js
Boolean(value);
```

### BigInt

```js
BigInt(value);
```

### Check for NaN

```js
Number.isNaN(value);
```

---

## 22. Quick Reference

| Conversion | Example                | Result  |
| ---------- | ---------------------- | ------- |
| String     | `String(123)`          | `"123"` |
| Number     | `Number("123")`        | `123`   |
| Integer    | `parseInt("12.5", 10)` | `12`    |
| Float      | `parseFloat("12.5")`   | `12.5`  |
| Boolean    | `Boolean(1)`           | `true`  |
| BigInt     | `BigInt("123")`        | `123n`  |

---

## 23. Key Takeaways

- Type conversion changes a value from one type to another.
- Conversion can be **explicit** or **implicit**.
- `String()` explicitly converts a value to a string.
- `Number()` explicitly converts a value to a number.
- `parseInt()` parses an integer from the beginning of a value.
- `parseFloat()` parses a floating-point number from the beginning of a value.
- `Boolean()` converts a value to `true` or `false`.
- `BigInt()` creates a BigInt value.
- `NaN` has the JavaScript type `number`.
- `+` behaves differently when strings are involved.
- `==` can perform type coercion, while `===` does not perform the same kind of coercion.
- User input commonly needs explicit conversion before numeric calculations.
- Understanding type conversion helps prevent unexpected JavaScript behavior.

---

## 24. Interview Questions

1. What is type conversion in JavaScript?
2. What is the difference between explicit and implicit type conversion?
3. What is type coercion?
4. What is the difference between `Number()` and `parseInt()`?
5. What is the difference between `parseInt()` and `parseFloat()`?
6. What happens when you use `Number("hello")`?
7. What is `NaN`?
8. Why does `typeof NaN` return `"number"`?
9. What is the result of `"10" + 5` and why?
10. What is the result of `"10" - 5` and why?
11. Why is `Boolean("false")` `true`?
12. What are JavaScript's common falsy values?
13. What is the difference between `==` and `===`?
14. Why should user input often be converted before performing calculations?
15. What happens when you mix a BigInt and a Number in arithmetic?
16. When would you prefer `String(value)` over `value.toString()`?
17. How can you check whether a value is `NaN`?
18. What is the difference between `Number("")` and `parseInt("")`?
19. What is implicit conversion?
20. Give a real-world example where incorrect type conversion can cause a bug.

---

## 25. Practice

Try these exercises yourself before looking for solutions.

### Exercise 1 — String Conversion

Convert these values to strings:

```js
const a = 100;
const b = true;
const c = null;
const d = undefined;
```

Print each value and its type after conversion.

### Exercise 2 — Number Conversion

Convert these strings to numbers:

```js
const a = "100";
const b = "25.5";
const c = "500";
```

Print their values and types.

### Exercise 3 — Invalid Number

Predict the output:

```js
const value = Number("JavaScript");

console.log(value);
console.log(typeof value);
```

### Exercise 4 — parseInt vs parseFloat

Predict the results:

```js
console.log(parseInt("25.75", 10));
console.log(parseFloat("25.75"));
console.log(Number("25.75"));
```

Explain why they differ.

### Exercise 5 — Boolean Conversion

Predict whether each value is truthy or falsy:

```js
0
1
""
"hello"
"0"
null
undefined
[]
{}
NaN
```

Then verify your predictions using `Boolean()`.

### Exercise 6 — String Concatenation

Predict:

```js
console.log("10" + 20);
console.log(10 + "20");
console.log("10" + "20");
```

Explain why.

### Exercise 7 — Numeric Conversion

Predict:

```js
console.log("10" - 5);
console.log("10" * 2);
console.log("10" / 2);
```

Explain what JavaScript is doing.

### Exercise 8 — Shopping Cart

Given:

```js
const price = "499";
const quantity = "3";
```

Calculate the total price correctly.

### Exercise 9 — User Age

Given:

```js
const inputAge = "21";
```

Convert it to a number and check whether the person is at least 18.

### Exercise 10 — NaN

Write a program that:

1. Converts a string to a number.
2. Checks whether the result is `NaN`.
3. Prints an appropriate message.

Test it with:

```js
"100";
"hello";
"25.5";
```

### Exercise 11 — BigInt

Create a BigInt from:

```js
"9007199254740993";
```

Print its value and type.

### Exercise 12 — Predict the Output

Without running the code, predict every output:

```js
console.log(String(100));
console.log(Number("100"));
console.log(Boolean("100"));
console.log(Number(""));
console.log(Boolean("false"));
console.log("5" + 2);
console.log("5" - 2);
console.log(5 === "5");
console.log(5 == "5");
```

Then run the code and compare your answers.

### Exercise 13 — Real-World Conversion

Imagine an online store receives:

```js
const product = {
  price: "1299",
  quantity: "2",
};
```

Calculate the total price.

Then intentionally try the calculation without conversion and observe the difference.

### Exercise 14 — Debug the Code

Find and fix the problem:

```js
const price = "500";
const quantity = "2";

const total = price + quantity;

console.log(total);
```

The expected result is:

```text
1000
```

### Exercise 15 — Conversion Challenge

Create a small program that receives:

```js
const input = "250";
```

and produces:

```text
Original value: 250
Original type: string
Converted value: 250
Converted type: number
Is valid number: true
```
