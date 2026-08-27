let arr = [1, 2, 3, 4, 5, 6];

// Below will work as copying by reference so the arr and arr2 will point to same memory block
let arr2 = arr

// do below to copy element : where arr3 also hold same array which arr contain in seperate memoory block 

// below is spread operator : like it takes arr element and spread it in those square brackets
let arr3 = [...arr];

// rest Collects multiple elements into one array/object
// spread : Expands an array/object into individual elements

// exercise : 
// Adding India using spread
let countries = ["USA", "UK"];
countries = ["India", ...countries];