let abcd = document.querySelector("#abcd");

// we have written code just to change the color not to revert back it to previous color when we remove mouse
abcd.addEventListener("mouseover", function(){
    abcd.style.backgroundColor = "white";
});

let originalColor = getComputedStyle(abcd).backgroundColor;

// event when we remove mouse
abcd.addEventListener("mouseout", function(){
    abcd.style.backgroundColor = originalColor;
});