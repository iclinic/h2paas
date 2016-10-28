import express from 'express'
import bodyParser from 'body-parser'

import { templateReq, urlReq } from './functions/core'
import { s3TemplateReq, s3UrlReq } from './functions/s3'
import { HOST, PORT } from './functions/settings.js'

// Init Express Server
const server = express();

// Add Body Parser Support
server.use(bodyParser.json());

server.post("/pdf/template", templateReq)
server.post("/pdf/url", urlReq)

server.post("/pdf/s3/template", s3TemplateReq)
server.post("/pdf/s3/url", s3UrlReq)

//TODO: Clusterize
server.listen(PORT, HOST, () => {
	console.log("H2PAAS are running on %s:%s", HOST, PORT)
})
