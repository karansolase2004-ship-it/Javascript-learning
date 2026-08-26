// Closure : a function which return b function where function b uses variable of a

// where abcd is a and function returned by abcd is using variable a belongs to abcd

function abcd()
{
    let a = 12;
    return function()
    {
        console.log(a);
    }
}

// Lexical Scope : Lexical scoping means a function can access variables from the scope in which it was defined, not from the scope where it is called.

// example 1 : 
let x = 10;

function printX() {
  console.log(x);
}

function test() {
  let x = 20;
  printX();
}

test();

// function print access variable x from the scope global where it is defined not from the scope where it was called where x = 20;

// example 2 :
let y = 1;

function outer() {
  let y = 2;

  function inner() {
    console.log(y);
  }

  return inner;
}

// we can capture function also as a variable(fn) but their type will be function.
// here we capture inner function in fn
const fn = outer();
console.log(typeof(fn));
fn();

// function inner access the variable y from the scope (outer function scope) where it is defined not from where scope (global) where it is called where y = 1; 