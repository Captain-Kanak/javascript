// =====================================================================
// 🟢 PRACTICE 01 — Variables & Console Output
// 🎯 Task: Create a variable containing your name and
//           print it to the console.
// =====================================================================

const myName = "John Doe";
console.log(myName);

// =====================================================================
// 🟢 PRACTICE 02 — Addition & Arithmetic
// 🎯 Task: Create two numbers and print their sum.
// =====================================================================

const num1 = 10;
const num2 = 20;

console.log(num1 + num2);

// =====================================================================
// 🟢 PRACTICE 03 — Conditional Statements
// 🎯 Task: Create an age variable and determine whether the
//           person is an adult or a minor.
// =====================================================================

const age = 25;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// =====================================================================
// 🟢 PRACTICE 04 — Template Literals
// 🎯 Task: Create variables for:
//      • Your name
//      • Your age
//      • Your profession
//
// 💡 Hint: Then print all the information using a template literal.
// =====================================================================

const myName2 = "John Doe";
const myAge = 30;
const profession = "Software Engineer";

console.log(
  `My name is ${myName2}, I'm ${myAge} years old, and I'm a ${profession}.`,
);

// =====================================================================
// 🟢 PRACTICE 05 — Product Calculation
// 🎯 Task: Create a product with a price and quantity.
//           Calculate and print the total price.
// =====================================================================

const product = {
  name: "Laptop",
  price: 1000,
  quantity: 2,
};

const totalPrice = product.price * product.quantity;
console.log(
  `The total cost of ${product.quantity} ${product.name} is $${totalPrice}.`,
);

// =====================================================================
// 🟢 PRACTICE 06 — Boolean & Conditional Logic
// 🎯 Task: Create a variable called `isLoggedIn`.
//           If true  → Print "Welcome"
//           If false → Print "Please log in"
// =====================================================================

const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome");
} else {
  console.log("Please log in");
}

// =====================================================================
// 🟢 PRACTICE 07 — String Output
// 🎯 Task: Create a JavaScript program that prints:
//
//      My name is ...
//      I am learning JavaScript.
//      JavaScript was created in 1995.
// =====================================================================

const myName3 = "John Doe";

console.log(`My name is ${myName3}.`);
console.log("I am learning JavaScript.");
console.log("JavaScript was created in 1995.");

// =====================================================================
// 🟢 PRACTICE 08 — Browser vs Node.js
// 🎯 Task: Run one JavaScript program in a browser console
//           and another using Node.js.
//
// 🔍 Observe:
//      • How the code runs
//      • Available APIs
//      • Global objects
//      • Differences between the two environments
// =====================================================================

// =====================================================================
// 🌐 BROWSER PROGRAM
// =====================================================================

console.log("Hello from the Browser!");

console.log("Global object:", window);

console.log("Page title:", document.title);

console.log("Current URL:", location.href);

console.log("Fetch available:", typeof fetch);

// =====================================================================
// 🟢 NODE.JS PROGRAM
// =====================================================================

console.log("Hello from Node.js!");

console.log("Global object:", global);

console.log("Current file:", __filename);

console.log("Current directory:", __dirname);

console.log("Fetch available:", typeof fetch);
