import express from 'express'
import bodyParser from 'body-parser'

import { ALLOW_ORIGIN } from './settings.js'

import { templateReq, urlReq } from './core'
import { s3TemplateReq, s3UrlReq } from './s3'

// Init Express Server
const server = express();

// Add Body Parser Support
server.use(bodyParser.json());


// Add Allow Permissions

server.use(function (req, res, next) {
	var host = req.ip == '127.0.0.1' || req.ip == '0.0.0.0' ? 'localhost' : req.ip

	if (ALLOW_ORIGIN.length == 0 || ALLOW_ORIGIN.indexOf(host) > -1) 
		return next();

	res.status(403).json({
		message: "Origin not allowed!"
	})
})

server.post("/pdf/template", templateReq)
server.post("/pdf/url", urlReq)

server.post("/pdf/s3/template", s3TemplateReq)
server.post("/pdf/s3/url", s3UrlReq)

export default server