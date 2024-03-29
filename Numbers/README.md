#   Numbers
Number operations of a programming language allow you to compute numerical values. <br/>
***
## Types of operations
1. `+` : __addition__
2. `-` : __subtraction__
3. `/` : __division__
4. `*` :  __multiplication__
5. `%` : __modulus__

## Number system
Javascript uses 32-bit floating point numbers. <br/>
The __first__ bit indicates the number sign that is `1` if `negative <br/>
The next `8 bits` 30 to 23 indicate the exponent value<br/>
Finally, the remaining bits `23` represents fraction number <br/>
The value of number is evaluated by esoteric formula<br/>
With decimal fractions, this floating-point number system causes some rounding errors in javascript<br/>
```
    0.1 + 0.2 === 0.3 //false
```
This is because representation of decimal to binary numbers  are represented by `2^n` where n is `integer`. Hence while calculating `0.1` it ends to infinity.

## Number Object
1. Math.floor: <br/>
Rounds down `to` nearest integer
```
    Math.floor(0.9) // 0
```
2. Math.round: <br/>
rounds `to` nearest integer
```
    Math.round(0.49) // 0
    Math.round(0.52) // 1
```
3. Math.ceil: <br/>
rounds up `to` nearest integer
```
    Math.ceil(0.1) // 1
```

## Number.EPLISON
Number.Eplison returns the smallest interval between two representable numbers. <br/>
Used in floating point approximations
```
    function numberEquals(x,y){
        return Math.abs(x - y) < Number.EPLISON

    }
```

## Number Algorithms
### Primarity test:
This is used to check if a number is prime number <br/>
This can be done by iterating over from `2`, to `n`, checking whether modulus division(remainder) is equal to zero. <br/>
I has __time complexity__ of `O(n)` because it checks all numbers  from `0` to `n`. <br/>

Prime numbers are in the form of `6k + 1 ` or ` 6k - 1`. <br/> 
Using this to evaluate we get __time complexity__ of <br/>
`O(sqrt(n))`


### Prime Factorization
This is the process of determining prime numbers multiply to a given number <br/>
Prime Factorization are useful basis of encryption and hashing.<br/>
__Time Complexity__ : (sqrt(n)) <br/>
This algorithm works by printing any number divisible by i without a remainder.

### Random Number Generator
This is a important to simulate conditions in real-life situations. <br/>
In Javascript  We use `Math.random` which returns float between `0` and `1`. <br/>
To get floating points higher than 1, multiply `Math.random()` by range, add and subtract by its base <br/>
i.e
```
    Math.random() * 100 // floats between 0 and 100
    Math.random() * 25 + 5 // floats between 5 and 30
    Math.random() * 10 - 100 // floats between -100 and -90

    Math.floor(Math.random() * 100); // integer between 0 and 99
    Math.round(Math.random() * 25) + 5; // integer between 5 and 30
    Math.ceil(Math.random() * 10) - 100; // integer between -100 and -90
```
