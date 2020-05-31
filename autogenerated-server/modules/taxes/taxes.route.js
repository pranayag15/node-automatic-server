export const taxes = require('express').Router()
const taxesController = require('./taxes.controller.js')
const jsonparser = require('body-parser').json()
    
taxes
    .route('/taxes', jsonparser)
    .get(taxesController.taxesGetAll)
    .post(taxesController.taxesInsert)
    .put(taxesController.taxesUpdate)

taxes
    .route('/taxes/:taxesid', jsonparser)
    .get(taxesController.taxesGetByID)
    .patch(taxesController.taxesPatch)
    .delete(taxesController.taxesDeleteByID)
    
taxes
    .route('/taxes/:taxesid/productstaxes', jsonparser)
    .get(taxesController.taxesProductstaxesGetAll)

taxes
    .route('/taxes/:taxesid/productstaxes/:productstaxesid', jsonparser)
    .get(taxesController.taxesProductstaxesGetByID)
    
taxes
    .route('/taxes/:taxesid/taxlines', jsonparser)
    .get(taxesController.taxesTaxlinesGetAll)

taxes
    .route('/taxes/:taxesid/taxlines/:taxlinesid', jsonparser)
    .get(taxesController.taxesTaxlinesGetByID)
    
exports.module = taxes;