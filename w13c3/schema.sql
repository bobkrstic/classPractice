CREATE DATABASE top_songsDB;

use top_songsDB;

CREATE TABLE Top5000 (

id INTEGER AUTO_INCREMENT NOT NULL,
artist_name VARCHAR(100) NOT NULL,
song_name VARCHAR(100) NOT NULL,
year_released INTEGER(4) NOT NULL,
raw_score_global DECIMAL (5, 3) NOT NULL,
raw_score_us DECIMAL (5, 3) NOT NULL,
raw_score_uk DECIMAL (5, 3) NOT NULL,
raw_score_euro DECIMAL (5, 3) NOT NULL,
raw_elsehere DECIMAL (5, 3) NOT NULL,
primary key (id)

);

/**/