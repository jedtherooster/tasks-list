var modal = document.querySelector("#add-task-modal");

// Get the button that opens the modal
var addTaskBtn = document.querySelector("#add-task-btn");

// Get the <span> element that closes the modal
var closeBtn = document.querySelector(".close");

// When the user clicks on the button, open the modal
addTaskBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 