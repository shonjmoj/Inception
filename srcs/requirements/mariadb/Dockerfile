FROM debian:buster

RUN apt-get update \
    && apt-get install mariadb-server -y

COPY ./tools/db.sql .
COPY ./tools/script.sh .
COPY ./conf/50-server.cnf /etc/mysql/mariadb.conf.d/

CMD sh ./script.sh