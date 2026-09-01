function getdata(dataid)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataid);
            // resolve("success");
            reject("error");
        }, 5000);
    });
}

// below is Promise nesting again this is not recommended because it promise hell
// here u create a new promise inside another .then() where outer chain does not know about this inner Promise.
getdata(1).then((res) => {
    console.log(res);
    getdata(2).then(() =>{
        console.log(res);
    });
});

// but here promise becomes part of chain 
getdata(1).then((res) => {
    return getdata(2);
}).then((res) => {
    console.log();
})

