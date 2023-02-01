FROM debian:buster

RUN apt-get update && apt-get upgrade -y \
    && apt-get install -y nginx && apt-get install openssl -y && \
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt -subj="/C=MA/ST=BM/O=1337/CN=elounejj.42.fr"

COPY ./conf/default.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 443
