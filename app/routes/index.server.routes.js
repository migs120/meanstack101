module.exports = function(app, argmt2) {
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

                                        };
