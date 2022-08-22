FROM node:14-alpine as builder
WORKDIR /usr/app
COPY package.json ./
COPY tsconfig.json ./
COPY . .
RUN ls -a
RUN npm install
RUN npm run build

FROM node:14-alpine as final

# create the appropriate directories
ENV APP_HOME=/home/node/app
ENV LDFLAGS="-L/usr/local/opt/openssl/lib"
ENV CPPFLAGS="-I/usr/local/opt/openssl/include"
ENV DOCKER_REGISTRY="638615282713.dkr.ecr.ap-south-1.amazonaws.com"
ENV NEW_RELIC_NO_CONFIG_FILE=true

RUN mkdir $APP_HOME
WORKDIR $APP_HOME
ARG env
ENV envValue=$env

COPY package.json ./
RUN npm install --only=production
COPY --from=0 /usr/app/build .
COPY --from=0 /usr/app/.env .env
RUN npm install nodemon -g

CMD ["sh", "-c", "npm run start:${envValue}"]