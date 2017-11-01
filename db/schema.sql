CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id int NOT NULL Auto_increment
  ,burger_name varchar(255) NOT NULL
  ,devoured boolean
  ,date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  ,PRIMARY KEY(id)
);
