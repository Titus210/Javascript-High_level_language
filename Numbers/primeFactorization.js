function primeFactors(n){
    // check the number of 2s that divide n
    var no_of_2s;
    while( n%2 == 0 ){
        no_of_2s++;
        n = n % 2
    }
    console.log(`THe number of 2's is ${no_of_2s}}`)

    // check odd at this block and skip one element
    // i = i + 2
    for(var i = 0; i*i <= n; i = i + 2){
        // while i divides n print i and divide n
        while( n % i == 0 ){
            console.log(i);
            n = n / i;
        }
    }

    // when n is a prime number greater than 2
    if( n > 2){
        console.log(n);
    }

}

primeFactors(10);