const greetingDisplay = document.getElementById("greeting-display")
let greeting = document.getElementById("greeting-select")
let submit = document.getElementById("send")
let form = document.getElementById("form")
let recipient = document.getElementById("recipient")
let message = document.getElementById("custom-greeting")
let sender = document.getElementById("sender")

function writeGreeting() {
    // Write a function update the message in the greeting-display paragraph each time the form is updated.
    greetingDisplay.textContent = greeting.value
    if(message.value) {
        greetingDisplay.textContent = message.value;
    } else if(greeting.value === "") {
        greetingDisplay.textContent = "Select / write a greeting"
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    recipient.innerHTML = e.target["recipient-input"].value;
    message.innerHTML = e.target["custom-greeting"].value;
    sender.innerHTML = `- ${e.target["sender-input"].value}`;
})

submit.addEventListener("click", writeGreeting)