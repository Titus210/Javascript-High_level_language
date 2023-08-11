
/* New code */
const new_fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

new_fetchPromise
    .then((response) => response.json())
    .then((data) => {
        console.log(data[4].name)
    })


    /* Checking if data was received */
    const fetchPromise = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    )
             
    fetchPromise
        .then((response) => {
        // check if failed
        if (!response.ok)
            throw new Error(`HTTP error: ${response.status}`);
    
        return response.json()
    })
    .then((data) => {
        console.log(data[0].name)
    })
    .catch((error)=>{
        console.log(`Could not get the products: ${error}`)
    })




    
    /* Combining propmises */

    const fetchPromise1 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );
      const fetchPromise2 = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
      );
      const fetchPromise3 = fetch(
        "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
      );

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
.then((responses) =>{
    for (const response of responses){
        console.log(`${response.url}: ${response.status}`)
    }
})
.catch((error)=>{
    console.log(`Failed to fetc`)
})