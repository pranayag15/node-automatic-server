export const demo = require('express').Router()
const demoController = require('./demo.controller.js')
const jsonparser = require('body-parser').json()
    
demo
    .route('/demo', jsonparser)
    .get(demoController.demoGetAll)
    .post(demoController.demoInsert)
    .put(demoController.demoUpdate)

demo
    .route('/demo/:demoid', jsonparser)
    .get(demoController.demoGetByID)
    .patch(demoController.demoPatch)
    .delete(demoController.demoDeleteByID)
    
exports.module = demo;