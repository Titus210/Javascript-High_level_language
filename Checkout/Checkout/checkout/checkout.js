// Get elements to replace

var names = document.getElementById("name");
function inputValue() {
  alert(names.value + " elements to replace");
}
items = document.getElementById("item_id");
quantities = document.getElementById("quantity");
firstTotal = document.getElementById("subTotal");
shipping = document.getElementById("shipping");
totals = document.getElementById("total");

// Get users name

var fName = document.getElementById("fName").value;
var sName = document.getElementById("sName").value;

// message details
var message = ",Please check your order";
names = document.getElementById("name");
checkMessage = fName + " " + sName + " " + message;

// Get watch name
var itemName = document.querySelector("#watches");
var watchName =
  itemName.options[itemName.selectedIndex].getAttribute("item_name");

// Get users location

var userLocation = document.querySelector("#users_location");
var locationName =
  userLocation.options[userLocation.selectedIndex].getAttribute(
    "location_name"
  );

// check location

if (locationName == "Eldoret") {
  shippingFee = 1200;
} else if (locationName == "Nakuru") {
  shippingFee = 200;
} else if (locationName == "Kisumu") {
  shippingFee = 600;
} else if (locationName == "Kitale") {
  shippingFee = 1400;
} else if (locationName == "Nairobi") {
  shippingFee = 00;
} else {
  null;
}
var itemPrice;
// Item price
if (watchName == "Rolex") {
  itemPrice = 10000;
} else if (watchName == "Gemius") {
  itemPrice = 4000;
} else if (watchName == "Quartz") {
  itemPrice = 9000;
} else if (watchName == "Casio") {
  itemPrice = 2300;
} else if (watchName == "Oraimo") {
  itemPrice = 8000;
} else {
  null;
}

// Total quantity
var quantity = 12;

// item price

// sub total
var subTotal = quantity * itemPrice;

var total = subTotal + shippingFee;

names.innerHTML = checkMessage;
items.innerHTML = watchName;
quantities.innerHTML = quantity;
firstTotal.innerHTML = subTotal;
shipping.innerHTML = user_location;
totals.innerHTML = total;
