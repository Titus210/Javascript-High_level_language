

// multiply numeric values by two
// before call
let user = {
    Name: 'John',
    Math: 80,
    English: 85,
    French: 99
}
alert(`BEfore multiplying numeric \n ${JSON.stringify(user)}`)

// create function to multiply numeric values by two



function multiplyNumber(user) {
    for (let value in user) {
        if (typeof (user[value]) === 'number')
            user[value] *= 2;
    }

}

// after multiplying numeric values
multiplyNumber(user)
alert(`After multiplying numeric \n ${JSON.stringify(user)}`)