/*jshint esversion: 6 */

const path = require('path');
const express = require('express');
// console.log(__dirname);
// console.log(path.join(__dirname , '../public'));
const app = express();
const publicDirectoryPath = path.join(__dirname , '../public') ;  //to access index page i.e is home page

app.use(express.static(publicDirectoryPath));


// app.get('' , (req , res)=>{
//     res.send('<h1> Welcome </h1>');
// });

// app.get('/help' , (req , res)=>{
//     res.send('Help page');
// });

// app.get('/about' , (req , res) =>{
//     res.send('<h1>About page</h1>');
// });

app.get('/weather' , (req , res)=>{
    res.send({
        forecasting : ' It is Sunny today ',
        location : 'Pune'
    });
});

app.listen(3000 , () =>{
    console.log('Server is running on port 3000');
});
