CREATE DATABASE if NOT EXISTS test1;

grant
    all privileges on DATABASE_NAME.* TO 'elounejj' @'localhost' identified by '123';

grant
    all privileges on DATABASE_NAME.* TO 'elounejj' @'%' identified by '123';

flush privileges;