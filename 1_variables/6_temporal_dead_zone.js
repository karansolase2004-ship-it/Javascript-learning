// temporal dead zone ; 

console.log(a);

let a = 10;

let b = 34;

// u will get an error : Uncaught ReferenceError: Cannot access 'a' before initialization

// but the thing is javascript knows that variable a exists at line console.log(a) it just say i cannot use it before initialization

// temporal dead zone : is such zone where js knows that variable a exist but it cannot access it(due to not initialized). IN above code line 1 to 4 is temporal Dead zone for varaible a while tdz is line 1 to 6 for variable 6

// var does not consist temporal dead zone