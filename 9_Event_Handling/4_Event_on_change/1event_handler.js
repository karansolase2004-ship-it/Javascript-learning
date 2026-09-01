// this event runs only when there is change in u r input select and textarea : 

// change Select the Device to device selected : 

let sel = document.querySelector("select");

sel.addEventListener("change",function(dets){
    // when u select one option u will see Event => target => value(at last) value = ur selected value
    // console.log(dets);
});

sel.addEventListener("change",function(dets){
    // now it will show us selected element 
    // console.log(dets.target.value);
});

// #device because device is an id
let device = document.querySelector("#device");

sel.addEventListener("change", function(dets){
    device.textContent = `${dets.target.value} Device Selected`;
});