document.querySelector("#nav").addEventListener("click", function(){
    alert("clicked");  
});

// Now if u click on navigation bar u will get alert 

// but if you click and button or those a tag Home or About you will get the same alert which we have defined for navigation click 

// because nav is parent of anchor tagged home, about us and that button. so click event occured on those three element will check do they handled the event if yes it will execute otherwise it redirected to their parent(nav). 

// if nav would not have event hanlder it would have been transferred to nav parent >> check for main div (if in no event hanlder) >> check for body (if no event handler) >> then check final html tag 