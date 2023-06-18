const getLocation = () => {
  //get the user location with ip adress
  fetch('https://ipapi.co/json')
  .then((response)=>response.json())
  .then((data)=>{
    const destination = document.querySelector('p');
    console.log(data)
     destination.innerHTML = `Latitude: ${data.latitude} <br> Longitude: ${data.longitude}`;
  })
   
};
