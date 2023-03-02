fetch("https://fakestoreapi.com/products/").then((data) => {
    //console.log(data); Json Format

    return data.json(); // convert to object
}).then((objectData) => {
    console.log(objectData[0].title); // Json Format

    let tableData = "";
    objectData.map((values) => {
        tableData += ` 
                <tr>
                    <td>${values.title}</td>
                    <td>${values.description}</td>
                    <td>${values.price}</td>
                    <td><img src ="${values.image}"></td>   
                </tr>`
    });
    document.getElementById("table_body").innerHTML = tableData;
})