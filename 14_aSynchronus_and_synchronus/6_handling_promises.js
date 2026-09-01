const getpromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a Promise");
        // resolve("Success");
        reject("network error");
    });
};

let promise = getpromise();
// defining whatever we want to do when promise get resolved using then
// res is that which we pass in resolve i,e success
promise.then((res) => {
    console.log("promise fullfilled", res);
});

// defining whatever we want to do when promise get rejected and we got error using catch :
// err is that thing which we passed in reject as a parameter i.e network error
promise.catch((err) => {
    console.log("rejected", err);
})