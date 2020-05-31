export const closedcash = require('express').Router()
const closedcashController = require('./closedcash.controller.js')
const jsonparser = require('body-parser').json()
    
closedcash
    .route('/closedcash', jsonparser)
    .get(closedcashController.closedcashGetAll)
    .post(closedcashController.closedcashInsert)
    .put(closedcashController.closedcashUpdate)

closedcash
    .route('/closedcash/:closedcashid', jsonparser)
    .get(closedcashController.closedcashGetByID)
    .patch(closedcashController.closedcashPatch)
    .delete(closedcashController.closedcashDeleteByID)
    
exports.module = closedcash;