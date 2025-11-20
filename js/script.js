
// FizzBuzz from 1 to 100
console.log("FizzBuzz from 1 to 100:");
for (let i = 1; i <= 100; i++) { // loop from 1 to 100
    if (i % 3 == 0 && i % 5 == 0) { // if i is divisible by both 3 and 5
        console.log(i, "FizzBuzz"); // print FizzBuzz
    }
    else if (i % 3 == 0) { // if i is divisible by 3
        console.log(i, "Fizz"); // print Fizz
    }
    else if (i % 5 == 0) { // if i is divisible by 5
        console.log(i, "Buzz"); // print Buzz
    }
    else { // if i is not divisible by 3 or 5 
        console.log(); // dont print anything
    }
}

console.log("---------------------------------------");

console.log("Prime number between 1 to 100:");

// Prime number between 1 to 100

for (let n = 2; n <= 100; n++) { // n is the number to be checked
    let isPrime = true; // assume n is prime

    for (let i = 2; i < n; i++) { // check for factors from 2 to n-1
        if (n % i == 0) { // if n is divisible by i, it is not prime
            isPrime = false; // set isPrime to false
            break; // exit the loop early
        }
    }

    if (isPrime) { // if n is prime
        console.log(n , "is a prime number"); // print n
    }
}