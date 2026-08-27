let arr = [1,2,3,4,5,6];


// 0 is starting value of accumulator 
// reduce is called again n again until array element finishes and 
let ans = arr.reduce(function(accumulator, val){
    return accumulator + val; 
}, 0)

// reduce() is an array method that reduces all the elements of an array to a single value.

/* array.reduce((accumulator, currentValue) => {
    // return updated accumulator
}, initialValue); */

/* 
accumulator : stores the accumulated result 
val / CurrentValue : CUrrent Array element
Initialvalue : Starting value of Accumulator.
*/

// Note : The reduce() method itself passes the updated accumulator to the callback on every iteration. like it has passed 0 on first iteration