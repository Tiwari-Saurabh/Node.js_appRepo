/*jshint esversion: 6 */

const path = require("path");
const express = require("express");
const hbs = require("hbs");
// console.log(__dirname);
// console.log(path.join(__dirname , '../public'));
const app = express();

//Define path for Express Config
const publicDirectoryPath = path.join(__dirname, "../public"); //to access index page i.e is home page
const viewsPath = path.join(__dirname, "../templetes/views");
const partialsPath = path.join(__dirname, "../templetes/partials");

//Sets handlerbars engine and view location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to server
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather Application",
    name: "Saurabh Tiwari"
  });
});

app.get("/about", (re, res) => {
  res.render("about", {
    title: "About me",
    name: "Saurabh Tiwari"
  });
});

app.get("/help", (re, res) => {
  res.render("help", {
    title: "Help",
    name: "Saurabh Tiwari"
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecasting: " It is Sunny today ",
    location: "Pune"
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Saurabh Tiwari",
    errorMessage: "Requested Page Does Not Exist"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Saurabh Tiwari",
    errorMessage: "Error Code 404: Page Not Found"
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// app.get('' , (req , res)=>{
//     res.send('<h1> Welcome </h1>');
// });

// app.get('/help' , (req , res)=>{
//     res.send('Help page');
// });

// app.get('/about' , (req , res) =>{
//     res.send('<h1>About page</h1>');
// });
