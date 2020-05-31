export const vendors = require('express').Router()
const vendorsController = require('./vendors.controller.js')
const jsonparser = require('body-parser').json()
    
vendors
    .route('/vendors', jsonparser)
    .get(vendorsController.vendorsGetAll)
    .post(vendorsController.vendorsInsert)
    .put(vendorsController.vendorsUpdate)

vendors
    .route('/vendors/:vendorsid', jsonparser)
    .get(vendorsController.vendorsGetByID)
    .patch(vendorsController.vendorsPatch)
    .delete(vendorsController.vendorsDeleteByID)
    
vendors
    .route('/vendors/:vendorsid/purchases', jsonparser)
    .get(vendorsController.vendorsPurchasesGetAll)

vendors
    .route('/vendors/:vendorsid/purchases/:purchasesid', jsonparser)
    .get(vendorsController.vendorsPurchasesGetByID)
    
vendors
    .route('/vendors/:vendorsid/grn', jsonparser)
    .get(vendorsController.vendorsGrnGetAll)

vendors
    .route('/vendors/:vendorsid/grn/:grnid', jsonparser)
    .get(vendorsController.vendorsGrnGetByID)
    
vendors
    .route('/vendors/:vendorsid/grnitems', jsonparser)
    .get(vendorsController.vendorsGrnitemsGetAll)

vendors
    .route('/vendors/:vendorsid/grnitems/:grnitemsid', jsonparser)
    .get(vendorsController.vendorsGrnitemsGetByID)
    
vendors
    .route('/vendors/:vendorsid/purchaseitems', jsonparser)
    .get(vendorsController.vendorsPurchaseitemsGetAll)

vendors
    .route('/vendors/:vendorsid/purchaseitems/:purchaseitemsid', jsonparser)
    .get(vendorsController.vendorsPurchaseitemsGetByID)
    
exports.module = vendors;