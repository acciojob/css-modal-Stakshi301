//your JS code here. If required.
//your JS code here. If required.
// JavaScript to open/close the modal
document.getElementById('openModal').onclick = function() {
  document.getElementById('myModal').style.display = "block";
}

// Close the modal when clicking outside of it or on the close button
window.onclick = function(event) {
  var modal = document.getElementById('myModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.querySelector('.close-modal').onclick = function() {
  document.getElementById('myModal').style.display = "none";
}