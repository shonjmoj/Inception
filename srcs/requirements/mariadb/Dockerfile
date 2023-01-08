FROM debian:buster

COPY ./tools/database.sql /tmp/database.sql

COPY ./tools/script /tmp/script

RUN apt-get update\
    && apt-get install mariadb-server -y \
    && service mysql start \
    && chown -R mysql:mysql /var/lib/mysql \
    && mysql < /tmp/database.sql && mysql < /tmp/script

EXPOSE 3306

CMD [ "mysqld_safe"]