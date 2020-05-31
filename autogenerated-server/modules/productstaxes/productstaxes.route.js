export const productstaxes = require('express').Router()
const productstaxesController = require('./productstaxes.controller.js')
const jsonparser = require('body-parser').json()
    
productstaxes
    .route('/productstaxes', jsonparser)
    .get(productstaxesController.productstaxesGetAll)
    .post(productstaxesController.productstaxesInsert)
    .put(productstaxesController.productstaxesUpdate)

productstaxes
    .route('/productstaxes/:productstaxesid', jsonparser)
    .get(productstaxesController.productstaxesGetByID)
    .patch(productstaxesController.productstaxesPatch)
    .delete(productstaxesController.productstaxesDeleteByID)
    
exports.module = productstaxes;