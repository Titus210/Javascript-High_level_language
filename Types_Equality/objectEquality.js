function isEquivalent(a, b) {
    // array of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // if their properties are different they are different objects
    if (aProps.length != bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i]

        // If values of properties are different, not equal
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // if everything matches
    return true;
}
console.log(isEquivalent({ "h1": 12 }, { "h1": 12 }))  // true
console.log(isEquivalent({ "h1": 12 }, { "h1": 22 })) // false

var obj1 = { 'prop1': 'test', 'prop2': function () { } };
var obj2 = { 'prop1': 'test', 'prop2': function () { } };

isEquivalent(obj1, obj2); // returns false

 var function1 = function () { console.log(2) };
var function2 = function () { console.log(2) };
console.log(function1 == function2); // prints 'false'