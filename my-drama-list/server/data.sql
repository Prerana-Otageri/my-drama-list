CREATE DATABASE mydramalist;

CREATE TABLE mydrama(
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255),
    status VARCHAR(255),
    progress INT,
    release_year VARCHAR(255)
);

CREATE TABLE users(
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);