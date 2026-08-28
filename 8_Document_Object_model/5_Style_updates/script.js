let h1  = document.querySelector("h1");

// u will see nested style key in it containing properties related to it 
console.dir(h1);

// manipulating that property : 
h1.style.color = "red";
h1.style.backgroundColor = "yellow";

// we have already defined this class hulu in style but below sentence will add that class to h1
h1.classList.add("hulu");

// if the class is already added and u want to remove it 
// h1.classList.remove("hulu"); 

// Toogle remove if added || add if removed
// h1.classList.toggle("hulu"); 