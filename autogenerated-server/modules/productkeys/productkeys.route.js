export const productkeys = require('express').Router()
const productkeysController = require('./productkeys.controller.js')
const jsonparser = require('body-parser').json()
    
productkeys
    .route('/productkeys', jsonparser)
    .get(productkeysController.productkeysGetAll)
    .post(productkeysController.productkeysInsert)
    .put(productkeysController.productkeysUpdate)

productkeys
    .route('/productkeys/:productkeysid', jsonparser)
    .get(productkeysController.productkeysGetByID)
    .patch(productkeysController.productkeysPatch)
    .delete(productkeysController.productkeysDeleteByID)
    
exports.module = productkeys;