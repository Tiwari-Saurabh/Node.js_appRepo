/*jshint esversion: 6 */
const express = require('express');

var app = express();
app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Saurabh',
        Age: 23,
        Hobbies: [
            'Cricket',
            'reading',
            'Gaming'
        ]
    });
});

app.use(express.static(__dirname + '/public'));

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});
app.get('/bad', (req, res) => {
    res.send({
        status: 'Unable to handle request'
    });
});

app.listen(3000);