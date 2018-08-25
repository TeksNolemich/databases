CREATE DATABASE chat;

USE chat;

CREATE TABLE usernames (
  username VARCHAR(120) NOT NULL,
  id INT NOT NULL,
  PRIMARY KEY id
);

CREATE TABLE rooms (
  room VARCHAR(120) NOT NULL,
  id INT NOT NULL,
  PRIMARY KEY id
);

CREATE TABLE friends (
  userID INT NOT NULL,
  friendID INT NOT NULL,
  FOREIGN KEY userID REFERENCES usernames(id)
)
CREATE TABLE messages (
  /* Describe your table here.*/
  username INT NOT NULL,
  text VARCHAR(120) NOT NULL,
  room INT NOT NULL,
  id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (username) REFERENCES usernames(id),
  FOREIGN KEY (room) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

