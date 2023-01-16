function isPrime(n){
    if (n <= 1)
    {
        console.log(`Number cant be ${n}`)
        return false;
    }
        // check  from 2 to n-1
        for (var i = 2; i < n; i++){
            if (n % i == 0){
                console.log(`${n} is not prime`)
                return false;
            }
            console.log(`${n} is prime`)
            return true;
        }
}
console.log(isPrime(1)); // false

console.log(isPrime(17)); // true)