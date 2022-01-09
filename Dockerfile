FROM nikolaik/python-nodejs:latest

WORKDIR /usr/src/app

LABEL "purpose"="webdev"

RUN apt-get update && apt-get install -y wget

COPY . .
RUN apt-get install -y yarn
RUN npm install

EXPOSE 3000

CMD tail -f /dev/null

# docker -d run -p 3000:3000 -v $(pwd):/usr/src/app test
# 