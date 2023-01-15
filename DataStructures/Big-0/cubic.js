/* quadratic Big-0 implementation */

// creating an array and initializing
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var size = array.length;
let num= 10;
// forward loop
for (let i = 0; i < size; i++) {
    console.log(`Array at foward index ${i} is ${array[i]}`);
    // back loop
    for (let j = size - 1; j > 0; j--) {
        console.log(`Array at index ${j} is ${array[j]}`);

        for (let k = 0; k < num; k++) {
            console.log(`Value of number is: ${k}`);
        }
    }
}