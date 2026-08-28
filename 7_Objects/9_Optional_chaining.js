let obj = {
    name : "harsh",
    age  : 32,
    email : "test@test.com",
    address : {
        city : "bhopal",
    },
};


// let say someone change property name address to addresses then below will give error : 

obj.address.city;

// but to prevent it from giving error we write it like as below ; 

obj?.address?.city;

// 1st ? mark : give address if it exist or do not give (optinal) 
// 2nd ? mark : give city if it exist or do not give (optinal)

// the difference is rather than giving error it give undefined when  u apply ? mark there 