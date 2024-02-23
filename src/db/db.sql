-- Active: 1707473757399@@127.0.0.1@3306@userlogin
CREATE DATABASE IF NOT EXISTS userlogin;

USE userlogin;

create table users (
    id int auto_increment primary key,
    nameuser VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

DESCRIBE users; 