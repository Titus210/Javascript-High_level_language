let user = {
    name: 'Titus',
    age: 30
}

let clone = {
    status: {
        health: 20,
        maritialStatus: "maried"
    }
}

// copy property ro clone
for (let key in user) {
    clone[key] = user[key]
}

// clone is and independent object
// changing data  woun't affect user

clone.name = "Trevor"

console.log(clone);
console.log(user)


// using Object.assign()
let view = { canView: true }
let edit = { canEdit: true }

Object.assign(user, view, edit)
console.log(user)

// create using empty object
let employee = Object.assign({}, user)
console.log(clone);

// using structure Clone 
let employeeClone =  structuredClone(clone)
console.log(employeeClone == clone);