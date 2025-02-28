// part 1 fizz buzz Loop through all numbers from 1 to 100.
//If a number is divisible by 3, log “Fizz.”
//If a number is divisible by 5, log “Buzz.”
//If a number is divisible by both 3 and 5, log “Fizz Buzz.”
//If a number is not divisible by either 3 or 5, log the number.

//for (let i = 1; i <= 100; i++) console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);

// part 2 fnding the next closest prime num set function to check if prime 

function isNumberPrime(number) {
    for (let divisor = 2; divisor < number; divisor++) {
        if (number % divisor === 0) {
            return false; 
        }
    }
    return number > 1; 
}
function primeNum(startingNumber) {
    let candidate = startingNumber + 1; 

    while (!isNumberPrime(candidate)) { 
        candidate++; 
    }

    console.log(`prime number that comes after ${startingNumber} is: ${candidate}`);
}


//numbers for after prime

primeNum(1);  
primeNum(8);  
primeNum(6);  
primeNum(18);  
primeNum(3);  
primeNum(9);  