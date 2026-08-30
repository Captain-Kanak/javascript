# JavaScript Control Flow

Control flow describes the order in which JavaScript executes statements.

By default, JavaScript executes code from top to bottom:

```js
console.log("First");
console.log("Second");
console.log("Third");
```

Output:

```text
First
Second
Third
```

Control-flow statements allow us to change this normal execution order.

For example, we can:

- Execute code only when a condition is true
- Choose between multiple paths
- Repeat code
- Stop or skip iterations
- Handle different cases

Control flow is one of the foundations of programming because real-world programs rarely execute every statement in exactly the same way every time.

---

## 1. Why Control Flow Matters

Consider an application that checks whether a user can access a dashboard.

The program needs to make a decision:

```text
Is the user logged in?
        |
      Yes → Allow access
        |
       No → Reject access
```

JavaScript can represent this logic using control-flow statements.

```js
const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
```

Without control flow, programs would have very limited ability to make decisions or repeat tasks.

---

## 2. Types of Control Flow

The major control-flow mechanisms in JavaScript include:

**Conditional Statements**

- `if`
- `else`
- `else if`
- Nested conditions

**Switch Statement**

- `switch`
- `case`
- `default`
- `break`

**Loops**

- `for`
- `while`
- `do...while`

**Loop Control**

- `break`
- `continue`

Special Loop Forms

- `for...of`
- `for...in`

Other Control-Flow Concepts

- Conditional expressions
- Early return
- Nested control flow

Some topics, such as asynchronous control flow and error-handling control flow, will be treated separately because they involve concepts beyond basic sequential execution.

---

## 3. `if` Statement

The if statement executes a block of code only when a condition is truthy.

**Syntax**

```js
if (condition) {
  // code
}
```

Example:

```js
const age = 20;

if (age >= 18) {
  console.log("You are an adult");
}
```

Since `age >= 18` evaluates to `true`, the block executes.

---

## 4. Conditions and Boolean Values

Conditions are commonly created using comparison operators.

```js
const score = 80;

if (score >= 50) {
  console.log("Passed");
}
```

The condition:

```js
score >= 50;
```

produces:

```js
true;
```

Logical operators can also be used:

```js
const age = 25;
const hasTicket = true;

if (age >= 18 && hasTicket) {
  console.log("Entry allowed");
}
```

> The detailed behavior of operators is covered in the `Operators` topic.

---

## 5. Truthy and Falsy Conditions
