export const transactions = require('express').Router()
const transactionsController = require('./transactions.controller.js')
const jsonparser = require('body-parser').json()
    
transactions
    .route('/transactions', jsonparser)
    .get(transactionsController.transactionsGetAll)
    .post(transactionsController.transactionsInsert)
    .put(transactionsController.transactionsUpdate)

transactions
    .route('/transactions/:transactionsid', jsonparser)
    .get(transactionsController.transactionsGetByID)
    .patch(transactionsController.transactionsPatch)
    .delete(transactionsController.transactionsDeleteByID)
    
exports.module = transactions;