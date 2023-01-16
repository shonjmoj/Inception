#!/bin/sh
mysql -e "CREATE DATABASE wordpress_db;" 
mysql -e "CREATE USER 'shonjmoj'@'localhost' IDENTIFIED BY '123';"
mysql -e "GRANT ALL PRIVILEGES ON *.* TO 'shonjmoj'@'localhost' WITH GRANT OPTION;"
mysql -e "CREATE USER 'shonjmoj'@'%' IDENTIFIED BY '123';"
mysql -e "GRANT ALL PRIVILEGES ON *.* TO 'shonjmoj'@'%' WITH GRANT OPTION;"
mysql -e "FLUSH PRIVILEGES;"