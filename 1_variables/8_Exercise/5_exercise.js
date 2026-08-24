if(true)
{
    var a = 1;
    let b = 2;
}

console.log(a); // No Error 
console.log(b); // references error 

// a will give no error because var respect only functional scope not block whereas if has block scope