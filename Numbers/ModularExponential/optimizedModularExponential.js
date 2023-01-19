function modularExponential( base, exponent, modulus){
    if (modulus == 1){
        return 0;
    }

    var value = 1;

    for(var i = 0; i < exponent; i++){
        value = (value * base) % modulus;
    }
    return value; 
}
modularExponential(`The modular Exponential is ${console.log(modularExponential(12, 1, 14))}`)