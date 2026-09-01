// will learn how to store, fetch. remove and update data 

// localstorage : Local Storage is a browser feature that allows websites to store data as key-value pairs in the user's browser. The data remains stored even after the browser is closed and reopened, until it is explicitly removed.

// type localStorage on console : u will get the data 
// do same after refreshing tab, closing and reopening the tab, closing and reopening the whole browser. u will see the data remain as it is

// storing
localStorage.setItem("name","Karan");

// fetching : 
let val = localStorage.getItem("name");
// now type val on console u will get the value

// updating : (setItem : creates/Store if not exist otherwise update existing)
localStorage.setItem("name", "Sarthak");

// removes the item 
// localStorage.removeItem("name");