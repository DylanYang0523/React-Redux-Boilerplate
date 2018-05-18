FROM node:8

WORKDIR /web-view

ADD . /web-view

RUN yarn install

# Expose port
EXPOSE 3000
