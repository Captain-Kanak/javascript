// =====================================================================
// 🟢 PRACTICE 01 — Declare a Variable
// 🎯 Task: Declare a variable containing your name and print it.
// =====================================================================

const myName = "John Doe";

console.log(myName);

// =====================================================================
// 🟢 PRACTICE 02 — Addition
// 🎯 Task: Declare two variables containing numbers and print their sum.
// =====================================================================

const num1 = 10;
const num2 = 20;

console.log(num1 + num2);

// =====================================================================
// 🟢 PRACTICE 03 — let Reassignment
// 🎯 Task: Create a variable using let, assign it an initial value,
//           then reassign it.
// =====================================================================

let age = 25;

console.log("Initial age:", age);

age = 30;

console.log("Updated age:", age);

// =====================================================================
// 🟢 PRACTICE 04 — const Reassignment
// 🎯 Task: Create a const variable and try to reassign it.
//           Observe the error.
// =====================================================================

const country = "Bangladesh";

console.log("Country:", country);

// ❌ TypeError: Assignment to constant variable.
// country = "India";
// console.log("Country:", country);

// =====================================================================
// 🟢 PRACTICE 05 — Multiple Variables
// 🎯 Task: Create variables for:
//      • First name
//      • Last name
//      • Age
//      • Profession
//
// 💡 Use appropriate variable names and print all values.
// =====================================================================

const firstName = "John";
const lastName = "Doe";
const myAge = 30;
const profession = "Software Engineer";

console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", myAge);
console.log("Profession:", profession);

// =====================================================================
// 🟢 PRACTICE 06 — Product Calculation
// 🎯 Task: Create:
//      • productName
//      • price
//      • quantity
//
//      Calculate and print the total price.
// =====================================================================

const productName = "Laptop";
const price = 1000;
const quantity = 2;

const totalPrice = price * quantity;

console.log(`Product: ${productName}`);
console.log(`Price: $${price}`);
console.log(`Quantity: ${quantity}`);
console.log(`Total Price: $${totalPrice}`);

// =====================================================================
// 🟢 PRACTICE 07 — Boolean & Conditional Logic
// 🎯 Task: Create:
//      const isLoggedIn = true;
//
//      Print a suitable message based on its value.
// =====================================================================

const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome");
} else {
  console.log("Please log in");
}

// =====================================================================
// 🟢 PRACTICE 08 — Function Scope with var
// 🎯 Task: Create a variable using var inside a function
//           and try to access it outside the function.
//
// 🔍 Observe what happens.
// =====================================================================

function showMessage() {
  var message = "Hello from inside the function";

  console.log(message); // ✅ Works
}

showMessage();

// ❌ ReferenceError: message is not defined
// console.log(message);

// =====================================================================
// 🟢 PRACTICE 09 — Block Scope with let
// 🎯 Task: Create a variable using let inside an if block
//           and try to access it outside the block.
//
// 🔍 Observe what happens.
// =====================================================================

if (true) {
  let username = "John";

  console.log(username); // ✅ Works
}

// ❌ ReferenceError: username is not defined
// console.log(username);

// =====================================================================
// 🟢 PRACTICE 10 — var Hoisting
// 🎯 Task: Predict the output before running:
//
//      console.log(name);
//      var name = "Jhon";
//
// 🔍 Then explain why you got that result.
// =====================================================================

console.log(name);

var name = "Jhon";

// Output:
// undefined
//
// Why?
// `var` declarations are hoisted and initialized with `undefined`.
//
// JavaScript conceptually treats it like:
//
// var name;
//
// console.log(name); // undefined
//
// name = "Jhon";

// =====================================================================
// 🟢 PRACTICE 11 — let and Temporal Dead Zone (TDZ)
// 🎯 Task: Predict what happens:
//
//      console.log(name);
//      let name = "Jhon";
//
// 🔍 Run it and explain the result.
// =====================================================================

// ❌ ReferenceError
//
// console.log(name);
//
// let name = "Jhon";
//
// Why?
//
// `let` is hoisted, but it is NOT initialized immediately.
//
// Before the declaration is reached, `name` is inside
// the Temporal Dead Zone (TDZ).
//
// Conceptually:
//
// Scope starts
//      ↓
//      ↓  TDZ
//      ↓
// let name = "Jhon"
//      ↓
// TDZ ends
//
// Therefore, accessing `name` before its declaration
// causes a ReferenceError.

// =====================================================================
// 🟢 PRACTICE 12 — const Object
// 🎯 Task: Create an object using const, then change one
//           of its properties.
//
// 💡 Explain why modifying the property works even though
//    the variable was declared with const.
// =====================================================================

const user = {
  name: "John",
  age: 30,
};

console.log("Before:", user);

user.age = 31;

console.log("After:", user);

// Output:
//
// Before: { name: "John", age: 30 }
// After:  { name: "John", age: 31 }
//
// Why does this work?
//
// `const` prevents us from REASSIGNING the variable.
//
// We cannot do:
//
// user = {};
//
// ❌ TypeError
//
// But we CAN modify properties inside the object:
//
// user.age = 31;
//
// ✅ This works.
//
// The variable `user` still points to the same object.
// We only changed the object's property.
