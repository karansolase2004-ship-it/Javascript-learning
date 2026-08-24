// Scope : global and functional are like previous concepts

// block Scope : A block is any variable enclosed within curly braces {}(those braces could be of condition, function or loop like that4).
// where global is not curly braces

// var is by default functional scoped in js
// only used in the function in which it is declared 
var a = 12;
// and when it is declared outside of function it becomes global(but internally it still belongs to function in which whole code is put by js engine) and also becomes a property of windows in browsers

// var does not respect the blocked scope
// there is difference between functional and blocked scope
// whereas let respect block scope. 
// like if u declare it in condition inside function it will accessible for that condition only not in function
// let respect the block in which it is declared
// if it is declared in function it will be accessible througout the function only.