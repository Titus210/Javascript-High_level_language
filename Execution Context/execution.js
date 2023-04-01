// global object
var name = "Titus";

// first function
function firstFunction() {
    var a = "Hello!";
    secondFunction();
    var x = a + name;
}
// first function
function secondFunction() {
    var b = "Hey!";
    secondFunction();
    var y = b + name;
}
// first function
function thirdFunction() {
    var c = "Hi!";
    secondFunction();
    var z = c + name;
}
firstFunction();