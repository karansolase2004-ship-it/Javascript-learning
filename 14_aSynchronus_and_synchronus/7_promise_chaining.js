function ayncfunction1()
{
    return new promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data 1");
            resolve("success");
        }, 3000);
    })
}

function ayncfunction2()
{
    return new promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data 1");
            resolve("success");
        }, 4000);
    })
}

// This problem chaining is alternative for callback hell

/* console.log("Fetching Data1 ...");
let p1 = asynfunction1();
p1.then((res) => {
    console.log("fetching data2 ...");
    let p2 = asyncfunction2();
    p2.then((res) => {
    })
}) */

// asynfunction 1 and 2 are going to return the promises so we would direct call then on them 

console.log("Fetching Data1 ...");
asynfunction1().then((res) => {
    console.log("fetching data2 ...");
    asyncfunction2().then((res) => {
    });
});