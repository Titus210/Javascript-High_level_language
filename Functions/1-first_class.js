/* functions can be stored as variables and passed as arguments */
function add(a,b){
    return a + b;
}

// store function in variable
let sum = add;

result = sum(2,4); // returns 6
console.log(result)