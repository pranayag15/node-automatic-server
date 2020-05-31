export const rolestablepermissions = require('express').Router()
const rolestablepermissionsController = require('./rolestablepermissions.controller.js')
const jsonparser = require('body-parser').json()
    
rolestablepermissions
    .route('/rolestablepermissions', jsonparser)
    .get(rolestablepermissionsController.rolestablepermissionsGetAll)
    .post(rolestablepermissionsController.rolestablepermissionsInsert)
    .put(rolestablepermissionsController.rolestablepermissionsUpdate)

rolestablepermissions
    .route('/rolestablepermissions/:rolestablepermissionsid', jsonparser)
    .get(rolestablepermissionsController.rolestablepermissionsGetByID)
    .patch(rolestablepermissionsController.rolestablepermissionsPatch)
    .delete(rolestablepermissionsController.rolestablepermissionsDeleteByID)
    
exports.module = rolestablepermissions;