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


