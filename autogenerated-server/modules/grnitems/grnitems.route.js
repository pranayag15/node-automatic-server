export const grnitems = require('express').Router()
const grnitemsController = require('./grnitems.controller.js')
const jsonparser = require('body-parser').json()
    
grnitems
    .route('/grnitems', jsonparser)
    .get(grnitemsController.grnitemsGetAll)
    .post(grnitemsController.grnitemsInsert)
    .put(grnitemsController.grnitemsUpdate)

grnitems
    .route('/grnitems/:grnitemsid', jsonparser)
    .get(grnitemsController.grnitemsGetByID)
    .patch(grnitemsController.grnitemsPatch)
    .delete(grnitemsController.grnitemsDeleteByID)
    
exports.module = grnitems;