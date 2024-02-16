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

//set cursor when hover on selected work
document.addEventListener("DOMContentLoaded", function(){
    var section1pic = document.getElementsByClassName("section-1-pic");
    console.log(section1pic)
    if (section1pic.length > 0){
        var customCursor = document.createElement("div");
        customCursor.id = "custom-cursor";
        document.body.appendChild(customCursor);

        for(var i=0; i < section1pic.length; i++){
            var s1pic = section1pic[i];
            s1pic.addEventListener("mouseover", function(){
                customCursor.style.display = "block";
            });
            s1pic.addEventListener("mouseout", function(){
                customCursor.style.display = "none";
            });
            s1pic.addEventListener('mousemove', function(e) {
                customCursor.style.left = e.clientX + 'px';
                customCursor.style.top = e.clientY + 'px';
            });
        }
    }
});

// ISN'T WORKING NOW
// document.addEventListener("DOMContentLoaded", function(){
//     var section1pic = document.getElementsByClassName("section-1-pic")[0];
//     if (section1pic.length > 0){
//         var customCursor = document.createElement("div");
//         customCursor.className = "customCursor"; 
//             customCursor.style.display = 'none';
//             customCursor.style.position = 'fixed';
//             customCursor.style.width = '40px';
//             customCursor.style.height = '40px';
//             customCursor.style.backgroundColor = "#FFC42F";
//             customCursor.style.borderRadius = '50%';
//             customCursor.style.pointerEvents = 'none';
//             customCursor.style.zIndex = '1';
//         document.body.appendChild(customCursor);
//         console.log(section1pic);
//         console.log(typeof section1pic);

//        section1pic.addEventListener("mouseover", function(e){
//         var cursor = this.getElementsByClassName("customCursor")[0];
//         cursor.style.display = "block";
//         console.log("Mouse over event triggered");
//        });
//        section1pic.addEventListener("mouseout", function(e){
//         var cursor = this.getElementsByClassName("customCursor")[0];
//         console.log("Mouse out event triggered");
//         cursor.style.display = "none";
//        });
//        section1pic.addEventListener("mousemove", function(e) {
//         var cursor = this.getElementsByClassName("customCursor")[0];
//         cursor.style.left = e.clientX + 'px';
//         cursor.style.top = e.clientY + 'px';
//     });
//     }
// });




