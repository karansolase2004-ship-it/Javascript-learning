let a = document.querySelector("a");

// Note : manipulation changes u will see (inspect)html not our written html 

// manipulation : setting value of a's href(attribute) through js

a.setAttribute("href","https://www.google.com");


// manipulation : setting value of img's src(attribute) through js

let img = document.querySelector("img");
img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-vZU3vHYHHkJMDQ0hHUv7LHqZTA3LlrXjzlaSLBboA&s=10")


// Getting attribute href value using below method
console.log(a.getAttribute("href"));

// Removing attribute ; 
a.removeAttribute("href");
// Now u won't see Get google as clickable