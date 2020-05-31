export const attributeinstances = require('express').Router()
const attributeinstancesController = require('./attributeinstances.controller.js')
const jsonparser = require('body-parser').json()
    
attributeinstances
    .route('/attributeinstances', jsonparser)
    .get(attributeinstancesController.attributeinstancesGetAll)
    .post(attributeinstancesController.attributeinstancesInsert)
    .put(attributeinstancesController.attributeinstancesUpdate)

attributeinstances
    .route('/attributeinstances/:attributeinstancesid', jsonparser)
    .get(attributeinstancesController.attributeinstancesGetByID)
    .patch(attributeinstancesController.attributeinstancesPatch)
    .delete(attributeinstancesController.attributeinstancesDeleteByID)
    
exports.module = attributeinstances;