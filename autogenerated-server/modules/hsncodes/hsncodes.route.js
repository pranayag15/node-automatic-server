export const hsncodes = require('express').Router()
const hsncodesController = require('./hsncodes.controller.js')
const jsonparser = require('body-parser').json()
    
hsncodes
    .route('/hsncodes', jsonparser)
    .get(hsncodesController.hsncodesGetAll)
    .post(hsncodesController.hsncodesInsert)
    .put(hsncodesController.hsncodesUpdate)

hsncodes
    .route('/hsncodes/:hsncodesid', jsonparser)
    .get(hsncodesController.hsncodesGetByID)
    .patch(hsncodesController.hsncodesPatch)
    .delete(hsncodesController.hsncodesDeleteByID)
    
exports.module = hsncodes;