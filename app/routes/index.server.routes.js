module.exports = function(app, argmt2) {
                                        console.log(argmt2) //testing
                                        var index = require('../controllers/index.server.controller');
                                        app.get('/', index.render);

                                        };
