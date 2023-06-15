let users=[
    {name:"john", car:"BMW"},
    {name:"mark", car:"volvo"},
    {name:"phill", car:"audi"},
]

let user = users.find(item => item.name == 'john')

console.log(user)   //logs object john