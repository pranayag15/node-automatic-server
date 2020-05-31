export const transactiontypes = require('express').Router()
const transactiontypesController = require('./transactiontypes.controller.js')
const jsonparser = require('body-parser').json()
    
transactiontypes
    .route('/transactiontypes', jsonparser)
    .get(transactiontypesController.transactiontypesGetAll)
    .post(transactiontypesController.transactiontypesInsert)
    .put(transactiontypesController.transactiontypesUpdate)

transactiontypes
    .route('/transactiontypes/:transactiontypesid', jsonparser)
    .get(transactiontypesController.transactiontypesGetByID)
    .patch(transactiontypesController.transactiontypesPatch)
    .delete(transactiontypesController.transactiontypesDeleteByID)
    
transactiontypes
    .route('/transactiontypes/:transactiontypesid/transactions', jsonparser)
    .get(transactiontypesController.transactiontypesTransactionsGetAll)

transactiontypes
    .route('/transactiontypes/:transactiontypesid/transactions/:transactionsid', jsonparser)
    .get(transactiontypesController.transactiontypesTransactionsGetByID)
    
exports.module = transactiontypes;