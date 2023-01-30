FROM debian:buster

RUN apt-get update
<<<<<<< HEAD
RUN apt-get install php-mysql php php-fpm wget -y
RUN wget https://wordpress.org/latest.tar.gz
RUN tar -xzvf latest.tar.gz

WORKDIR /wordpress

COPY ./conf/wp-config.php .


CMD ["php" ,"-S" ,"0.0.0.0:9000"]
=======
RUN apt-get install php-mysql php php-fpm php-cgi wget -y
RUN wget https://wordpress.org/latest.tar.gz
RUN tar -xzvf latest.tar.gz
COPY ./conf/wp-config.php /wordpress

COPY ./conf/www.conf /etc/php/7.3/fpm/pool.d/

WORKDIR /var/www

COPY tools/script.sh /tmp/

CMD bash /tmp/script.sh
>>>>>>> docs : remove useless files and use env variables
