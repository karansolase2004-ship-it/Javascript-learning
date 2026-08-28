const obj = {
    name : "harsh",
    age  : 32,
    email : "test@test.com",
};

for(let key in obj){
    console.log(key, obj[key]);
}