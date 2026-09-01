let p = document.querySelector("p");

// "Listen for an event on this element, and when that event happens, execute that anonymous function."
// it takes 2 required arguement : Event name and Callback function
p.addEventListener("click",function(){
    p.style.color = "red";
});