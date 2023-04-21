/*
* Write a JavaScript function to split a string and convert it into an array of words.
*/

function splitString(str){
    newString = str.trim().split(" ");
    console.log(newString);
}
splitString("Titus") // [ 'T', 'i', 't', 'u', 's' ]
splitString("Titus Kiplagat"); 