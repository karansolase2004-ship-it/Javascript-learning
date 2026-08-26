// first class function : u can treat function like a value and send it as a arguement

function abcd(val)
{
    val();
}

// Now val becomes a function defined below while passing as an arguement to function abcd

abcd(function(){
    console.log("Hi");
})