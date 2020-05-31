export const userslocations = require('express').Router()
const userslocationsController = require('./userslocations.controller.js')
const jsonparser = require('body-parser').json()
    
userslocations
    .route('/userslocations', jsonparser)
    .get(userslocationsController.userslocationsGetAll)
    .post(userslocationsController.userslocationsInsert)
    .put(userslocationsController.userslocationsUpdate)

userslocations
    .route('/userslocations/:userslocationsid', jsonparser)
    .get(userslocationsController.userslocationsGetByID)
    .patch(userslocationsController.userslocationsPatch)
    .delete(userslocationsController.userslocationsDeleteByID)
    
userslocations
    .route('/userslocations/:userslocationsid/cashreconcillation', jsonparser)
    .get(userslocationsController.userslocationsCashreconcillationGetAll)

userslocations
    .route('/userslocations/:userslocationsid/cashreconcillation/:cashreconcillationid', jsonparser)
    .get(userslocationsController.userslocationsCashreconcillationGetByID)
    
userslocations
    .route('/userslocations/:userslocationsid/nroleuserslocations', jsonparser)
    .get(userslocationsController.userslocationsNroleuserslocationsGetAll)

userslocations
    .route('/userslocations/:userslocationsid/nroleuserslocations/:nroleuserslocationsid', jsonparser)
    .get(userslocationsController.userslocationsNroleuserslocationsGetByID)
    
exports.module = userslocations;