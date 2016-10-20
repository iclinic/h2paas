# H2PASS
Html to PDF as a service :heart:  

### Install
To install you need to follow those steps:

```

git clone <this-repo-url>
cmhd +x configure_lc.sh && ./configure_lc

npm install
npm start

```

### Routes

#### /url
**Method**: POST  
**Description**: You send **url** and **options**, this generate a *tmp* file on your root and return the same for you  
**Body Example**:  
```js
    {
        "url": "http://www.google.com",
        "options": {}
    }
```  

#### /template
**Method**: POST  
**Description**: You send **template** and **options**, this generate a *tmp* file on your root and return the same for you  
**Body Example**:  
```js
    {
        "template": "<div> This is a test for h2pass",
        "options": {}
    }
```

#### /s3/url
**Method**: POST  
**Description**: It's the same of `/url`, but create a   
**Return Example**:  
```js
    {
        "_executionTime": 3214,
        "_html": "...",
        "url": "http://s3.your.url.here/your/file.pdf"
    }
```

#### /s3/template
**Method**: POST  
**Description**: It's the same of `/template`, but create a   
**Return Example**:  
```js
    {
        "_executionTime": 3214,
        "_html": "...",
        "url": "http://s3.your.url.here/your/file.pdf"
    }
```

### S3 Integration
**todo**