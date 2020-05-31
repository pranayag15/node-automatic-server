export const cashreconcillation = require('express').Router()
const cashreconcillationController = require('./cashreconcillation.controller.js')
const jsonparser = require('body-parser').json()
    
cashreconcillation
    .route('/cashreconcillation', jsonparser)
    .get(cashreconcillationController.cashreconcillationGetAll)
    .post(cashreconcillationController.cashreconcillationInsert)
    .put(cashreconcillationController.cashreconcillationUpdate)

cashreconcillation
    .route('/cashreconcillation/:cashreconcillationid', jsonparser)
    .get(cashreconcillationController.cashreconcillationGetByID)
    .patch(cashreconcillationController.cashreconcillationPatch)
    .delete(cashreconcillationController.cashreconcillationDeleteByID)
    
exports.module = cashreconcillation;