/*jshint esversion: 6 */
const request = require('request');
var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAqJQSVqNXLTPF2tkyOBb54yJ3qOldr1WQ`,
            json: true
        },
        (error, response, body) => {
            if (error) {
                callback("Unable to connect to Google server");
            } else if (body.status === "ZERO_RESULT") {
                callback("Unable to find the address");
            } else if (body.status === "OK") {
                callback(undefined, {
                    Address: body.results[0].formatted_address,
                    Latitude: body.results[0].geometry.location.lat,
                    Longitude: body.results[0].geometry.location.lng
                });

            }
        });
};

module.exports.geocodeAddress = geocodeAddress;






// console.log(`Address: ${body.results[0].formatted_address}`);
// console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
// console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
// console.log(body);
//333fe7b6659b134fa74282cf3c52e338