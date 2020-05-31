export const transactionstatus = require('express').Router()
const transactionstatusController = require('./transactionstatus.controller.js')
const jsonparser = require('body-parser').json()
    
transactionstatus
    .route('/transactionstatus', jsonparser)
    .get(transactionstatusController.transactionstatusGetAll)
    .post(transactionstatusController.transactionstatusInsert)
    .put(transactionstatusController.transactionstatusUpdate)

transactionstatus
    .route('/transactionstatus/:transactionstatusid', jsonparser)
    .get(transactionstatusController.transactionstatusGetByID)
    .patch(transactionstatusController.transactionstatusPatch)
    .delete(transactionstatusController.transactionstatusDeleteByID)
    
transactionstatus
    .route('/transactionstatus/:transactionstatusid/transactions', jsonparser)
    .get(transactionstatusController.transactionstatusTransactionsGetAll)

transactionstatus
    .route('/transactionstatus/:transactionstatusid/transactions/:transactionsid', jsonparser)
    .get(transactionstatusController.transactionstatusTransactionsGetByID)
    
exports.module = transactionstatus;