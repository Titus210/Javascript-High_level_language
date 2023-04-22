

/* Error in ES5 */
console.log("error in es5")
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}

console.log("Fixing error in es5")
for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    })(i);
}
// subtitute let in var
console.log("Fixing error in es6")
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

/* use arro function */
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000);
}