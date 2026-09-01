// Due to asynchronus programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronus code execution allow to execute next instructions immediately and doesnot block the flow 

console.log("One");
console.log("Two");

// below would be printed after 6 secs but it is not stopping the exeuction. it is unabling printing three, four after One and Two takes 6 secs after time js executes the setTimeout
setTimeout(() =>{
    console.log("Hello");
}, 0);
// 6000 milliseconds == 6 secs

console.log("Three");
console.log("Four");
console.log("Four");
console.log("Four");
console.log("Four");
console.log("Four");
console.log("Four");
console.log("Four");