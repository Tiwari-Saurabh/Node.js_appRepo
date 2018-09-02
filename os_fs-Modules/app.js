/*jshint esversion: 6 */
console.log('Starting App...');
const fs = require('fs');
// const _ = require('lodash');
const os = require('os');
const note = require('./note.js');

var user = os.
userInfo();

// console.log(user);
// fs.appendFile('Greetings.txt', 'Hello' + user.username + '!', function (err) {
//     if (err) {
//         console.log('Unable to Write to the file');
//     }
// });


// // another option for printing hello saurabh!by using module is as a follow

fs.appendFile('Greetings.txt', `Hello  ${user.username}! You are ${note.age}`, function (err) {
    if (err) {
        console.log('Unable to Write to the file');
    }
});