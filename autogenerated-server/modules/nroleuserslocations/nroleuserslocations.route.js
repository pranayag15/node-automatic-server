export const nroleuserslocations = require('express').Router()
const nroleuserslocationsController = require('./nroleuserslocations.controller.js')
const jsonparser = require('body-parser').json()
    
nroleuserslocations
    .route('/nroleuserslocations', jsonparser)
    .get(nroleuserslocationsController.nroleuserslocationsGetAll)
    .post(nroleuserslocationsController.nroleuserslocationsInsert)
    .put(nroleuserslocationsController.nroleuserslocationsUpdate)

nroleuserslocations
    .route('/nroleuserslocations/:nroleuserslocationsid', jsonparser)
    .get(nroleuserslocationsController.nroleuserslocationsGetByID)
    .patch(nroleuserslocationsController.nroleuserslocationsPatch)
    .delete(nroleuserslocationsController.nroleuserslocationsDeleteByID)
    
exports.module = nroleuserslocations;