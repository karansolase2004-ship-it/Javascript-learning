// string : data wrapped in single || double quote || backtick(``)
// 12 and 12.3 are number

// null :  when u defined variable and do not have value to assign it currently then u assign null to such values

// undefined : u define a variable and do not give value to it so by default value is assigned to it by js engine is called undefined value

// symbol : unique immutable value
//  in future when we use some libraries, and we create our fields similar to original fields existing in the library which leads to override in original fields in library. like given below : 

let sheryjs = {
    uid : 1,
    model : "harsh",
};

// below is overriding which change the original field uid from lib sheryjs
sheryjs.uid = 12;

// This thing we do not want to happen that;s why we use symbol

let obj = {
    uid : 1,
    name : "harsh",
    age : 12,
};

// Now these uid : 1 and uid : '001' are completely different from each other
let u1 = Symbol("uid");
obj[u1] = "001";

// type obj on console u will see Symbol(uid) : '001' added there

// Bigint : 
/* 
 > Number.MAX_SAFE_INTEGER
 < 9007199254740991

 THis is a limit till which we can take a number like 256 limit for char. if we want to take number bigger than this 9007199.... 
 then we do : 
*/

// Now this is bigint 
let a = 9007199254740991n;
// when u plus with bigint value a then whaterver u plus u should add suffix n to it like as below1
a + 3n;


// array explain i 1_types...

//  objects : copy by references happens in objects aswell. 

let m = {
    name : "harsh",
};

let n = m;

n.name = "harshita";

console.log(m.name);