var express = require('express');
var router = express.Router();
var db = require('../database');
/* GET home page. */
router.get('/', function (req, res, next) {
  var sql1 = 'SELECT * FROM frame_type';

  var sql2 = 'SELECT * FROM mat_type WHERE category ="whitecore"';


  var sql3 = 'SELECT * FROM frame_type WHERE category = "white"';
  var sql4 = 'SELECT * FROM frame_type WHERE category = "gold"';
  var sql5 = 'SELECT * FROM frame_type WHERE category = "colorful"';
  var sql6 = 'SELECT * FROM frame_type WHERE category = "popular"';
  var sql7 = 'SELECT * FROM mat_type WHERE category ="blackcore"';

  db.query(sql1, function (err, data, fields) {
    db.query(sql2, function (err, result2) {
      db.query(sql3, function (err, result3) {
        db.query(sql4, function (err, result4) {
          db.query(sql5, function (err, result5) {
            db.query(sql6, function (err, result6) {
              db.query(sql7, function (err, result7) {
                if (err) throw err;
                res.render('index', {
                  title: 'Frame', framedata: data, matwdata: result2, whiteframe: result3, goldframe: result4, onsaleframe: result5, popularframe: result6, matbdata: result7,
                });
              });
            });
          });
        });
      });
    })
  });


});

module.exports = router;
