var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;

var app = express();

// Sets up our Express router
var router = express.Router();

// Makes our public folder a static directory 
app.use(express.static(__dirname + "/public"));

// Connecting handlebars to our Express app
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// So we can use bodyParser in this app
app.use(bodyParser.urlencoded({
    extended: false
}));

// Makes every request for through the router middleware
app.use(router);

app.listen(PORT, function() {
    console.log("Listening on port:" + PORT);
});
