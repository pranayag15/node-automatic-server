export const usersroles = require('express').Router()
const usersrolesController = require('./usersroles.controller.js')
const jsonparser = require('body-parser').json()
    
usersroles
    .route('/usersroles', jsonparser)
    .get(usersrolesController.usersrolesGetAll)
    .post(usersrolesController.usersrolesInsert)
    .put(usersrolesController.usersrolesUpdate)

usersroles
    .route('/usersroles/:usersrolesid', jsonparser)
    .get(usersrolesController.usersrolesGetByID)
    .patch(usersrolesController.usersrolesPatch)
    .delete(usersrolesController.usersrolesDeleteByID)
    
exports.module = usersroles;