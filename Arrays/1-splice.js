let arr = ["Orange", "Mango", "Banana"];

delete arr[1];

console.log(arr) 
console.log(arr.length) // still three

arr.splice(1,1)

console.log(arr)    // removes and prints 2 elements
console.log(arr.length) // 2

// remove and replace
arr.splice(1,3, "Pineaple") // removes first two elements

console.log(arr)