console.log(this) // refers to global object

function calculateAge(year) {
    console.log(2023 - year)
    console.log(this) // refers to global object
}

calculateAge(2002)


var john = {
    name: 'John',
    yob: 2002,
    calculateAge: function () {
        console.log(2023 - this.yob)
       //  console.log(this) // refers to john object
        function innerFunct() {
          //  console.log(this) // window global object
        }
        innerFunct()
    }
}
john.calculateAge()


var mike ={
    name : 'mike',
    yob : 2000,
   
}

// borrows from john object
mike.calculateAge = john.calculateAge;
mike.calculateAge();