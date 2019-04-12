CREATE DATABASE users_sign_up_db;

USE users_sign_up_db;

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR (255) NOT NULL,
    password_hash VARCHAR (255) NOT NULL,
    admin BOOLEAN DEFAULT false 
);