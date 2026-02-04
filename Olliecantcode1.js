
var btn = document.querySelector('.button');


btn.onclick = function(event) {
 
  event.preventDefault();


  var username = prompt("Please enter your username:");

 
  if (username) {
    alert("You entered: " + username);
  }
};
