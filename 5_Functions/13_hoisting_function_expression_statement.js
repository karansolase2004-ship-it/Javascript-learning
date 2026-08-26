abcd();


function abcd()
{
    console.log("hihiihi");
}

// below(function statement) works due to hoisting : JavaScript reads the declarations first (during the creation phase) before executing the code (execution phase).

// but hoisting does not work in below case(function expression) :
// below not work in case of const and var aswell 
// error it will give : Cannot access 'abcd' before initialization
abcd();

let abcd = function()
{
    console.log("hihiihi");
}