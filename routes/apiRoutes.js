const db = require("../models");
const moment = require('moment');

module.exports = function(app) {

    //option 1 - use findOrCreate
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

                // console.log(data);

                //set properties of new object from returned sql data
                //resolves Handlebars restrict access error
                data = {
                    water: data[0].water,
                    interaction: data[0].interaction,
                    eaten: data[0].eaten,
                    exercise: data[0].exercise,
                    hobby: data[0].hobby,
                    medication: data[0].medication
                }

                // console.log(data);

            //render the index and send data object
            res.render("index", { data } );
  
        });

    });

    //option 2 - get One only
    app.get("/", function(req, res) {
        
        //set var for today's date
        let todaysDate = moment().format('YYYY-MM-DD');

        // find one record...
        db.Intake.findOne({
        
            //that matches today's date
            where: {
                createdAt: todaysDate
            }
    
        }).then(function(data) {

            //if a date is found and data is returned
          if (data != null) {

            //set data to new object from returned info
            data = {
              water: data.water,
              interaction: data.interaction,
              eaten: data.eaten,
              exercise: data.exercise,
              hobby: data.hobby,
              medication: data.medication
           }
    
        } else {
          
            data = null;

        }
        
          // send object to index for rendering
            res.render("index", { data } );

        });
  
    });


    app.post("/api/progress", function(req, res) {

        //   console.log(req);
        
        //create a row from the data sent by the client
        db.Intake.create(req.body)
        
            .then(function(data) {
            
            // console.log(data);

          res.json(data);

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