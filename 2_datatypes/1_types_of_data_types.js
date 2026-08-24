// primitives : string, number, boolean, null, undefined, symbol bigint
// reference : arrays[], objects{}, functions()

// primitive : copying this u will get a real copy
// reference : copying this u will not get a real copy but will get references of parent

let a = 12;
// copying
let b = a;

a = a + 2;
// below modification will not change value of b because the modification has been done in to variable a so b will not affect


let p = [1, 2, 3];
let q = p;
// Now p and q are pointing to same memory block which contain [1, 2, 3]. this copy by reference 

// if we perform change then it will reflect in the both array 
p.pop();

console.log(p);
console.log(q);

//  we performed p to q reference copy 
//  we perform p to q only copy like primitive spread function
