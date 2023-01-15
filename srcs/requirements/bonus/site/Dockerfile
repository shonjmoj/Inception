FROM debian:buster

COPY shonjmoj.me .

RUN apt-get update \
    && apt-get install curl -y \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash \
    && apt-get install -y nodejs \
    && npm install -g npm@9.3.0 && npm i

EXPOSE 3000

CMD [ "npm", "run", "dev" ]