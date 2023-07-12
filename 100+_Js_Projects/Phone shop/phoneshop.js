
/* Compare properties */
function compareBy(propertyName) {

    //  return property compared by
    return function (a, b) {
        let x = a[propertyName],
            y = b[propertyName];


        if (x > y) {
            return 1
        }
        else if (x < y) {
            return -1;
        }
        else {
            return 0;
        }
    };
}

let products = [
    { name: 'Iphone', price: 900 },
    { name: 'Samsung Galaxy', price: 1200 },
    { name: 'Sony Experia', price: 1600 },
];

// sort by name
console.log("Products sorted by name:");
products.sort(compareBy('name'));

// create a table 
console.table(products);


// sort by price
console.log("Product by price");
products.sort(compareBy('price'));

// create table
console.table(products)
