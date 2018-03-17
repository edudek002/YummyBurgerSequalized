// Import the ORM to create functions that will interact with the database.
//var orm = require("../config/orm.js");

//pulls in Sequelize package
//var Sequelize = require("sequelize");

//Refernce connection to database
//var sequelize = require("../config/connection.js")
module.exports = function(sequelize, DataTypes) {

  var Burger  = sequelize.define("Burger", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true

    // },
    burger_name: {
      type: DataTypes.STRING
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    // timestamps: false
  });

  // Syncs with DB
  // Burger.sync();

//===THESE ARE ORM FUNCTIONS
/*
var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};
*/
// Export the database functions for the controller (catsController.js).
return Burger;

};

//module.exports = Burgers;
