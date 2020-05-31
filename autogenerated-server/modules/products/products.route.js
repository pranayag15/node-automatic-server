export const products = require('express').Router()
const productsController = require('./products.controller.js')
const jsonparser = require('body-parser').json()
    
products
    .route('/products', jsonparser)
    .get(productsController.productsGetAll)
    .post(productsController.productsInsert)
    .put(productsController.productsUpdate)

products
    .route('/products/:productsid', jsonparser)
    .get(productsController.productsGetByID)
    .patch(productsController.productsPatch)
    .delete(productsController.productsDeleteByID)
    
products
    .route('/products/:productsid/modifieruse', jsonparser)
    .get(productsController.productsModifieruseGetAll)

products
    .route('/products/:productsid/modifieruse/:modifieruseid', jsonparser)
    .get(productsController.productsModifieruseGetByID)
    
products
    .route('/products/:productsid/productstaxes', jsonparser)
    .get(productsController.productsProductstaxesGetAll)

products
    .route('/products/:productsid/productstaxes/:productstaxesid', jsonparser)
    .get(productsController.productsProductstaxesGetByID)
    
products
    .route('/products/:productsid/purchaseitems', jsonparser)
    .get(productsController.productsPurchaseitemsGetAll)

products
    .route('/products/:productsid/purchaseitems/:purchaseitemsid', jsonparser)
    .get(productsController.productsPurchaseitemsGetByID)
    
products
    .route('/products/:productsid/grnitems', jsonparser)
    .get(productsController.productsGrnitemsGetAll)

products
    .route('/products/:productsid/grnitems/:grnitemsid', jsonparser)
    .get(productsController.productsGrnitemsGetByID)
    
products
    .route('/products/:productsid/stockcurrent', jsonparser)
    .get(productsController.productsStockcurrentGetAll)

products
    .route('/products/:productsid/stockcurrent/:stockcurrentid', jsonparser)
    .get(productsController.productsStockcurrentGetByID)
    
products
    .route('/products/:productsid/stockdiary', jsonparser)
    .get(productsController.productsStockdiaryGetAll)

products
    .route('/products/:productsid/stockdiary/:stockdiaryid', jsonparser)
    .get(productsController.productsStockdiaryGetByID)
    
products
    .route('/products/:productsid/stocklevel', jsonparser)
    .get(productsController.productsStocklevelGetAll)

products
    .route('/products/:productsid/stocklevel/:stocklevelid', jsonparser)
    .get(productsController.productsStocklevelGetByID)
    
products
    .route('/products/:productsid/ticketlines', jsonparser)
    .get(productsController.productsTicketlinesGetAll)

products
    .route('/products/:productsid/ticketlines/:ticketlinesid', jsonparser)
    .get(productsController.productsTicketlinesGetByID)
    
exports.module = products;