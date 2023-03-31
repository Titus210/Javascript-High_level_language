// array of bills in 3 hotels
bills = [124,48,268];


var total_tip =[];

var tip = function tipCalculator(bill) {
    if bill <= 50{
        var tip_1 = (20/100) *bill;
        total_tip.push(tip_1);
    }
    else if (bill > 50 && <= 200){
        var tip_2 = (15/100)* bill;
        total_tip.push(tip_2);
    }
    else{
        var tip_3 = (10/100) * bill;
        total_tip.push(tip_3);
    }
    
}


for(i = 0; i<= bills.length;i++ ){
    tipCalculator(bills[i]);
}

console.log(total_tip);

// calculate total pay
for (let i = 0; i < total_tip.length; i++) {
    var tip_sum += total_tip[i];
    var billSum += bill[i];
}

totalCost = tip_sum + billSum;
console.log(totalCost);