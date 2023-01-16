function isPrime(n){
    if ( n <= 1){
        console.log(` ${n} Cant be  evaluated and prime`);
        return false;
    }
    if ( n <= 3){
        console.log(`${n} is a prime number`)
        return true;
    }

    // skip middle 5 numbers 
    if( n % 2 == 0 ||  n % 3 == 0){
        console.log(`${n} is a not a prime number`)
        return false;
    }

    for (var i = 5; i *i <= n; i = i + 6){
        if( n % i == 0 || n %(i +2) == 0){
            console.log(`${n} is a not a prime number`)
            return false; 
        }
}
}

console.log(isPrime(1)) // false
console.log(isPrime(3)) // true