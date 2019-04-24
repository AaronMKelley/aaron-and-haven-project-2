CREATE DATABASE conventions_db; 

USE conventions_db;

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR (255) NOT NULL,
    password_hash VARCHAR (255) NOT NULL,
    admin VARCHAR(255) 
);

CREATE TABLE event (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR (255),
    descript VARCHAR (255),
    attendance INT NOT NULL,
    event_date DATE NOT NULL
);

CREATE TABLE attendees (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name  VARCHAR (255),
    email  VARCHAR (255),
    company VARCHAR (255),
    picked_up_swag BOOLEAN DEFAULT false,
    picked_up_lunch BOOLEAN DEFAULT false,
    /*user_id INT NOT NULL, */
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    /* FOREIGN KEY (user_id) REFERENCES users (id) */
);


CREATE TABLE speakers(
     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
     name VARCHAR (255),
     topic VARCHAR (255),
     title VARCHAR (255), 
     code INT
);

CREATE TABLE attendance(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
   speaker_id INT NOT NULL,
    attendee_id INT NOT NULL
--    attendee_name VARCHAR (255),
--    FOREIGN KEY (attendee_id) REFERENCES attendees(id),
--    FOREIGN KEY (speaker_id) REFERENCES speakers(id)
   );