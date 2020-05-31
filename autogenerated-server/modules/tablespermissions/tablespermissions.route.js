export const tablespermissions = require('express').Router()
const tablespermissionsController = require('./tablespermissions.controller.js')
const jsonparser = require('body-parser').json()
    
tablespermissions
    .route('/tablespermissions', jsonparser)
    .get(tablespermissionsController.tablespermissionsGetAll)
    .post(tablespermissionsController.tablespermissionsInsert)
    .put(tablespermissionsController.tablespermissionsUpdate)

tablespermissions
    .route('/tablespermissions/:tablespermissionsid', jsonparser)
    .get(tablespermissionsController.tablespermissionsGetByID)
    .patch(tablespermissionsController.tablespermissionsPatch)
    .delete(tablespermissionsController.tablespermissionsDeleteByID)
    
tablespermissions
    .route('/tablespermissions/:tablespermissionsid/rolestablepermissions', jsonparser)
    .get(tablespermissionsController.tablespermissionsRolestablepermissionsGetAll)

tablespermissions
    .route('/tablespermissions/:tablespermissionsid/rolestablepermissions/:rolestablepermissionsid', jsonparser)
    .get(tablespermissionsController.tablespermissionsRolestablepermissionsGetByID)
    
exports.module = tablespermissions;