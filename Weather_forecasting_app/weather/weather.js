/*jshint esversion: 6 */
const request = require('request');
var getweather = () => {
    request({
        url: 'https://api.darksky.net/forecast/333fe7b6659b134fa74282cf3c52e338/19.0760,72.8777',
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            console.log(body.currently.temperature);
        } else {
            console.log('Unable to fetch Weather');
        }
        //console.log(JSON.stringify(response, undefined, 2));
    });
};


module.exports.getweather = getweather;