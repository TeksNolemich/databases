var db = require('../db');

module.exports = {
  messages: {
    get: function(info) {
      // var sqlCommand = 'Select * FROM messages';
      var sqlCommand = `Select (username, message) from messages JOIN usernames ON messages.id = usernames.userId
                        WHERE room = (Select id from rooms WHERE room=${info.roomname})`;
      db.connection.query(sqlCommand, (err, results, fields) => {
        if (err) {
          console.log('got an error', err);
        } else {
          //results is an array of the messages
          //[{username: 'Valjean', message: 'text', roomname: 'Lobby'}]

          //           SELECT *
          // FROM subject s
          // join faculty f
          //   on s.sub_faculty = f.fac_id
          // WHERE s.sub_desc = 'PHYSICS'
          //   AND s.sub_year = '4'
          //   AND f.fac_name LIKE '%JOHN%'
          //Need a promise or some kind of callback to get the data through
          return results;
        }
      });
    }, // a function which produces all the messages

    post: function(userPost) {
      var sqlRoom = `INSERT IGNORE INTO rooms (room) VALUES ("${userPost.roomname}")`;
      // var sqlCommand = `INSERT INTO usernames (username) VALUES ("${user.username}")`;
      db.connection.query(sqlRoom, (err, results, fields) => {
        if (err) {
          console.log('\n\n\nError adding rooms', err);
        }

        var sqlName = `INSERT IGNORE INTO usernames (username) VALUES ("${userPost.username}")`;
        db.connection.query(sqlName, (err, results, fields) => {
          if (err) {
            console.log('got an error', err);
          }
          // console.log(
          //   'POST(usernames): - Complete - command went through \n',
          //   fields,
          //   results
          // );
          console.log(
            'appended to the room database----------------------------'
          );

          var sqlCommand =
            'INSERT INTO messages (username, message, room) VALUES (?,?,?)';
          // var sqlCommand =
          //   'INSERT INTO messages (username, message, room) VALUES (?)';
          // var data = [[1, 'hello world', 1]];
          db.connection.query(
            sqlCommand,
            [userPost.username, userPost.message, userPost.roomname],
            (err, results, fields) => {
              if (err) {
                console.log('\n\n\nError adding messages', err);
              } else {
                console.log(
                  'POST(message, room, user): - Complete - command went through \n',
                  fields,
                  results
                );
              }
            }
          );
        });
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function() {
      var sqlCommand = 'Select (username) FROM usernames';
      db.connection.query(sqlCommand, (err, results, fields) => {
        if (err) {
          console.log('got an error', err);
        } else {
          //results is an array of the users
          //[{username: 'Valjean'}]

          //Need a promise or some kind of callback to get the data through
          return results;
        }
      });
    },
    post: function(user) {
      var sqlCommand = `INSERT IGNORE INTO usernames (username) VALUES ("${user.username}")`;
      db.connection.query(sqlCommand, (err, results, fields) => {
        if (err) {
          console.log('got an error', err);
        }
      });
    }
  }
};

// "(SELECT id FROM usernames WHERE username='${userPost.username}')",
//       "(SELECT id FROM rooms WHERE room='${userPost.roomname}')")
