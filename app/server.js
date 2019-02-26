// Dependencies 
var express = require("express");

// Express
var app = express();

// Define port
var PORT = process.env.PORT || 8080;

// Sets up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing
require("../app/routing/apiRoutes")(app);
require("../app/routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});