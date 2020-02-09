// Set dependencies
const express = require("express");
const exphbs = require("express-handlebars");

//required dotenv to enable environmental variables
require('dotenv').config()

//Parse incoming req.body and user input
const bodyParser = require('body-parser');

// Sets the express app and port for Heroku
const app = express();
const PORT = process.env.PORT || 3000;

// Requires models for syncing
const db = require("./models");

// Set Handlebars as the default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

//Set Handlebars to handle the browser tasks, and express to make room for Handlebars
app.set("view engine", "handlebars");

// Parse application
app.use(bodyParser.urlencoded({ extended: false }))

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Grants access to the static directory and all files within, such as css and js
app.use(express.static("public"));


// Require api routes
require("./routes/apiRoute.js")(app);


// Syncing our models and start express app
// =============================================================
db.sequelize.sync().then(function() {
    
  app.listen(PORT, function() {

    console.log("App listening on PORT " + PORT);
  });

});
