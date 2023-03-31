// array to hold all the bills
var bills = [124, 48, 268, 180, 42];



var bill_tips = [];
var tips = [];
var hotels = ["Soodvalley", "Santuri", "Eatify", "foodie", "yummy"];
var tip = 0;

// John Family
var john = {
    bills: [124, 48, 268, 180, 42],
    tipCalc: function () {

        let tip = 0;
        for (var i = 0; i <= this.bills.length; i++) {
            if (this.bills[i] <= 50) {
                tip = 0.2 * this.bills[i];

            }
            else if (this.bills[i] > 50 && this.bills[i] <= 200) {
                tip = 0.15 * this.bills[i];
            }
            else if (this.bills[i] > 200) {
                tip = 0.1 * this.bills[i];
            }
            else
                return tip;
            tips.push(tip.toFixed(2));
        }

    }
}
// run the method for each
john.tipCalc();

// log the tips
console.log(tips);

//loop through hotel and make a new list for each hotel
for (var i = 0; i < hotels.length; i++) {
    let bill_tip = hotels[i] + ": tip " + `${tips[i]}` + " " + ", bill: " + `${john.bills[i]}`;
    bill_tips.push(bill_tip);
}

// log the bill and tips for each hotel
console.log(bill_tips);




/// Mark family




function tipsCalc() {

    bills = [77, 375, 110, 45];
    let tip = 0;
    var tips = [];

    for (var i = 0; i <= bills.length; i++) {
        if (bills[i] <= 10) {
            tip = 0.2 * bills[i];

        }
        else if (bills[i] > 100 && bills[i] <= 300) {
            tip = 0.25 * bills[i];
        }
        else if (bills[i] > 300) {
            tip = 0.1 * bills[i];
        }
        else
            return tip;
        tips.push((tip.toFixed(2)));
    }

    // calculate average tip
    
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    var avg = sum / tips.length;


    
    return tips, bills, avg;
}




console.log(tipsCalc());