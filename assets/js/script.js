
// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 


//Add event listeners here 

//Add let variables here 

//Add user score and score display here

//runGame for round 1 here 

//runGame for round 2 here 

//runGame for round 3 here 

//runGame for round 4 here 

//runGame for round 5 here 

//runGame for round 6 here 

//endGame function here 

//resetGame function here 

//gameOver function here 



