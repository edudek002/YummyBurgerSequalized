var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");
// Create all our routes and set up logic within those routes where required.

// GET route for getting all of the burgers

router.get("/", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Burger.findAll({}).then(function(dbBurgers) {
    var burgers = [];

    dbBurgers.map(function(burger) {
      burgers.push(burger.dataValues);
    });

    // We have access to the burgers as an argument inside of the callback function
    res.render('index', { burgers: burgers });
  });  

});
              

// POST route for saving a new burger. We can create a burger using the data on req.body
router.post("/api/burgers", function(req, res) {
  console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(dbBurger) {
      // We have access to the new burger as an argument inside of the callback function
      res.json(dbBurger);
    });

});
// PUT route for updating burgerss. We can access the updated burgers in req.body
router.put("/api/burgers/:id", function(req, res) {
  // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
  console.log(req.body);
  db.Burger.update({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }, {
    where: {
      id: req.body.id
    }
  }).then(function(dbBurger) {
    console.log(dbBurger);
    res.json(dbBurger);
  });
});

// DELETE route for deleting burgers. We can access the ID of the burger to delete in
  // req.params.id
router.delete("/api/burgers/:id", function(req, res) {
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbBurger) {
    res.json(dbBurger);
  });
      
});  



// Export routes for server.js to use.
module.exports = router;

