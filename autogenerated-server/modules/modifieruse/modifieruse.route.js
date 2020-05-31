export const modifieruse = require('express').Router()
const modifieruseController = require('./modifieruse.controller.js')
const jsonparser = require('body-parser').json()
    
modifieruse
    .route('/modifieruse', jsonparser)
    .get(modifieruseController.modifieruseGetAll)
    .post(modifieruseController.modifieruseInsert)
    .put(modifieruseController.modifieruseUpdate)

modifieruse
    .route('/modifieruse/:modifieruseid', jsonparser)
    .get(modifieruseController.modifieruseGetByID)
    .patch(modifieruseController.modifierusePatch)
    .delete(modifieruseController.modifieruseDeleteByID)
    
exports.module = modifieruse;