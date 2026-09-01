function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}

// An async function always returns a Promise.
// await pauses the execution of that async function until the Promise settles.
// promise returns by getweatherdata and api are two different promises
/* async function getweatherdata(){
    // await only pauses for a promise so the function u await should return a promise
    await api();
    await api();
}; */

// while running above code we need to first call getweatherdata() so we will make above function IIFE : so no need to manually call it 

(async function getweatherdata(){
    // await only pauses for a promise so the function u await should return a promise
    await api();
    await api();
})();

// async wait provide same functionality as .then in promises chaining just it more cleaner

/* 

getdata(1)
    .then(() => {
        return getdata(2);
    })
    .then(() => {
        return getdata(3);
    })
    .catch((err) => {
        console.log(err);
    });

    alternative : 

    async function fetchData() {
    try {
        await getdata(1);
        await getdata(2);
        await getdata(3);
    } catch (err) {
        console.log(err);
    }
}
*/