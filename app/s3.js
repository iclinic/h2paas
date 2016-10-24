import AWS from 'aws-sdk'
import fs from 'fs'

import { templateReq, urlReq } from 'core'
import { DEFAULT_BUCKET, AWS_REGION, S3_API_VERSION } from './settings.js'

AWS.config.region = AWS_REGION
AWS.config.apiVersions = { s3: S3_API_VERSION }

const s3 = new AWS.S3();

export const s3EmitPDF = (res, {bucket = DEFAULT_BUCKET}) => (err, r) =>  {
	fs.readFile(r.filename, (err, buffer) => {
		s3.upload({Bucket: bucket, Key: S3_KEY, Body: buffer}, (err, data) => {
			if (err) throws err;

			res.json(data)
		});
	});
}

export const s3TemplateReq = (req, res, next) => templateReq(req, res, next, s3EmitPDF)

export const s3UrlReq = (req, res, next) => urlReq(req, res, next, s3EmitPDF)
