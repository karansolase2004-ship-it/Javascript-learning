let arr = [1,2,3,4,5,6,7,8];

// filter select element based on condition 
// map returns new array of same length whereas filter returns new array that me shorter or empty
// map returns transformed value while filter return true or false
// map : transformed value of each element is included whereas only elements that satisfy the condition are included.


// only those element would be store which are greater than 4
let newarr = arr.filter(function(val){
    if(val > 4) return true;
})