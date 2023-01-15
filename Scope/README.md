## Scope
This is what defines access to javascript variables.
***
## Types of Scopes
There are two types of variable scope:
1. Local Scope
2. Global Scope

### Global Scope
These are variables that are accessible in any part of program <br/>
__declaration__
```
    globalVar = "This is a global variable"
    console.log(globalVar)  // prints "This is a global variable
```
This creates a global variable but __worst practice__ in javascript. <br/>
Always use `var`, `let`, and `const` when declaring variables.

### Functional Scope
`var` is used to declare variables, these variables float all the way to the top, this is called __variable hoisting__. <br/>
This means that variables declared at the bottom of the script will not be the __last__ to execute in Javascript
program at __runtime__.
#### Examples:
```
    function scope1(){
        var top = "Top";
        bottom = "Bottom";
        console.log(bottom); // prints "Bottom"

        var bottom;
   }
   scope1()
   ```
The example above illustrates that var `bottom` floats all the way to the top. <br/>
This is equivalent to:
``` 
    function scope1(){
                var bottom;
        var top = "Top";
        bottom = "Bottom";
        console.log(bottom); // prints "Bottom"

   }
   scope1() 
   ```
`let` This is a variable declared within a `block scope` i.e  within the `{}` <br/>
```
    function scope3() {
        if(print){
            let insideIf = '1211';
        }
        console.log(insideIf);
        }
scope3(true); // prints ''

```
Nothing is logged in console because the insideIf is available only inside the if statement

