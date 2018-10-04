/*jshint esversion: 6 */
const request = require('request');
var geocodeaddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        },
        (error, response, body) => {
            if (error) {
                callback("Unable to connect to Google server");
            } else if (body.status === "ZERO_RESULT") {
                callback("Unable to find the address");
            } else if (body.status === "ok") {
                callback(undefined, {
                    Address: body.results[0].formatted_address,
                    Latitude: body.results[0].geometry.location.lat,
                    Longitude: body.results[0].geometry.location.lng
                });

            }
        });
};

module.exports.geocodeaddress = geocodeaddress;




// console.log(`Address: ${body.results[0].formatted_address}`);
// console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
// console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
// console.log(body);
//333fe7b6659b134fa74282cf3c52e338