FROM node

ARG aws_keyid
ARG aws_secret_key

ENV port=3000

ADD . /h2paas

RUN cd /h2paas \
	&& npm install \
	&& chmod +x ./configure.sh \
	&& ./configure.sh \
	&& export AWS_ACCESS_KEY_ID=$aws_keyid \
	&& export AWS_SECRET_ACCESS_KEY=$aws_secret_key

WORKDIR /h2paas

EXPOSE $port
CMD ["npm", "start"]