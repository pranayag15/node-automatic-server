export const attributesets = require('express').Router()
const attributesetsController = require('./attributesets.controller.js')
const jsonparser = require('body-parser').json()
    
attributesets
    .route('/attributesets', jsonparser)
    .get(attributesetsController.attributesetsGetAll)
    .post(attributesetsController.attributesetsInsert)
    .put(attributesetsController.attributesetsUpdate)

attributesets
    .route('/attributesets/:attributesetsid', jsonparser)
    .get(attributesetsController.attributesetsGetByID)
    .patch(attributesetsController.attributesetsPatch)
    .delete(attributesetsController.attributesetsDeleteByID)
    
attributesets
    .route('/attributesets/:attributesetsid/attributesetinstances', jsonparser)
    .get(attributesetsController.attributesetsAttributesetinstancesGetAll)

attributesets
    .route('/attributesets/:attributesetsid/attributesetinstances/:attributesetinstancesid', jsonparser)
    .get(attributesetsController.attributesetsAttributesetinstancesGetByID)
    
attributesets
    .route('/attributesets/:attributesetsid/attributeinstances', jsonparser)
    .get(attributesetsController.attributesetsAttributeinstancesGetAll)

attributesets
    .route('/attributesets/:attributesetsid/attributeinstances/:attributeinstancesid', jsonparser)
    .get(attributesetsController.attributesetsAttributeinstancesGetByID)
    
attributesets
    .route('/attributesets/:attributesetsid/purchaseitems', jsonparser)
    .get(attributesetsController.attributesetsPurchaseitemsGetAll)

attributesets
    .route('/attributesets/:attributesetsid/purchaseitems/:purchaseitemsid', jsonparser)
    .get(attributesetsController.attributesetsPurchaseitemsGetByID)
    
attributesets
    .route('/attributesets/:attributesetsid/grnitems', jsonparser)
    .get(attributesetsController.attributesetsGrnitemsGetAll)

attributesets
    .route('/attributesets/:attributesetsid/grnitems/:grnitemsid', jsonparser)
    .get(attributesetsController.attributesetsGrnitemsGetByID)
    
attributesets
    .route('/attributesets/:attributesetsid/stockcurrent', jsonparser)
    .get(attributesetsController.attributesetsStockcurrentGetAll)

attributesets
    .route('/attributesets/:attributesetsid/stockcurrent/:stockcurrentid', jsonparser)
    .get(attributesetsController.attributesetsStockcurrentGetByID)
    
attributesets
    .route('/attributesets/:attributesetsid/stockdiary', jsonparser)
    .get(attributesetsController.attributesetsStockdiaryGetAll)

attributesets
    .route('/attributesets/:attributesetsid/stockdiary/:stockdiaryid', jsonparser)
    .get(attributesetsController.attributesetsStockdiaryGetByID)
    
attributesets
    .route('/attributesets/:attributesetsid/ticketlines', jsonparser)
    .get(attributesetsController.attributesetsTicketlinesGetAll)

attributesets
    .route('/attributesets/:attributesetsid/ticketlines/:ticketlinesid', jsonparser)
    .get(attributesetsController.attributesetsTicketlinesGetByID)
    
attributesets
    .route('/attributesets/:attributesetsid/attributeuse', jsonparser)
    .get(attributesetsController.attributesetsAttributeuseGetAll)

attributesets
    .route('/attributesets/:attributesetsid/attributeuse/:attributeuseid', jsonparser)
    .get(attributesetsController.attributesetsAttributeuseGetByID)
    
exports.module = attributesets;