export const purchaseitems = require('express').Router()
const purchaseitemsController = require('./purchaseitems.controller.js')
const jsonparser = require('body-parser').json()
    
purchaseitems
    .route('/purchaseitems', jsonparser)
    .get(purchaseitemsController.purchaseitemsGetAll)
    .post(purchaseitemsController.purchaseitemsInsert)
    .put(purchaseitemsController.purchaseitemsUpdate)

purchaseitems
    .route('/purchaseitems/:purchaseitemsid', jsonparser)
    .get(purchaseitemsController.purchaseitemsGetByID)
    .patch(purchaseitemsController.purchaseitemsPatch)
    .delete(purchaseitemsController.purchaseitemsDeleteByID)
    
purchaseitems
    .route('/purchaseitems/:purchaseitemsid/grnitems', jsonparser)
    .get(purchaseitemsController.purchaseitemsGrnitemsGetAll)

purchaseitems
    .route('/purchaseitems/:purchaseitemsid/grnitems/:grnitemsid', jsonparser)
    .get(purchaseitemsController.purchaseitemsGrnitemsGetByID)
    
exports.module = purchaseitems;