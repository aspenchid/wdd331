
function toggleHamburger() {
  var updateElement = document.getElementById("hamburger");
  var updateElement2 = document.getElementById("nav");

//toggle adds a class if it's not there or removes it if it is.
  updateElement.classList.toggle("close");
  updateElement2.classList.toggle("visible");

}


