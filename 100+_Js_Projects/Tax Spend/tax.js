const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
var phones_bought = 0;

function calculateTax(amount) {
  return amount * TAX_RATE;
}

function formatAmount(amount) {
  return "$" + amount.toFixed(2);
}

// enable one to buy hone while you have money
while (amount < bank_balance) {
  // buy new phone
  amount += PHONE_PRICE;

  // check if we can afford accessory
  if (amount < SPENDING_THRESHOLD) {
    amount = amount + ACCESSORY_PRICE;
  }
  phones_bought++;  // increment phones bought
}

// getting the goverment tax
amount = amount + calculateTax(amount);

console.log("Your purchase: " + formatAmount(amount));
console.log("Phones bought are: " + phones_bought);
if (amount > bank_balance) {
  console.log("You can't afford this purchase: :(");
}
