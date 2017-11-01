const db = require('./connection.js');

const userConnection = db;

function connectUser(){
  userConnection.connect(function(err){
    if(err) throw err;
    console.log('Connected!');
  })
}

connectUser();


//exports   --these are speaking with the backend
module.exports.selectAll = function(cb){
  userConnection.query('SELECT * FROM burgers_db.burgers', function(err, res){
    cb(res);
  });
}

module.exports.insertOne = function(burgerName){
  userConnection.query(`INSERT INTO burgers_db.burgers (burger_name, devoured) VALUES ('${burgerName}', 0)`), function(err, res){
    console.log(`${burgerName} added`);
  }
}

module.exports.updateOne = function(burgerID, devourNum){
  userConnection.query(`UPDATE burgers_db.burgers SET devoured = ${devourNum} WHERE id = '${burgerID}'`, function(err, res){
    console.log(`${burgerID} was devoured!`);
  });
}
