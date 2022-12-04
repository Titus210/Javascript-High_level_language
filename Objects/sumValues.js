// task 3
// sum property and store in variabl sum

let salaries = {
    John: 100,
    Mary: 160,
    Ashley: 130
}
sum = 0;
for (let value in salaries) {
    sum += salaries[value]
}
alert(sum)


