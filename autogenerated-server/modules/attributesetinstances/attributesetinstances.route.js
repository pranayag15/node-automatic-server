export const attributesetinstances = require('express').Router()
const attributesetinstancesController = require('./attributesetinstances.controller.js')
const jsonparser = require('body-parser').json()
    
attributesetinstances
    .route('/attributesetinstances', jsonparser)
    .get(attributesetinstancesController.attributesetinstancesGetAll)
    .post(attributesetinstancesController.attributesetinstancesInsert)
    .put(attributesetinstancesController.attributesetinstancesUpdate)

attributesetinstances
    .route('/attributesetinstances/:attributesetinstancesid', jsonparser)
    .get(attributesetinstancesController.attributesetinstancesGetByID)
    .patch(attributesetinstancesController.attributesetinstancesPatch)
    .delete(attributesetinstancesController.attributesetinstancesDeleteByID)
    
attributesetinstances
    .route('/attributesetinstances/:attributesetinstancesid/attributeinstances', jsonparser)
    .get(attributesetinstancesController.attributesetinstancesAttributeinstancesGetAll)

attributesetinstances
    .route('/attributesetinstances/:attributesetinstancesid/attributeinstances/:attributeinstancesid', jsonparser)
    .get(attributesetinstancesController.attributesetinstancesAttributeinstancesGetByID)
    
attributesetinstances
    .route('/attributesetinstances/:attributesetinstancesid/purchaseitems', jsonparser)
    .get(attributesetinstancesController.attributesetinstancesPurchaseitemsGetAll)

attributesetinstances
    .route('/attributesetinstances/:attributesetinstancesid/purchaseitems/:purchaseitemsid', jsonparser)
    .get(attributesetinstancesController.attributesetinstancesPurchaseitemsGetByID)
    
attributesetinstances
    .route('/attributesetinstances/:attributesetinstancesid/grnitems', jsonparser)
    .get(attributesetinstancesController.attributesetinstancesGrnitemsGetAll)

attributesetinstances
    .route('/attributesetinstances/:attributesetinstancesid/grnitems/:grnitemsid', jsonparser)
    .get(attributesetinstancesController.attributesetinstancesGrnitemsGetByID)
    
attributesetinstances
    .route('/attributesetinstances/:attributesetinstancesid/stockcurrent', jsonparser)
    .get(attributesetinstancesController.attributesetinstancesStockcurrentGetAll)

attributesetinstances
    .route('/attributesetinstances/:attributesetinstancesid/stockcurrent/:stockcurrentid', jsonparser)
    .get(attributesetinstancesController.attributesetinstancesStockcurrentGetByID)
    
attributesetinstances
    .route('/attributesetinstances/:attributesetinstancesid/stockdiary', jsonparser)
    .get(attributesetinstancesController.attributesetinstancesStockdiaryGetAll)

attributesetinstances
    .route('/attributesetinstances/:attributesetinstancesid/stockdiary/:stockdiaryid', jsonparser)
    .get(attributesetinstancesController.attributesetinstancesStockdiaryGetByID)
    
attributesetinstances
    .route('/attributesetinstances/:attributesetinstancesid/ticketlines', jsonparser)
    .get(attributesetinstancesController.attributesetinstancesTicketlinesGetAll)

attributesetinstances
    .route('/attributesetinstances/:attributesetinstancesid/ticketlines/:ticketlinesid', jsonparser)
    .get(attributesetinstancesController.attributesetinstancesTicketlinesGetByID)
    
exports.module = attributesetinstances;