export const rights = require('express').Router()
const rightsController = require('./rights.controller.js')
const jsonparser = require('body-parser').json()
    
rights
    .route('/rights', jsonparser)
    .get(rightsController.rightsGetAll)
    .post(rightsController.rightsInsert)
    .put(rightsController.rightsUpdate)

rights
    .route('/rights/:rightsid', jsonparser)
    .get(rightsController.rightsGetByID)
    .patch(rightsController.rightsPatch)
    .delete(rightsController.rightsDeleteByID)
    
rights
    .route('/rights/:rightsid/tablespermissions', jsonparser)
    .get(rightsController.rightsTablespermissionsGetAll)

rights
    .route('/rights/:rightsid/tablespermissions/:tablespermissionsid', jsonparser)
    .get(rightsController.rightsTablespermissionsGetByID)
    
rights
    .route('/rights/:rightsid/rolestablepermissions', jsonparser)
    .get(rightsController.rightsRolestablepermissionsGetAll)

rights
    .route('/rights/:rightsid/rolestablepermissions/:rolestablepermissionsid', jsonparser)
    .get(rightsController.rightsRolestablepermissionsGetByID)
    
exports.module = rights;