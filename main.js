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
    if(inView("section-4")){
        document.getElementById("circle-1").style.cssText = "background-color: white; transform: scale(1);";
        document.getElementById("circle-2").style.cssText = "background-color: white; transform: scale(1);";
        document.getElementById("circle-3").style.cssText = "background-color: white; transform: scale(1);";
        document.getElementById("circle-4").style.cssText = "background-color: tomato; transform: scale(1.2);";
    }
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

document.addEventListener("DOMContentLoaded", function(){
    var section3pic = document.getElementsByClassName("picture-down-2");
    if (section3pic.length > 0){
        var customCursor = document.createElement("div");
        customCursor.id = "custom-cursor";
        document.body.appendChild(customCursor);

        for(var i=0; i < section3pic.length; i++){
            var s3pic = section3pic[i];
            s3pic.addEventListener("mouseover", function(){
                customCursor.style.display = "block";
            });
            s3pic.addEventListener("mouseout", function(){
                customCursor.style.display = "none";
            });
            s3pic.addEventListener('mousemove', function(e) {
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
        bub.style.zIndex = "500";
    });
}

function unHighlightBub(unHighlightedBub){
    unHighlightedBub.map(bub => {
        bub.style.transform = "";
        bub.style.backgroundColor = "";
        bub.style.zIndex = "";
    })
}

//Set tooltip
const toolText = "Click to highlight category";

function showTooltip(mouseX, mouseY) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = toolText;
    document.body.appendChild(tooltip);

    tooltip.style.left = `${mouseX}px`;
    tooltip.style.top = `${mouseY}px`;
}
function removeTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

bubbles.forEach(bub => {
    bub.addEventListener('mouseover', (event) => {
        const mouseX = event.pageX + 10; // Offset from mouse cursor
        const mouseY = event.pageY + 10; // Offset from mouse cursor
        showTooltip(mouseX, mouseY);
    });

    bub.addEventListener('mouseout', () => {
        removeTooltip();
    });
});

//highlight bubbles
dataVizBub.map(bub => {
    bub.addEventListener("mouseover", (event) => {
        console.log ("hover on dataviz");
        highlightBub(dataVizBub);
        const mouseX = event.pageX + 10; // Offset from mouse cursor
        const mouseY = event.pageY + 10; // Offset from mouse cursor
        showTooltip(mouseX, mouseY);
    });
    bub.addEventListener("mouseout", () => {
        console.log("unhover");
        unHighlightBub(dataVizBub);
        removeTooltip();
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
    // bub.addEventListener('click', () => {
    //     console.log('clicked')
    //     highlightBub(UIBub);
    //   });
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
illusBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        highlightBub(illusBub);
    });
    bub.addEventListener("mouseout", () => {
        unHighlightBub(illusBub);
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


//Landing page bubbles animation

function moveBubbles() {
    var landingBubs = document.querySelectorAll('.bub');
    landingBubs.forEach(function(movingBub) {
      // Random scaling
      var randomScale = Math.random() * 0.5 + 0.8;
      movingBub.style.transform = 'scale(' + randomScale + ')';
  
      // Random moving - doesn't work?
      var randomX = Math.random() * window.innerWidth;
      var randomY = Math.random() * window.innerHeight;
      movingBub.style.left = randomX + 'px';
      movingBub.style.top = randomY + 'px';
      console.log(randomX)
    });
  }
  
  setInterval(moveBubbles, 2000); 
  