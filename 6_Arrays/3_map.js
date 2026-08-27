let arr = [11, 62, 3, 4, 25];

/* 
The main use case of map() is when you want to transform every element of an array into a new value while keeping the original array unchanged.
*/

// New array will contain tranformed value with same size of previous array 

let newarr = arr.map(function(){
    return 12;
})

// foreach return modify existing Array and return undefined
// map takes element of exisiting Array modify and return storing it into new array