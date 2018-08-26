DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE usernames (
  username VARCHAR(120) UNIQUE,
  userId INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (userId)
);

CREATE TABLE rooms (
  room VARCHAR(120) UNIQUE,
  roomId INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (roomId)
);

CREATE TABLE friends (
  currentID INT,
  friendID INT,
  FOREIGN KEY (currentId) REFERENCES usernames(userId)
);
CREATE TABLE messages (
  /* Describe your table here.*/
  username INT,
  message VARCHAR(120),
  room INT,
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  FOREIGN KEY (username) REFERENCES usernames(userId),
  FOREIGN KEY (room) REFERENCES rooms(roomId)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

