## let Keyword
## let block-scoped
This is blocked-scope keyword. Declared inside `{}`.
```
    let x = 10;
    if ( x == 10){
        let x = 20;
        console.log(x); // 20:
    }
```
## Let and global object
Unlike `var` which when declared is added to the global object `let` is not attached to global object
```
var a = 10
console.log(window.a); // 10

let b = 10;
console.log(window.b); // undefined
```
## Redeclaration
`var` keyword allows redeclaration of variables `let` keyword results to  an error.

## hoisting
Accessing variables before declaring causes a `ReferenceError`.

## Temporal death zone (TDZ)
Variable declared by `let` keyword has a temporal death zone <br/>
The TDZ is the time from the start of the block until the variable declaration is processed.
