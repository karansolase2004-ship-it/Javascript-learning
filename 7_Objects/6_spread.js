let obj = {
    name : "harsh",
    age  : 32,
    email : "test@test.com",
};

// it is not copying by reference it means obj and obj2 are not pointing to same memory block 
// creating copy of obj 
let obj2 = {...obj};

obj2.age = 43;

// type obj2 on console