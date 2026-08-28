let obj = {
    name : "harsh",
    age  : 32,
    email : "test@test.com",
    address : {
        city : "bhopal",
    },
};

// Problem is spread performs deep clone(not copy by reference) for outer values such as name, age and email while nested property such as city perform copy by reference 

// u will see Indore to obj and obj2 both whereas obj had bhopal 
let obj2 = {...obj};
obj2.address.city = "Indore";

// this way is not suitable way to clone nested object 

// to perform real copy of nested and outer property we perform deep clone

// JSON.stringify(obj) converts obj properties into JSON string 
// Then parse convert it again into object format (the format in which it was previously) after which it is assigned to obj2. it prevents copy by reference

obj2 = JSON.parse(JSON.stringify(obj));
obj2.address.city = "Bhopal"