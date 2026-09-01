// A callback function is a function that is passed as an argument to another function and is executed later.


/* function kuchderBaadChalega(val)
{
    setTimeout(() => {
        console.log(val);
    }, Math.floor(Math.random() * 20) * 1000
    );
} */

function kuchderBaadChalega(func)
{
    setTimeout(func, Math.floor(Math.random() * 20) * 1000
    );
}

kuchderBaadChalega(12);
// rather than sending parameter we send a function : 
kuchderBaadChalega(function() {
    console.log("hey");
});
 
/* function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Karan");
}

processUser(greet); */