var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();
var port = process.env.PORT || 1337;
 
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get('/', function (req, res) {
  res.redirect('https://hdbits.wdf.sap.corp/bugzilla/');
});

app.get('/new', function(req, res) {
  res.redirect('https://hdbits.wdf.sap.corp/bugzilla/enter_bug.cgi?product=NewDB');
});

app.use(function(req, res, next) {
  res.redirect('https://hdbits.wdf.sap.corp/bugzilla/show_bug.cgi?id=' + req.path.slice(1));
});
 
app.listen(port, function () {
  console.log('Listening on port ' + port);
});
