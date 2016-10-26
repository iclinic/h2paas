![HTML to PDF as a service](http://imgur.com/2LHbx9b.png)

HTML to PDF as a service *(H2PAAS)* is a microservice in **nodeJS** for developers that have had some problems with PDF libraries like `wkhtmltopdf`.  

We created it as generic as possible, but the library is fully open source and you can contribute with whatever you need/want! We are waiting for your PR :heart:  

## Running

You can easily run the project through the following steps:

```

git clone <this-repo-url>
cmhd +x configure_lc.sh && ./configure_lc

# For integration with AWS S3 export:
# export AWS_ACCESS_KEY_ID=<Your Access Key Id Here>
# export AWS_SECRET_ACCESS_KEY=<Your Secret Access Key Here>

npm install
npm start

```

If you need, we have a `Dockerfile` to create a container for you :) 
```

docker build -t h2paas `pwd`

docker run -i -t -p 3000:3000 h2paas
# For integration with S3 you need to setup the global variables, insert next line before -p
# -e AWS_ACCESS_KEY_ID=<Your Access Key Id Here> -e AWS_SECRET_ACCESS_KEY=<Your Secret Access Key Here>
# If you want to expose another port add -e PORT=<The Port>
# Not forget to change 3000:3000 in case of change ports :)

```

### Don't commit your KEYS! STAY ALERT!

## Settings
Inside `/app`, we have a `settings.js` file with some configurations that you may want to change :)

- **ALLOW_ORIGIN** *(array<string>)* domains that can access your service
- **DEFAULT_BUCKET** *(string)* default AWS Bucket 
- **ACL_DEFAULT** *(string)* default AWS acl for the file
- **AWS_REGION** *(string)* AWS region of your s3
- **S3_API_VERSION** *(string)* version of S3 API
- **PORT** *(number)* application port
- **HOST** *(string)* application host
