function runCode() {
  
  var buttons = document.getElementById("buttonBox");
  buttons.style.display = "none";
  
  var text = document.getElementById("subTitle");
  text.style.display = "none";

  var message = document.getElementById("waitMessage");
  message.style.display = "block";


  setTimeout(function() {
    
    message.style.display = "none";

 
    var box = document.getElementById("resultBox");
    box.style.display = "block";

    document.body.style.backgroundColor = "red";

    document.getElementById("mainTitle").innerText = "YOU REALLY ARE";

  }, 2000);
}
