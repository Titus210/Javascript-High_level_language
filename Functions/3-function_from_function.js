function compareBy(prop_name) {
  return function (a, b) {
    let x = a[prop_name];
    let y = b[prop_name];

    if (x > y) return 1;
    else if (x < y) return -1;
    else return 0;
  };
}

// array of product objects
let products = [
  {
    name: "iphone",
    price: 9000,
  },
  {
    name: "samsung",
    price: 9600,
  },
  {
    name: "Huawei",
    price: 94500,
  },
];


// sort by name 
console.log("Sorted by name: ");
products.sort(compareBy('name'))
console.log(products);


// sort by price 
console.log("Sorted by price: ");
products.sort(compareBy('price'))
console.log(products);

