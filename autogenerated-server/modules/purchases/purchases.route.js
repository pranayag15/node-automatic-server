export const purchases = require('express').Router()
const purchasesController = require('./purchases.controller.js')
const jsonparser = require('body-parser').json()
    
purchases
    .route('/purchases', jsonparser)
    .get(purchasesController.purchasesGetAll)
    .post(purchasesController.purchasesInsert)
    .put(purchasesController.purchasesUpdate)

purchases
    .route('/purchases/:purchasesid', jsonparser)
    .get(purchasesController.purchasesGetByID)
    .patch(purchasesController.purchasesPatch)
    .delete(purchasesController.purchasesDeleteByID)
    
purchases
    .route('/purchases/:purchasesid/grn', jsonparser)
    .get(purchasesController.purchasesGrnGetAll)

purchases
    .route('/purchases/:purchasesid/grn/:grnid', jsonparser)
    .get(purchasesController.purchasesGrnGetByID)
    
purchases
    .route('/purchases/:purchasesid/grnitems', jsonparser)
    .get(purchasesController.purchasesGrnitemsGetAll)

purchases
    .route('/purchases/:purchasesid/grnitems/:grnitemsid', jsonparser)
    .get(purchasesController.purchasesGrnitemsGetByID)
    
purchases
    .route('/purchases/:purchasesid/purchaseitems', jsonparser)
    .get(purchasesController.purchasesPurchaseitemsGetAll)

purchases
    .route('/purchases/:purchasesid/purchaseitems/:purchaseitemsid', jsonparser)
    .get(purchasesController.purchasesPurchaseitemsGetByID)
    
exports.module = purchases;