export const stockdiary = require('express').Router()
const stockdiaryController = require('./stockdiary.controller.js')
const jsonparser = require('body-parser').json()
    
stockdiary
    .route('/stockdiary', jsonparser)
    .get(stockdiaryController.stockdiaryGetAll)
    .post(stockdiaryController.stockdiaryInsert)
    .put(stockdiaryController.stockdiaryUpdate)

stockdiary
    .route('/stockdiary/:stockdiaryid', jsonparser)
    .get(stockdiaryController.stockdiaryGetByID)
    .patch(stockdiaryController.stockdiaryPatch)
    .delete(stockdiaryController.stockdiaryDeleteByID)
    
exports.module = stockdiary;