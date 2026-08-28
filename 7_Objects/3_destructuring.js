const user = {
    name : "harsh",
    address : {
        city : "Bhopal",
        pin : 414444,
        location : {
            lat : 23.2,
            lng : 77.4,
        },
    },
};

// just the property should equal
let {lat, lng} = user.address.location;

// u cannot do : 
// let {lata, lnga} = user.address.location;
// below will give undefined
// console.log(lata);

/* 
internally : 
let lat = user.address.location.lat;
let lng = user.address.location.lng;
*/

// Now type lat and lng value on console