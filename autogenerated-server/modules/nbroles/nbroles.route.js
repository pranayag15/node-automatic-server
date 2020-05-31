export const nbroles = require('express').Router()
const nbrolesController = require('./nbroles.controller.js')
const jsonparser = require('body-parser').json()
    
nbroles
    .route('/nbroles', jsonparser)
    .get(nbrolesController.nbrolesGetAll)
    .post(nbrolesController.nbrolesInsert)
    .put(nbrolesController.nbrolesUpdate)

nbroles
    .route('/nbroles/:nbrolesid', jsonparser)
    .get(nbrolesController.nbrolesGetByID)
    .patch(nbrolesController.nbrolesPatch)
    .delete(nbrolesController.nbrolesDeleteByID)
    
nbroles
    .route('/nbroles/:nbrolesid/businesspermission', jsonparser)
    .get(nbrolesController.nbrolesBusinesspermissionGetAll)

nbroles
    .route('/nbroles/:nbrolesid/businesspermission/:businesspermissionid', jsonparser)
    .get(nbrolesController.nbrolesBusinesspermissionGetByID)
    
exports.module = nbroles;