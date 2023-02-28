// strings introduction
let single = 'single quoted'
let double = "double quoted"
let backtick = `backtick`

function sum(a , b){
    return a + b;
}
console.log(`1 + 1 = ${sum(1,1)}`);

// span multiple lines using backticks

let studentList = `Guest:
John
Pete
Mary 
`;
console.log(studentList);

console.log(studentList.length);
/* String Length */

studentName = "Titus";
console.log(studentName.length);

/* Accessing Characters */

console.log(`Student name at position 2 is ${studentName[2-1]}`)
// first character
console.log(studentName[0]);

// last character
console.log(studentName[studentName.length -1]);
console.log(studentName.at(-1))

// string mutability
/* Strings cant be changed */
let greeting = "Salute"

greeting[-1] = " : French" // gives an error message

// instead we rewrite as whole
greeting += ' : French'
console.log(greeting)


/* Change case */

console.log(greeting.toLowerCase())
console.log(greeting.toUpperCase())