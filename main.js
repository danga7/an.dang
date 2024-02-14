//dropdown menu on mobile

// function menuDrop(){
//     document.getElementById("dropContent").classList.toggle("show");
// }

const dropdownButt = document.getElementById("dropbutt");
const dropdownMenu = document.getElementById("dropContent");
const toggleCancel = document.getElementById("dropbutt");
// toggle drop down menu on and off
const toggleDropdown = function(){
    dropdownMenu.classList.toggle("show");
    toggleCancel.classList.toggle("cancel");
}
// close when any DOM element is clicked
dropdownButt.addEventListener("click", function(e){
    console.log("Button clicked");
    e.stopPropagation();
    toggleDropdown();
});

document.documentElement.addEventListener("click", function () {
    if (dropdownMenu.classList.contains("show")) {
      toggleDropdown();
    }
  });

// var bubbles = document.getElementById("bubs").children;
var bubbles = document.querySelectorAll("#bubs p");

for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].addEventListener("mouseover", highlightBubble, false);
    bubbles[i].addEventListener("mouseout", resetBubble, false);
}

function highlightBubble(event) {
    event.target.style.backgroundColor = "white";
    event.target.style.transform = "scale(1.2)";
}

function resetBubble(event) {
    event.target.style.backgroundColor = ""; 
    event.target.style.transform = ""; 
}



