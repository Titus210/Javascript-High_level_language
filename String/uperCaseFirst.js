/* Write a function ucFirst(str) that returns the string str with the uppercase first character, for instance:
* ucFirst("john") == "John";
*/

/*
* LOGIC
* --------------------------------
* 1. check if input is string
* 2. extract the first character using str[0]
* 3. use .toUpperCase to change the first character to uppercase
* 4. replace the first character with the upercased
*/



string = "titus";
firstChar = string.at(0).toUpperCase();

// loop
for(var i = 1; i <string.length; i++){
    firstChar += string[i];
}

console.log(firstChar);