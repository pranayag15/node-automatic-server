export const attributeuse = require('express').Router()
const attributeuseController = require('./attributeuse.controller.js')
const jsonparser = require('body-parser').json()
    
attributeuse
    .route('/attributeuse', jsonparser)
    .get(attributeuseController.attributeuseGetAll)
    .post(attributeuseController.attributeuseInsert)
    .put(attributeuseController.attributeuseUpdate)

attributeuse
    .route('/attributeuse/:attributeuseid', jsonparser)
    .get(attributeuseController.attributeuseGetByID)
    .patch(attributeuseController.attributeusePatch)
    .delete(attributeuseController.attributeuseDeleteByID)
    
exports.module = attributeuse;