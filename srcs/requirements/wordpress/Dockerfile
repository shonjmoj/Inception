FROM debian:buster

RUN apt-get update && apt-get install php -y \
    && apt-get install mariadb-server mariadb-client -y \
    && service mysql start && mysql -u root -p 

