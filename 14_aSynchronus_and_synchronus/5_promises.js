// promises is an object has 3 state in javascript => pending, resolve/Fulfilled and rejected
// where resolve and rejected are the handlers which are created by javascript 
// resolve : used to show promise is fulfilled 
// reject : to create show error caught 

// in general programming we are not the one who create promises Rather we just hanlde it. when we send request to API that we want a data then API returns a promise to us through which we can deal with out data. for now we ourself would create our promises. 

// below is the API(aimed to return data) but returns promises which we need  to handle to get the data

// getnextdata is callback function in it which is no need to mention as we have used promises in it
function getdata(dataid)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("data", dataid);
            // resolve("success");
            reject("error");
        }, 5000);
    });
}

// for above promises we would handle it like below : 

getdata(1)
    .then(() => {
        return getdata(2);
    })
    .then(() => {
        return getdata(3);
    });

// Now type : let promise : getData(123);
// after typing and enter we get promise that we will get out data 

// Immediately after that type promise and enter u will see Promises : pending and Once u get the data(after 5000 milliseconds) check it again u will promises : fullfilled(this is because we have mentioned resolve(success there)).

// Code would be something like below when we mention getnextdata 

function getdata(dataid, getnextdata)
{
    setTimeout(() => {
        console.log("Data", dataid);
        // it means after data 1 finishes call the next function, So its role is to continue the next asynchronous operation. whereas above promises replaced the callback function getnextdata
        if (getnextdata) {
            getnextdata();
        }
    }, 1000);
}

// but this below callback hell is not recommended to do that's why we use promises
getdata(1, function () {
    getdata(2, function () {
        getdata(3);
    });
});