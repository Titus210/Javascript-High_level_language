// create array of objects

let cars = [
    {
        "colors": "red",
        "type": "BMW",
        "registration": new Date('2020-7-12'),
        capacity: 12
    },
    {
        "colors": "Black",
        "type": "Mercedes",
        "registration": new Date('2020-1-12'),
        capacity: 4
    },
    {
        "colors": "yellow",
        "type": "Nissan",
        "registration": new Date('2020-10-12'),
        capacity: 8
    },
    {
        "colors": "red",
        "type": "Toyota",
        "registration": new Date('2020-12-12'),
        capacity: 4
    }
]


// add new start object

let ferari = {
    "colors": "maroon",
    "type": "Ferari",
    "registration": new Date("2018-7-11"),
    capacity: 2
}
cars.unshift(ferari);


// add new car to end
let volvo = {
    "colors": "Gray",
    "type": "Volvo",
    "registration": new Date("2018-7-8"),
    capacity: 4
}

cars.push(volvo);

// add car to middle 
/* Array.splice({
     {index where to start},
     {items to remove},
     {items to add}
     })
     */


let mazda ={
    "colors": "Blue",
    "type": "Mazda",
    "registration": new Date("2018-7-8"),
    capacity : 4
}


// print cars
console.log(cars);


/* Find array by values */
// We use Array.find() method


let car_color = cars.find(car => car.colors === "yellow");
console.log(`The cars with color blue is \n${car_color}`)

/* Filter car */
let car_capacity = cars.filter(car => car.capacity === 4)
console.log(`The cars with capacity of 4 is \n${car_capacity}`)