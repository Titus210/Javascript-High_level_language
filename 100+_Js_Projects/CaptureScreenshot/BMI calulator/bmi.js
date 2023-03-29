// get elements from frontend
var submit = document.getElementById("submit");
var cancel = document.getElementById("cancel");

// height
var person_1_height = document.getElementById("person_1_height");
var person_2_height = document.getElementById("person_2_height");

// mass 
var person_1_mass = document.getElementById("person_1_mass");
var person_2_mass = document.getElementById("person_2_mass");

var person_2_BMI = parseFloat(person_2_mass.value) / (parseFloat(person_2_height.value) * parseFloat(person_2_height.value));
var person_1_BMI = parseFloat(person_1_mass.value) / (parseFloat(person_1_height.value) * parseFloat(person_1_height.value));

submit.addEventListener("click", function () {
    if (person_2_BMI > person_1_BMI) {
        alert("person_2_BMI is greater than person_1_BMI" + person_1_BMI);
    }
    else {
        alert("person_2_BMI is less than person_1_BMI");
    }
});