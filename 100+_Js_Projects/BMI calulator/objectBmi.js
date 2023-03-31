// create the Class
var john = {
    fullname: "john",
    mass: 68,
    height: 2,
    bmicalc: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullname: "Mark",
    mass: 78, // kg
    height: 200, // mtr
    bmicalc: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}


// check who has the highest BMI
var highestBMI = function (person1, person2) {
    if (person1.bmicalc() > person2.bmicalc()) {
        return person1.fullname + " has the highest BMI of " + person1.bmicalc();
    }
    else if (person2.bmicalc() > person1.bmicalc()) {
        return person2.fullname + " has the highest BMI of " + person2.bmicalc();
    }
    else {
        return "Both have the same BMI"
    }
}

console.log(highestBMI(john, mark));