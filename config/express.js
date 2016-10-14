var express = require('express');

module.exports = function() {
                              var app = express();
                         
                             require('../app/routes/index.server.routes.js')(app,'testArgmt')  //arguments get passed to routes.js
                          
                              return app;
                            };
