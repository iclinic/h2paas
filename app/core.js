import html2pdf from 'html-pdf'
import request from 'request'
import uid from 'uid'
import { baseHtml2PDFConfig } from './settings'

export const createPDF = (html, options, callback) => {
    options = Object.assign({}, baseHtml2PDFConfig, options);
    
    html2pdf.create(html, options).toFile(`./tmp/${uid()}.pdf`, callback)
}

export const genericResponse = (res) => (err, r) => {
    if (err) throw err

    res.sendFile(r.filename)
}

export const templateReq = (req, res, next, callback = genericResponse) => {
    const { template, options = {} } = req.body;

    createPDF(template, options, callback(res, req.query))
}

export const urlReq = (req, res, next, callback = genericResponse) => {
    const { url, options = {} } = req.body;

    request(url, function (error, { statusCode }, body) {
        if (!error && statusCode == 200) 
            createPDF(body, options, callback(res, req.query))
    }) 
}
