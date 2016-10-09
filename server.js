var http = require('http');


var htmldoc =  "<CENTER><h1>HELLO WORLD</h1>"
             +"<p>Simple request and response page</p></CENTER>"


http.createServer(function(req, res) {
                                      res.writeHead(200, {
                                                            'Content-Type': 'text/html'
                                                          });
                                      res.end(htmldoc);
                                    }
                 ).listen(3000);

console.log('Server running at http://localhost:3000/');
