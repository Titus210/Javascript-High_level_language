## Variables
There are seven primitive data types in Javascript:
1. boolean
```
    var is40 = false;
    typeof(is40); // boolean
```
2. number
```
 var age = 21;
 typeof(age); // number
```
3. string
```
    var name = 'Titus'
    typeof(name); // string
```
4. object
```
    var fruits = ["Apple", "Orange", "Mango"];
    var details ={firstName : 'Titus', lastName : 'Kiplagat'};
    var nullVar = null;

    typeof(fruits); // object
    typeof(details); // object
    typeof(nullVar); // object
```
5. function
```
 var function1 = function(){
    console.log(2+1)
}
typeof(function) // function
```
6. undefined
```
    var blank;
    typeof(blank) // undefined;
```
***
### Truthy/ Falsey Check
This is checking whether an expression evaluates to true or false
```
    if(node){
        // code to execute
    }
```
Node is a variable. 
#### False
Here are some expressions that evaluate to false <br/>
- false
- 0
- Empty string ('' and "")
- NaN
- undefined
- null
#### True
Here are some expressions that evaluate to true
- true
- any number other than 0
- Non-Empty string
- Non-Empty Object
***
### === vs ==
Since the javascript is a scripting language, and variables are not assigned type during
declaration, Instead type is interpreted during runtime <br/>
Hence `===` is used to check __equality__ more strictly than `==`.
`===` checks for both __type__ and __value__ , while `==` checks only for value
```
    "5" == 5 // true
    "5" === 5 // false
```
 
#### Equality of Objects
```
    var object1 = {};
    var object2 = {};

    object1 == object2 // false
    object1 === object2 // false
```
The objects above are  equivalent (same properties and values) but not equal, since they hold different memory addresses.<b
__Primitive equalities__ check operators `==` and `===` can be used only for __strings__ and __numbers__  and other __non-object__ types<br/>
To implement an equivalence check for objects, each property must be checked individually.

