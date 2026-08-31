# JavaScript Arrays

An array is a data structure used to store multiple values in a single variable.

Instead of creating separate variables:

```js
const fruit1 = "Apple";
const fruit2 = "Banana";
const fruit3 = "Mango";
```

we can store the values in an array:

```js
const fruits = ["Apple", "Banana", "Mango"];
```

Arrays are one of the most commonly used data structures in JavaScript.

They are used for storing collections of:

- Strings
- Numbers
- Objects
- Other arrays
- Mixed values
- Almost any JavaScript value

Example:

```js
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
```

Output:

```text
[ 'Apple', 'Banana', 'Mango' ]
```

---

## 1. Why Do We Need Arrays?

Suppose an application needs to store the names of five users.

Without an array:

```js
const user1 = "Alice";
const user2 = "Bob";
const user3 = "Charlie";
const user4 = "David";
const user5 = "Eve";
```

This becomes difficult to manage as the amount of data grows.

With an array:

```js
const users = ["Alice", "Bob", "Charlie", "David", "Eve"];
```

Now the collection can be handled as a single value.

Arrays are useful when we need to:

- Store multiple related values
- Access values by position
- Add or remove values
- Search through collections
- Iterate over data
- Transform collections
- Filter data
- Sort data

---

## 2. Creating an Array

The most common way to create an array is with array literal syntax.

Syntax

```js
const arrayName = [value1, value2, value3];
```

Example:

```js
const numbers = [10, 20, 30, 40];
```

Another example:

```js
const colors = ["Red", "Green", "Blue"];
```

An array can also be empty:

```js
const items = [];
```

---

## 3. Array Index

JavaScript arrays use **zero-based indexing**.

This means the first element has index `0`.

Example:

```js
const fruits = ["Apple", "Banana", "Mango"];
```

The indexes are:

```text
Apple  → 0
Banana → 1
Mango  → 2
```

You can visualize it as:

```text
Index:    0         1         2
          ↓         ↓         ↓
Array: ["Apple", "Banana", "Mango"]
```

---

## 4. Accessing Array Elements

Use the index to access an element.

```js
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
```

Output:

```text
Apple
Banana
Mango
```

You can also store an element in a variable:

```js
const firstFruit = fruits[0];

console.log(firstFruit);
```

---

## 5. Accessing the Last Element

The last element can be accessed using:

```js
array[array.length - 1];
```

Example:

```js
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[fruits.length - 1]);
```

Output:

```text
Mango
```

Modern JavaScript also provides the `at()` method:

```js
console.log(fruits.at(-1));
```

Output:

```text
Mango
```

---

## 6. Changing Array Elements

Arrays are mutable, meaning their elements can be changed.

```js
const fruits = ["Apple", "Banana", "Mango"];

fruits[1] = "Orange";

console.log(fruits);
```

Output:

```text
["Apple", "Orange", "Mango"]
```

Notice that although `fruits` was declared with `const`, its contents can still be modified.

This is because `const` prevents reassignment of the variable itself, not mutation of the array it refers to.

---

## 7. Array Length

The `length` property tells us how many elements an array contains.

```js
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);
```

Output:

```text
3
```

Example:

```js
const numbers = [10, 20, 30, 40, 50];

console.log(numbers.length);
```

Output:

```text
5
```

---

## 8. Empty Array

An array can contain no elements.

```js
const numbers = [];

console.log(numbers.length);
```

Output:

```text
0
```

You can add elements later.

```js
numbers.push(10);
numbers.push(20);

console.log(numbers);
```

Output:

```text
[10, 20]
```

---

## 9. Arrays Can Store Different Data Types

JavaScript arrays can contain values of different types.

```js
const values = ["Hello", 42, true, null, undefined];
```

This is valid JavaScript.

An array can also contain objects:

```js
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
```

And functions:

```js
const actions = [
  function () {
    console.log("Action 1");
  },
  function () {
    console.log("Action 2");
  },
];
```

Although JavaScript allows mixed arrays, keeping related data together usually makes code easier to understand.

---

## 10. Arrays Are Objects

In JavaScript, arrays are a special type of object.

```js
const fruits = ["Apple", "Banana"];

console.log(typeof fruits);
```

Output:

```text
object
```

This is why `typeof` cannot be used alone to determine whether a value is an array.

Use:

```js
Array.isArray(fruits);
```

Output:

```js
true;
```

For a normal object:

```js
console.log(Array.isArray({}));
```

Output:

```js
false;
```

---

## 11. Adding Elements With `push()`

The `push()` method adds one or more elements to the end of an array.

```js
const fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);
```

Output:

```text
["Apple", "Banana", "Mango"]
```

Multiple elements can be added:

```js
fruits.push("Orange", "Grapes");

console.log(fruits);
```

---

## 12. Removing the Last Element With `pop()`

The `pop()` method removes the last element.

```js
const fruits = ["Apple", "Banana", "Mango"];

const removedFruit = fruits.pop();

console.log(removedFruit);
console.log(fruits);
```

Output:

```text
Mango
["Apple", "Banana"]
```

`pop()` returns the element that was removed.

---

## 13. Adding Elements With `unshift()`

The `unshift()` method adds elements to the beginning of an array.

```js
const fruits = ["Banana", "Mango"];

fruits.unshift("Apple");

console.log(fruits);
```

Output:

```text
["Apple", "Banana", "Mango"]
```

---

## 14. Removing Elements With `shift()`

The `shift()` method removes the first element.

```js
const fruits = ["Apple", "Banana", "Mango"];

const removedFruit = fruits.shift();

console.log(removedFruit);
console.log(fruits);
```

Output:

```text
Apple
["Banana", "Mango"]
```

---

## 15. `push()` vs `pop()` vs `shift()` vs `unshift()`

| Method      | Action          | Position  |
| ----------- | --------------- | --------- |
| `push()`    | Adds elements   | End       |
| `pop()`     | Removes element | End       |
| `unshift()` | Adds elements   | Beginning |
| `shift()`   | Removes element | Beginning |

Example:

```js
const numbers = [2, 3];

numbers.push(4);
// [2, 3, 4]

numbers.pop();
// [2, 3]

numbers.unshift(1);
// [1, 2, 3]

numbers.shift();
// [2, 3]
```

---

## 16. Searching With `includes()`

The `includes()` method checks whether an array contains a value.

```js
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.includes("Banana"));
```

Output:

```js
true;
```

If the value does not exist:

```js
console.log(fruits.includes("Orange"));
```

Output:

```js
false;
```

---

## 17. Finding an Index With `indexOf()`

The `indexOf()` method returns the index of the first matching element.

```js
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.indexOf("Banana"));
```

Output:

```text
1
```

If the value does not exist:

```js
console.log(fruits.indexOf("Orange"));
```

Output:

```text
-1
```

---

## 18. `lastIndexOf()`

`lastIndexOf()` returns the index of the last occurrence of a value.

```js
const numbers = [10, 20, 30, 20, 40];

console.log(numbers.lastIndexOf(20));
```

Output:

```text
3
```

---

## 19. Checking Array Length

The `length` property can also be used to determine whether an array contains elements.

```js
const items = [];

console.log(items.length === 0);
```

Output:

```text
true
```

For a non-empty array:

```js
const items = ["Book"];

console.log(items.length === 0);
```

Output:

```text
false
```

---

## 20. Looping Through an Array

Arrays are often processed using loops.

Using a `for` loop:

```js
const fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

Output:

```text
Apple
Banana
Mango
```

The loop uses the index to access each element.

---

## 21. `for...of` With Arrays

The `for...of` loop provides a simpler way to iterate over array values.

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

When you only need the values, `for...of` is often easier to read than a traditional for loop.

---

## 22. `for...in` and Arrays

`for...in` iterates over property keys.

With an array, those keys are usually indexes:

```js
const fruits = ["Apple", "Banana", "Mango"];

for (const index in fruits) {
  console.log(index);
}
```

Output:

```text
0
1
2
```

Although `for...in` can work with arrays, `for...of` is generally preferred when the goal is to iterate over array values.

---

## 23. `forEach()`

`forEach()` executes a callback function for each element.

```js
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});
```

Output:

```text
Apple
Banana
Mango
```

Using an arrow function:

```js
fruits.forEach((fruit) => {
  console.log(fruit);
});
```

---

## 24. `forEach()` With Index

The callback receives the current element and its index.

```js
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});
```

Output:

```text
0 Apple
1 Banana
2 Mango
```

The callback can also receive the array itself as a third argument:

```js
fruits.forEach((fruit, index, array) => {
  console.log(fruit);
});
```

---

## 25. `map()`

The `map()` method creates a new array by transforming every element.

Example:

```js
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((number) => {
return number \* 2;
});

console.log(doubled);
```

Output:

```text
[2, 4, 6, 8]
```

The original array remains unchanged:

```js
console.log(numbers);
```

Output:

```text
[1, 2, 3, 4]
```

---

## 26. `map()` With Objects

Suppose we have:

```js
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
```

We can create an array containing only the names:

```js
const names = users.map((user) => {
  return user.name;
});

console.log(names);
```

Output:

```text
["Alice", "Bob", "Charlie"]
```

---

## 27. `filter()`

The `filter()` method creates a new array containing elements that satisfy a condition.

Example:

```js
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers);
```

Output:

```text
[2, 4, 6]
```

The original array remains unchanged.

---

## 28. `find()`

The `find()` method returns the first element that satisfies a condition.

```js
const numbers = [10, 20, 30, 40];

const result = numbers.find((number) => {
  return number > 20;
});

console.log(result);
```

Output:

```text
30
```

If no element satisfies the condition, `find()` returns `undefined`.

---

## 29. `findIndex()`

`findIndex()` returns the index of the first element that satisfies a condition.

```js
const numbers = [10, 20, 30, 40];

const index = numbers.findIndex((number) => {
  return number > 20;
});

console.log(index);
```

Output:

```text
2
```

If no matching element exists, it returns `-1`.

---

## 30. `some()`

The `some()` method checks whether at least one element satisfies a condition.

```js
const numbers = [1, 3, 5, 8];

const hasEvenNumber = numbers.some((number) => {
  return number % 2 === 0;
});

console.log(hasEvenNumber);
```

Output:

```js
true;
```

Only one matching element is enough for `some()` to return `true`.

---

## 31. `every()`

The `every()` method checks whether all elements satisfy a condition.

```js
const numbers = [2, 4, 6, 8];

const allEven = numbers.every((number) => {
  return number % 2 === 0;
});

console.log(allEven);
```

Output:

```text
true
```

If even one element fails the condition, `every()` returns `false`.

---

## 32. `reduce()`

The `reduce()` method can be used to combine array elements into a single value.

For example, calculating a total:

```js
const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(total);
```

Output:

```text
100
```

The second argument:

```js
0;
```

is the initial accumulator value.

`reduce()` is powerful and has many uses, but it should be used only when it makes the code clear.

---

## 33. `sort()`

The `sort()` method sorts the elements of an array.

For strings:

```js
const fruits = ["Mango", "Apple", "Banana"];

fruits.sort();

console.log(fruits);
```

Output:

```text
["Apple", "Banana", "Mango"]
```

Important

`sort()` mutates the original array.

---

## 34. Sorting Numbers

A common mistake is expecting this to correctly sort numbers:

```js
const numbers = [10, 2, 30, 4];

numbers.sort();

console.log(numbers);
```

The default sort converts elements to strings and sorts them lexicographically.

For numeric ascending order:

```js
numbers.sort((a, b) => a - b);

console.log(numbers);
```

Output:

```text
[2, 4, 10, 30]
```

For descending order:

```js
numbers.sort((a, b) => b - a);
```

---

## 35. `reverse()`

The `reverse()` method reverses the order of array elements.

```js
const numbers = [1, 2, 3, 4];

numbers.reverse();

console.log(numbers);
```

Output:

```text
[4, 3, 2, 1];
```

`reverse()` mutates the original array.

---

## 36. `join()`

The `join()` method creates a string from array elements.

```js
const fruits = ["Apple", "Banana", "Mango"];

const result = fruits.join(", ");

console.log(result);
```

Output:

```text
Apple, Banana, Mango
```

Another example:

```js
const words = ["JavaScript", "is", "awesome"];

console.log(words.join(" "));
```

Output:

```text
JavaScript is awesome
```

---

## 37. `slice()`

The `slice()` method creates a shallow copy of part of an array.

```js
const fruits = ["Apple", "Banana", "Mango", "Orange"];

const result = fruits.slice(1, 3);

console.log(result);
```

Output:

```text
["Banana", "Mango"]
```

The end index is not included.

The original array remains unchanged.

---

## 38. `slice()` Without End Index

If the end index is omitted, elements are copied until the end.

```js
const fruits = ["Apple", "Banana", "Mango", "Orange"];

const result = fruits.slice(2);

console.log(result);
```

Output:

```text
["Mango", "Orange"]
```

---

## 39. Negative Index With `slice()`

Negative indexes count from the end.

```js
const fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits.slice(-2));
```

Output:

```text
["Mango", "Orange"]
```

---

## 40. `splice()`

The `splice()` method can add, remove, or replace elements.

Example:

```js
const fruits = ["Apple", "Banana", "Mango"];

fruits.splice(1, 1);

console.log(fruits);
```

Output:

```text
["Apple", "Mango"]
```

Here:

```text
1 → starting index
1 → number of elements to remove
```

---

## 41. Adding Elements With `splice()`

```js
const fruits = ["Apple", "Mango"];

fruits.splice(1, 0, "Banana");

console.log(fruits);
```

Output:

```text
["Apple", "Banana", "Mango"]
```

The second argument `0` means no elements should be removed.

---

## 42. Replacing Elements With `splice()`

```js
const fruits = ["Apple", "Banana", "Mango"];

fruits.splice(1, 1, "Orange");

console.log(fruits);
```

Output:

```text
["Apple", "Orange", "Mango"]
```

---

## 43. `slice()` vs `splice()`

This is an important distinction.

`slice()`

- Creates a new array
- Does not modify the original array
- Used to copy/extract elements

```js
const result = array.slice(start, end);
```

`splice()`

- Modifies the original array
- Can remove elements
- Can add elements
- Can replace elements

```js
array.splice(start, deleteCount, item1, item2);
```

A simple way to remember:

> `slice()` copies; `splice()` changes.

---

## 44. Combining Arrays With Spread Syntax

The spread syntax ... can be used to combine arrays.

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];

console.log(combined);

Output:

[1, 2, 3, 4, 5, 6]

This creates a new array.

45. Copying an Array

You can create a shallow copy using spread syntax:

const original = [1, 2, 3];

const copy = [...original];

console.log(copy);

Now copy and original are separate array objects.

copy.push(4);

console.log(original);
console.log(copy);

Output:

[1, 2, 3]
[1, 2, 3, 4]

The concept of shallow copying becomes more important when working with nested objects and arrays.

46. Destructuring Arrays

Array destructuring allows values to be extracted into variables.

const fruits = ["Apple", "Banana", "Mango"];

const [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);

Output:

Apple
Banana
Mango

The variables receive values according to their positions.

47. Skipping Elements During Destructuring

You can skip elements using empty positions.

const numbers = [10, 20, 30];

const [first, , third] = numbers;

console.log(first);
console.log(third);

Output:

10
30 48. Rest Syntax With Array Destructuring

The rest syntax can collect remaining elements.

const numbers = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = numbers;

console.log(first);
console.log(second);
console.log(remaining);

Output:

10
20
[30, 40, 50] 49. Nested Arrays

Arrays can contain other arrays.

const numbers = [
[1, 2],
[3, 4],
[5, 6],
];

Accessing nested values:

console.log(numbers[0][0]);
console.log(numbers[1][1]);

Output:

1
4

Nested arrays are useful for representing grid-like or matrix-style data.

50. Arrays of Objects

A very common real-world structure is an array of objects.

const users = [
{
id: 1,
name: "Alice",
age: 25,
},
{
id: 2,
name: "Bob",
age: 30,
},
{
id: 3,
name: "Charlie",
age: 28,
},
];

Accessing a user's name:

console.log(users[0].name);

Output:

Alice

This structure is extremely common when working with APIs and databases.

51. Filtering an Array of Objects

For example, find users older than 25:

const users = [
{ name: "Alice", age: 25 },
{ name: "Bob", age: 30 },
{ name: "Charlie", age: 28 },
];

const adults = users.filter((user) => {
return user.age > 25;
});

console.log(adults);

Output:

[
{ name: "Bob", age: 30 },
{ name: "Charlie", age: 28 }
] 52. Mapping an Array of Objects

Get only the names:

const users = [
{ name: "Alice", age: 25 },
{ name: "Bob", age: 30 },
{ name: "Charlie", age: 28 },
];

const names = users.map((user) => user.name);

console.log(names);

Output:

["Alice", "Bob", "Charlie"]

This pattern is extremely common in frontend and backend development.

53. Finding an Object
    const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    ];

const user = users.find((user) => user.id === 2);

console.log(user);

Output:

{ id: 2, name: "Bob" } 54. Multidimensional Arrays

A multidimensional array is an array containing arrays.

Example:

const matrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
];

Accessing a value:

console.log(matrix[1][2]);

Output:

6

The first index selects the inner array.

The second index selects the value inside that inner array.

55. Checking Whether a Value Is an Array

Use:

Array.isArray(value);

Example:

console.log(Array.isArray([1, 2, 3]));

Output:

true
console.log(Array.isArray("Hello"));

Output:

false

This is preferred over:

typeof value === "object"

because typeof returns "object" for arrays.

56. Array References

Arrays are objects, so variables store references to them.

Consider:

const first = [1, 2, 3];
const second = first;

second.push(4);

console.log(first);
console.log(second);

Output:

[1, 2, 3, 4]
[1, 2, 3, 4]

Both variables refer to the same array.

This is different from copying an array using:

const second = [...first];

Understanding references becomes especially important when working with objects and mutation.

57. Comparing Arrays

Two separate arrays are not equal just because they contain the same values.

const first = [1, 2, 3];
const second = [1, 2, 3];

console.log(first === second);

Output:

false

They are two different array objects.

However:

const first = [1, 2, 3];
const second = first;

console.log(first === second);

Output:

true

Both variables refer to the same array.

58. Common Mistakes
    Mistake 1: Forgetting Zero-Based Indexing

Incorrect assumption:

const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[1]);

If you expect the first element, this is incorrect.

The first element is:

fruits[0];
Mistake 2: Accessing an Invalid Index
const fruits = ["Apple", "Banana"];

console.log(fruits[5]);

Output:

undefined

JavaScript does not throw an error simply because an array index does not exist.

Mistake 3: Confusing length With Last Index

For:

const fruits = ["Apple", "Banana", "Mango"];

the length is:

3

but the last index is:

2

The last element can be accessed with:

fruits[fruits.length - 1];
Mistake 4: Using typeof to Check Arrays

This:

typeof [];

returns:

"object"

Use:

Array.isArray([]);

instead.

Mistake 5: Unexpected Mutation

Methods such as:

push()
pop()
shift()
unshift()
splice()
sort()
reverse()

modify the original array.

Always be aware of whether an array method mutates the original array or returns a new array.

Mistake 6: Incorrect Numeric Sorting

This:

const numbers = [10, 2, 30, 4];

numbers.sort();

does not perform normal numeric sorting.

Use:

numbers.sort((a, b) => a - b);

for ascending numeric order.

Mistake 7: Using for...in When You Need Values

for...in gives property keys/indexes:

for (const index in numbers) {
console.log(index);
}

For array values, prefer:

for (const number of numbers) {
console.log(number);
} 59. Mutable vs Non-Mutating Array Methods

Understanding whether a method changes the original array is important.

Common Mutating Methods

These modify the original array:

push()
pop()
shift()
unshift()
splice()
sort()
reverse()
Common Non-Mutating Methods

These generally return a new result without changing the original array:

slice()
map()
filter()
concat()

Some methods may have newer immutable alternatives, but the key habit is:

Always know whether the operation changes the original array.

60. Practical Example: Shopping Cart

An array can represent a shopping cart.

const cart = [
{
name: "Laptop",
price: 800,
quantity: 1,
},
{
name: "Mouse",
price: 20,
quantity: 2,
},
];

Calculate the total:

const total = cart.reduce((sum, item) => {
return sum + item.price \* item.quantity;
}, 0);

console.log(total);

Output:

840

This pattern is commonly used in e-commerce applications.

61. Practical Example: Student Scores
    const scores = [85, 72, 90, 65, 95];

const passingScores = scores.filter((score) => {
return score >= 70;
});

console.log(passingScores);

Output:

[85, 72, 90, 95]

Calculate the average:

const total = scores.reduce((sum, score) => {
return sum + score;
}, 0);

const average = total / scores.length;

console.log(average); 62. Practical Example: Product Search
const products = [
{ id: 1, name: "Laptop", price: 800 },
{ id: 2, name: "Mouse", price: 20 },
{ id: 3, name: "Keyboard", price: 50 },
];

const product = products.find((product) => {
return product.id === 2;
});

console.log(product);

Output:

{ id: 2, name: "Mouse", price: 20 } 63. Practical Example: Active Users
const users = [
{ name: "Alice", active: true },
{ name: "Bob", active: false },
{ name: "Charlie", active: true },
];

const activeUsers = users.filter((user) => {
return user.active;
});

console.log(activeUsers);

Output:

[
{ name: "Alice", active: true },
{ name: "Charlie", active: true }
] 64. Practical Example: Transforming Data

Suppose an API returns:

const users = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" },
{ id: 3, name: "Charlie" },
];

We can create a list of names:

const names = users.map((user) => user.name);

console.log(names);

Output:

["Alice", "Bob", "Charlie"]

This type of transformation is extremely common when working with API responses.

65. Important Array Methods

A few methods are especially important to understand.

Method Purpose
push() Add to end
pop() Remove from end
shift() Remove from beginning
unshift() Add to beginning
includes() Check whether value exists
indexOf() Find index of value
find() Find first matching element
findIndex() Find index of first matching element
some() Check whether at least one matches
every() Check whether all match
forEach() Execute function for every element
map() Transform every element
filter() Select matching elements
reduce() Reduce values into one result
sort() Sort elements
reverse() Reverse elements
slice() Copy part of an array
splice() Add/remove/replace elements
join() Convert elements into a string

You do not need to memorize every method immediately.

Focus first on understanding what problem each method solves.

66. Key Takeaways
    Arrays store multiple values in a single collection.
    Arrays use zero-based indexing.
    The first element has index 0.
    The length property returns the number of elements.
    The last index is length - 1.
    Arrays are objects in JavaScript.
    Use Array.isArray() to check whether a value is an array.
    Arrays are mutable.
    push() adds elements to the end.
    pop() removes the last element.
    unshift() adds elements to the beginning.
    shift() removes the first element.
    includes() checks whether a value exists.
    indexOf() finds the index of a value.
    for, for...of, and forEach() can iterate over arrays.
    map() transforms array elements into a new array.
    filter() creates a new array containing matching elements.
    find() returns the first matching element.
    some() checks whether at least one element matches.
    every() checks whether all elements match.
    reduce() can combine multiple elements into one result.
    sort() sorts an array and mutates it.
    reverse() reverses an array and mutates it.
    slice() creates a portion of an array without modifying the original.
    splice() modifies the original array.
    Arrays can contain objects, functions, arrays, and other JavaScript values.
    Arrays of objects are extremely common in real-world applications.
    Arrays are reference values, so assigning one array to another variable does not create a copy.
    Spread syntax can be used to create a shallow copy or combine arrays.
    Array destructuring can extract values based on their positions.
    Understanding mutation vs non-mutation is important when working with arrays.
67. Interview Questions
    Basic
    What is an array in JavaScript?
    Why are arrays useful?
    How do you create an array?
    What is zero-based indexing?
    How do you access an array element?
    How do you access the last element of an array?
    What does the length property return?
    What happens when you access an array index that does not exist?
    Can a JavaScript array contain different data types?
    Are arrays objects in JavaScript?
    Array Methods
    What is the difference between push() and unshift()?
    What is the difference between pop() and shift()?
    What does includes() do?
    What does indexOf() return when an element is not found?
    What is the difference between find() and filter()?
    What is the difference between some() and every()?
    What does map() return?
    What is the purpose of reduce()?
    What is the difference between slice() and splice()?
    Which common array methods mutate the original array?
    Does map() modify the original array?
    Does filter() modify the original array?
    Does sort() modify the original array?
    Does reverse() modify the original array?
    Iteration
    What is the difference between for...of and for...in?
    How does forEach() work?
    What arguments does the forEach() callback receive?
    When would you use map() instead of forEach()?
    Can you break out of a forEach() loop using break?
    References and Mutation
    Why does assigning one array to another not create a copy?
    What happens when two variables reference the same array?
    How can you create a shallow copy of an array?
    Why does this return false?
    [1, 2, 3] === [1, 2, 3]
    What is the difference between array mutation and creating a new array?
    Practical / Output Questions
    What is the output?
    const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
console.log(fruits[2]);
What is the output?
const numbers = [10, 20, 30];

numbers.push(40);
numbers.pop();

console.log(numbers);
What is the output?
const numbers = [1, 2, 3, 4];

const result = numbers.map((number) => number \* 2);

console.log(result);
console.log(numbers);
What is the output?
const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter((number) => number > 3);

console.log(result);
What is the output?
const numbers = [10, 20, 30, 40];

const result = numbers.find((number) => number > 20);

console.log(result);
What is the output?
const numbers = [2, 4, 6];

console.log(numbers.every((number) => number % 2 === 0));
What is the output?
const numbers = [1, 2, 3];

const total = numbers.reduce((sum, number) => {
return sum + number;
}, 0);

console.log(total);
What is the output?
const first = [1, 2, 3];
const second = first;

second.push(4);

console.log(first);
What is the output?
const first = [1, 2, 3];
const second = [...first];

second.push(4);

console.log(first);
console.log(second);
Why does this not sort numbers correctly?
const numbers = [10, 2, 30, 4];

numbers.sort();

console.log(numbers);
How would you correctly sort the numbers in ascending order? 68. Practice

Try solving these exercises yourself before looking at any solutions.

Do not write the solutions here.

Exercise 1 — Create an Array

Create an array containing five different fruit names.

Print the entire array.

Exercise 2 — Access Elements

Create an array of five numbers.

Print:

First element
Third element
Last element
Exercise 3 — Change an Element

Create an array:

const colors = ["Red", "Green", "Blue"];

Change "Green" to "Yellow".

Exercise 4 — Array Length

Create an array containing several values.

Print its length.

Exercise 5 — Add Elements

Create an empty array.

Add five values using push().

Exercise 6 — Remove Elements

Create an array containing five values.

Remove the last element using pop().

Print:

The removed value
The updated array
Exercise 7 — Beginning Operations

Create an array of numbers.

Use:

unshift() to add an element to the beginning
shift() to remove the first element
Exercise 8 — Check Value

Create an array of programming languages.

Check whether "JavaScript" exists using includes().

Exercise 9 — Find Index

Create an array of numbers.

Use indexOf() to find the position of a specific number.

Exercise 10 — Loop With for

Create an array of five numbers.

Use a traditional for loop to print every element.

Exercise 11 — Loop With for...of

Repeat the previous exercise using for...of.

Exercise 12 — forEach()

Create an array of names.

Use forEach() to print:

Hello, Alice
Hello, Bob
...

for every name.

Exercise 13 — Double Numbers

Given:

const numbers = [1, 2, 3, 4, 5];

Use map() to create:

[2, 4, 6, 8, 10]
Exercise 14 — Square Numbers

Given:

const numbers = [1, 2, 3, 4, 5];

Use map() to create an array containing the squares.

Expected:

[1, 4, 9, 16, 25]
Exercise 15 — Filter Even Numbers

Given:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

Use filter() to create an array containing only even numbers.

Exercise 16 — Filter Positive Numbers

Given:

const numbers = [-5, 10, -2, 20, 0, 15];

Use filter() to create an array containing only positive numbers.

Exercise 17 — Find a Number

Given:

const numbers = [10, 20, 30, 40, 50];

Use find() to find the first number greater than 25.

Exercise 18 — Find an Object

Given:

const users = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" },
{ id: 3, name: "Charlie" },
];

Use find() to find the user with ID 2.

Exercise 19 — Find Index

Given an array of numbers, use findIndex() to find the index of the first number greater than 50.

Exercise 20 — some()

Given an array of numbers, check whether at least one number is negative.

Exercise 21 — every()

Given an array of numbers, check whether all numbers are positive.

Exercise 22 — Sum With reduce()

Given:

const numbers = [10, 20, 30, 40, 50];

Use reduce() to calculate the total.

Expected:

150
Exercise 23 — Find Maximum

Given an array of numbers, use array methods to find the largest value.

Exercise 24 — Find Minimum

Given an array of numbers, find the smallest value.

Exercise 25 — Sort Numbers

Given:

const numbers = [10, 2, 30, 4, 25];

Sort the numbers in:

Ascending order
Descending order
Exercise 26 — Reverse an Array

Create an array of five values.

Reverse it using reverse().

Exercise 27 — Join Elements

Given:

const words = ["JavaScript", "is", "powerful"];

Use join() to produce:

JavaScript is powerful
Exercise 28 — Slice an Array

Given:

const numbers = [10, 20, 30, 40, 50];

Use slice() to create an array containing:

[20, 30, 40]
Exercise 29 — Splice an Array

Given:

const fruits = ["Apple", "Banana", "Mango"];

Use splice() to replace "Banana" with "Orange".

Exercise 30 — Copy an Array

Create an array.

Create a separate copy using spread syntax.

Modify the copy and verify that the original array has not changed.

Exercise 31 — Combine Arrays

Given:

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];

Create a new array containing all technologies.

Exercise 32 — Array Destructuring

Given:

const colors = ["Red", "Green", "Blue"];

Use destructuring to store each color in a separate variable.

Exercise 33 — Skip Elements

Given:

const numbers = [10, 20, 30, 40];

Use array destructuring to get:

10
40

while skipping the middle values.

Exercise 34 — Rest Destructuring

Given:

const numbers = [10, 20, 30, 40, 50];

Use destructuring so that:

first contains 10
second contains 20
remaining contains [30, 40, 50]
Exercise 35 — Nested Array

Create a nested array representing:

1 2 3
4 5 6
7 8 9

Access the value 6.

Exercise 36 — Array of Objects

Create an array containing at least five product objects.

Each product should have:

id
name
price

Print all product names.

Exercise 37 — Filter Products

Using your product array, find all products with a price greater than 100.

Exercise 38 — Map Product Names

Using your product array, create a new array containing only product names.

Exercise 39 — Calculate Cart Total

Given:

const cart = [
{ name: "Laptop", price: 800, quantity: 1 },
{ name: "Mouse", price: 20, quantity: 2 },
{ name: "Keyboard", price: 50, quantity: 1 },
];

Calculate the total price using reduce().

Exercise 40 — Student Results

Given:

const students = [
{ name: "Alice", score: 85 },
{ name: "Bob", score: 62 },
{ name: "Charlie", score: 91 },
{ name: "David", score: 55 },
];

Find all students who scored 70 or higher.

Exercise 41 — Student Names

Using the same students array, create a new array containing only their names.

Exercise 42 — Highest Score

Using the students array, find the student with the highest score.

Exercise 43 — Check Passing Students

Use every() to check whether all students passed.

Assume the passing score is 40.

Exercise 44 — Check Excellent Student

Use some() to check whether at least one student scored 90 or higher.

Exercise 45 — Remove Duplicates

Given:

const numbers = [1, 2, 2, 3, 4, 4, 5, 5];

Create a new array containing only unique values.

Exercise 46 — Count Occurrences

Given:

const fruits = [
"Apple",
"Banana",
"Apple",
"Mango",
"Banana",
"Apple",
];

Determine how many times each fruit appears.

Exercise 47 — Find Common Values

Given:

const first = [1, 2, 3, 4, 5];
const second = [3, 4, 5, 6, 7];

Create a new array containing values that exist in both arrays.

Expected:

[3, 4, 5]
Exercise 48 — Flatten Nested Data

Given:

const numbers = [
[1, 2],
[3, 4],
[5, 6],
];

Create:

[1, 2, 3, 4, 5, 6]
Exercise 49 — Pagination

Given an array of 20 products, write logic that returns products for a specific page.

For example:

page = 2
itemsPerPage = 5

should return products 6–10.

Exercise 50 — Mini Project: Shopping Cart

Build a small shopping cart using arrays and objects.

Your cart should support:

Add a product
Remove a product
Change quantity
Find a product
Calculate subtotal
Calculate total quantity
Calculate total price
Check whether the cart is empty

Try to use appropriate array methods instead of writing everything with traditional loops.
