/*jshint esversion: 6 */
const request = require("request");
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
request(
  {
    //"https://maps.googleapis.com/maps/api/geocode/json?address=Sangli",
    url:
      "http://www.mapquestapi.com/geocoding/v1/address?key=oYpt31O9Vu5j0oOFi7bv1FMDUyUTnCNw&location=sangli",
    json: true
  },
  (error, response, body) => {
    //console.log(JSON.stringify(response, undefined, 2));
    console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
    console.log(`Longitude:${body.results[0].locations[0].latLng.lng}`);
  }
);
