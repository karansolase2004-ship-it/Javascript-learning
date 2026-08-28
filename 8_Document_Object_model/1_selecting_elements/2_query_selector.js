// querySelector can select id, class, tag 

// this will select whichever is 1st h1 in the body
let abcd = document.querySelector("h1");

// this wil select all h1 in body and store it in dcba as a node
let dcba = document.querySelectorAll("h1");

console.dir(abcd);
// u will see h1#abcd which u can open and see the property(key : value) which shows h1.abcd is object 

console.dir(dcba);
// for this u will array kind of structure which is called html collection