export const attributes = require('express').Router()
const attributesController = require('./attributes.controller.js')
const jsonparser = require('body-parser').json()
    
attributes
    .route('/attributes', jsonparser)
    .get(attributesController.attributesGetAll)
    .post(attributesController.attributesInsert)
    .put(attributesController.attributesUpdate)

attributes
    .route('/attributes/:attributesid', jsonparser)
    .get(attributesController.attributesGetByID)
    .patch(attributesController.attributesPatch)
    .delete(attributesController.attributesDeleteByID)
    
attributes
    .route('/attributes/:attributesid/attributeinstances', jsonparser)
    .get(attributesController.attributesAttributeinstancesGetAll)

attributes
    .route('/attributes/:attributesid/attributeinstances/:attributeinstancesid', jsonparser)
    .get(attributesController.attributesAttributeinstancesGetByID)
    
attributes
    .route('/attributes/:attributesid/attributeuse', jsonparser)
    .get(attributesController.attributesAttributeuseGetAll)

attributes
    .route('/attributes/:attributesid/attributeuse/:attributeuseid', jsonparser)
    .get(attributesController.attributesAttributeuseGetByID)
    
attributes
    .route('/attributes/:attributesid/attributevalues', jsonparser)
    .get(attributesController.attributesAttributevaluesGetAll)

attributes
    .route('/attributes/:attributesid/attributevalues/:attributevaluesid', jsonparser)
    .get(attributesController.attributesAttributevaluesGetByID)
    
exports.module = attributes;