FROM debian:buster

RUN apt-get update
RUN apt-get install php-mysql php php-fpm wget -y
RUN wget https://wordpress.org/latest.tar.gz
RUN tar -xzvf latest.tar.gz

COPY ./conf/wp-config.php ./wordpress

WORKDIR /wordpress

CMD ["php" ,"-S" ,"0.0.0.0:9000"]
