function startPrank() {
  
  document.getElementById("buttons-container").style.display = "none";
  document.getElementById("sub-title").style.display = "none";


  let loader = document.getElementById("loading-msg");
  loader.style.display = "block";

  
  setTimeout(function() {
    
    
    loader.style.display = "none";

   
    document.getElementById("definition-card").style.display = "block";


    document.body.style.backgroundColor = "#ffcccc";


    document.getElementById("main-title").innerText = "Oh no...";

  }, 3000); 
}
