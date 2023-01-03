FROM debian:buster

RUN apt-get update -y && apt-get upgrade -y && \
    apt-get install -y nginx && apt-get install openssl -y && \
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt -subj="/C=MA/ST=BM/O=1337/CN=elounejj.42.fr"

COPY default /etc/nginx/sites-available/default

COPY index.html /etc/nginx/sites-available/

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]