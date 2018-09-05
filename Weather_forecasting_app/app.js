/*jshint esversion: 6 */
const request = require('request');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Sangli',
    json: true
}, (error, response, body) => {
    console.log(body);
    console.log(error);
});