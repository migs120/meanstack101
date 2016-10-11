var express = require('express');
var app = express();


var htmldoc =  "<CENTER><h1>HELLO WORLD</h1>"
             +"<p>Simple request and response page</p></CENTER>"

app.use('/', function(req, res) {
                                  res.send(htmldoc);
                                }
       );

app.listen(3000);
console.log('Server running at http://localhost:3000/');

module.exports = app;
