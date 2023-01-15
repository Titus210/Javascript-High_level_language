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

