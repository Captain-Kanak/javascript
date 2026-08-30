const products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
  { name: "Keyboard", stock: 10 },
  { name: "Mouse", stock: 0 },
];

for (const product of products) {
  if (product.stock === 0) continue;

  console.log(product);
}
