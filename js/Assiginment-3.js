
// Smart Testing System

// Selecting elements
let form = document.querySelector("#form");
let email = document.querySelector("#email");
let password = document.querySelector("#pass");
let btn = document.querySelector("#btn");


let errorMsg = document.querySelector("#error-msg");
let successMsg = document.querySelector("#success-msg");

let text = document.querySelector("#text");


let predefinedEmail = "a@gmail.com"; // predefined email
let predefinedPass = "1234"; // predefined password

let attemptsLeft = 3; // number of attempts left

// Event listener for login button

btn.addEventListener("click", function () {

     

    let userEmail = email.value; // get user email
    let userPass = password.value; // get user password
   


  
    if (userEmail === predefinedEmail && userPass === predefinedPass) { // check if email and password match
        successMsg.classList.remove("d-none"); // show success message
        errorMsg.classList.add("d-none"); // hide error message
       text.innerText = "Login success!"; // show success text
    } else {
        attemptsLeft--; // decrement attempts
        text.innerText = "Wrong! Attempts left: " + attemptsLeft; // alert wrong and attempts left
        successMsg.classList.add("d-none"); // hide success message
        errorMsg.classList.remove("d-none"); // show error message

        if (attemptsLeft <= 0) {
        lockLoginSystem(); 
    }
    }
});

// Function to lock the login for 30 seconds
function lockLoginSystem() {
    
    let count = 30;


    let timer = setInterval(() => {  // set interval for countdown
    count--;
    text.innerText = "Try again after: " + count + " seconds";
    if (count <= 0) {
        clearInterval(timer); // clear interval

        attemptsLeft = 3; // reset attempts
        text.innerText = "You can try again now";
        return;
    }

}, 1000); // interval of 1 second
}

