/*jshint esversion: 6 */
const express = require('express');
const hbs = require('hbs');


var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

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



app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentDate: new Date().getFullYear()
    });
});
app.get('/bad', (req, res) => {
    res.send({
        status: 'Unable to handle request'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});