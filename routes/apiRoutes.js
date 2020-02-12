const db = require("../models");
const moment = require('moment');

module.exports = function(app) {

    //get and post request
   app.get("/", function(req, res) {

    //set var for today's date
    let todaysDate = moment().format('YYYY-MM-DD');

    //run method that will search for an existing record, and if it does not exist will create it
    db.Intake.findOrCreate({

        //find the record where the date equals today
        where: { 
            createdAt: todaysDate 
        },
        //if it doesn't exist, create it
        defaults: { 
            water: 0 
        } 

        }).then(function(data) {

            // console.log(data[0].dataValues);
            let parsedData = data[0].dataValues;
            

        //render the index and send newObj object
        res.render("index", { parsedData } );

        });

    });



    //** update based on database model **/
    app.put("/api/progress", function(req, res) {

        //set var for today's date
        let todaysDate = moment().format('YYYY-MM-DD');

        //update the specific row...
        db.Intake.update(req.body,
            
            {
            //...that matches today's date
          where: {
            createdAt: todaysDate
          }

        }).then(function(data) {

            //   console.log(data);

            res.json(data);

        });

    });

};