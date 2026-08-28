// when u target an element in css u do : 

/* 
h1{

}
*/

/* but in js u use : 

document.querySelector
document.querySelectorAll
document.getElementById
document.getElementsByClassName */

// this getelementbyid will give h1 tag as node 
// 
let abcd = document.getElementById("abcd");
// do it on console
//  it will give all properties that node abcd consist
console.dir(abcd);

// we can have same class for other elements that we have s joined to Element in byClassName
let dcba = document.getElementsByClassName("dcba");

// and type dcba on console u will see array like structure
