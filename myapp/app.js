var fs = require('fs');
const http = require('http');
const multer = require('multer');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser");
const Shopify = require('shopify-api-node');
const Shopifybuy = require('shopify-api-node');
const {v4:uuid} = require('uuid');


process.env.AWS_ACCESS_KEY_ID     = 'AKIAVVKH7VVUECHBMXHB';
process.env.AWS_SECRET_ACCESS_KEY = '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';
process.env.AWS_REGION            = 'us-east-1';

var AWS = require('aws-sdk');
var s3  = new AWS.S3();

var indexRouter = require('./routes/index');
const upload = multer({dest: __dirname + '/uploads/images'});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))
// support parsing of application/json type post data
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));


app.post('/upload', upload.single('photo'), (req, res,next) => {
  console.log(req.file);
  console.log(req.file.path);
    var tmp_path = req.file.path;
    var target_path = 'uploads/images/'+uuid()+req.file.originalname;
     var src = fs.createReadStream(tmp_path);
  var dest = fs.createWriteStream(target_path);
  src.pipe(dest);
  src.on('end', function() { res.end("File is uploaded"); });
  src.on('error', function(err) { return res.end("Error uploading file."); });

});

const shopify1 = new Shopify({
  shopName: 'milfordframers.myshopify.com',
  accessToken: '76344bcecf8f6b59d4ea1d5706ece042'
});
app.use('/', indexRouter);


var shopifyRouter=require('./routes/shopify');
app.post('/shopify', (req, res) => {
    console.log(req.body);
    shopify1.checkout
  .create(req.body)
  .then((orders) => console.log(orders))
  .catch((err) => console.error(err))

    res.send({ "message": "OK" });
})


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');