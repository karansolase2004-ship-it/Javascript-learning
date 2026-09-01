let h1 = document.querySelector("h1");

window.addEventListener("keydown", function(dets)
{
    // it shows " " in case of space 
    if(dets.key === " ")
    {
        h1.textContent = "space";
    }
    else
    {
        h1.textContent = dets.key;
    }
    // console.log(dets.key);
})