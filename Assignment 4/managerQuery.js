var pg = require('pg');
var conString = "postgres://zjfheujb:zfGcU3cxrp-x5qS9hT7AgsFkToAvUPcs@ruby.db.elephantsql.com/zjfheujb";
var client = new pg.Client(conString);
var express = require('express');
var router = express.Router();
var db=require('../database');
client.connect();
router.get('/form', function(req, res, next) { 
res.render('users'); 
});
router.post('/create', function(req, res, next) {
  
  // store all the user input data
  const userDetails=req.body;
 
  // insert user data into users table
  var sql = 'INSERT INTO client_information SET ?';
  db.query(sql, userDetails,function (err, data) { 
      if (err) throw err;
         console.log("User dat is inserted successfully "); 
  });
 res.redirect('/users/form');  
}); 
module.exports = router;

/* do your queries */







client.end();