/*jshint esversion: 6 */
const yargs = require("yargs");
const axios = require("axios");

const argv = yargs
    .option({
        a: {
            demand: true,
            alias: "address",
            describe: "Address to fetch weather for",
            string: true //to get param  value from i/p
        }
    })
    .help()
    .alias("help", "h").argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDOgj2oCYhDV0Z-N7FIL2w61jNdnTF2Jpc`;

axios
    .get(geocodeURL)
    .then(response => {
        if (response.data.status === "ZERO_RESULTS") {
            throw new Error("Unable to find the address");
        }
        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        var weatherURL = `https://api.darksky.net/forecast/333fe7b6659b134fa74282cf3c52e338/${lat},${lng}`;
        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherURL);
    })
    .then(response => {
        var temperature = response.data.currently.temperature;
        var apparentTemperature = response.data.currently.apparentTemperature;
        console.log(
            `It's currently ${temperature}.It's feel like ${apparentTemperature}.`
        );
    })
    .catch(error => {
        if (error.code === "ENOTFOUND") {
            console.log("Unable to connect to API server");
        } else {
            console.log(error.message);
        }
    });