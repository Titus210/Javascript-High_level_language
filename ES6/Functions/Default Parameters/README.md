## Default Parameters
In `ES6` can initialize named parameters with default values.
```
function printName(name ="user")
{
    console.log(name);
}
printName(); // user
printName("Titus"); // titus
```
## Rest Parameter
This is a parameter that is prefixed by three dots `..args`.<br/>
It allows one to present indefinite no of params as array. <br/>
Should be used in the end of the function <br/>

