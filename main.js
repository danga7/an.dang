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

// reset category button
document.addEventListener("DOMContentLoaded", function() {
    var resetButt = document.getElementById("resetButtMob");
    var resetText = document.getElementById("resetTextMob");

    resetButt.addEventListener("click", function() {
        resetText.style.display = "block";
    });
    resetText.addEventListener("click", function(event) {
        event.stopPropagation(); 
    });

    document.addEventListener("click", function(event) {
        if (event.target !== resetButt) {
            resetText.style.display = "none";
        }
    });
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
const AIBub = Array.from(document.querySelectorAll('.AI'));
const ptsBub = Array.from(document.querySelectorAll('.pts'));
const illusBub = Array.from(document.querySelectorAll('.illus'));
const brandBub = Array.from(document.querySelectorAll('.brand'));
const AEBub = Array.from(document.querySelectorAll('.AE'));

function highlightBub(highlightedBub) {
    highlightedBub.map(bub => {
        bub.style.transform = "scale(1.8)";
        bub.style.backgroundColor = "white";
        bub.style.boxShadow = "0px 4px 8px rgba(117, 95, 30, 0.6)";
        bub.style.border = "1px";
        // bub.style.borderColor = "black";
        // bub.style.zIndex = "500";
    });
}

function hoverBub(hoveredBub){
    hoveredBub.map(bub => {
        // bub.style.transform = "scale(1.2)";
        // bub.style.backgroundColor = "white";
        bub.style.boxShadow = "0px 4px 8px rgba(117, 95, 30, 0.6)";
    });
}

function unHighlightBub(unHighlightedBub){
    unHighlightedBub.map(bub => {
        bub.style.transform = "";
        bub.style.backgroundColor = "";
        bub.style.zIndex = "";
    })
}

function unhoverBub(unhoveredBub){
    unhoveredBub.map(bub => {
        // bub.style.transform = "";
        // bub.style.backgroundColor = "";
        bub.style.boxShadow = "";
    });
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
        hoverBub(dataVizBub);
    });
    bub.addEventListener("mouseout", () => {
        console.log("unhover");
        unhoverBub(dataVizBub);
        removeTooltip();
    });
    bub.addEventListener('click', () => {
        console.log('clicked')
        highlightBub(dataVizBub);
      });
})
tableauBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        hoverBub(tableauBub);
    });
    bub.addEventListener("mouseout", () => {
        unhoverBub(tableauBub);
    })
    bub.addEventListener('click', () => {
        console.log('clicked')
        highlightBub(tableauBub);
      });
})
UIBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        hoverBub(UIBub);
    });
    bub.addEventListener("mouseout", () => {
        unhoverBub(UIBub);
    })
    bub.addEventListener('click', () => {
        console.log('clicked')
        highlightBub(UIBub);
      });
})
figmaBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        hoverBub(figmaBub);
    });
    bub.addEventListener("mouseout", () => {
        unhoverBub(figmaBub);
    })
    bub.addEventListener('click', () => {
        console.log('clicked')
        highlightBub(figmaBub);
      });
})
htmlBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        hoverBub(htmlBub);
    });
    bub.addEventListener("mouseout", () => {
        unhoverBub(htmlBub);
    });
    bub.addEventListener('click', () => {
        console.log('clicked')
        highlightBub(htmlBub);
      });
})
touchBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        hoverBub(touchBub);
    });
    bub.addEventListener("mouseout", () => {
        unhoverBub(touchBub);
    })
    bub.addEventListener('click', () => {
        console.log('clicked')
        highlightBub(touchBub);
      });
})
AIBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        hoverBub(AIBub);
    });
    bub.addEventListener("mouseout", () => {
        unhoverBub(AIBub);
    });
    bub.addEventListener('click', () => {
        console.log('clicked')
        highlightBub(AIBub);
      });
})
ptsBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        hoverBub(ptsBub);
    });
    bub.addEventListener("mouseout", () => {
        unhoverBub(ptsBub);
    });
    bub.addEventListener('click', () => {
        console.log('clicked')
        highlightBub(ptsBub);
      });
})
illusBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        hoverBub(illusBub);
    });
    bub.addEventListener("mouseout", () => {
        unhoverBub(illusBub);
    });
    bub.addEventListener('click', () => {
        console.log('clicked')
        highlightBub(illusBub);
      });
})
brandBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        hoverBub(brandBub);
    });
    bub.addEventListener("mouseout", () => {
        unhoverBub(brandBub);
    });
    bub.addEventListener('click', () => {
        console.log('clicked')
        highlightBub(brandBub);
      });
})
AEBub.map(bub => {
    bub.addEventListener("mouseover", () => {
        hoverBub(AEBub);
    });
    bub.addEventListener("mouseout", () => {
        unhoverBub(AEBub);
    });
    bub.addEventListener('click', () => {
        console.log('clicked')
        highlightBub(AEBub);
      });
})

//bubble reset button
const resetButton = document.querySelector('#resetTextMob');
resetButton.addEventListener('click', () => {
    unHighlightBub(bubbles);
});


//Landing page bubbles animation

function moveBubbles() {
    var landingBubs = document.querySelectorAll('.bub');
    landingBubs.forEach(function(movingBub) {
      // Random scaling
      var randomScale = Math.random() * 0.7 + 1;
      movingBub.style.transform = 'scale(' + randomScale + ')';
  
      // Random moving - doesn't work?
      var randomX = Math.random() * 10;
      var randomY = Math.random() * 10;
      movingBub.style.left = randomX + 'px';
      movingBub.style.top = randomY + 'px';
    //   console.log(randomX)
    });
  }
  
  setInterval(moveBubbles, 1800); 
  