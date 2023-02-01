FROM debian:buster

RUN apt-get update
RUN apt-get install php-mysql php php-fpm php-cgi wget -y
RUN wget https://wordpress.org/latest.tar.gz
RUN tar -xzvf latest.tar.gz
COPY ./conf/wp-config.php /wordpress

COPY ./conf/www.conf /etc/php/7.3/fpm/pool.d/

WORKDIR /var/www

COPY tools/script.sh /tmp/

CMD bash /tmp/script.sh