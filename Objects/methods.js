// Method is a function as a property

// creating an object 

dog = {
    name: "",
    height: "",
    bark(bark) {
        console.log(bark);
    }
}

dog.name = "Jerry";
dog.height = 12;
dog.bark("Wooof");
console.log(dog)


// this method on object

// creating an object 

dog = {
    name: "",
    height: "",
    bark: "",
    sound() {
        console.log(`The dog ${this.name} has the sound ${this.bark}`);
    }
}

dog.name = "Pops";
dog.height = 12;
dog.bark = "Wooof,Wooof";
dog.sound();
console.log(dog)



// real world example


employee = new Object();
employee.name = "Titus";
employee.height = "5'2"
employee.salary = 12000;

console.log(employee);


// calculator


let calculator = {
    num_1: "",
    num_2: "",



    // sum
    sum() {
        return Number(this.num_1) + Number(this.num_2)
    },

    // sum
    mul() {
        return this.num_1 * this.num_2
    },

    //    input value

    read() {
        this.num_1 = prompt("Enter first number: ");
        this.num_2 = prompt("Enter second number: ");
    },
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
