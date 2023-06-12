/* Passing function to another function */

function average(a,b,fn){   
    return fn(a,b)/2;
}

let sum = add;

function add(a,b){
    return a + b;
}

let result = average(10,20,sum);    // calls average function and passing sum as attribute
console.log(result) 