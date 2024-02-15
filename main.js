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

// Vertical bar circle

function inView(id){
    var object = document.getElementById(id);
    var y = object.getBoundingClientRect().y
    // console.log(object.getBoundingClientRect().y, window.innerHeight)
    if( y <= window.innerHeight && y > 0){
        return true;
    }else{
        return false;
    }
}

document.addEventListener("scroll", function(){
    if(inView("section-3")){
        document.getElementById("circle-1").style.cssText = "background-color: white; transform: scale(1);";
        document.getElementById("circle-2").style.cssText = "background-color: white; transform: scale(1);";
        document.getElementById("circle-3").style.cssText = "background-color: tomato; transform: scale(1.2);";
        document.getElementById("circle-4").style.cssText = "background-color: white; transform: scale(1);";
    }
    if(inView("section-2")){
        document.getElementById("circle-1").style.cssText = "background-color: white; transform: scale(1);";
        document.getElementById("circle-2").style.cssText = "background-color: tomato; transform: scale(1.2);";
        document.getElementById("circle-3").style.cssText = "background-color: white; transform: scale(1);";
        document.getElementById("circle-4").style.cssText = "background-color: white; transform: scale(1);";
    }
    if(inView("section-1")){
        document.getElementById("circle-1").style.cssText = "background-color: tomato; transform: scale(1.2);";
        document.getElementById("circle-2").style.cssText = "background-color: white; transform: scale(1);";
        document.getElementById("circle-3").style.cssText = "background-color: white; transform: scale(1);";
        document.getElementById("circle-4").style.cssText = "background-color: white; transform: scale(1);";
    }
})

