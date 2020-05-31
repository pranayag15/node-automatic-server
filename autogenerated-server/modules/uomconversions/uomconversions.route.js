export const uomconversions = require('express').Router()
const uomconversionsController = require('./uomconversions.controller.js')
const jsonparser = require('body-parser').json()
    
uomconversions
    .route('/uomconversions', jsonparser)
    .get(uomconversionsController.uomconversionsGetAll)
    .post(uomconversionsController.uomconversionsInsert)
    .put(uomconversionsController.uomconversionsUpdate)

uomconversions
    .route('/uomconversions/:uomconversionsid', jsonparser)
    .get(uomconversionsController.uomconversionsGetByID)
    .patch(uomconversionsController.uomconversionsPatch)
    .delete(uomconversionsController.uomconversionsDeleteByID)
    
exports.module = uomconversions;