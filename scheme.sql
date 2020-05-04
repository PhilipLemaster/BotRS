CREATE DATABASE nodelogin DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE nodelogin;

CREATE TABLE skills (
    user_emailID INT REFERENCES users(ID),
    oreCount INT,
    oreXP INT,
    woodCount INT,
    woodXP INT,
    fishCount INT,
    fishXP INT
);

INSERT INTO skills (user_emailID, oreCount, oreXP, woodCount, woodXP, fishCount, fishXP)
VALUES ("1", "1", "15", "1", "15", "1", "15");