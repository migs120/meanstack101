var users = require('../../app/controllers/users.server.controller');

module.exports = function(app) {
                                  app.route('/users')
                                      .post(users.create)
                                      .get(users.list);
    
                                  app.route('/users/:userId')
                                      .get(users.read);
    
                                  app.route('/this')
                                      .get(
                                            function(req, res, next) {
                                                                      res.json({hello:"hi"});
                                                                     }
                                          );
    
    
                                  app.route('/that')
                                      .get(
                                            function(req, res, next) {
                                                                        res.render(
                                                                                      'index', {
                                                                                                  title: 'HELLO WORLD'
                                                                                                }
                                                                                    )
                                                                     }
                                          );

                                  app.param('userId', users.userByID);

    
                                };
