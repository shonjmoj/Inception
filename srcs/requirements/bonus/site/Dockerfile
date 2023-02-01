FROM debian:buster

RUN apt-get update \
    && apt-get install curl git -y \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash \
    && apt-get install -y nodejs \
    && npm install yarn --global 

RUN git clone https://github.com/shonjmoj/shonjmoj.me.git

WORKDIR /shonjmoj.me

EXPOSE 3000

RUN yarn

CMD yarn build && yarn start
