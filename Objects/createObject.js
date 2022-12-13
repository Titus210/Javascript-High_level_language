//    Hello Object Task 

// Task one

// write a code to:
// create empty user
// add property name with value john
// add property surname with value  smith
// change value of name to  pete
// remove property surname

function createuser() {
    // creation
    let user = {};

    // adding property
    user.name = "John";
    user.surname = "Smith";

    // change name property
    user.name = "Pete";

    // deleting property
    delete user.surname;
}