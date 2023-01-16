FROM debian:buster

COPY ./tools/user.sql .

COPY ./tools/db.sql .

COPY ./tools/script.sh .

RUN apt-get update\
    && apt-get install mariadb-server -y \
    && service mysql start \
    && chown -R mysql:mysql /var/lib/mysql \
    && bash script.sh \
    && mysql wordpress_db < db.sql

COPY ./conf/50-server.cnf /etc/mysql/mariadb.conf.d/

CMD [ "mysqld_safe"]