function outer()
{
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}

// Above is Closure

// Capturing returned function by outer in counter
const counter = outer();
counter(); // 1
counter(); // 2

/* 
The outer() function has finished. Shouldn't count be destroyed?"
=> Normally, yes. But because the returned function still needs count, JavaScript keeps outer() alive.


because of lexical scoping : the returned function can still access count.
Even after outer() finishes, the returned function remembers its lexical environment.

Lexical scoping = The rule: "A function can access variables from where it was defined."
Closure = The mechanism: "Those variables are kept alive if the function still needs them."
*/