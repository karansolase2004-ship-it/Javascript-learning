let ul = document.querySelector("ul");

ul.addEventListener("click", function(dets){
    // target return element on which event is occured 
    // dets.target.style.textDecoration = "line-through";

    // toogle removes line-through if applied || apply line-through if removed based on click 
    dets.target.classList.toggle("lt");
});

// now just click on those element in u will get effect 