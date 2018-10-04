/*jshint esversion: 6 */
const request = require('request');
var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/333fe7b6659b134fa74282cf3c52e338/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to forcast.io server');
        } else if (response.statusCode === 404) {
            callback('Unable to fetch Weather');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
        //console.log(JSON.stringify(response, undefined, 2));
    });
};


module.exports.getWeather = getWeather;