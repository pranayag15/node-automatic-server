export const mitems = require('express').Router()
const mitemsController = require('./mitems.controller.js')
const jsonparser = require('body-parser').json()
    
mitems
    .route('/mitems', jsonparser)
    .get(mitemsController.mitemsGetAll)
    .post(mitemsController.mitemsInsert)
    .put(mitemsController.mitemsUpdate)

mitems
    .route('/mitems/:mitemsid', jsonparser)
    .get(mitemsController.mitemsGetByID)
    .patch(mitemsController.mitemsPatch)
    .delete(mitemsController.mitemsDeleteByID)
    
exports.module = mitems;