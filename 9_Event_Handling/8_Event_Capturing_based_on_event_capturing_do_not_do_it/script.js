let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector("button");

// concept is even if the evenlistener of btn get captured it execute it and afterward it still goes to its parent eventlistener to execute it. like this it starts going to upward to execute all parent;s event listener

// if you click btn it will execute btn eventlistener aswell as it all parent listener those are c, b and a => This is called event bubbling

btn.addEventListener("click", function()
{
    console.log("button clicked");
});

c.addEventListener("click", function()
{
    console.log("c clicked");
});


b.addEventListener("click", function()
{
    console.log("b clicked");
});

a.addEventListener("click", function()
{
    console.log("a clicked");
});
