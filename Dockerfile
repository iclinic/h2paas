FROM node

ENV AWS_ACCESS_KEY_ID ''
ENV AWS_SECRET_ACCESS_KEY ''
ENV PORT 3000

RUN mkdir /h2pass

ADD ./app /h2paas/app
ADD ./package.json /h2paas
ADD ./.babelrc /h2paas
ADD ./configure.sh /h2paas

RUN cd /h2paas \
	&& apt-get install libfontconfig \
	&& npm install \
	&& chmod +x ./configure.sh \
	&& ./configure.sh 

WORKDIR /h2paas

EXPOSE $PORT
CMD ["npm", "start"]