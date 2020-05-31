export const nrole = require('express').Router()
const nroleController = require('./nrole.controller.js')
const jsonparser = require('body-parser').json()
    
nrole
    .route('/nrole', jsonparser)
    .get(nroleController.nroleGetAll)
    .post(nroleController.nroleInsert)
    .put(nroleController.nroleUpdate)

nrole
    .route('/nrole/:nroleid', jsonparser)
    .get(nroleController.nroleGetByID)
    .patch(nroleController.nrolePatch)
    .delete(nroleController.nroleDeleteByID)
    
nrole
    .route('/nrole/:nroleid/nroleuserslocations', jsonparser)
    .get(nroleController.nroleNroleuserslocationsGetAll)

nrole
    .route('/nrole/:nroleid/nroleuserslocations/:nroleuserslocationsid', jsonparser)
    .get(nroleController.nroleNroleuserslocationsGetByID)
    
exports.module = nrole;