// Arithmetic

// + - / * % **

// ** : exponentiation 

console.log(2 ** 2);

// Comparison : 

// = : assignment operator
// u will have below ans : false which is right
console.log(12 == 13);

//  but answer of below should be also false becuase types are different
console.log(12 == "12");

// but it will give true to avoid it we use ===
console.log(12 === "12");
// because === check value + type

// ----------------------------------------------

// below should give true because types are not same but it gives false because of loose equality like as == 
console.log(12 != "12");

// so we use !== : checks value and types both 
console.log(12 !== "12");

// unary operator ; 
// + - ! typeof ++ -- 

// try it on console : 

// +"10" used to convert a string into number
// +"Harsh" => NaN

// -5 used to convert a number into negative number
//  -5  => -5

// typeof returns of datatype of a variable

// Ternary : 
// ?:

// condition ? true : False

// -------------------------------

// instanceof : The instanceof operator checks whether an object is an instance of a particular constructor (or class).(or inherits from it) and it does not work with primitive types

// type of for primitive and instance of for reference object 

// try on console : 
let a = []
a instanceof Array
// -----------------------
let b = {}
b instanceof Object
// -----------------------
b instanceof Array 
// ----------------------




