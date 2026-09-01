let p = document.querySelector("p");

// "Listen for an event on this element, and when that event happens, execute that anonymous function."
// it takes 2 required arguement : Event name and Callback function

// rather than defining inside we defined it sperately 
p.addEventListener("dblclick", dblclick);

function dblclick(){
    p.style.color = "red";
}

// if u want to remove added event listener
p.removeEventListener("dblclick", dblclick);