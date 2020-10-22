var express = require('express');
var router = express.Router();
var db = require('../database');
/* GET home page. */
router.get('/', function (req, res, next) {
  var sql = 'SELECT * FROM frame_type';

  var sql2 = 'SELECT * FROM mat_type';

  db.query(sql, function (err, data, fields) {
    db.query(sql2, function(err, result2) {
    if (err) throw err;
    res.render('index', { title: 'Frame', userData: data, row: result2
  
  });
    })
  });
  

});

module.exports = router;
