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
// above arrangement is called nesting

// below is deep access 
user.addresses.location.lng;

//u will get below error where location is mentioned and error is in parent key of location that is address 

/* 
Uncaught TypeError: Cannot read properties of undefined (reading 'location')
    at 2_nesting_and_deep_access.js:14:16
*/

