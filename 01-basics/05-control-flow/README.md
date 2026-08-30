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

JavaScript does not require a condition to literally be `true` or `false`.

Values are converted to their truthiness when used as conditions.

For example:

```js
if ("hello") {
  console.log("Runs");
}
```

An empty string is falsy:

```js
if ("") {
  console.log("This does not run");
}
```

Some commonly known falsy values are:

```text
false
0
-0
0n
""
null
undefined
NaN
```

Most other values are truthy.

Example:

```js
const username = "Alex";

if (username) {
  console.log("Username exists");
}
```

The detailed concept of truthy and falsy values was introduced in the Data Types and Operators topics.

---

## 6. `if...else`

The `else` block executes when the `if` condition is falsy.

Syntax

```js
if (condition) {
  // if true
} else {
  // if false
}
```

Example:

```js
const age = 16;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

Output:

```text
Minor
```

---

## 7. `else if`

When there are multiple possible conditions, use `else if`.

```js
const score = 75;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("Needs improvement");
}
```

JavaScript checks the conditions from top to bottom.

> Once one condition is truthy, it's block executes and the remaining `else if` conditions are skipped.

---

## 8. Order of Conditions Matters

Consider:

```js
const score = 95;

if (score >= 50) {
  console.log("Pass");
} else if (score >= 90) {
  console.log("Excellent");
}
```

Output:

```text
Pass
```

The second condition is never reached because the first condition is already true.

A better order is:

```js
if (score >= 90) {
  console.log("Excellent");
} else if (score >= 50) {
  console.log("Pass");
}
```

> The order of conditions can therefore affect program behavior.

---

## 9. Nested `if`

An `if` statement can exist inside another `if` statement.

```js
const isLoggedIn = true;
const isAdmin = true;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("Admin dashboard");
  }
}
```

Nested conditions can be useful, but excessive nesting can make code difficult to understand.

Sometimes logical operators can simplify the same logic:

```js
if (isLoggedIn && isAdmin) {
  console.log("Admin dashboard");
}
```

---

## 10. `switch` Statement

The `switch` statement is useful when you want to compare one value against multiple possible cases.

Syntax

```js
switch (expression) {
  case value1:
    // code
    break;

  case value2:
    // code
    break;

  default:
  // code
}
```

Example:

```js
const day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day");
}
```

Output:

```text
Tuesday
```

---

## 11. `break` in `switch`

The `break` statement stops execution of the current `switch`.

Without `break`, JavaScript can continue executing subsequent cases.

Example:

```js
const number = 1;

switch (number) {
  case 1:
    console.log("One");

  case 2:
    console.log("Two");
}
```

Output:

```text
One
Two
```

This behavior is called **fall-through**.

Adding `break` prevents it:

```js
const number = 1;

switch (number) {
  case 1:
    console.log("One");
    break;

  case 2:
    console.log("Two");
    break;
}
```

Output:

```text
One
```

---

## 12. `default` in `switch`

The `default` block executes when no case matches.

```js
const role = "guest";

switch (role) {
  case "admin":
    console.log("Admin");
    break;

  case "user":
    console.log("User");
    break;

  default:
    console.log("Guest");
}
```

Output:

```text
Guest
```

`default` is optional.

---

## 13. Grouping Multiple Cases

Multiple cases can execute the same code.

```js
const day = "Saturday";

switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;

  default:
    console.log("Weekday");
}
```

Output:

```text
Weekend
```

This is a controlled use of fall-through.

---

## 14. `switch` vs `if...else`

Both can be used to make decisions, but they are useful in different situations.

Use `if...else` when:

- Conditions involve ranges
- Conditions involve multiple expressions
- Conditions are complex
- Different comparisons are needed

Example:

```js
if (score >= 90) {
  console.log("Excellent");
} else if (score >= 50) {
  console.log("Pass");
}
```

Use `switch` when:

- One value is being compared against several specific values
- There are many discrete cases

Example:

```js
switch (status) {
  case "pending":
    console.log("Waiting");
    break;

  case "approved":
    console.log("Approved");
    break;

  case "rejected":
    console.log("Rejected");
    break;
}
```

---

## 15. `for` Loop

A `for` loop repeats a block of code while a condition remains true.

Syntax

```js
for (initialization; condition; update) {
  // code
}
```

Example:

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

The three parts are:

```text
initialization → condition → update
```

---

## 16. How a `for` Loop Works

Consider:

```js
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```

Execution happens approximately like this:

```md
1. let i = 1
2. Check i <= 3
3. Execute loop body
4. Execute i++
5. Check condition again
6. Repeat
```

Eventually:

```text
i = 4
```

The condition becomes false and the loop stops.

---

## 17. `while` Loop

A `while` loop executes while its condition is truthy.

Syntax

```js
while (condition) {
  // code
}
```

Example:

```js
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}
```

Output:

```text
1
2
3
4
5
```

The condition is checked before each iteration.

---

## 18. Infinite `while` Loops

Be careful to update the condition inside a `while` loop.

This can create an infinite loop:

```js
let count = 1;

while (count <= 5) {
  console.log(count);
}
```

`count` never changes, so the condition remains true forever.

Correct:

```js
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}
```

---

## 19. `do...while` Loop

A `do...while` loop executes its body at least once before checking the condition.

Syntax

```js
do {
  // code
} while (condition);
```

Example:

```js
let count = 1;

do {
  console.log(count);
  count++;
} while (count <= 5);
```

Output:

```text
1
2
3
4
5
```

---

## 20. `while` vs `do...while`

The main difference is when the condition is checked.

`while`

```text
Check condition
      ↓
If true → execute
      ↓
Check again
```

`do...while`

```text
Execute first
      ↓
Check condition
      ↓
If true → execute again
```

Example:

```js
let count = 10;

while (count < 5) {
  console.log("while");
}
```

Nothing is printed.

But:

```js
let count = 10;

do {
  console.log("do...while");
} while (count < 5);
```

Output:

```text
do...while
```

---

## 21. `break`

The `break` statement immediately terminates a loop or `switch`.

Example:

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}
```

Output:

```text
1
2
3
4
```

When `i` becomes `5`, the loop stops.

---

## 22. `continue`

The `continue` statement skips the current iteration and moves to the next iteration.

Example:

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

Output:

```text
1
2
4
5
```

Only the iteration where `i === 3` is skipped.

---

## 23. `break` vs `continue`

The difference is important:

`break`

Stops the entire loop.

```text
1
2
3
STOP
```

`continue`

Skips the current iteration but continues the loop.

```text
1
2
SKIP 3
4
5
```

---

## 24. Nested Loops

A loop can contain another loop.

Example:

```js
for (let row = 1; row <= 3; row++) {
  for (let column = 1; column <= 3; column++) {
    console.log(row, column);
  }
}
```

The inner loop completes its iterations for each iteration of the outer loop.

Nested loops are useful for problems involving:

- Grids
- Tables
- Matrices
- Combinations
- Multi-dimensional data

> However, unnecessary nested loops can make code slower and harder to understand.

---

## 25. `for...of`

The `for...of` loop iterates over the values of an iterable.

It is commonly used with arrays and strings.

Example:

```js
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

Output:

```text
Apple
Banana
Mango
```

With a string:

```js
const language = "JavaScript";

for (const character of language) {
  console.log(character);
}
```

`for...of` is primarily concerned with **values**.

---

## 26. `for...in`

The `for...in` loop iterates over enumerable property keys of an object.

Example:

```js
const user = {
  name: "Alex",
  age: 25,
  role: "Developer",
};

for (const key in user) {
  console.log(key);
}
```

Output:

```text
name
age
role
```

You can use the key to access its value:

```js
for (const key in user) {
  console.log(key, user[key]);
}
```

`for...in` is primarily concerned with **property keys**.

---

## 27. `for...of` vs `for...in`

This is a common interview question.

`for...of`

Iterates over values:

```js
const numbers = [10, 20, 30];

for (const number of numbers) {
  console.log(number);
}
```

Output:

```text
10
20
30
```

`for...in`

Iterates over property keys:

```js
const user = {
  name: "Alex",
  age: 25,
};

for (const key in user) {
  console.log(key);
}
```

Output:

```text
name
age
```

A useful rule:

> for...of → values
> for...in → keys

For arrays, `for...of` is generally the more appropriate choice when you want array elements.

---

## 28. Early Return

Inside a function, `return` can be used to stop execution of the function early.

Example:

```js
function checkAge(age) {
  if (age < 18) {
    return "Access denied";
  }

  return "Access granted";
}

console.log(checkAge(16));
```

Output:

```text
Access denied
```

This style can reduce unnecessary nesting.

The `return` statement will be covered in more detail in the **Functions** topic.

---

## 29. Combining Control-Flow Statements

Real programs commonly combine multiple control-flow structures.

Example:

```js
const products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
  { name: "Keyboard", stock: 10 },
];

for (const product of products) {
  if (product.stock > 0) {
    console.log(`${product.name} is available`);
  } else {
    console.log(`${product.name} is out of stock`);
  }
}
```

This combines:

- `for...of`
- `if...else`
- Comparison
- Object property access

---

## 30. Practical Example: Login Check

```js
const isLoggedIn = true;
const isVerified = true;

if (!isLoggedIn) {
  console.log("Please log in");
} else if (!isVerified) {
  console.log("Please verify your account");
} else {
  console.log("Welcome");
}
```

The program checks conditions in order and chooses one execution path.

---

## 31. Practical Example: Grade Calculator

```js
const score = 85;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else if (score >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}
```

This demonstrates ordered conditional logic.

---

## 32. Practical Example: Menu Selection

```js
const option = 2;

switch (option) {
  case 1:
    console.log("View profile");
    break;

  case 2:
    console.log("View orders");
    break;

  case 3:
    console.log("Settings");
    break;

  default:
    console.log("Invalid option");
}
```

A `switch` statement works well when there are multiple discrete choices.

---

## 33. Practical Example: Searching for an Item

```js
const products = ["Laptop", "Phone", "Keyboard", "Mouse"];
const target = "Keyboard";

for (const product of products) {
  if (product === target) {
    console.log("Product found");
    break;
  }
}
```

Once the product is found, `break` stops unnecessary iterations.

---

## 34. Practical Example: Skip Unavailable Products

```js
const products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
  { name: "Keyboard", stock: 10 },
];

for (const product of products) {
  if (product.stock === 0) {
    continue;
  }

  console.log(`${product.name} is available`);
}
```

`continue` allows the program to skip products that are unavailable.

---

## 35. Common Mistakes

**Mistake 1: Using `=` instead of a comparison**

Incorrect:

```js
if ((age = 18)) {
  console.log("Adult");
}
```

The `=` operator performs assignment.

Use an appropriate comparison:

```js
if (age === 18) {
  console.log("Adult");
}
```

**Mistake 2: Incorrect condition order**

```js
if (score >= 50) {
  console.log("Pass");
} else if (score >= 90) {
  console.log("Excellent");
}
```

The `score >= 90` condition will never be reached for scores above 90 because the first condition already matches.

Put more specific or higher thresholds first when appropriate.

**Mistake 3: Forgetting `break` in `switch`**

```js
switch (status) {
  case "approved":
    console.log("Approved");

  case "rejected":
    console.log("Rejected");
}
```

This can cause unintended fall-through.

**Mistake 4: Creating an infinite loop**

```js
let count = 1;

while (count <= 10) {
  console.log(count);
}
```

The loop condition never changes.

Make sure the loop can eventually reach a terminating condition.

**Mistake 5: Accidentally skipping important code with `continue`**

Be careful when using `continue` because it skips the rest of the current iteration.

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }

  // code here will not execute when i === 2
}
```

**Mistake 6: Excessive nesting**

Deeply nested control flow can become difficult to understand.

Instead of:

```js
if (condition1) {
  if (condition2) {
    if (condition3) {
      // ...
    }
  }
}
```

look for opportunities to simplify the logic.

**Mistake 7: Using `for...in` for array values**

If you want array elements:

```js
const numbers = [10, 20, 30];

for (const number of numbers) {
  console.log(number);
}
```

`for...in` gives property keys rather than the values themselves.

---

## 36. Choosing the Right Control Flow

A simple guideline:

| Situation                       | Common choice |
| ------------------------------- | ------------- |
| One condition                   | `if`          |
| Two possible paths              | `if...else`   |
| Multiple conditions             | `else if`     |
| Many specific values            | `switch`      |
| Known number of iterations      | `for`         |
| Unknown number of iterations    | `while`       |
| Body must execute at least once | `do...while`  |
| Iterate over values             | `for...of`    |
| Iterate over object keys        | `for...in`    |
| Stop a loop                     | `break`       |
| Skip an iteration               | `continue`    |

The "right" choice ultimately depends on readability and the problem being solved.

---

## 37. Key Takeaways

- Control flow determines the order in which code executes.
- `if` executes code when a condition is truthy.
- `else` provides an alternative path.
- `else if` allows multiple conditions to be checked.
- Conditions are commonly built using comparison and logical operators.
- JavaScript uses truthy and falsy values in conditions.
- `switch` is useful for multiple specific cases.
- `break` prevents unwanted `switch` fall-through.
- `for` is useful when the iteration structure is known.
- `while` checks its condition before each iteration.
- `do...while` executes at least once before checking its condition.
- `break` terminates a loop.
- `continue` skips the current iteration.
- Nested loops allow repeated operations inside repeated operations.
- `for...of` iterates over values.
- `for...in` iterates over enumerable property keys.
- Good control flow should be readable and predictable.
- Avoid unnecessary nesting and infinite loops.

---

## 38. Interview Questions

**Basic**

1. What is control flow?
2. Why is control flow important in programming?
3. What is the difference between sequential execution and conditional execution?
4. What is an `if` statement?
5. What is the purpose of `else`?
6. What is the purpose of `else if`?
7. What values can be used as conditions in JavaScript?
8. What are truthy and falsy values?

**Conditional Statements**

9. What is the difference between `if...else` and `else if`?
10. Can an `if` statement exist inside another `if` statement?
11. What problems can excessive nesting cause?
12. How does JavaScript evaluate an `if...else if...else` chain?
13. Why does the order of conditions matter?

**Switch**

14. What is a `switch` statement?
15. When should you use `switch` instead of `if...else`?
16. What happens if you forget `break` in a `switch` case?
17. What is fall-through?
18. What is the purpose of `default`?
19. Can multiple `case` clauses execute the same code?

**Loops**

20. What is a loop?
21. What are the main loop types in JavaScript?
22. What is the difference between `for` and `while`?
23. What is the difference between `while` and `do...while`?
24. Why does a `do...while` loop always execute at least once?
25. What causes an infinite loop?
26. How can you stop a loop early?

**`break` and `continue`**

27. What does `break` do?
28. What does `continue` do?
29. What is the difference between `break` and `continue`?
30. Can `break` be used with `switch`?
31. What happens to the remaining code in the current iteration after `continue`?

**`for...of` and `for...in`**

32. What is the difference between `for...of` and `for...in`?
33. What does `for...of` iterate over?
34. What does `for...in` iterate over?
35. Which is generally more appropriate for iterating over array values?
36. Can `for...of` be used with strings?
37. Why should you be careful when using `for...in` with arrays?

**Output / Reasoning**

38. What is the output?

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

39. What is the output?

```js
let count = 5;

while (count > 2) {
  console.log(count);
  count--;
}
```

40. What happens here?

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

41. What happens if the update expression of a loop never changes the condition?
42. What is the output of a `switch` statement when `break` is missing?

---

## 39. Practice

> Try to solve these exercises yourself before looking for solutions.

**Exercise 1 — Positive, Negative, or Zero**

Create a program that checks whether a number is:

- Positive
- Negative
- Zero

Use `if...else if...else`.

**Exercise 2 — Even or Odd**

Create a program that checks whether a number is even or odd.

Use the remainder operator and a conditional statement.

**Exercise 3 — Age Category**

Create a program that categorizes a person's age:

```text
0–12    → Child
13–17   → Teenager
18–59   → Adult
60+     → Senior
```

Use `if...else if...else`.

**Exercise 4 — Grade Calculator**

Create a program that converts a score into a grade:

```text
90–100   → A
80–89    → B
70–79    → C
60–69    → D
Below 60 → F
```

Think carefully about the order of your conditions.

**Exercise 5 — Largest of Two Numbers**

Given two numbers, determine which one is larger.

Also handle the case where both numbers are equal.

**Exercise 6 — Largest of Three Numbers**

Given three numbers, determine the largest number.

Try solving it using conditional statements.

**Exercise 7 — Login System**

Create:

```js
const isLoggedIn = true;
const isVerified = false;
```

Display:

- `"Please log in"` if the user is not logged in.
- `"Please verify your account"` if logged in but not verified.
- `"Welcome"` if both conditions are satisfied.

**Exercise 8 — Day of the Week**

Create a `switch` statement that accepts a number from `1` to `7` and prints the corresponding day.

Example:

```text
1 → Monday
2 → Tuesday
...
7 → Sunday
```

Handle invalid numbers using `default`.

**Exercise 9 — Menu System**

Create a menu using `switch`:

```text
1 → View Profile
2 → View Orders
3 → Settings
4 → Logout
```

Print the appropriate message for each option.

**Exercise 10 — Print Numbers**

Use a `for` loop to print:

```text
1
2
3
...
100
```

**Exercise 11 — Countdown**

Use a loop to print:

```text
10
9
8
...
1
```

Then print:

```text
Go!
```

**Exercise 12 — Sum of Numbers**

Calculate the sum of numbers from `1` to `100`.

Expected result:

```text
5050
```

Try solving it using a `for` loop.

**Exercise 13 — Multiplication Table**

Create a program that prints the multiplication table of a given number.

For example, for `5`:

```text
5 × 1 = 5
5 × 2 = 10
...
5 × 10 = 50
```

**Exercise 14 — Even Numbers**

Print all even numbers between `1` and `100`.

**Exercise 15 — Odd Numbers**

Print all odd numbers between `1` and `100`.

**Exercise 16 — `while` Loop**

Use a `while` loop to print numbers from `1` to `10`.

Do not use a `for` loop.

**Exercise 17 — do...while**

Create a `do...while` loop that prints numbers from `1` to `5`.

Then change the initial value so that the condition is false from the beginning.

Observe what happens.

**Exercise 18 — Break**

Create a loop from `1` to `100`.

Stop the loop when the number reaches `25`.

The number `25` should not be printed.

**Exercise 19 — Continue**

Create a loop from `1` to `20`.

Skip all numbers divisible by `3`.

Print the remaining numbers.

**Exercise 20 — Search**

Given:

```js
const numbers = [10, 25, 30, 45, 50, 75];
```

Search for a specific number.

Once you find it, stop the loop using `break`.

**Exercise 21 — Skip Unavailable Products**

Given:

```js
const products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
  { name: "Keyboard", stock: 10 },
  { name: "Mouse", stock: 0 },
];
```

Print only products that are currently available.

Use `continue`.

**Exercise 22 — `for...of`**

Given:

```js
const fruits = ["Apple", "Banana", "Mango", "Orange"];
```

Use `for...of` to print every fruit.

**Exercise 23 — for...in**

Given:

```js
const user = {
  name: "Alex",
  age: 25,
  role: "Developer",
};
```

Use `for...in` to print every property key.

Then print both the key and its value.

**Exercise 24 — Nested Loop**

Use nested `for` loops to produce:

```text
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
```

**Exercise 25 — Number Pattern**

Use nested loops to produce:

```text
*
**
***
****
*****
```

**Exercise 26 — FizzBuzz**

Print numbers from `1` to `100`.

Rules:

- Multiples of 3 → "Fizz"
- Multiples of 5 → "Buzz"
- Multiples of both → "FizzBuzz"
- Otherwise → print the number

Pay attention to the order of your conditions.

**Exercise 27 — Find the First Positive Number**

Given:

```js
const numbers = [-5, -2, -8, 0, 4, 10, 20];
```

Find the first positive number.

Once found, stop searching.

**Exercise 28 — Count Positive Numbers**

Given an array of numbers, count how many numbers are positive.

Example:

```js
const numbers = [-2, 5, 10, -3, 0, 7];
```

Expected result:

```text
3
```

**Exercise 29 — Simple Shopping Cart**

Given:

```js
const cart = [
  { name: "Laptop", price: 800, quantity: 1 },
  { name: "Mouse", price: 20, quantity: 2 },
  { name: "Keyboard", price: 50, quantity: 1 },
];
```

Use a loop to calculate the total cart price.

**Exercise 30 — Mini Challenge: Order Status**

Create a program using `switch` that handles these order statuses:

- pending
- confirmed
- processing
- shipped
- delivered
- cancelled

For each status, print an appropriate message.

Handle an unknown status using `default`.

**Exercise 31 — Mini Challenge: Login Attempts**

Create a program that allows a user a maximum of `3` login attempts.

Rules:

- If the password is correct, print `"Login successful"` and stop.
- If incorrect, allow another attempt.
- After 3 failed attempts, print `"Account temporarily locked"`.
- Use a loop and `break`.

**Exercise 32 — Challenge: Prime Number**

Given a number, determine whether it is a prime number.

Use loops and conditional statements.

Do not use any external library.

**Exercise 33 — Challenge: Number Guessing Logic**

Create a simple number-guessing program.

Given:

```js
const secretNumber = 42;
```

Check guesses and display:

- `"Too low"`
- `"Too high"`
- `"Correct"`

Use control-flow statements to implement the logic.

**Exercise 34 — Debugging Challenge**

Find the problem in this code:

```js
let count = 1;

while (count <= 10) {
  console.log(count);
}
```

Explain why the loop does not terminate and fix it.

**Exercise 35 — Debugging Challenge**

Find the problem:

```js
const score = 95;

if (score >= 50) {
  console.log("Pass");
} else if (score >= 90) {
  console.log("Excellent");
}
```

Fix the condition order so that a score of `95` produces the correct result.

**Exercise 36 — Output Prediction**

Without running the code, predict the output:

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

Then explain why `3` is missing.

**Exercise 37 — Output Prediction**

Predict the output:

```js
const value = 2;

switch (value) {
  case 1:
    console.log("One");
    break;

  case 2:
    console.log("Two");

  case 3:
    console.log("Three");
    break;

  default:
    console.log("Other");
}
```

Explain the role of `break`.

**Exercise 38 — Final Control-Flow Challenge**

Build a small **ATM menu program**.

The menu should contain:

```md
1. Check Balance
2. Deposit
3. Withdraw
4. Exit
```

Requirements:

- Use switch for menu selection.
- Use conditions for withdrawal validation.
- Prevent withdrawal when the balance is insufficient.
- Use a loop so the menu can appear repeatedly.
- Exit the program when the user selects Exit.

> Try to combine as many control-flow concepts from this chapter as possible.
