function Person(first_name, second_name) {
    this.first_name = first_name,
        this.second_name = second_name

    this.getFulName = function () {
        console.log(`Firstname: ${this.first_name} \nSecondname: ${this.second_name}`);
    }
}

// creating instance of object
let person_1 = new Person("Titus", "Kiplagat");
let person_2 = new Person("Kevin", "KIPP");

person_1.getFulName(); // invoke fullname method
person_2.getFulName(); // invoke fullname method


/* Using Esc to invoke without new keyword */


