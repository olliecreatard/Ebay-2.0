// 1. Select all elements that have the class 'button'
const buttons = document.querySelectorAll('.button');

// 2. Loop through each button and add a click listener
buttons.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        
        // Stop the page from jumping to the top
        event.preventDefault();

        // Get the specific number from the button's "data-amount" attribute
        let amount = btn.getAttribute('data-amount');

        // Prompt the user for their username
        let username = prompt("You selected " + amount + ".\nPlease enter your username:");

        // Check if they typed something
        if (username) {
            alert("Confirmed!\nUser: " + username + "\nAmount: " + amount);
        }
    });
});
