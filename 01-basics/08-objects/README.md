# JavaScript Objects

Objects are one of the most important data structures in JavaScript.

An object allows us to store related data and behavior together using **key-value pairs**.

For example:

```js
const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};
```

Here:

- `name` is a key.
- `"Alice"` is its value.
- `age` is a key.
- `25` is its value.
- `email` is a key.
- `"alice@example.com"` is its value.

Objects are commonly used to represent real-world entities such as:

- Users
- Products
- Orders
- Customers
- Vehicles
- Settings
- API responses
- Database records

---

## 1. What Is an Object?

An object is a collection of properties.

Each property has a:

```text
key → value
```

relationship.

Example:

```js
const product = {
  name: "Laptop",
  price: 800,
  inStock: true,
};
```

The object contains three properties:

| Key       | Value      |
| --------- | ---------- |
| `name`    | `"Laptop"` |
| `price`   | `800`      |
| `inStock` | `true`     |

---

## 2. Why Do We Need Objects?

Suppose we want to store information about a user.

Without an object:

```js
const userName = "Alice";
const userAge = 25;
const userEmail = "alice@example.com";
const userIsAdmin = false;
```

These variables are related, but there is no single structure grouping them together.

With an object:

```js
const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
  isAdmin: false,
};
```

Now all information related to the user is stored together.

This makes the data easier to:

- Organize
- Access
- Modify
- Pass to functions
- Store in arrays
- Send through APIs
- Work with in applications

---

## 3. Creating an Object

The most common way to create an object is with **object literal syntax**.

Syntax

```js
const objectName = {
  key: value,
  key: value,
};
```

Example:

```js
const user = {
  name: "Alice",
  age: 25,
};
```

---

## 4. Empty Objects

An object can contain no properties.

```js
const user = {};
```

Properties can be added later:

```js
user.name = "Alice";
user.age = 25;

console.log(user);
```

Output:

```text
{ name: "Alice", age: 25 }
```

---

## 5. Object Properties

Properties are written as key-value pairs.

```js
const book = {
  title: "JavaScript Guide",
  author: "John Doe",
  pages: 350,
};
```

Here:

```text
title  → "JavaScript Guide"
author → "John Doe"
pages  → 350
```

---

## 6. Property Names

Object property names are usually written as identifiers:

```js
const user = {
  name: "Alice",
  age: 25,
};
```

They can also be written as strings:

```js
const user = {
  name: "Alice",
  age: 25,
};
```

Both are valid.

Property names can also contain spaces or special characters, but bracket notation is required to access them.

```js
const user = {
  "first name": "Alice",
};
```

Access it using:

```js
console.log(user["first name"]);
```

---

## 7. Accessing Object Properties

There are two main ways to access object properties:

1. Dot notation
2. Bracket notation

---

## 8. Dot Notation

Dot notation is the most common way to access a property.

```js
const user = {
  name: "Alice",
  age: 25,
};

console.log(user.name);
console.log(user.age);
```

Output:

```text
Alice
25
```

Syntax

```js
object.property;
```

---

## 9. Bracket Notation

Bracket notation uses square brackets.

```js
const user = {
  name: "Alice",
  age: 25,
};

console.log(user["name"]);
console.log(user["age"]);
```

Output:

```js
Alice;
25;
```

Syntax

```js
object["property"];
```

---

## 10. Dot Notation vs Bracket Notation

Dot notation:

```js
user.name;
```

Bracket notation:

```js
user["name"];
```

Both access the same property.

However, bracket notation becomes especially useful when the property name is stored in a variable.

Example:

```js
const user = {
  name: "Alice",
  age: 25,
};

const property = "name";

console.log(user[property]);
```

Output:

```text
Alice
```

This does not work the same way:

```js
console.log(user.property);
```

That looks for a property literally named `property`.

---

## 11. Dynamic Property Access

Bracket notation allows dynamic property access.

```js
const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

const key = "email";

console.log(user[key]);
```

Output:

```text
alice@example.com
```

This is very useful when working with:

- Forms
- APIs
- Configuration objects
- Dynamic filters
- Generic functions

---

## 12. Adding Properties

Properties can be added after an object has been created.

```JS
const user = {
name: "Alice",
};

user.age = 25;

console.log(user);
```

Output:

```text
{ name: "Alice", age: 25 }
```

You can also use bracket notation:

```js
user["email"] = "alice@example.com";
```

---

## 13. Updating Properties

Existing properties can be changed.

```js
const user = {
  name: "Alice",
  age: 25,
};

user.age = 26;

console.log(user.age);
```

Output:

```text
26
```

Objects are mutable, meaning their properties can generally be changed.

---

## 14. Deleting Properties

The `delete` operator can remove a property.

```js
const user = {
  name: "Alice",
  age: 25,
};

delete user.age;

console.log(user);
```

Output:

```text
{ name: "Alice" }
```

The property `age` no longer exists on the object.

---

## 15. Accessing a Missing Property

If a property does not exist, accessing it normally returns `undefined`.

```js
const user = {
  name: "Alice",
};

console.log(user.age);
```

Output:

```text
undefined
```

This is different from an error when simply accessing a missing direct property.

---

## 16. Checking Whether a Property Exists

The `in` operator can check whether a property exists.

```js
const user = {
  name: "Alice",
  age: 25,
};

console.log("name" in user);
console.log("email" in user);
```

Output:

```text
true
false
```

Syntax

```js
"property" in object;
```

---

## 17. Objects Can Store Different Data Types

Object values can be almost any JavaScript value.

```js
const data = {
  name: "Alice",
  age: 25,
  active: true,
  score: null,
  address: undefined,
  hobbies: ["Reading", "Coding"],
};
```

An object can contain:

- Strings
- Numbers
- BigInts
- Booleans
- `null`
- `undefined`
- Arrays
- Functions
- Other objects

---

## 18. Objects Inside Objects

Objects can contain other objects.

This is called a `nested object`.

```js
const user = {
  name: "Alice",

  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};
```

Access nested properties:

```js
console.log(user.address.city);
console.log(user.address.country);
```

Output:

```text
Dhaka
Bangladesh
```

---

## 19. Accessing Deeply Nested Properties

Objects can contain multiple levels.

```js
const company = {
  name: "Example Corp",

  office: {
    location: {
      city: "Dhaka",
      country: "Bangladesh",
    },
  },
};
```

Access:

```js
console.log(company.office.location.city);
```

Output:

```text
Dhaka
```

Deeply nested structures should be designed carefully because excessive nesting can make data difficult to work with.

---

## 20. Optional Chaining

When working with nested objects, a property may not exist.

Optional chaining `?.` allows us to safely access nested properties.

```js
const user = {
  name: "Alice",
};

console.log(user.address?.city);
```

Output:

```text
undefined
```

Without optional chaining:

```js
user.address.city;
```

JavaScript would attempt to access `city` from `undefined`, which causes an error.

Optional chaining is particularly useful when working with uncertain data such as API responses.

---

## 21. Objects and Arrays

Objects and arrays are often used together.

For example, an application may have an array of users:

```js
const users = [
  {
    id: 1,
    name: "Alice",
  },
  {
    id: 2,
    name: "Bob",
  },
  {
    id: 3,
    name: "Charlie",
  },
];
```

Access the first user's name:

```js
console.log(users[0].name);
```

Output:

```text
Alice
```

This **array of objects** structure is extremely common in JavaScript applications.

---

## 22. Arrays Inside Objects

Objects can also contain arrays.

```js
const user = {
  name: "Alice",
  hobbies: ["Reading", "Coding", "Traveling"],
};
```

Access:

```js
console.log(user.hobbies[0]);
```

Output:

```text
Reading
```

---

## 23. Objects as Function Arguments

Objects can be passed to functions.

```js
function introduceUser(user) {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
}

const user = {
  name: "Alice",
  age: 25,
};

introduceUser(user);
```

Output:

```text
Name: Alice
Age: 25
```

This is very common when functions need to work with related pieces of data.

---

## 24. Object Methods

An object can contain functions.

A function stored as an object property is commonly called a **method**.

```js
const calculator = {
  add(a, b) {
    return a + b;
  },
};

console.log(calculator.add(10, 20));
```

Output:

```text
30
```

Another example:

```js
const user = {
  name: "Alice",

  greet() {
    console.log("Hello!");
  },
};

user.greet();
```

---

## 25. Methods and `this`

Objects can use the `this` keyword to refer to the current object in a method call.

```js
const user = {
  name: "Alice",

  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

user.greet();
```

Output:

```text
Hello, Alice
```

The `this` keyword has many rules and behaviors beyond this simple example.

It will be covered in detail in the dedicated `this` topic.

---

## 26. Object Shorthand Syntax

When a variable and property have the same name, JavaScript provides property shorthand.

Without shorthand:

```js
const name = "Alice";
const age = 25;

const user = {
  name: name,
  age: age,
};
```

With shorthand:

```js
const name = "Alice";
const age = 25;

const user = {
  name,
  age,
};
```

Both create the same object structure.

---

## 27. Computed Property Names

JavaScript allows property names to be created dynamically.

```js
const key = "name";

const user = {
  [key]: "Alice",
};

console.log(user.name);
```

Output:

```text
Alice
```

The expression inside `[]` is evaluated to determine the property name.

---

## 28. Object Property Values From Expressions

Property values can come from variables or expressions.

```js
const price = 100;
const quantity = 3;

const product = {
  price,
  quantity,
  total: price * quantity,
};

console.log(product);
```

Output:

```text
{
  price: 100,
  quantity: 3,
  total: 300,
}
```

---

## 29. Object Destructuring

Object destructuring allows us to extract properties into variables.

```js
const user = {
  name: "Alice",
  age: 25,
};

const { name, age } = user;

console.log(name);
console.log(age);
```

Output:

```text
Alice
25
```

The variable names match the property names.

---

## 30. Destructuring With Renaming

A property can be assigned to a differently named variable.

```js
const user = {
  name: "Alice",
};

const { name: userName } = user;

console.log(userName);
```

Output:

```text
Alice
```

Here:

```text
name     → property
userName → variable
```

---

## 31. Default Values During Destructuring

A default value can be provided when a property is `undefined`.

```js
const user = {
  name: "Alice",
};

const { role = "Member" } = user;

console.log(role);
```

Output:

```text
Member
```

If `role` exists, its actual value is used.

---

## 32. Nested Destructuring

Nested objects can also be destructured.

```js
const user = {
  name: "Alice",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

const {
  address: { city },
} = user;

console.log(city);
```

Output:

```text
Dhaka
```

Use nested destructuring carefully because deeply nested destructuring can reduce readability.

---

## 33. Object Spread Syntax

The spread syntax `...` can be used with objects.

```js
const user = {
  name: "Alice",
  age: 25,
};

const copy = {
  ...user,
};

console.log(copy);
```

The spread syntax copies the object's enumerable own properties into a new object.

---

## 34. Merging Objects

Multiple objects can be combined.

```js
const basicInfo = {
  name: "Alice",
};

const additionalInfo = {
  age: 25,
};

const user = {
  ...basicInfo,
  ...additionalInfo,
};

console.log(user);
```

Output:

```text
{
  name: "Alice",
  age: 25,
}
```

---

## 35. Property Overwriting With Spread

If the same property exists in multiple objects, later properties overwrite earlier ones.

```js
const first = {
  name: "Alice",
};

const second = {
  name: "Bob",
};

const user = {
  ...first,
  ...second,
};

console.log(user.name);
```

Output:

```text
Bob
```

The order matters.

---

## 36. Object References

Objects are reference values.

Consider:

```js
const first = {
  name: "Alice",
};

const second = first;

second.name = "Bob";

console.log(first.name);
```

Output:

```text
Bob
```

Why?

Because `first` and `second` refer to the same object.

---

## 37. Comparing Objects

Consider:

```js
const first = {
  name: "Alice",
};

const second = {
  name: "Alice",
};

console.log(first === second);
```

Output:

```text
false
```

Although the objects contain the same data, they are two separate objects.

Now:

```js
const first = {
  name: "Alice",
};

const second = first;

console.log(first === second);
```

Output:

```text
true
```

Both variables refer to the same object.

---

## 38. Copying an Object

The spread syntax can create a shallow copy.

```js
const original = {
  name: "Alice",
  age: 25,
};

const copy = {
  ...original,
};

copy.name = "Bob";

console.log(original.name);
console.log(copy.name);
```

Output:

```text
Alice
Bob
```

The top-level properties were copied into a new object.

---

## 39. Shallow Copy

The spread operator creates a **shallow copy**.

Consider a nested object:

```js
const original = {
  name: "Alice",

  address: {
    city: "Dhaka",
  },
};

const copy = {
  ...original,
};
```

The top-level object is different, but the nested `address` object is still referenced.

```js
copy.address.city = "Chittagong";

console.log(original.address.city);
```

Output:

```js
Chittagong;
```

This happens because shallow copying does not recursively copy nested objects.

Deep copying is a separate concept and should be treated carefully.

---

## 40. Object Utility Methods

JavaScript provides several useful static methods for working with objects.

Important examples include:

```js
Object.keys();
Object.values();
Object.entries();
Object.assign();
Object.hasOwn();
Object.freeze();
Object.seal();
```

---

## 41. `Object.keys()`

`Object.keys()` returns an array containing the object's own enumerable property names.

```js
const user = {
  name: "Alice",
  age: 25,
  active: true,
};

console.log(Object.keys(user));
```

Output:

```text
["name", "age", "active"]
```

---

## 42. `Object.values()`

`Object.values()` returns an array containing the object's own enumerable property values.

```js
const user = {
  name: "Alice",
  age: 25,
};

console.log(Object.values(user));
```

Output:

```text
["Alice", 25]
```

---

## 43. `Object.entries()`

`Object.entries()` returns an array containing key-value pairs.

```js
const user = {
  name: "Alice",
  age: 25,
};

console.log(Object.entries(user));
```

Output:

```text
[
  ["name", "Alice"],
  ["age", 25],
]
```

Each entry is represented as:

```text
[key, value]
```

---

## 44. Iterating Over Object Entries

`Object.entries()` can be combined with `for...of`.

```js
const user = {
  name: "Alice",
  age: 25,
};

for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}
```

Output:

```text
name Alice
age 25
```

This is often a clean way to iterate over an object's properties.

---

## 45. `Object.assign()`

`Object.assign()` copies enumerable own properties from one or more source objects into a target object.

Example:

```js
const user = {
  name: "Alice",
};

Object.assign(user, {
  age: 25,
});

console.log(user);
```

Output:

```js
{
  name: "Alice",
  age: 25,
}
```

It can also be used to create a new object:

```js
const first = {
  name: "Alice",
};

const second = {
  age: 25,
};

const user = Object.assign({}, first, second);

console.log(user);
```

---

## 46. `Object.hasOwn()`

`Object.hasOwn()` checks whether an object has a property as its own property.

```js
const user = {
  name: "Alice",
};

console.log(Object.hasOwn(user, "name"));
console.log(Object.hasOwn(user, "age"));
```

Output:

```text
true
false
```

This is useful when you specifically want to check an object's own properties.

---

## 47. `Object.freeze()`

`Object.freeze()` prevents changes to an object's existing properties and prevents adding or deleting properties at that level.

```js
const settings = {
  theme: "dark",
};

Object.freeze(settings);

settings.theme = "light";

console.log(settings.theme);
```

In strict mode, attempts to modify a frozen object can throw an error.

`Object.freeze()` is shallow; nested objects are not automatically frozen.

---

## 48. `Object.seal()`

`Object.seal()` prevents adding or deleting properties.

Existing properties can still generally be modified.

```js
const user = {
  name: "Alice",
};

Object.seal(user);

user.name = "Bob";

console.log(user.name);
```

Output:

```text
Bob
```

But adding a new property is not allowed on a sealed object.

---

## 49. `Object.freeze()` vs `Object.seal()`

| Feature                    | `Object.freeze()` | `Object.seal()` |
| -------------------------- | ----------------- | --------------- |
| Add properties             | No                | No              |
| Delete properties          | No                | No              |
| Modify existing properties | No                | Yes             |
| Prevent structural changes | Yes               | Yes             |

Both are shallow operations.

---

## 50. Checking Object Type

The `typeof` operator returns `"object"` for ordinary objects.

```js
const user = {};

console.log(typeof user);
```

Output:

```text
object
```

Arrays also return:

```js
typeof [];
```

which is:

```text
"object"
```

Therefore, `typeof` alone cannot distinguish ordinary objects from arrays.

Use:

```js
Array.isArray(value);
```

when you specifically need to check for an array.

---

## 51. Objects and `null`

There is a historical JavaScript behavior worth remembering:

```js
console.log(typeof null);
```

Output:

```text
object
```

Although `null` represents the intentional absence of a value, `typeof null` is `"object"`.

> This is a well-known JavaScript quirk.

---

## 52. Practical Example: User Profile

Objects are ideal for representing user profiles.

```js
const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 25,
  active: true,

  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

console.log(user.name);
console.log(user.address.city);
```

---

## 53. Practical Example: Product

```js
const product = {
  id: 101,
  name: "Laptop",
  price: 800,
  stock: 10,
  category: "Electronics",
};

console.log(product.name);
console.log(product.price);
```

Update the stock:

```js
product.stock = 9;
```

---

## 54. Practical Example: Shopping Cart Item

```js
const cartItem = {
  productId: 101,
  name: "Laptop",
  price: 800,
  quantity: 2,
};
```

Calculate the subtotal:

```js
const subtotal = cartItem.price * cartItem.quantity;

console.log(subtotal);
```

Output:

```text
1600
```

---

## 55. Practical Example: Order

An order may contain nested objects and arrays.

```js
const order = {
  id: 1001,

  customer: {
    name: "Alice",
    email: "alice@example.com",
  },

  items: [
    {
      product: "Laptop",
      price: 800,
      quantity: 1,
    },
    {
      product: "Mouse",
      price: 20,
      quantity: 2,
    },
  ],

  status: "pending",
};
```

Access the customer:

```js
console.log(order.customer.name);
```

Access the first item:

```js
console.log(order.items[0].product);
```

---

## 56. Practical Example: Configuration Object

Objects are commonly used for application configuration.

```js
const config = {
  port: 3000,
  environment: "development",
  database: {
    host: "localhost",
    port: 5432,
  },
};

console.log(config.port);
console.log(config.database.host);
```

This type of structure is common in real-world applications.

---

## 57. Practical Example: Transforming Object Data

Suppose we have:

```js
const user = {
  firstName: "Alice",
  lastName: "Smith",
  age: 25,
};
```

We can create a full name:

```js
const fullName = `${user.firstName} ${user.lastName}`;

console.log(fullName);
```

Output:

```text
Alice Smith
```

---

## 58. Common Mistakes

**Mistake 1: Confusing Dot and Bracket Notation**

Given:

```js
const user = {
  name: "Alice",
};

const key = "name";
```

This:

```js
user[key];
```

returns:

```text
Alice
```

But:

```js
user.key;
```

looks for a property literally named `key`.

**Mistake 2: Forgetting That Objects Are References**

```js
const first = {
  name: "Alice",
};

const second = first;

second.name = "Bob";

console.log(first.name);
```

Output:

```text
Bob
```

Both variables reference the same object.

**Mistake 3: Assuming Spread Creates a Deep Copy**

```js
const original = {
  address: {
    city: "Dhaka",
  },
};

const copy = {
  ...original,
};
```

The nested `address` object is still shared.

**Mistake 4: Comparing Objects by Contents**

This is false:

```js
{ name: "Alice" } === { name: "Alice" };
```

because they are separate object references.

**Mistake 5: Using `typeof` to Detect Arrays**

This:

```js
typeof [];
```

returns:

```text
"object"
```

Use:

```js
Array.isArray([]);
```

instead.

**Mistake 6: Accidentally Overwriting Properties**

When using object spread:

```js
const user = {
  ...first,
  ...second,
};
```

properties from `second` overwrite properties with the same key from `first`.

The order matters.

**Mistake 7: Accessing Deep Properties Without Checking**

This can cause an error:

```js
user.address.city;
```

if `user.address` does not exist.

Optional chaining can help:

```js
user.address?.city;
```

---

## 59. Important Object Concepts

At this stage, make sure you understand these concepts:

**Object**

A collection of properties.

**Property**

A key-value pair belonging to an object.

**Method**

A function stored as an object property.

**Dot notation**

```js
user.name;
```

**Bracket notation**

```js
user["name"];
```

**Nested object**

An object inside another object.

**Object destructuring**

```js
const { name } = user;
```

Object spread

```js
const copy = { ...user };
```

**Object reference**

Two variables can refer to the same object.

**Shallow copy**

A new top-level object whose nested references may still be shared.

---

## 60. Important Object Methods

| Method             | Purpose                            |
| ------------------ | ---------------------------------- |
| `Object.keys()`    | Get property keys                  |
| `Object.values()`  | Get property values                |
| `Object.entries()` | Get key-value pairs                |
| `Object.assign()`  | Copy/merge properties              |
| `Object.hasOwn()`  | Check for an own property          |
| `Object.freeze()`  | Prevent modifications              |
| `Object.seal()`    | Prevent adding/removing properties |

---

## 61. Objects vs Arrays

Objects and arrays are both reference values, but they are generally used for different purposes.

**Object**

Used to represent an entity with named properties.

```js
const user = {
  name: "Alice",
  age: 25,
};
```

**Array**

Used to represent an ordered collection.

```js
const users = ["Alice", "Bob", "Charlie"];
```

An array can also contain objects:

```js
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
```

This combination is extremely common in real-world JavaScript.

---

## 62. Key Takeaways

- Objects store related data using key-value pairs.
- Objects are one of the most important JavaScript data structures.
- Objects are commonly used to represent real-world entities.
- Objects are created using object literals such as `{}`.
- Properties can be accessed using dot notation or bracket notation.
- Bracket notation is useful for dynamic property access.
- Properties can be added, updated, and deleted.
- Accessing a missing property normally returns `undefined`.
- The `in` operator can check whether a property exists.
- Objects can contain almost any JavaScript value.
- Objects can contain arrays and other objects.
- Functions stored in objects are commonly called methods.
- The `this` keyword can be used inside object methods and will be covered separately.
- Objects can be nested.
- Optional chaining can safely access potentially missing nested properties.
- Object destructuring extracts properties into variables.
- Object spread can copy or merge objects.
- Spread creates a shallow copy, not a deep copy.
- Objects are reference values.
- Two separate object literals are not equal with `===`, even if they contain the same data.
- `Object.keys()` returns an object's keys.
- `Object.values()` returns its values.
- `Object.entries()` returns key-value pairs.
- `Object.assign()` can copy and merge properties.
- `Object.hasOwn()` checks for an object's own property.
- `Object.freeze()` prevents modification at the top level.
- `Object.seal()` prevents adding and deleting properties but allows modification of existing properties.
- `typeof` returns `"object"` for ordinary objects and arrays.
- `typeof null` returning `"object"` is a historical JavaScript quirk.
- Arrays of objects are extremely common when working with APIs and databases.

---

## 63. Interview Questions

**Basic**

1. What is an object in JavaScript?
2. Why are objects useful?
3. How do you create an object?
4. What is a property?
5. What is a method?
6. What is the difference between a property and a method?
7. How do you access an object property?
8. What is the difference between dot notation and bracket notation?
9. When should you use bracket notation?
10. How do you add a property to an object?
11. How do you update a property?
12. How do you delete a property?
13. What happens when you access a property that does not exist?
14. How do you check whether a property exists?

**Object References**

15. Are objects primitive values or reference values?
16. Why does assigning one object to another variable not create a copy?
17. What happens when two variables reference the same object?
18. Why does this return `false`?

```js
{ name: "Alice" } === { name: "Alice" }
```

19. How can you create a shallow copy of an object?
20. What is a shallow copy?
21. Why does object spread not create a deep copy?

**Destructuring and Spread**

22. What is object destructuring?
23. How can you rename a variable during object destructuring?
24. How can you provide a default value during destructuring?
25. What is object spread syntax?
26. How can you merge two objects using spread syntax?
27. What happens when two objects contain the same property and are merged using spread syntax?

**Object Methods**

28. What does `Object.keys()` return?
29. What does `Object.values()` return?
30. What does `Object.entries()` return?
31. What is `Object.assign()` used for?
32. What does `Object.hasOwn()` check?
33. What is the difference between `Object.freeze()` and `Object.seal()`?

**Practical / Output Questions**

34. What is the output?

```js
const user = {
  name: "Alice",
  age: 25,
};

console.log(user.name);
```

35. What is the output?

```js
const user = {
  name: "Alice",
};

const key = "name";

console.log(user[key]);
console.log(user.key);
```

36. What is the output?

```js
const user = {
  name: "Alice",
};

user.age = 25;

console.log(user);
```

37. What is the output?

```js
const first = {
  name: "Alice",
};

const second = first;

second.name = "Bob";

console.log(first.name);
```

38. What is the output?

```js
const first = {
  name: "Alice",
};

const second = {
  name: "Alice",
};

console.log(first === second);
```

39. What is the output?

```js
const first = {
  name: "Alice",
};

const second = {
  ...first,
};

second.name = "Bob";

console.log(first.name);
console.log(second.name);
```

40. What is the output?

```js
const first = {
  name: "Alice",
};

const second = {
  name: "Bob",
};

const user = {
  ...first,
  ...second,
};

console.log(user.name);
```

41. What is the output?

```js
const user = {
  name: "Alice",
  age: 25,
};

const { name, age } = user;

console.log(name);
console.log(age);
```

42. What is the output?

```js
const user = {
  name: "Alice",
};

const { role = "Member" } = user;

console.log(role);
```

43. What is the output?

```js
const user = {
  name: "Alice",
  address: {
    city: "Dhaka",
  },
};

console.log(user.address.city);
```

44. What is the output?

```js
const user = {};

console.log(user.address?.city);
```

45. What is the output?

```js
const user = {
  name: "Alice",
  age: 25,
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
```

46. What is the output?

```js
const user = {
  name: "Alice",
};

Object.freeze(user);

user.name = "Bob";

console.log(user.name);
```

---

## 64. Practice

Try to solve these exercises yourself.

**Exercise 1 — Create an Object**

Create an object representing a person.

Include:

- name
- age
- email
- city

Print the object.

**Exercise 2 — Access Properties**

Using your person object, print:

- Name
- Age
- Email

Use dot notation.

**Exercise 3 — Bracket Notation**

Access the same properties using bracket notation.

**Exercise 4 — Dynamic Property Access**

Create a variable containing a property name.

Use bracket notation to access that property dynamically.

**Exercise 5 — Add Properties**

Create an object containing a product name and price.

Add:

- category
- stock

after the object has been created.

**Exercise 6 — Update Properties**

Create a product object.

Change its price and stock.

Print the updated object.

**Exercise 7 — Delete a Property**

Create an object containing several properties.

Delete one property using `delete`.

**Exercise 8 — Check Property Existence**

Create an object and use the `in` operator to check whether:

- `name` exists
- `email` exists
- `phone` exists

**Exercise 9 — Nested Object**

Create a user object containing:

```text
name
email
address
    city
    country
```

Access the city.

**Exercise 10 — Nested Array**

Create an object representing a student.

Include an array containing at least five subjects.

Print the first subject.

**Exercise 11 — Array of Objects**

Create an array containing at least five user objects.

Each user should contain:

- `id`
- `name`
- `age`

Print the name of each user.

**Exercise 12 — Object Method**

Create a `calculator` object containing methods for:

- Addition
- Subtraction
- Multiplication
- Division

Test each method.

**Exercise 13 — User Greeting**

Create a user object containing:

```text
name
```

and a `greet()` method.

The method should print a greeting containing the user's name.

**Exercise 14 — Use `this`**

Modify your previous exercise so that the `greet()` method uses `this.name`.

**Exercise 15 — Object Destructuring**

Given:

```js
const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};
```

Use destructuring to extract all three properties.

**Exercise 16 — Rename During Destructuring**

Use object destructuring to extract `name` into a variable called `userName`.

**Exercise 17 — Default Value**

Given an object that does not contain a `role` property, use destructuring to assign:

```text
Member
```

as the default role.

**Exercise 18 — Nested Destructuring**

Create a user object containing a nested address object.

Use destructuring to extract the city.

**Exercise 19 — Object Spread**

Create an object.

Create a shallow copy using object spread.

Modify the copy and verify that the original top-level properties are unchanged.

**Exercise 20 — Merge Objects**

Create two objects:

```text
personalInfo
professionalInfo
```

Merge them into a new object using spread syntax.

**Exercise 21 — Property Overwriting**

Create two objects that contain the same property with different values.

Merge them using spread syntax.

Determine which value is present in the final object.

**Exercise 22 — Object Keys**

Create an object containing at least five properties.

Use `Object.keys()` to get all property names.

**Exercise 23 — Object Values**

Use `Object.values()` to get all values from an object.

**Exercise 24 — Object Entries**

Use `Object.entries()` to get all key-value pairs.

**Exercise 25 — Iterate Over Object**

Use `Object.entries()` and `for...of` to print:

```text
key: value
```

for every property.

**Exercise 26 — Product Object**

Create a product object containing:

```text
id
name
price
category
stock
```

Write code that:

- Prints the product name
- Updates the price
- Decreases the stock
- Adds a discount property

**Exercise 27 — Student Object**

Create a student object containing:

```text
name
age
subjects
```

where `subjects` is an array.

Add a method that prints the student's name.

**Exercise 28 — Shopping Cart**

Create a shopping cart object containing:

```text
items
```

where `items` is an array of product objects.

Each product should contain:

```text
name
price
quantity
```

Calculate the total cart value.

**Exercise 29 — User Search**

Create an array of user objects.

Each user should contain:

```text
id
name
email
```

Find the user with a specific ID.

**Exercise 30 — Active Users**

Create an array of user objects containing:

```text
name
active
```

Create a new array containing only active users.

**Exercise 31 — Product Filtering**

Create an array of products.

Each product should contain:

```text
name
price
category
```

Find all products whose price is greater than `100`.

**Exercise 32 — Product Transformation**

Create an array of product objects.

Use `map()` to create an array containing only their names.

**Exercise 33 — Object Property Counter**

Create an object with several properties.

Determine how many own enumerable properties it contains.

**Exercise 34 — Object Search**

Create an array of users.

Find the first user whose age is greater than `30`.

**Exercise 35 — Nested Data**

Create an object representing a company.

Include:

```text
company name
address
    city
    country
employees
    array of employee objects
```

Access:

- Company name
- City
- First employee's name

**Exercise 36 — Order Object**

Create an order object containing:

```text
orderId
customer
items
status
```

The customer should be an object.

The items should be an array of objects.

Print the customer's name and the first product name.

**Exercise 37 — Object Copy Experiment**

Create an object with both primitive and nested properties.

Create a shallow copy using spread syntax.

Modify:

1. A top-level property
2. A nested property

Observe what happens to the original object.

**Exercise 38 — Freeze Experiment**

Create an object.

Use `Object.freeze()`.

Try to:

- Change a property
- Add a property
- Delete a property

Observe the behavior.

**Exercise 39 — Seal Experiment**

Create an object.

Use `Object.seal()`.

Try to:

- Change an existing property
- Add a new property
- Delete a property

Observe the behavior.

**Exercise 40 — Dynamic Object Access**

Create:

```js
const user = {
  name: "Alice",
  email: "alice@example.com",
  age: 25,
};
```

Create a variable containing one of the property names.

Use it to dynamically access the corresponding value.

**Exercise 41 — Dynamic Property Creation**

Create an object and dynamically add a property using a variable as the property name.

**Exercise 42 — Build a Product Inventory**

Create an array containing at least ten product objects.

Each product should contain:

```text
id
name
category
price
stock
```

Implement logic to:

- Find a product by ID
- Find products by category
- Find products above a certain price
- Find out-of-stock products
- Calculate the total inventory value

**Exercise 43 — Build a Student Management System**

Create an array of student objects.

Each student should contain:

```text
id
name
age
scores
```

where `scores` is an array of numbers.

Implement logic to:

- Find a student by ID
- Calculate each student's average score
- Find students who passed
- Find the student with the highest average
- Get an array containing only student names

**Exercise 44 — Build a Shopping Cart**

Create a shopping cart using an object and arrays.

Implement:

- Add item
- Remove item
- Update quantity
- Find item
- Calculate subtotal
- Calculate total quantity
- Calculate total price
- Check whether the cart is empty

**Exercise 45 — Build an Order System**

Create an array of order objects.

Each order should contain:

```text
id
customer
items
status
```

Implement logic to:

- Find an order by ID
- Find pending orders
- Find completed orders
- Calculate an order's total
- Calculate total revenue from completed orders

## Final Goal

Before moving beyond this topic, make sure you can comfortably:

- Create objects
- Read properties
- Add properties
- Update properties
- Delete properties
- Use dot notation
- Use bracket notation
- Access dynamic properties
- Work with nested objects
- Work with arrays of objects
- Create and use object methods
- Understand the basic role of `this`
- Destructure objects
- Use object spread
- Understand object references
- Create shallow copies
- Use `Object.keys()`
- Use `Object.values()`
- Use `Object.entries()`
- Use `Object.assign()`
- Use `Object.hasOwn()`
- Understand `Object.freeze()`
- Understand `Object.seal()`
- Understand the difference between objects and arrays
- Work with real-world object-based data structures

Once these concepts are comfortable, objects will become one of the most useful tools for organizing JavaScript data.
