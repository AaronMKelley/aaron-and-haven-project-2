CREATE DATABASE conventions_db; 

USE conventions_db;

CREATE TABLE attendees (
    attendee_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name  VARCHAR (255),
    email  VARCHAR (255),
    company VARCHAR (255),
    picked_up_swag BOOLEAN DEFAULT false,
    picked_up_lunch BOOLEAN DEFAULT false,
    speaker_one BOOLEAN DEFAULT false,
    speaker_two BOOLEAN DEFAULT false,
    speaker_three BOOLEAN DEFAULT false,
    speaker_four BOOLEAN DEFAULT false,
    speaker_five BOOLEAN DEFAULT false,
    speaker_six BOOLEAN DEFAULT false,
    speaker_seven BOOLEAN DEFAULT false,
    speaker_eight BOOLEAN DEFAULT false,
    speaker_nine BOOLEAN DEFAULT false,
    speaker_ten BOOLEAN DEFAULT false,
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO attendees (name,email,company,speaker_one,speaker_two,speaker_three,speaker_four,speaker_five,speaker_six,speaker_seven,speaker_eight,speaker_nine,speaker_ten, ts) 
VALUES ("Joe","joe@gmail.com","Microsoft",DEFAULT(speaker_one),DEFAULT(speaker_two),DEFAULT(speaker_three),DEFAULT(speaker_four),DEFAULT(speaker_five),DEFAULT(speaker_six),DEFAULT(speaker_seven),DEFAULT(speaker_eight),DEFAULT(speaker_nine),DEFAULT(speaker_ten),CURRENT_TIMESTAMP);