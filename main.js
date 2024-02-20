//dropdown menu on mobile
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

//  Bubbles highlight
// // var bubbles = document.getElementById("bubs").children;
// var bubbles = document.querySelectorAll("#bubs p");

// for (var i = 0; i < bubbles.length; i++) {
//     bubbles[i].addEventListener("mouseover", highlightBubble, false);
//     bubbles[i].addEventListener("mouseout", resetBubble, false);
// }

// function highlightBubble(event) {
//     event.target.style.backgroundColor = "white";
//     event.target.style.transform = "scale(1.2)";
// }

// function resetBubble(event) {
//     event.target.style.backgroundColor = ""; 
//     event.target.style.transform = ""; 
// }

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

// Bubble filtering

const bubbles = Array.from(document.querySelectorAll('.bub'));

const tableauBub = Array.from(document.querySelectorAll('.tableau'));
const dataVizBub = Array.from(document.querySelectorAll('.data-viz'));
const UIBub = Array.from(document.querySelectorAll('.UI'));
const figmaBub = Array.from(document.querySelectorAll('.figma'));
const htmlBub = Array.from(document.querySelectorAll('.html-css'));
const touchBub = Array.from(document.querySelectorAll('.touch'));
const conceptBub = Array.from(document.querySelectorAll('.concept'));
const ptsBub = Array.from(document.querySelectorAll('.pts'));
const illusBub = Array.from(document.querySelectorAll('.illus'));
const aniBub = Array.from(document.querySelectorAll('.animation'));
const javaBub = Array.from(document.querySelectorAll('.java'));

function highlightBub(highlightedBub) {
    highlightedBub.map(bub => {
        bub.style.transform = "scale(1.2)";
        bub.style.backgroundColor = "white";
        bub.style.border = "1px";
        bub.style.borderColor = "black";
    });
}

function unHighlightBub(unHighlightedBub){
    unHighlightedBub.map(bub => {
        bub.style.transform = "";
        bub.style.backgroundColor = "";
    })
}

dataVizBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        console.log ("hover on dataviz");
        highlightBub(dataVizBub);
    });
    bub.addEventListener("mouseout", () => {
        console.log("unhover");
        unHighlightBub(dataVizBub);
    })
})
tableauBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        highlightBub(tableauBub);
    });
    bub.addEventListener("mouseout", () => {
        unHighlightBub(tableauBub);
    })
})
UIBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        highlightBub(UIBub);
    });
    bub.addEventListener("mouseout", () => {
        unHighlightBub(UIBub);
    })
})
figmaBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        highlightBub(figmaBub);
    });
    bub.addEventListener("mouseout", () => {
        unHighlightBub(figmaBub);
    })
})
htmlBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        highlightBub(htmlBub);
    });
    bub.addEventListener("mouseout", () => {
        unHighlightBub(htmlBub);
    })
})
touchBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        highlightBub(touchBub);
    });
    bub.addEventListener("mouseout", () => {
        unHighlightBub(touchBub);
    })
})
conceptBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        highlightBub(conceptBub);
    });
    bub.addEventListener("mouseout", () => {
        unHighlightBub(conceptBub);
    })
})
ptsBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        highlightBub(ptsBub);
    });
    bub.addEventListener("mouseout", () => {
        unHighlightBub(ptsBub);
    })
})
aniBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        highlightBub(aniBub);
    });
    bub.addEventListener("mouseout", () => {
        unHighlightBub(aniBub);
    })
})
javaBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        highlightBub(javaBub);
    });
    bub.addEventListener("mouseout", () => {
        unHighlightBub(javaBub);
    })
})
