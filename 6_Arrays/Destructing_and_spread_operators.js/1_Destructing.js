// Destructuring 

let arr = [1,2,3,4,5, 8];

let [a, b, , c] = arr;

// type value of a,b and c on console
// u will get 1, 2, 4

arr.map((item) => {
  console.log({item});
});

