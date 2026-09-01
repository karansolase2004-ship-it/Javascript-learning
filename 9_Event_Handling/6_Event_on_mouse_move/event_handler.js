let abcd = document.querySelector("#abcd");

window.addEventListener("mousemove", function(dets){
    // we when u move the mouse u will see the event happening in which u will get coordinate of mouse client X and Y as property 
    // console.dir(dets);
    // console.log(dets.clientX, dets.clientY);

    // we want our #abcd(that box) move as per mouse move

    // below works when position is absolute
    abcd.style.top = dets.clientY + "px";
    abcd.style.left = dets.clientX + "px";
})