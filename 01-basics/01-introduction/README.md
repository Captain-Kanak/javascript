# JavaScript Introduction

## 1. What is JavaScript?

JavaScript is a high-level, dynamically typed programming language primarily used to add behavior, logic, and interactivity to applications.

JavaScript was initially created for web browsers, but today it can run in many different environments, including browsers, servers, desktop applications, mobile applications, and command-line tools.

### Important Points

- JavaScript is dynamically typed.
- JavaScript is a high-level programming language.
- JavaScript supports multiple programming paradigms, including procedural, object-oriented, and functional programming.
- JavaScript code is executed by JavaScript engines.
- Modern JavaScript engines use techniques such as Just-In-Time (JIT) compilation.
- JavaScript is standardized through the ECMAScript specification.

### What Can JavaScript Do?

JavaScript can be used to:

- Manipulate web pages.
- Handle user interactions.
- Make HTTP requests.
- Work with APIs.
- Handle asynchronous operations.
- Build backend applications.
- Build CLI tools.
- Build desktop applications with appropriate runtimes.
- Build mobile applications with appropriate frameworks and runtimes.

### Simple Example

```js
const language = "JavaScript";

console.log(`I am learning, ${language}!`);
```

---

## 2. Why Was JavaScript Created?

JavaScript was created to make web pages more interactive and dynamic.

In the early days of the web, web pages were mostly static. Users could view information, but there was limited interaction directly inside the browser.

JavaScript was designed to allow developers to add behavior to web pages without requiring every interaction to send a request back to the server.

### Before JavaScript

A typical web application worked roughly like this:

```text
User
  ↓
Browser
  ↓
HTTP Request
  ↓
Server
  ↓
HTML Response
  ↓
Browser
```

For many interactions, the page needed to communicate with the server.

### With JavaScript

JavaScript made it possible to perform many operations directly in the browser:

```text
User
  ↓
Browser
  ↓
JavaScript
  ↓
Update Page
```

For example, JavaScript can:

- Validate a form before submitting it.
- Show or hide elements.
- Respond to button clicks.
- Change page content.
- Create animations.
- Make requests to APIs.
- Update parts of a page without reloading the entire page.

### Important Historical Point

JavaScript was created by Brendan Eich in 1995 while he was working at Netscape.

It was originally developed for the Netscape Navigator browser.

JavaScript was designed very quickly and initially had a different name, **Mocha**, which was later changed to **LiveScript** and eventually **JavaScript**.

---

## 3. JavaScript vs ECMAScript

JavaScript and ECMAScript are closely related, but they are not exactly the same thing.

### What is ECMAScript?

ECMAScript is a specification that defines the rules and features of the core JavaScript language.

It specifies things such as:

- Syntax
- Variables
- Data types
- Functions
- Objects
- Classes
- Operators
- Promises
- Modules
- Built-in objects and methods

JavaScript is an implementation of the ECMAScript specification.

### Simple Relationship

```text
ECMAScript
    ↓
Language Specification
    ↓
JavaScript implements the specification
```

### JavaScript

JavaScript is the programming language developers use.

```js
const name = "Kanak";

console.log(name);
```

### ECMAScript

ECMAScript defines how the language should behave.

For example, ECMAScript specifies how features such as `let`, `const`, functions, objects, and promises should work.

### JavaScript vs Browser APIs

Not everything available in a browser is part of ECMAScript.

For example:

```js
document.querySelector("button");
```

`document` and the DOM API are provided by the browser, not by ECMAScript itself.

Similarly:

```js
fetch("/api/users");
```

`fetch()` is a Web API provided by the runtime environment.

---

## 4. JavaScript Engine

A JavaScript engine is a program that reads, processes, and executes JavaScript code.

Different environments use different JavaScript engines.

### Popular JavaScript Engines

| Engine         | Used By                             |
| -------------- | ----------------------------------- |
| V8             | Chrome, Chromium, Node.js           |
| SpiderMonkey   | Firefox                             |
| JavaScriptCore | Safari                              |
| Chakra         | Historically used by Microsoft Edge |

### Basic Process

```text
JavaScript Source Code
        ↓
JavaScript Engine
        ↓
Parse Code
        ↓
Compile / Optimize
        ↓
Execute Code
```

Modern JavaScript engines use sophisticated compilation and optimization techniques to execute JavaScript efficiently.

### Why Do We Need an Engine?

JavaScript source code is written in a human-readable form:

```js
const result = 10 + 20;

console.log(result);
```

The computer cannot directly execute this source code as-is.

The JavaScript engine processes the code and executes the operations required by the program.

---

## 5. V8 Engine

V8 is an open-source JavaScript and WebAssembly engine developed by Google.

It is primarily written in C++ and is used by Google Chrome and Chromium-based environments.

Node.js also uses V8 to execute JavaScript.

### V8 in Chrome

```text
Chrome
  ↓
V8
  ↓
Executes JavaScript
```

### V8 in Node.js

```text
Node.js
  ↓
V8
  ↓
Executes JavaScript
```

However, Node.js is not simply V8.

Node.js combines V8 with additional components and APIs that allow JavaScript to run outside the browser.

### What V8 Does

V8 is responsible for executing JavaScript and WebAssembly.

It performs tasks such as:

- Parsing JavaScript.
- Compiling JavaScript.
- Optimizing code.
- Executing code.
- Managing JavaScript memory.
- Garbage collection.

### Important

V8 is a **JavaScript engine**, not a complete JavaScript runtime.

A runtime provides additional capabilities around the engine.

---

## 6. JavaScript Runtime

A JavaScript runtime is the environment in which JavaScript code executes.

A runtime generally contains:

```text
JavaScript Runtime
│
├── JavaScript Engine
├── APIs
├── Event Loop
├── Task Queues
└── Other Runtime Components
```

The exact components depend on the environment.

### Browser Runtime

A browser provides:

```text
Browser Runtime
│
├── JavaScript Engine
├── DOM APIs
├── Web APIs
├── Event Loop
└── Browser Features
```

For example:

```js
document.querySelector("button");
```

The DOM API is provided by the browser.

### Node.js Runtime

Node.js provides:

```text
Node.js Runtime
│
├── V8
├── Node.js APIs
├── Event Loop
├── File System APIs
├── Networking APIs
└── Other Node.js Features
```

For example:

```js
const fs = require("fs");

const data = fs.readFileSync("file.txt", "utf8");

console.log(data);
```

The file system functionality comes from Node.js, not from the ECMAScript language itself.

### Engine vs Runtime

```text
JavaScript Engine
        ↓
Executes JavaScript

JavaScript Runtime
        ↓
Provides the environment in which JavaScript executes
        ↓
Engine + APIs + other runtime features
```

---

## 7. Where Does JavaScript Run?

JavaScript can run in many environments.

### 1. Web Browsers

Examples:

- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge

Browsers provide JavaScript engines and Web APIs.

### 2. Node.js

Node.js allows JavaScript to run outside the browser.

It is commonly used for:

- Backend applications
- REST APIs
- CLI applications
- Automation
- Real-time applications
- Server-side applications

### 3. Other Runtimes

JavaScript can also run in other environments and runtimes, such as:

- Deno
- Bun
- Electron
- React Native environments
- Serverless environments

The available APIs and capabilities depend on the runtime.

---

## 8. Browser vs Node.js

Both browsers and Node.js can execute JavaScript, but they provide different environments and APIs.

### Browser

A browser is designed primarily for running web applications.

It provides APIs such as:

```js
document;
window;
localStorage;
fetch;
setTimeout;
```

Example:

```js
document.querySelector("h1").textContent = "Hello JavaScript!";
```

### Node.js

Node.js is a runtime designed to execute JavaScript outside the browser.

It provides APIs for tasks such as:

```js
fs;
path;
http;
process;
Buffer;
```

Example:

```js
console.log(process.version);
```

### Comparison

| Feature            | Browser                 | Node.js                                                |
| ------------------ | ----------------------- | ------------------------------------------------------ |
| JavaScript Engine  | Depends on browser      | V8                                                     |
| DOM                | Yes                     | No                                                     |
| `window`           | Yes                     | No                                                     |
| File System API    | Restricted browser APIs | Yes                                                    |
| Server Development | Not its primary role    | Yes                                                    |
| Web APIs           | Yes                     | Provides its own APIs and selected web-compatible APIs |

### Important Point

JavaScript itself is the language.

The available APIs depend on the runtime.

```text
JavaScript
     ↓
Runtime Environment
     ├── Browser APIs
     └── Node.js APIs
```

---

## 9. How Does JavaScript Execute Code?

At a high level, JavaScript code goes through several stages before and during execution.

```text
JavaScript Source Code
        ↓
Parsing
        ↓
Compilation / Interpretation
        ↓
Optimization
        ↓
Execution
```

Modern JavaScript engines use a combination of interpretation, compilation, and runtime optimization techniques.

### Example

```js
const a = 10;
const b = 20;

const result = a + b;

console.log(result);
```

The engine processes the source code and executes the required operations.

### Call Stack

JavaScript uses a call stack to keep track of currently executing functions.

```js
function greet() {
  console.log("Hello");
}

greet();
```

Conceptually:

```text
Call Stack

┌─────────────┐
│    greet    │
├─────────────┤
│    global   │
└─────────────┘
```

When `greet()` finishes, its execution context is removed from the stack.

### Asynchronous Operations

JavaScript can also handle asynchronous operations through the runtime environment.

A simplified view:

```text
JavaScript
    ↓
Call Stack
    ↓
Runtime APIs
    ↓
Task / Microtask Queues
    ↓
Event Loop
    ↓
Call Stack
```

The event loop and asynchronous execution will be covered in much more detail in the **Asynchronous JavaScript** section.

---

## 10. First JavaScript Program

The simplest JavaScript program can print a message to the console.

```js
console.log("Hello, JavaScript!");
```

### Running in a Browser

JavaScript can be executed using the browser's developer console.

```js
console.log("Hello from the browser!");
```

### Running with Node.js

Create a file:

```text
hello.js
```

Add:

```js
console.log("Hello from Node.js!");
```

Then run:

```bash
node hello.js
```

### Variables

JavaScript can store values in variables.

```js
const language = "JavaScript";

console.log(language);
```

### Basic Calculation

```js
const a = 10;
const b = 20;

const result = a + b;

console.log(result);
```

### Simple Decision

```js
const age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

## Key Takeaways

- JavaScript is a high-level, dynamically typed programming language.
- JavaScript was originally created to make web pages more interactive.
- Brendan Eich created JavaScript in 1995.
- ECMAScript is the specification that defines the core JavaScript language.
- A JavaScript engine executes JavaScript code.
- V8 is a JavaScript engine developed by Google.
- Node.js uses V8 to execute JavaScript.
- A runtime provides an environment and APIs around the JavaScript engine.
- Browsers and Node.js provide different runtime environments.
- JavaScript can run outside the browser.
- Modern JavaScript engines use compilation and optimization techniques.
- JavaScript uses a call stack to execute functions.
- Asynchronous behavior involves the runtime, queues, and event loop.

---

## Interview Questions

### Beginner

1. What is JavaScript?
2. Why was JavaScript created?
3. Who created JavaScript?
4. When was JavaScript created?
5. What is ECMAScript?
6. What is the difference between JavaScript and ECMAScript?
7. What is a JavaScript engine?
8. What is V8?
9. What is a JavaScript runtime?
10. Where can JavaScript run?

### Intermediate

11. What is the difference between a JavaScript engine and a runtime?
12. What is the relationship between V8 and Node.js?
13. Is JavaScript interpreted or compiled?
14. What is JIT compilation?
15. What is the difference between browser JavaScript and Node.js?
16. Why can't Node.js directly use the browser's DOM?
17. Is `fetch()` part of ECMAScript?
18. What is the call stack?
19. What is the event loop?
20. What happens when JavaScript code is executed?

---

## Practice

### Practice 1

Create a variable containing your name and print it to the console.

### Practice 2

Create two numbers and print their sum.

### Practice 3

Create an `age` variable and print whether the person is an adult or minor.

### Practice 4

Create variables for:

- Your name
- Your age
- Your profession

Print them using a template literal.

### Practice 5

Create a product with a price and quantity. Calculate and print the total price.

### Practice 6

Create a variable called `isLoggedIn`. Print `"Welcome"` if the value is `true`, otherwise print `"Please log in"`.

### Practice 7

Create a simple JavaScript program that prints:

```text
My name is ...
I am learning JavaScript.
JavaScript was created in 1995.
```

### Practice 8

Run one JavaScript program in a browser console and another using Node.js. Observe the differences between the two environments.
