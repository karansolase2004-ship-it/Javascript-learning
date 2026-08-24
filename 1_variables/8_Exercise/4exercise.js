let a = 10; // block scope and global scope also
// above is block scope because the js upload this whole code into fuction internally while execution
{
    // below a is limited to block scope of this curly braces
    let a = 20;
    console.log("Inside : ", a);
}

// below a belongs to globally declared scope
console.log("Outside : ", a);