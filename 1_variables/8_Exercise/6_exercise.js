const person = {name : "Harsh"};

person.name = "sharma"; // Allowed 

// person = {}; // Not Allowed

// u cannot reassign an value of const declared variable which is done on line 5 

// but updating the property of const declared variable is allowed like given at line no. 3 

// but when u do not want to add, delete or modify properties of person then u can say 

Object.freeze(person);

// after above below will not allow / work. person.name still print sharma

person.name = "Karan"; 

console.log(person.name);