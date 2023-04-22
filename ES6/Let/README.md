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
