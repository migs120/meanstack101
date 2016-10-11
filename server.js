var connect = require('connect');
var app = require('connect')();

var htmldoc =  "<CENTER><h1>HELLO WORLD</h1>"
             +"<p>Simple request and response page</p></CENTER>"

var helloWorld = function(req, res, next) {
                                          res.setHeader('Content-Type', 'text/html');
                                          res.end(htmldoc);
                                        };
app.use(helloWorld);

app.listen(3000);
console.log('Server running at http://localhost:3000/');

