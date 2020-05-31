export const uoms = require('express').Router()
const uomsController = require('./uoms.controller.js')
const jsonparser = require('body-parser').json()
    
uoms
    .route('/uoms', jsonparser)
    .get(uomsController.uomsGetAll)
    .post(uomsController.uomsInsert)
    .put(uomsController.uomsUpdate)

uoms
    .route('/uoms/:uomsid', jsonparser)
    .get(uomsController.uomsGetByID)
    .patch(uomsController.uomsPatch)
    .delete(uomsController.uomsDeleteByID)
    
uoms
    .route('/uoms/:uomsid/uomconversions', jsonparser)
    .get(uomsController.uomsUomconversionsGetAll)

uoms
    .route('/uoms/:uomsid/uomconversions/:uomconversionsid', jsonparser)
    .get(uomsController.uomsUomconversionsGetByID)
    
exports.module = uoms;