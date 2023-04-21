/*
*   Write a JavaScript function to extract a specified number of characters from a string
* test : console.log(truncate_string("Robin Singh",4)); "Robi"
*/

function truncate_string(str, pos) {
    console.log(str.slice(0, pos))
}
truncate_string("Robin Singh", 2); // Ro
truncate_string("Robin Singh", 4); // Robi