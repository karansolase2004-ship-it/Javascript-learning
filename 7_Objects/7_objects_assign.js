let obj = {
    name : "harsh",
    age  : 32,
    email : "test@test.com",
};

// here u pass blank object and object you want to copy(obj)
// it creates shallow copy i.e copy by reference
let obj2 = Object.assign({}, obj);

// mentioned property get addded in the copy of obj which is  obj3
let obj3 = Object.assign({price : Infinity}, obj);