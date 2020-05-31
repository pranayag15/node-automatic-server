export const stocklevel = require('express').Router()
const stocklevelController = require('./stocklevel.controller.js')
const jsonparser = require('body-parser').json()
    
stocklevel
    .route('/stocklevel', jsonparser)
    .get(stocklevelController.stocklevelGetAll)
    .post(stocklevelController.stocklevelInsert)
    .put(stocklevelController.stocklevelUpdate)

stocklevel
    .route('/stocklevel/:stocklevelid', jsonparser)
    .get(stocklevelController.stocklevelGetByID)
    .patch(stocklevelController.stocklevelPatch)
    .delete(stocklevelController.stocklevelDeleteByID)
    
exports.module = stocklevel;