export const grn = require('express').Router()
const grnController = require('./grn.controller.js')
const jsonparser = require('body-parser').json()
    
grn
    .route('/grn', jsonparser)
    .get(grnController.grnGetAll)
    .post(grnController.grnInsert)
    .put(grnController.grnUpdate)

grn
    .route('/grn/:grnid', jsonparser)
    .get(grnController.grnGetByID)
    .patch(grnController.grnPatch)
    .delete(grnController.grnDeleteByID)
    
grn
    .route('/grn/:grnid/grnitems', jsonparser)
    .get(grnController.grnGrnitemsGetAll)

grn
    .route('/grn/:grnid/grnitems/:grnitemsid', jsonparser)
    .get(grnController.grnGrnitemsGetByID)
    
exports.module = grn;