FROM debian:buster
COPY ./tools/database.sql /tmp/database.sql
RUN apt-get update\
    && apt-get install mariadb-server -y \
    && service mysql start \
    && chown -R mysql:mysql /var/lib/mysql \
    && mysql < /tmp/database.sql


EXPOSE 3306

CMD [ "mysqld_safe"]