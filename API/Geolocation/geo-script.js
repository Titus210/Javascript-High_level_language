
// get user position to print to screen
const destination = document.querySelector("p");

/* get users location */
const getLocation = () => {
  // get location from user
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Cant get your location");
  }
};

/* Showing user position */
const showPosition = (position) => {
  let latitude = position.coords.latitude;
  let longitude = position.coords.latitude;
  console.log(latitude, longitude);
  destination.innerHTML = `Latituse: ${latitude} <br> Longitude: ${longitude}`;
};

/* Display error incase one is met */
const showError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request");
      break;

    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;

    case error.TIMEOUT:
      alert("Request Timeout! Took long to respond");
      break;

    case error.UKNOWN_ERROR:
      alert("An uknown error occured.");
      break;

    default:
      alert("An uknown error occured.");
  }
}