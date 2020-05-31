export const modifiersitems = require('express').Router()
const modifiersitemsController = require('./modifiersitems.controller.js')
const jsonparser = require('body-parser').json()
    
modifiersitems
    .route('/modifiersitems', jsonparser)
    .get(modifiersitemsController.modifiersitemsGetAll)
    .post(modifiersitemsController.modifiersitemsInsert)
    .put(modifiersitemsController.modifiersitemsUpdate)

modifiersitems
    .route('/modifiersitems/:modifiersitemsid', jsonparser)
    .get(modifiersitemsController.modifiersitemsGetByID)
    .patch(modifiersitemsController.modifiersitemsPatch)
    .delete(modifiersitemsController.modifiersitemsDeleteByID)
    
exports.module = modifiersitems;