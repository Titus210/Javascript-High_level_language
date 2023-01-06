#   Objects
This are key value pairs consisting of properties and methods.


```
let object = {
    key. "value"
    }
```

## Introduction
### Creation
we can create objects using two methods:
1. __using object constructor__ <br/>
This is by use of `new`  constructure and `Object()` keyword.

```
    let user = new Object ()
```
2. __using object literal__ <br/>
We use `{}` to create an object

```
    let user = {
        name: "Titus"
    }
```

### Accessing
We can access objects in two ways:

1. using dot notation <br/>
```
 user.name
 ```

 2. usind square brackets <br/>
```
 user["name"]
 ```
 By accesssing this values we can also __assign__, __update__ values or also __create__ new properties using the above access methods.

 ```
  user.name = "John"
```
__multistatement__ key can also be used by using the square brackets around i.e: <br/>
```
  let user = {
    "school studied": "Kabarak University"
  }

  user["course pursued"] = "Computer Science"
```

using brackets gives flexibility in using expressions which dot notation cannot be used.<br/>
```
let user = {
    name: "Kiplagat",
    age: 20
    }
```

### deletion
We can perform deletion operation on object property using delete keyword <br/>

```
     delete user["school studied"]
 ```

### Computated properties
This is using square brackets on onject literal when creating an object.


### Property names limitations
We can use reserved keyword in naming propertie i.e :
```
    let user = {
        for:"name",
        if: "name",
    }
```
Reading non existing properties returns uundefined. We can check using `in ` operation 
i.e:
```
    if (key in object)
        return true;
    else
        return false;

// alternative
    if (user.object_property == undefined)
        return true;
    else
        return false;
```
### Loop through objects
We use `for ... in` to iterate over an object
i.e:
```
    let user ={
        name: "John",
        meal: "Vegetarian"
    }
    for (let key in user)
        console.log(key)
```
If we iterate over an object with integer property name it returns it in ordered form



