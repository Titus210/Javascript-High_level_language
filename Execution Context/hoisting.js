///////////////////////////////////////////
// HOISTING


calculateAge(2002); // already exists

function calculateAge(year){
    console.log(2023 - year)
}


// retirement(2002); // wont work for function expression
var retirement = function(year){
    console.log(60 -(2016 - year)); 
}

retirement(2002);

// Variables
console.log(age); // undefined
var age = 22;
console.log(age); //22