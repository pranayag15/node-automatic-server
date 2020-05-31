export const businesspermission = require('express').Router()
const businesspermissionController = require('./businesspermission.controller.js')
const jsonparser = require('body-parser').json()
    
businesspermission
    .route('/businesspermission', jsonparser)
    .get(businesspermissionController.businesspermissionGetAll)
    .post(businesspermissionController.businesspermissionInsert)
    .put(businesspermissionController.businesspermissionUpdate)

businesspermission
    .route('/businesspermission/:businesspermissionid', jsonparser)
    .get(businesspermissionController.businesspermissionGetByID)
    .patch(businesspermissionController.businesspermissionPatch)
    .delete(businesspermissionController.businesspermissionDeleteByID)
    
exports.module = businesspermission;