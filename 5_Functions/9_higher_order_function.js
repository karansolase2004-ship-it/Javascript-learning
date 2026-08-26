// higher order function :

// Takes another function as an argument. or Returns another function.

// takes a function : 

function greet(name) {
  return `Hello ${name}`;
}

function process(fn, name) {
  console.log(fn(name));
}

process(greet, "Karan");

// Return a function : 

function multiply(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiply(2);
console.log(double(5)); 