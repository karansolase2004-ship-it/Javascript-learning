var x = 1; // this is global

// var respect functional scope but their is not function below so below var x is also become global and override the value of x = 1 above
{
    var x = 2;
}

console.log(x)