export const modifiers = require('express').Router()
const modifiersController = require('./modifiers.controller.js')
const jsonparser = require('body-parser').json()
    
modifiers
    .route('/modifiers', jsonparser)
    .get(modifiersController.modifiersGetAll)
    .post(modifiersController.modifiersInsert)
    .put(modifiersController.modifiersUpdate)

modifiers
    .route('/modifiers/:modifiersid', jsonparser)
    .get(modifiersController.modifiersGetByID)
    .patch(modifiersController.modifiersPatch)
    .delete(modifiersController.modifiersDeleteByID)
    
modifiers
    .route('/modifiers/:modifiersid/modifiersitems', jsonparser)
    .get(modifiersController.modifiersModifiersitemsGetAll)

modifiers
    .route('/modifiers/:modifiersid/modifiersitems/:modifiersitemsid', jsonparser)
    .get(modifiersController.modifiersModifiersitemsGetByID)
    
modifiers
    .route('/modifiers/:modifiersid/modifieruse', jsonparser)
    .get(modifiersController.modifiersModifieruseGetAll)

modifiers
    .route('/modifiers/:modifiersid/modifieruse/:modifieruseid', jsonparser)
    .get(modifiersController.modifiersModifieruseGetByID)
    
exports.module = modifiers;