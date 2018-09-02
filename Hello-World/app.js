/*jshint esversion: 6 */
console.log('Starting App...');
const fs = require('fs');
fs.appendFile('Greetings.txt', 'Hello World!', function (err) {
    if (err) {
        console.log('Unable to Write to the file');
    }
});