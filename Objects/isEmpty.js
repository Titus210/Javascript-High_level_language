// Task two

// Checks if object is empty
// returs true if object is empty else false if object is not empty


function isEmpty(obj) {
    for (key in obj) {
        if (key == undefined)
            return true;
        else
            return false;
    }
}
let schedule = {}
alert(isEmpty(schedule))

// add property
schedule["8.30"] = "wake up"
alert(isEmpty(schedule))


// standard solution
function isEmpty(schedule) {
    for (let key in obj) {
        // if the loop has started, there is a property
        return false;
    }
    return true;
}
