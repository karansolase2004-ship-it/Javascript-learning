// when a variable is created it is divided into two parts from which declaration part is at upside while initialization part is downside

var a = 12;
// above variable definition is divided into two parts like as below : 

// var a = undefined;
// a = 12;

// where 1st part goes up at the top of code internally 

// Hoisting is part between declaration and initialization. At declaration value of a is set to undefined in case of var;

// hoisting happens with : 
// let -> also hoist -> value is set to undefined 
// const -> also hoist -> value is set to nothing
// var ->  hoist ->  value is set to nothing