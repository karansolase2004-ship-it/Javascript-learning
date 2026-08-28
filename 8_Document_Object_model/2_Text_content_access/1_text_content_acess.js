let h1 = document.querySelector("h1");

// u will see h1.abcd in the form of property(key : values) that denotes h1.abcd is an object
console.dir(h1);

// in property u will see 
/* 
innerHTML :  "Hi Hi kaise ho"
innerText : "Hi Hi kaise ho"
textContent : "Hi Hi kaise ho"
*/

// so u can change the value : 
 
h1.innerHTML = "A Badhiya Hai";
h1.innerText = "B Badhiya Hai";
h1.textContent = "C Badhiya Hai";

// this is how manipulation is performed : by selecting the property required property of that element which u want to manipulate


// innerText and textContent do the same thing while innerhtml is different


// prefer to use textcontent rather than innertext