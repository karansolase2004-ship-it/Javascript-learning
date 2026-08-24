// this will get added in window >> go on console and type window. u will see a in list
var a = 13;

// but will not see let declared variable in window list
let b = 89;

function abcd()
{
    // Problem 2 : 
    // in other programming langauge variable(a) declared in condition has scope limited to the body of the condition
    // whereas variable declared in condition(inside function) in javascript using var has functional scope so a could be accessed or used anywhere throughout the function abcd
    // above does not happen with let and const variable
    if(true)
    { 
        var a = 12;
    }
}