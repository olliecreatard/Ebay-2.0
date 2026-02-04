const btn = document.querySelector('.button');

if (btn) {
  btn.onclick = function(event) {
    event.preventDefault();
    
    // Part 1: Ask Username
    let username = prompt("Please enter your username:");
    
    // Part 2: Ask Amount (only if they typed a name)
    if (username) {
       let choice = prompt("Hello " + username + "!\n\nPlease type one of the following amounts:\n1000\n10000\n100000\n1000000");
       
       if (choice === "1000" || choice === "10000" || choice === "100000" || choice === "1000000") {
           alert("Success! \nUser: " + username + "\nAmount: " + choice);
       } else {
           alert("Invalid amount selected.");
       }
    }
  };
} else {
  console.error("Button not found! Check your HTML class name.");
}
