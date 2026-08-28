// it will select all li tags and store it in lis(html collection)
let lis = document.querySelectorAll("li");

// looping on html collection : 
lis.forEach(function(val)
{
    console.log(val.textContent);
});