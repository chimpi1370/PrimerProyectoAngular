CREATE DATABASE ng_games_db;

use ng_games_db;

CREATE TABLE games(
    id INT (11) NOT NULL auto_increment PRIMARY KEY, 
    title VARCHAR(180),
    discription VARCHAR(255),
    img VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE games;