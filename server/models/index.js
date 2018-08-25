var db = require('../db');

module.exports = {
  messages: {
    get: function() {
      var sqlCommand = '';
    }, // a function which produces all the messages
    post: function() {
      var sqlCommand = '';
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function() {
      var sqlCommand = '';
    },
    post: function(user) {
      var sqlCommand = 'INSERT INTO usernames (username) VALUES (?)';
      db.connection.query(
        sqlCommand,
        [user.username],
        (err, results, fields) => {
          if (err) {
            console.log('got an error', err);
          } else {
            console.log('POST(user): command went through');
          }
        }
      );
    }
  }
};
