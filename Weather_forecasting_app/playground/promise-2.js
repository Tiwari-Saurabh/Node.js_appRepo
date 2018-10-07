/*jshint esversion: 6 */
const request = require('request');
var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);

        request({
                url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAlAG5hKJgN0tRVLfU5gcqi97ZH32jxhcc`,
                json: true
            },
            (error, response, body) => {
                if (error) {
                    reject("Unable to connect to Google server");
                } else if (body.status === "ZERO_RESULT") {
                    reject("Unable to find the address");
                } else if (body.status === "OK") {
                    resolve({
                        Address: body.results[0].formatted_address,
                        Latitude: body.results[0].geometry.location.lat,
                        Longitude: body.results[0].geometry.location.lng
                    });

                }
            });
    });
};

geocodeAddress('401209').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});