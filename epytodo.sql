DROP DATABASE IF EXISTS project_agri;
CREATE DATABASE IF NOT EXISTS project_agri;
USE project_agri;

CREATE TABLE user
(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    firstname varchar(255) NOT NULL,
    email varchar(255) NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE riz
(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    firstname varchar(255) NOT NULL,
    rice_quantity varchar(255) NOT NULL,
    localite VARCHAR(255) NOT NULL,
    contact VARCHAR(20) NOT NULL
);

CREATE TABLE manioc
(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    firstname varchar(255) NOT NULL,
    manioc_quantity varchar(255) NOT NULL,
    localite VARCHAR(255) NOT NULL,
    contact VARCHAR(20) NOT NULL
);

CREATE TABLE mais
(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    firstname varchar(255) NOT NULL,
    mais_quantity varchar(255) NOT NULL,
    localite VARCHAR(255) NOT NULL,
    contact VARCHAR(20) NOT NULL
);


CREATE TABLE tomate
(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    firstname varchar(255) NOT NULL,
    tomate_quantity varchar(255) NOT NULL,
    localite VARCHAR(255) NOT NULL,
    contact VARCHAR(20) NOT NULL
);

CREATE TABLE haricot
(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    firstname varchar(255) NOT NULL,
    haricot_quantity varchar(255) NOT NULL,
    localite VARCHAR(255) NOT NULL,
    contact VARCHAR(20) NOT NULL
)
