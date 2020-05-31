export const roles = require('express').Router()
const rolesController = require('./roles.controller.js')
const jsonparser = require('body-parser').json()
    
roles
    .route('/roles', jsonparser)
    .get(rolesController.rolesGetAll)
    .post(rolesController.rolesInsert)
    .put(rolesController.rolesUpdate)

roles
    .route('/roles/:rolesid', jsonparser)
    .get(rolesController.rolesGetByID)
    .patch(rolesController.rolesPatch)
    .delete(rolesController.rolesDeleteByID)
    
roles
    .route('/roles/:rolesid/rolestablepermissions', jsonparser)
    .get(rolesController.rolesRolestablepermissionsGetAll)

roles
    .route('/roles/:rolesid/rolestablepermissions/:rolestablepermissionsid', jsonparser)
    .get(rolesController.rolesRolestablepermissionsGetByID)
    
roles
    .route('/roles/:rolesid/usersroles', jsonparser)
    .get(rolesController.rolesUsersrolesGetAll)

roles
    .route('/roles/:rolesid/usersroles/:usersrolesid', jsonparser)
    .get(rolesController.rolesUsersrolesGetByID)
    
exports.module = roles;