/* Validate Empty field and Number Field*/

function validateNumber() {
    if (typeof i === Number) {
        console.log("Number");
    }
    else
        console.log("Not number")
}

function validateEmpty(x) {
    if (x === '' || x === undefined || x === null || x === undefined) {
        console.log("The string is empty");
    }
    else {
        console.log("The string is not empty");
    }
}

validateEmpty('')
validateEmpty("Titus")

validateNumber("Titus") // returns Not number
validateNumber(12)