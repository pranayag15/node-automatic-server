export const tables = require('express').Router()
const tablesController = require('./tables.controller.js')
const jsonparser = require('body-parser').json()
    
tables
    .route('/tables', jsonparser)
    .get(tablesController.tablesGetAll)
    .post(tablesController.tablesInsert)
    .put(tablesController.tablesUpdate)

tables
    .route('/tables/:tablesid', jsonparser)
    .get(tablesController.tablesGetByID)
    .patch(tablesController.tablesPatch)
    .delete(tablesController.tablesDeleteByID)
    
tables
    .route('/tables/:tablesid/tablespermissions', jsonparser)
    .get(tablesController.tablesTablespermissionsGetAll)

tables
    .route('/tables/:tablesid/tablespermissions/:tablespermissionsid', jsonparser)
    .get(tablesController.tablesTablespermissionsGetByID)
    
tables
    .route('/tables/:tablesid/rolestablepermissions', jsonparser)
    .get(tablesController.tablesRolestablepermissionsGetAll)

tables
    .route('/tables/:tablesid/rolestablepermissions/:rolestablepermissionsid', jsonparser)
    .get(tablesController.tablesRolestablepermissionsGetByID)
    
exports.module = tables;