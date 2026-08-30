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
