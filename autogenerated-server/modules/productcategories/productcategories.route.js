export const productcategories = require('express').Router()
const productcategoriesController = require('./productcategories.controller.js')
const jsonparser = require('body-parser').json()
    
productcategories
    .route('/productcategories', jsonparser)
    .get(productcategoriesController.productcategoriesGetAll)
    .post(productcategoriesController.productcategoriesInsert)
    .put(productcategoriesController.productcategoriesUpdate)

productcategories
    .route('/productcategories/:productcategoriesid', jsonparser)
    .get(productcategoriesController.productcategoriesGetByID)
    .patch(productcategoriesController.productcategoriesPatch)
    .delete(productcategoriesController.productcategoriesDeleteByID)
    
productcategories
    .route('/productcategories/:productcategoriesid/products', jsonparser)
    .get(productcategoriesController.productcategoriesProductsGetAll)

productcategories
    .route('/productcategories/:productcategoriesid/products/:productsid', jsonparser)
    .get(productcategoriesController.productcategoriesProductsGetByID)
    
productcategories
    .route('/productcategories/:productcategoriesid/modifieruse', jsonparser)
    .get(productcategoriesController.productcategoriesModifieruseGetAll)

productcategories
    .route('/productcategories/:productcategoriesid/modifieruse/:modifieruseid', jsonparser)
    .get(productcategoriesController.productcategoriesModifieruseGetByID)
    
productcategories
    .route('/productcategories/:productcategoriesid/productstaxes', jsonparser)
    .get(productcategoriesController.productcategoriesProductstaxesGetAll)

productcategories
    .route('/productcategories/:productcategoriesid/productstaxes/:productstaxesid', jsonparser)
    .get(productcategoriesController.productcategoriesProductstaxesGetByID)
    
productcategories
    .route('/productcategories/:productcategoriesid/purchaseitems', jsonparser)
    .get(productcategoriesController.productcategoriesPurchaseitemsGetAll)

productcategories
    .route('/productcategories/:productcategoriesid/purchaseitems/:purchaseitemsid', jsonparser)
    .get(productcategoriesController.productcategoriesPurchaseitemsGetByID)
    
productcategories
    .route('/productcategories/:productcategoriesid/grnitems', jsonparser)
    .get(productcategoriesController.productcategoriesGrnitemsGetAll)

productcategories
    .route('/productcategories/:productcategoriesid/grnitems/:grnitemsid', jsonparser)
    .get(productcategoriesController.productcategoriesGrnitemsGetByID)
    
productcategories
    .route('/productcategories/:productcategoriesid/stockcurrent', jsonparser)
    .get(productcategoriesController.productcategoriesStockcurrentGetAll)

productcategories
    .route('/productcategories/:productcategoriesid/stockcurrent/:stockcurrentid', jsonparser)
    .get(productcategoriesController.productcategoriesStockcurrentGetByID)
    
productcategories
    .route('/productcategories/:productcategoriesid/stockdiary', jsonparser)
    .get(productcategoriesController.productcategoriesStockdiaryGetAll)

productcategories
    .route('/productcategories/:productcategoriesid/stockdiary/:stockdiaryid', jsonparser)
    .get(productcategoriesController.productcategoriesStockdiaryGetByID)
    
productcategories
    .route('/productcategories/:productcategoriesid/stocklevel', jsonparser)
    .get(productcategoriesController.productcategoriesStocklevelGetAll)

productcategories
    .route('/productcategories/:productcategoriesid/stocklevel/:stocklevelid', jsonparser)
    .get(productcategoriesController.productcategoriesStocklevelGetByID)
    
productcategories
    .route('/productcategories/:productcategoriesid/ticketlines', jsonparser)
    .get(productcategoriesController.productcategoriesTicketlinesGetAll)

productcategories
    .route('/productcategories/:productcategoriesid/ticketlines/:ticketlinesid', jsonparser)
    .get(productcategoriesController.productcategoriesTicketlinesGetByID)
    
exports.module = productcategories;