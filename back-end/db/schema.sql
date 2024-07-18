DROP DATABASE IF EXISTS songs_db;
CREATE DATABASE songs_db;

\c songs_db

CREATE TABLE songs_db (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL,
  album VARCHAR(255),
  time VARCHAR(25),
  is_favorite BOOLEAN
);
