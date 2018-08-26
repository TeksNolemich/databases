var models = require('../models');

module.exports = {
  messages: {
    get: function(req, res) {
      models.messages.get();
    }, // a function which handles a get request for all messages
    post: function(req, res) {
      models.messages.post(req.body);
      res.send();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function(req, res) {
      console.log('GET(user) - Test - ************ \n\n\n\n\n');

      var results = models.users.get();
      console.log(
        'here are the results of your get: ',
        JSON.stringify(results)
      );
      res.body = JSON.stringify(results);
      res.send();
    },
    post: function(req, res) {
      console.log('POST(user) - Test - ************ \n\n\n\n\n');
      models.users.post(req.body);
      // res.writeHead('Content-type:')
      // res.end();
      res.send();
    }
  }
};
