fetch("https://reqres.in/api/users")
    .then(res => console.log(res.json()))
    .then(data => console.log(data))
    
