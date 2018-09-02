/*jshint esversion: 6 */
console.log('Starting App...');
const fs = require('fs');
const _ = require('lodash');
const os = require('os');


const basic = require('./basic.js');
var res = basic.addnote();
console.log(res);
// var Addition = basic.add();
// console.log(Addition);
// console.log('Result:', basic.add(9, -2));


// Some basic lodash modules
//_.isString module
// console.log(_.isString(true));
// console.log(_.isString('Saurabh'));

// var uniqueArray = _.uniq(['Saurabh', 95, 'Saurabh', 'gaurav', 'Swati', 95, 96, 97, 98]);
// console.log(uniqueArray);