var a = 2;

// hoisting
foo();  // calls function 

function foo() {
  a = 3;
  console.log(a);   // within the function scope logs 3

  var a;
}
console.log(a); // global scope logs 2


/* The function hoisted is called first */
