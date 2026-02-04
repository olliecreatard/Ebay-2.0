// This line forces the script to wait until the HTML is loaded
document.addEventListener('DOMContentLoaded', function() {

    // 1. Select all elements with the class 'button'
    const buttons = document.querySelectorAll('.button');

    // 2. Loop through each button to add the click logic
    buttons.forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            
            // Stop the link from jumping to the top of the page
            event.preventDefault();

            // Read the specific number from the HTML (data-amount="...")
            let amount = btn.getAttribute('data-amount');

            // Prompt the user
            let username = prompt("You selected " + amount + ".\nPlease enter your username:");

            // Check if they typed something
            if (username) {
                alert("Success!\nUser: " + username + "\nAmount: " + amount);
            }
        });
    });

});
