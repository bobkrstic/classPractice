DROP DATABASE seinfeld_db;
CREATE DATABASE seinfeld_db;
USE seinfeld_db;

CREATE TABLE actors (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  coolness_points int,
  attitude varchar(30),
  PRIMARY KEY(id)
);

INSERT INTO actors (name, coolness_points, attitude) VALUES ("Arnold", 100, "Moar Powerfull");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Silvester", 80, "Powerfull");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("McGuyver", 100, "Smart");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Charlie chaplin", 500, "Funny");
