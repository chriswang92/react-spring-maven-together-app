DROP TABLE IF EXISTS users;
CREATE TABLE users
(
    id int not null,
    username varchar(100) NOT NULL,
    password varchar(20) default NULL ,
    PRIMARY KEY (id)
);
DROP TABLE IF EXISTS books;
CREATE TABLE books
(
    id int not null,
    name varchar(100) NOT NULL,
    PRIMARY KEY (id)
);