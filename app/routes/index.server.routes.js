module.exports = function(app, argmt2) {
    
                                        var htmldoc =  "<CENTER><h1>HELLO WORLD</h1>"
                                                      +"<p>Simple request and response page</p></CENTER>"
                                        
                                        console.log(argmt2, "-- consoled at index.server.routes.js") //testing
                                        
                                        var index = require('../controllers/index.server.controller');
    
                                        app.get('/', index.render);
    
                                        app.get('/mig', function(req, res, next) {
                                                                                    res.render(   /* \|/template name*/
                                                                                                  'tell', {   /* \|/template variables*/
                                                                                                              title: 'OlA MUNDO'
                                                                                                            }
                                                                                                )
                                                                                 }
                                               );
    
                                        app.get('/migtwo', function(req, res, next) {
                                                                                       res.send(htmldoc);
                                                                                     }
                                               );

                                        };
