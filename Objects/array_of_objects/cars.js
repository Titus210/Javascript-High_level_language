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


let mazda = {
    "colors": "Blue",
    "type": "Mazda",
    "registration": new Date("2018-7-8"),
    capacity: 4
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



/*  Tranform objects to array */
// We  use array.map
let sizes = cars.map(car => {
    if (car.capacity <= 3)
        return "Small"

    if (car.capacity <= 5)
        return "Medium"
    return "Large"
}
)

console.log(sizes)

let carProperties = cars.map(car => {
    let properties = car.properties = {
        "capacity": car.capacity,
        "size": "large"
    };

    if (car.capacity <= 5)
        properties['size'] = "medium"

    if (car.capacity <= 3)
        properties['capacity'] = "small"

    return properties
})

console.log(carProperties)

/* Add property to properties to every object */
cars.forEach(car => {
    car['size'] = "large"
    if (car.capacity <= 5)
        car['size'] = "medium"
    if (car.capacity <= 3)
        car['size'] = "small"
})


console.log(cars)


/* Sort array by a property */
// we use Array.sort

let sortedCars = cars.sort((c1, c2) => (
    c1.capacity < c2.capacity));

console.log(sortedCars)

/* Check if object in array fulfils condition */
// We use Array.every Array.some

console.log(cars.some(car => car.colors == 'yellow' && car.type == "volvo"))
console.log(cars.every(car => car.capacity >= 2));
 