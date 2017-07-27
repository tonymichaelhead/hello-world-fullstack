DROP DATABASE IF EXISTS helloworld;

CREATE DATABASE helloworld;

USE helloworld;

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(200) NOT NULL,
  PRIMARY KEY (id)
);

//Create some default messages

INSERT INTO messages (text)
VALUES ('Hello world from the DB!');

INSERT INTO messages (text)
VALUES ('Hello cats from the DB!');

INSERT INTO messages (text)
VALUES ('Hello dogs and parrots from the DB!');