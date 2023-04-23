/* Validate Empty field and Number Field*/

function validateNumber(x) {
    if (typeof x === 'number') {
        console.log("Number");
    }
    else
        console.log("Not number")
}

function validateEmpty(x) {
    if (x === '' || x === undefined || x === null) {
        console.log("The string is empty");
    }
    else {
        console.log("The string is not empty");
    }
}

validateEmpty('')   // The string is empty
validateEmpty("Titus") // return is not empty

validateNumber("Titus") // returns Not number
validateNumber(12)      // returns number


console.log(2 == "2")
console.log(2 === "2")


console.log(typeof 4)