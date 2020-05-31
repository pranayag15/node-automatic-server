export const attributevalues = require('express').Router()
const attributevaluesController = require('./attributevalues.controller.js')
const jsonparser = require('body-parser').json()
    
attributevalues
    .route('/attributevalues', jsonparser)
    .get(attributevaluesController.attributevaluesGetAll)
    .post(attributevaluesController.attributevaluesInsert)
    .put(attributevaluesController.attributevaluesUpdate)

attributevalues
    .route('/attributevalues/:attributevaluesid', jsonparser)
    .get(attributevaluesController.attributevaluesGetByID)
    .patch(attributevaluesController.attributevaluesPatch)
    .delete(attributevaluesController.attributevaluesDeleteByID)
    
exports.module = attributevalues;