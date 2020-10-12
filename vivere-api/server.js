var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
require('./app/router/router.js')(app);

// Create a Server
var server = app.listen(8080, function () {
  var port = server.address().port
  console.log("App listening at", `http://localhost:${port}`)
})
