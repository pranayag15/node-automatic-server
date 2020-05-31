export const stockcurrent = require('express').Router()
const stockcurrentController = require('./stockcurrent.controller.js')
const jsonparser = require('body-parser').json()
    
stockcurrent
    .route('/stockcurrent', jsonparser)
    .get(stockcurrentController.stockcurrentGetAll)
    .post(stockcurrentController.stockcurrentInsert)
    .put(stockcurrentController.stockcurrentUpdate)

stockcurrent
    .route('/stockcurrent/:stockcurrentid', jsonparser)
    .get(stockcurrentController.stockcurrentGetByID)
    .patch(stockcurrentController.stockcurrentPatch)
    .delete(stockcurrentController.stockcurrentDeleteByID)
    
exports.module = stockcurrent;