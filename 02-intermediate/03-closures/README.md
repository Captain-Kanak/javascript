# Closures

A **closure** is created when a function remembers and can access variables from its outer lexical scope, even after the outer function has finished executing.

Closures are one of the most important concepts in JavaScript.

They are heavily used in:

- Data privacy
- Function factories
- Callbacks
- Event handlers
- Asynchronous JavaScript
- Modules
- Memoization
- Function composition
- React hooks and components
- State management

---

## 1. What Is a Closure?

Consider this example:

```js
function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();
```

Output:

```text
Hello
```

The `inner()` function can access `message` because `message` belongs to its outer lexical scope.

This is the basic idea behind closures.

---

## 2. A Closure in Simple Words

A closure is:

> A function together with the lexical environment in which it was created.

In simpler terms:

> A function can remember variables from where it was created.

For example:

```js
function outer() {
  let name = "Alice";

  function inner() {
    console.log(name);
  }

  return inner;
}
```

Here, `inner` remembers `name`.

---

## 3. Lexical Scope and Closures

Closures are based on **lexical scope**.

Lexical scope means that the scope of a variable is determined by where the code is written.

Example:

```js
function outer() {
  const message = "Hello";

  function inner() {
    console.log(message);
  }
}
```

The `inner` function is physically written inside `outer`.

Therefore, `inner` has access to variables from `outer`.

---

## 4. Basic Closure Example

```js
function createGreeting() {
  const message = "Hello";

  return function () {
    console.log(message);
  };
}

const greet = createGreeting();

greet();
```

Output:

```text
Hello
```

At first, this may look surprising.

`createGreeting()` has already finished executing.

Yet:

```js
greet();
```

can still access:

```text
message
```

This is because the returned function forms a closure over its outer environment.

---

## 5. What Happens When the Outer Function Finishes?

Consider:

```js
function outer() {
  const value = 100;

  return function inner() {
    console.log(value);
  };
}

const result = outer();

result();
```

Execution can be understood like this:

```text
outer()
  │
  ├── value = 100
  │
  └── returns inner()
          │
          └── remembers value
```

After:

```js
outer();
```

finishes, the returned function still has access to `value`.

That is the important behavior provided by closures.

---

## 6. Closure Example with a Counter

One of the most common examples of closures is a counter.

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
console.log(counter());
```

Output:

```text
1
2
3
```

The returned function remembers:

```text
count
```

between function calls.

---

## 7. Why Does the Counter Remember `count`?

The variable:

```js
let count = 0;
```

belongs to `createCounter()`.

The returned function references `count`:

```js
return function () {
  count++;
  return count;
};
```

Because of the closure, the returned function maintains access to `count`.

Therefore:

```js
counter();
```

does not create a new `count`.

It uses the same captured variable.

---

## 8. Closures Preserve References to Variables

Consider:

```js
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();

counter();
counter();
counter();
```

Output:

```text
1
2
3
```

The closure has access to the same `count` binding.

It is not simply storing a copy of the original value.

---

## 9. Multiple Closures Can Have Separate State

Consider:

```js
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA());
console.log(counterA());

console.log(counterB());
console.log(counterB());
```

Output:

```text
1
2
1
2
```

Why?

Each call to:

```js
createCounter();
```

creates a new execution environment.

Therefore:

```text
counterA → its own count
counterB → its own count
```

They do not share the same variable.

---

## 10. Closure and Function Factory

Closures allow us to create function factories.

A function factory is a function that creates and returns another function.

Example:

```js
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}
```

Now:

```js
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));
```

Output:

```text
10
15
```

The returned functions remember their respective `multiplier` values.

---

## 11. How the Function Factory Works

When we execute:

```js
const double = createMultiplier(2);
```

the returned function remembers:

```js
multiplier = 2;
```

When we execute:

```js
const triple = createMultiplier(3);
```

the returned function remembers:

```js
multiplier = 3;
```

So:

```text
double → multiplier = 2

triple → multiplier = 3
```

---

## 12. Closure with Parameters

Function parameters can also be captured.

```js
function createMessage(name) {
  return function () {
    return `Hello, ${name}`;
  };
}

const message = createMessage("Alice");

console.log(message());
```

Output:

```text
Hello, Alice
```

The returned function remembers the `name` parameter.

---

## 13. Closures and Private Variables

Closures can be used to create private state.

Example:

```js
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
    },

    getBalance() {
      return balance;
    },
  };
}
```

Usage:

```js
const account = createBankAccount(1000);

account.deposit(500);

console.log(account.getBalance());
```

Output:

```text
1500
```

But this does not work:

```js
console.log(account.balance);
```

because `balance` is not directly exposed.

---

## 14. Closure-Based Data Privacy

Consider:

```js
function createUser() {
  let password = "secret";

  return {
    getPassword() {
      return password;
    },
  };
}

const user = createUser();

console.log(user.getPassword());
```

The `password` variable is private to the closure.

It cannot be accessed directly:

```js
console.log(user.password);
```

because no such property was created.

---

## 15. Closures with Multiple Methods

Closures become particularly useful when several functions share the same private state.

```js
function createAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
    },

    withdraw(amount) {
      balance -= amount;
    },

    getBalance() {
      return balance;
    },
  };
}
```

Usage:

```js
const account = createAccount(1000);

account.deposit(500);
account.withdraw(200);

console.log(account.getBalance());
```

Output:

```text
1300
```

All three methods close over the same `balance`.

---

## 16. Closure Scope Chain

A closure can access:

- Its own variables
- Variables from its outer function
- Variables from outer lexical scopes
- Global variables

Example:

```js
const globalValue = "global";

function outer() {
  const outerValue = "outer";

  function inner() {
    const innerValue = "inner";

    console.log(innerValue);
    console.log(outerValue);
    console.log(globalValue);
  }

  inner();
}

outer();
```

The lookup process follows the scope chain.

---

## 17. Closure and Scope Chain

Consider:

```js
function outer() {
  let value = 10;

  function inner() {
    console.log(value);
  }

  return inner;
}
```

The `inner` function can find `value` through its lexical scope.

Conceptually:

```text
inner scope
     ↓
outer scope
     ↓
global scope
```

If JavaScript cannot find a variable in the current scope, it searches outward through the scope chain.

---

## 18. Closures and Shadowing

Closures still follow normal lexical scope rules.

Example:

```js
const value = "global";

function outer() {
  const value = "outer";

  return function () {
    console.log(value);
  };
}

const result = outer();

result();
```

Output:

```text
outer
```

The inner function finds the nearest matching `value`.

It does not use the global `value`.

---

## 19. Closures Capture the Lexical Environment

Consider:

```js
function outer() {
  let value = 10;

  return function () {
    console.log(value);
  };
}
```

The returned function does not search for `value` based on where it is eventually called.

It remembers the lexical environment where it was created.

This is an important property of closures.

---

## 20. Closure Location vs Calling Location

Consider:

```js
function outer() {
  const value = 10;

  return function () {
    console.log(value);
  };
}

const fn = outer();

function another() {
  const value = 20;

  fn();
}

another();
```

Output:

```text
10
```

It does not output:

```text
20
```

Why?

Because `fn` was created inside `outer()`.

Its lexical environment is associated with `outer()`.

The place where `fn()` is called does not change that lexical relationship.

---

## 21. Closures with `setTimeout`

Closures are commonly used with asynchronous operations.

Example:

```js
function createMessage() {
  const message = "Hello";

  setTimeout(() => {
    console.log(message);
  }, 1000);
}

createMessage();
```

Even after `createMessage()` finishes, the callback can still access:

```text
message
```

because the callback forms a closure.

---

## 22. Closures with Callbacks

Consider:

```js
function processUser(name, callback) {
  callback();
}
```

A callback can close over variables from its surrounding scope.

```js
function processUser(name) {
  return function () {
    console.log(`Processing ${name}`);
  };
}

const process = processUser("Alice");

process();
```

The returned function remembers `name`.

---

## 23. Closures in Event Handlers

Closures are frequently used with event handlers.

Example:

```js
function createHandler(message) {
  return function () {
    console.log(message);
  };
}
```

A UI event handler can keep access to values from the environment in which it was created.

This pattern is common in browser applications and frontend frameworks.

---

## 24. Closure with Loops

Closures and loops are a very common interview topic.

Consider:

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

The output is:

```text
3
3
3
```

Why?

Because `var` is function-scoped.

All callbacks refer to the same `i`.

By the time the callbacks execute, the loop has completed and:

```text
i === 3
```

---

## 25. Loop Closure with `let`

Now consider:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Output:

```text
0
1
2
```

`let` creates a separate binding for each loop iteration.

Therefore, each callback closes over its corresponding `i`.

Conceptually:

```text
Callback 1 → i = 0
Callback 2 → i = 1
Callback 3 → i = 2
```

---

## 26. Why `var` and `let` Behave Differently

With `var`:

```text
One shared binding

i
│
├── callback
├── callback
└── callback
```

All callbacks access the same variable.

With `let`:

```text
Iteration 1 → i = 0 → callback
Iteration 2 → i = 1 → callback
Iteration 3 → i = 2 → callback
```

Each iteration gets its own binding.

---

## 27. Closure with an IIFE

Before `let` and `const` became standard, an IIFE was commonly used to create separate scopes.

Example:

```js
for (var i = 0; i < 3; i++) {
  (function (index) {
    setTimeout(() => {
      console.log(index);
    }, 1000);
  })(i);
}
```

Output:

```text
0
1
2
```

The IIFE creates a new function scope for each iteration.

The callback closes over:

```text
index
```

---

## 28. Closures and State

Closures are useful for maintaining state between function calls.

Example:

```js
function createScore() {
  let score = 0;

  return {
    increase() {
      score++;
    },

    decrease() {
      score--;
    },

    getScore() {
      return score;
    },
  };
}
```

Usage:

```js
const score = createScore();

score.increase();
score.increase();
score.decrease();

console.log(score.getScore());
```

Output:

```text
1
```

The state remains available because of the closure.

---

## 29. Closure-Based Encapsulation

Closures can hide implementation details.

```js
function createTodoManager() {
  const todos = [];

  return {
    add(todo) {
      todos.push(todo);
    },

    getAll() {
      return [...todos];
    },
  };
}
```

Usage:

```js
const manager = createTodoManager();

manager.add("Learn JavaScript");
manager.add("Practice closures");

console.log(manager.getAll());
```

The `todos` array is not directly exposed.

---

## 30. Why Return a Copy?

Consider:

```js
function createTodoManager() {
  const todos = [];

  return {
    add(todo) {
      todos.push(todo);
    },

    getAll() {
      return [...todos];
    },
  };
}
```

Returning:

```text
[...todos]
```

creates a new array.

This prevents callers from directly modifying the internal array.

Without the copy:

```js
getAll() {
  return todos;
}
```

external code could modify the private array directly.

Closures provide the private state; defensive copying provides additional protection around that state.

---

## 31. Closures and Memoization

Closures can be used to store previously calculated results.

Example:

```js
function createMultiplier(multiplier) {
  const cache = new Map();

  return function (number) {
    if (cache.has(number)) {
      return cache.get(number);
    }

    const result = number * multiplier;

    cache.set(number, result);

    return result;
  };
}
```

The returned function remembers both:

```text
multiplier
```

and:

```text
cache
```

This is one way closures can help implement memoization.

---

## 32. Closure and Independent State

Each invocation of a function that creates a closure can produce independent state.

```js
function createCounter() {
  let count = 0;

  return () => ++count;
}

const first = createCounter();
const second = createCounter();

console.log(first());
console.log(first());

console.log(second());
console.log(second());
```

Output:

```text
1
2
1
2
```

Each closure has its own `count`.

---

## 33. Closure Does Not Mean Copying Values

Consider:

```js
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}
```

The closure does not simply store:

```text
count = 0
```

as an independent copied value every time.

It maintains access to the variable binding.

Therefore:

```js
counter();
```

can modify the same `count`:

```js
count++;
```

---

## 34. Closures and Garbage Collection

Closures can keep variables alive as long as those variables are reachable through the closure.

Example:

```js
function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counter = createCounter();
```

As long as `counter` can access the returned function, the captured state may remain reachable.

When the closure is no longer reachable, the captured data can eventually become eligible for garbage collection, assuming nothing else references it.

---

## 35. Closures Can Consume Memory

Closures are useful, but unnecessarily retaining large objects can increase memory usage.

For example:

```js
function createHandler() {
  const largeData = createLargeData();

  return function () {
    console.log(largeData);
  };
}
```

The returned function keeps access to `largeData`.

If the function remains reachable for a long time, the captured data may also remain reachable.

Therefore:

> Closures are not inherently a memory problem, but unnecessary long-lived references can increase memory usage.

---

## 36. Closure vs Scope

These concepts are related but different.

**Scope**

Scope determines where a variable can be accessed.

```js
function outer() {
  const value = 10;

  console.log(value);
}
```

**Closure**

A closure occurs when a function retains access to variables from its outer lexical environment.

```js
function outer() {
  const value = 10;

  return function () {
    console.log(value);
  };
}
```

A simple way to remember:

```text
Scope   → where variables are accessible

Closure → function remembers/accesses outer variables
```

---

## 37. Closure vs Lexical Scope

Lexical scope determines the environment available to a function based on where it was written.

Closure is the behavior where a function retains access to that environment after the surrounding execution has finished.

```text
Lexical Scope
     ↓
Determines variable lookup

Closure
     ↓
Preserves access to outer environment
```

---

## 38. Closure vs Execution Context

These concepts should not be confused.

**Execution Context**

Represents the environment in which JavaScript executes code.

**Closure**

Describes a function retaining access to its surrounding lexical environment.

For example:

```js
function outer() {
  const value = 10;

  return function inner() {
    console.log(value);
  };
}
```

When `outer()` executes, an execution context is created.

When `inner` is returned, it retains access to the relevant lexical environment.

---

## 39. A Complete Closure Example

```js
function createAccount(initialBalance) {
  let balance = initialBalance;

  function deposit(amount) {
    balance += amount;
  }

  function withdraw(amount) {
    if (amount > balance) {
      return false;
    }

    balance -= amount;

    return true;
  }

  function getBalance() {
    return balance;
  }

  return {
    deposit,
    withdraw,
    getBalance,
  };
}
```

Usage:

```js
const account = createAccount(1000);

account.deposit(500);

console.log(account.getBalance());

account.withdraw(300);

console.log(account.getBalance());
```

Output:

```text
1500
1200
```

Here:

```text
createAccount()
       ↓
   balance
       ↓
 ┌─────┼─────────┐
 ↓     ↓         ↓
deposit withdraw getBalance
       ↓
   closure
```

All three functions retain access to the same `balance`.

---

## 40. Common Mistakes

**Mistake 1: Thinking Closures Only Happen When Returning a Function**

Returning a function is a common way to demonstrate closures, but it is not a requirement.

Example:

```js
function outer() {
  const value = 10;

  function inner() {
    console.log(value);
  }

  inner();
}
```

`inner` still has access to its outer lexical environment.

**Mistake 2: Thinking Closures Copy Variables**

Closures retain access to variable bindings.

Example:

```js
function createCounter() {
  let count = 0;

  return () => ++count;
}
```

The same `count` is updated across calls.

**Mistake 3: Confusing Calling Location with Creation Location**

A closure follows its lexical environment.

```js
function outer() {
  const value = 10;

  return () => console.log(value);
}

const fn = outer();

function another() {
  const value = 20;

  fn();
}

another();
```

Output:

```text
10
```

The function remembers where it was created.

**Mistake 4: Ignoring `var` vs `let` in Loops**

Closures combined with `var` and asynchronous callbacks can produce unexpected results.

Always understand whether callbacks share the same binding or receive separate iteration bindings.

**Mistake 5: Creating Unnecessary Long-Lived Closures**

Closures can keep referenced data reachable.

Avoid retaining large objects or unnecessary state longer than required.

---

## 41. Practical Rules

Keep these rules in mind:

**Rule 1**

A closure is associated with a function and its lexical environment.

**Rule 2**

Closures allow functions to access outer variables.

**Rule 3**

The outer function does not need to remain actively executing.

**Rule 4**

Each invocation of a closure-producing function can create independent state.

**Rule 5**

Closures follow lexical scope.

**Rule 6**

The location where a function is created matters more than where it is called.

**Rule 7**

Closures are heavily used in callbacks and asynchronous code.

**Rule 8**

Closures can provide private state and encapsulation.

---

## 42. Closure Mental Model

A useful mental model is:

```text
Function
   +
Lexical Environment
   =
Closure
```

For example:

```js
function outer() {
  const value = 10;

  return function inner() {
    console.log(value);
  };
}
```

Think of the returned function as:

```text
inner function
     +
access to outer's environment
     ↓
closure
```

---

## 43. Key Takeaways

- A closure allows a function to access variables from its outer lexical scope.
- Closures are based on lexical scope.
- A closure can continue accessing outer variables after the outer function has finished.
- Closures retain access to variable bindings rather than simply copying values.
- Each invocation of a closure-producing function can create independent state.
- Closures are commonly used for counters and function factories.
- Closures can provide private state.
- Closures are heavily used with callbacks and asynchronous operations.
- var and let behave differently in closure-based loops.
- Closures follow lexical scope, not the location where a function is called.
- Closures can help implement memoization and encapsulation.
- Closures can keep referenced data reachable, so unnecessary long-lived closures should be avoided.
- Scope, lexical scope, execution context, and closure are related but distinct concepts.

---

## 44. Interview Questions

**Beginner**

1. What is a closure in JavaScript?
2. Explain closure in simple words.
3. Why are closures important in JavaScript?
4. What is lexical scope?
5. How is lexical scope related to closures?
6. Can a function access variables from its outer scope?
7. What happens to outer variables after the outer function finishes?
8. Can a closure remember a variable between function calls?

**Intermediate**

9. How does a closure work internally at a high level?
10. Why does the following counter keep increasing?

```js
function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}
```

11. Can multiple closures have separate state?
12. What is a function factory?
13. How can closures be used to create private variables?
14. How are closures used with callbacks?
15. How are closures used with asynchronous JavaScript?
16. Explain the difference between scope and closure.
17. Does a closure copy the value of an outer variable?
18. What happens when a closure modifies a captured variable?
19. Why does `var` behave differently from `let` in closure-based loops?

**Advanced**

20. Explain the relationship between closures and lexical environments.
21. Explain why the following code prints `3` three times:

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

22. Why does changing var to let produce 0, 1, and 2?
23. Can closures cause memory problems?
24. How can closures be used for memoization?
25. How can closures provide encapsulation?
26. What happens to captured variables when a closure is no longer reachable?
27. What is the difference between a closure and an execution context?
28. Does a closure depend on where a function is called?
29. Why does a closure use lexical scope rather than dynamic scope?
30. Explain closure using scope chain and lexical environment.

---

## 45. Practice

Try solving these problems without looking at the explanations.

**Exercise 1 — Basic Closure**

What will this output?

```js
function outer() {
  const message = "Hello";

  return function () {
    console.log(message);
  };
}

const result = outer();

result();
```

Explain why.

**Exercise 2 — Counter**

Create a `createCounter()` function that returns a function.

Each call to the returned function should increase the counter by `1`.

Expected behavior:

```js
const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

**Exercise 3 — Independent Counters**

Create two counters:

```js
const counterA = createCounter();
const counterB = createCounter();
```

Make sure they maintain independent state.

Expected behavior:

```text
counterA → 1
counterA → 2
counterB → 1
counterA → 3
counterB → 2
```

**Exercise 4 — Function Factory**

Create a function:

```js
createMultiplier(multiplier);
```

It should return a function that multiplies a number by the given multiplier.

Expected behavior:

```js
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(10)); // 20
console.log(triple(10)); // 30
```

**Exercise 5 — Private State**

Create a function:

```js
createBankAccount(initialBalance);
```

The balance should not be directly accessible.

Provide methods:

```js
deposit();
withdraw();
getBalance();
```

Use closures to keep the balance private.

**Exercise 6 — Private Counter**

Create a counter where the internal count cannot be directly modified.

Provide:

```js
increment();
decrement();
getValue();
```

**Exercise 7 — Closure and Shadowing**

Predict the output:

```js
const value = "global";

function outer() {
  const value = "outer";

  return function () {
    console.log(value);
  };
}

const fn = outer();

fn();
```

Explain which `value` is accessed and why.

**Exercise 8 — Calling Location**

Predict the output:

```js
function outer() {
  const value = 10;

  return function () {
    console.log(value);
  };
}

const fn = outer();

function another() {
  const value = 20;

  fn();
}

another();
```

Explain why the result is what it is.

**Exercise 9 — Loop with `var`**

Predict the output:

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
```

Explain why.

**Exercise 10 — Loop with `let`**

Now predict:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
```

Explain why this differs from the previous exercise.

**Exercise 11 — IIFE**

Rewrite the following code so that it prints:

```text
0
1
2
```

without changing `var` to `let`.

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
```

Use an IIFE.

**Exercise 12 — Shared State**

Create a function that returns three methods:

```js
increment();
decrement();
getValue();
```

All three methods must share the same private variable through a closure.

**Exercise 13 — Message Factory**

Create:

```js
createGreeting(name);
```

It should return a function that generates a greeting.

Example:

```js
const greet = createGreeting("Alice");

console.log(greet());
```

Expected:

```text
Hello, Alice!
```

**Exercise 14 — Memoization**

Create a function that remembers previously calculated results using a closure.

For example, create a function that calculates the square of a number and stores previous results.

**Exercise 15 — Explain the Closure**

Explain the closure created in this code:

```js
function createUser(name) {
  let loginCount = 0;

  return {
    login() {
      loginCount++;
      console.log(`${name} logged in`);
    },

    getLoginCount() {
      return loginCount;
    },
  };
}
```

Identify:

```md
1. The outer variables
2. The returned functions
3. The captured variables
4. The private state
5. Why `loginCount` persists between calls
```
