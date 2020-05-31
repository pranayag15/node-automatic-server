export const receipts = require('express').Router()
const receiptsController = require('./receipts.controller.js')
const jsonparser = require('body-parser').json()
    
receipts
    .route('/receipts', jsonparser)
    .get(receiptsController.receiptsGetAll)
    .post(receiptsController.receiptsInsert)
    .put(receiptsController.receiptsUpdate)

receipts
    .route('/receipts/:receiptsid', jsonparser)
    .get(receiptsController.receiptsGetByID)
    .patch(receiptsController.receiptsPatch)
    .delete(receiptsController.receiptsDeleteByID)
    
receipts
    .route('/receipts/:receiptsid/qr', jsonparser)
    .get(receiptsController.receiptsQrGetAll)

receipts
    .route('/receipts/:receiptsid/qr/:qrid', jsonparser)
    .get(receiptsController.receiptsQrGetByID)
    
receipts
    .route('/receipts/:receiptsid/transactions', jsonparser)
    .get(receiptsController.receiptsTransactionsGetAll)

receipts
    .route('/receipts/:receiptsid/transactions/:transactionsid', jsonparser)
    .get(receiptsController.receiptsTransactionsGetByID)
    
exports.module = receipts;