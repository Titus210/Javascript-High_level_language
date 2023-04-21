/*
* Write a JavaScript function to check whether a string is blank or not.
*/

function isStringBlank(str) {
    if( str == '' || str.length == 0 || str.indexOf(0) == null ){
        console.log(`String is blank`);
    }
    else
        console.log(`String is not blank`);
}

isStringBlank("") // is blank
isStringBlank("Titus");
