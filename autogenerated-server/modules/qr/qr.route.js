export const qr = require('express').Router()
const qrController = require('./qr.controller.js')
const jsonparser = require('body-parser').json()
    
qr
    .route('/qr', jsonparser)
    .get(qrController.qrGetAll)
    .post(qrController.qrInsert)
    .put(qrController.qrUpdate)

qr
    .route('/qr/:qrid', jsonparser)
    .get(qrController.qrGetByID)
    .patch(qrController.qrPatch)
    .delete(qrController.qrDeleteByID)
    
exports.module = qr;