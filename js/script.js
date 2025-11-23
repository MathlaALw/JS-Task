
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
        console.log(n, "is a prime number"); // print n
    }
}


console.log("---------------------------------------");

// Smart Testing System

// Login Function

function login() {
    let email = "a@gmail.com"; // predefined email
    let pass = "1234"; // predefined password

    let attempts = 3; // number of attempts

    while (attempts > 0) { // while attempts less than 3
        let userEmail = prompt("Enter Email:"); // get user email
        let userPass = prompt("Enter Password:"); // get user password

        if (userEmail === email && userPass === pass) { // check if email and password match
            alert("Login success!"); // alert success
            return true; // return true
        }

        attempts--; // decrement attempts
        alert("Wrong! Attempts left: " + attempts); // alert wrong and attempts left
    }


    // count down from 30 to 0 seconds i
    let count = 30;

    let timer = setInterval(() => {
        console.log("Try again after: " + count + " seconds");
        count--;

        if (count < 0) {
            clearInterval(timer);
            alert("You can try again now");
            startSystem(); // restart the login process
        }
    }, 1000);

    

}

// Random question generator

function randomQuestion() {
    let num1 = Math.floor(Math.random() * 10); // random number between 0 and 9
    let num2 = Math.floor(Math.random() * 10); // random number between 0 and 9

    let operators = ["+", "-", "*"]; // array of operators
    let op = operators[Math.floor(Math.random() * operators.length)]; // random operator

    let question = `${num1} ${op} ${num2}`; // create question string
    let answer = eval(question); // evaluate the question to get the answer

    return { question, answer }; // return question and answer
}

// Quiz Function
function quiz() {
    let total = Number(prompt("How many questions?")); // get total number of questions
    let score = 0; // initialize score

    for (let i = 0; i < total; i++) { // loop for total number of questions
        let q = randomQuestion(); // get random question

        let userAnswer = Number(prompt(q.question + " = ?")); // get user answer

        if (userAnswer === q.answer) { // check if answer is correct
            score++; // increment score
        }
    }

    alert("Your score: " + score + " / " + total); // display final score
}


// Start System Function
function startSystem() {
    if (login()) {
        quiz(); // start the quiz if login is successful
    }
}

// Start the system the first time
startSystem();