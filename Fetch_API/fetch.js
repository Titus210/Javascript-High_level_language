fetch("https://reqres.in/api/users")
    .then(res => {
        if (res.ok) {
            console.log("Success")
        }
        else {
            if (res.ok) {
                console.log("unsucessful")
            }
        }
    })

