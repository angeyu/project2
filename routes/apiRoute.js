const db = require("../models");

module.exports = function(app) {

    //** update based on database model **/
    app.get("/", function(req, res) {

        //   console.log(res);
        
        //find everything in the table
        db.Model.findAll({
  
        }).then(function(data) {
  
        //   console.log(data);
  
          res.render("index", data);
  
        });
  
    });


    //** update based on database model **/
    app.post("/api/intake", function(req, res) {

        //   console.log(req);
        
        //create a row from the data sent by the client
        db.Model.create(req.body)
        
            .then(function(data) {
            
        //   console.log(data);

          res.json(data);

        });

    });


    //** update based on database model **/
    app.put("/api/intake", function(req, res) {

    //update the row based on id, and return the result
    db.Model.update(

        //   console.log(req.body);

        req.body,
      {
        where: {
          id: req.body.id
        }

      }).then(function(data) {

        //   console.log(data);

            res.json(data);

        });

    });

};