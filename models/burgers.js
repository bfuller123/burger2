const orm = require('./../config/orm.js');


exports.addBurger = function(burgerName) {
  orm.insertOne(burgerName);
};

exports.devourBurger = function(burgerID, devouredStatus) {
  orm.updateOne(burgerID, devouredStatus)
}

exports.getBurgers = function(cb) {
  // body...
  orm.selectAll(function(res){
    cb(res);
  });
};
