const products = [
  { name: "Laptop", price: 999, category: "Electronics", inStock: true },
  { name: "Mouse", price: 25, category: "Electronics", inStock: true },
  { name: "Desk", price: 150, category: "Furniture", inStock: false },
  { name: "Chair", price: 85, category: "Furniture", inStock: true },
  { name: "Monitor", price: 300, category: "Electronics", inStock: false },
  { name: "Lamp", price: 40, category: "Furniture", inStock: true },
];

//1. Get an array of all product names.
const arrOfAllNames = products.map((product) => product.name);
// console.log("arrOfAllNames", arrOfAllNames)

//2. Get an array of only products that are inStock.
const productsInStock = products.filter((product) => product.inStock);
console.log("productsInStock", productsInStock);

//3. Get the total price of all products (using reduce).
const totalPrice = products.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);
console.log("Total-Price :", totalPrice);

//4. Get an array of just Electronics category products.
const electronicProducts = products.filter(
  (product) => product.category === "Electronics",
);
console.log(electronicProducts);

//5. Get the total price of only inStock products (chain filter + reduce).
const inStockProductPrice = products
  .filter((product) => product.inStock)
  .reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

console.log(inStockProductPrice);

//6. Check if there's at least one product priced over 500 (using .some()).
const isProductAbove500 = products.some((product) => product.price > 500);
console.log(isProductAbove500);

//7. Get an array of product names that are inStock, in one chained expression (filter + map).
const inStockProductName = products
  .filter((product) => product.inStock)
  .map((product) => product.name);
console.log(inStockProductName);
