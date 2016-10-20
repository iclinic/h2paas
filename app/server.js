import express from 'express'
import html2pdf from 'html-pdf'
import request from 'request'
import uid from 'uid'
import bodyParser from 'body-parser'

import { baseHtml2PDFConfig } from './settings'

export const server = express();
export const createPDF = (html, options, callback) => {
    options = Object.assign({}, baseHtml2PDFConfig, options);
    
    html2pdf.create(html, options).toFile(`./tmp/${uid()}.pdf`, callback)
}

server.use(bodyParser());

server.post("/generate/template", (req, res) => {
    const { template, options = {} } = req.body;
    const response = (err, r) => {
        if (err) throw err
        
        res.sendFile(r.filename)
    }
    
    createPDF(template, options, response)
})

server.post("/generate/url", (req, res) => {
    const { url, options = {} } = req.body;
    const response = (err, r) => {
        if (err) throw err
        
        res.sendFile(r.filename)
    }
    
    request(url, function (error, { statusCode }, body) {
      if (!error && statusCode == 200) 
        createPDF(body, options, response)
    })
})

export default server