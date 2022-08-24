FROM mongo-express as final

WORKDIR /usr/app
COPY package.json ./
COPY . .
RUN ls -a
RUN npm install
RUN npm run build


ENV LDFLAGS="-L/usr/local/opt/openssl/lib"
ENV CPPFLAGS="-I/usr/local/opt/openssl/include"
ENV DOCKER_REGISTRY="638615282713.dkr.ecr.ap-south-1.amazonaws.com"

ARG env
ENV envValue=$env

RUN npm install nodemon serve -g

CMD ["sh", "-c", "pwd; echo 'ls -a'; ls -a; echo 'ls -a serverBuild'; ls -a serverBuild;echo 'ls -a clientBuild'; ls -a clientBuild; npm run start:build"]