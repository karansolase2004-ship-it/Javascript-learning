//  Callback Hell is a situation where callbacks are nested inside other callbacks, creating deeply indented code that is hard to read, debug, and maintain.

/* login(function () {
    getProfile(function () {
        getOrders(function () {
            makePayment(function () {
                console.log("Done");
            });
        });
    });
}); */

// nested callback stacked below one another forming a pyramid structure
// it is callback hell because of poor readability We use promises as a solution 

// we captured out callback function in cb and then calling it in setTimeout
function profilelekarAao(username, cb){
    setTimeout(() => {
        console.log(`profile fetched of ${username}`);
        cb({_id:212112, username, age:26, email:"Karansolase2004@gmail.com"});
    }, 2000);
}

function saarepostlekarAao(id, cb) {
    setTimeout(() => {
        console.log(`Post fetched of ${id}`);
        cb({_id:id, posts : ["hey", "hello", "good morning"]});
    }, 2000);
}

function savedpostnikkalo(id, cb) {
    setTimeout(() => {
        console.log(`Saved Post fetched of ${id}`);
        cb({_id:id, saved : [1, 2,3 , 3,45, 4, 23]});
    }, 2000);
}


// it is like fetch my all profile data based on my passed username : Karan
profilelekarAao("Karan", function(profileData) {
    console.log(profileData);
    // it is like fetch my all posts data based on my passed my id : 212112
    saarepostlekarAao(profileData._id, function(posts){
        console.log(posts);
        // it is like fetch my all saved posts data based on my passed my id : 212112
        savedpostnikkalo(profileData._id, function(savedpost){
            console.log(savedpost)
        })
    })
})