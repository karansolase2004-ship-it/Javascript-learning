let arr = [1, 2, 3, 4, 5, 6];

arr.push(7000);
arr.pop();

// removes value at index 1
arr.shift();

// add value at index 1
arr.unshift(4);

// splice(start, deletcount, item1, item2, ...)
// start: Index where changes begin.
// deleteCount: Number of elements to remove.\
// item1, item2, ...: Optional elements to insert.
arr.splice(2, 2);

// Copy element from [0,3) and paste it in newarr i.e extract
let newarr = arr.slice(1, 3);

arr.reverse();

// sort accept function with two values

// below is for ascending 
let asc_srt = arr.sort(function(a, b){
    return a-b;
})

// descending : 
let dsc_srt = arr.sort(function(a, b){
    return a+b;
})

// [100, 20, 3].sort(); not proper way to sort numerics this work for char and string 
// below works for both 
arr.sort((a, b) => a - b);


// Using splice in to add element :

let colors = ["Green", "Yellow"];
// we gave deletecount = 0 means to delete nothing rather it will add red and blue from index 1
colors.splice(1, 0, "Red", "Blue");

let names = ["Zara", "Arjun", "mira", "Bhavya"];
names.sort().reverse();