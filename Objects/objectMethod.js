let person = {
    first_name: "Titus",
    second_name: "Kiplagat"
};

function greet() {
    console.log("Hello")
}


// assign greet function as a method og person object
person.greet = greet;

person.greet();


// shorthand


let person_2 = {
    first_name: "Titus",
    second_name: "KKK",

    greet: function(){
        console.log(`Hello ${this.first_name}`);
        
    }
   
}
person_2.greet();