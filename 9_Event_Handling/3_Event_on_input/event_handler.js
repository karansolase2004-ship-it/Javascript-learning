let input = document.querySelector("input");

input.addEventListener("input", function(){
    // typed on that text box and see the change in console
    // console.log("typed");
})

// whenever u see eventlistener on input u can capture typed input in dets(u can write anything there instead of dets) object parameter : 

input.addEventListener("input", function(dets){
    // u will see property data : (input entered) in the object inputEvent
    // console.log(dets);
});


input.addEventListener("input",function(dets){
    // accesssing value of key(data) so u will see value entered as input on console
    // just comment out those typed and dets above to avoid mess
    // console.log(dets.data);
});

// u will see it gives null when we type backspace to avoid it we will use below condition

input.addEventListener("input",function(dets){
    // comment out above typed, dets and dets.data before running below
    if(dets.data !== null)
    {
        console.log(dets.data);
    }
});