import express from 'express'
import bodyParser from 'body-parser'

import { templateReq, urlReq } from './core'
import { s3TemplateReq, s3UrlReq } from './s3'

// Init Express Server
const server = express();

// Add Body Parser Support
server.use(bodyParser.json());

server.post("/pdf/template", templateReq)
server.post("/pdf/url", urlReq)

server.post("/pdf/s3/template", s3TemplateReq)
server.post("/pdf/s3/url", s3UrlReq)

export default server