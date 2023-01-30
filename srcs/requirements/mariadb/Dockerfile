FROM debian:buster

RUN apt-get update \
<<<<<<< HEAD
    && apt-get install mariadb-server -y

COPY ./tools/db.sql .
COPY ./tools/script.sh .
COPY ./conf/50-server.cnf /etc/mysql/mariadb.conf.d/

=======
    && apt-get install mariadb-server procps -y

COPY ./tools/wordpress.sql .
COPY ./tools/script.sh .
COPY ./conf/50-server.cnf /etc/mysql/mariadb.conf.d/
>>>>>>> docs : remove useless files and use env variables
CMD sh ./script.sh