export const newsletters = require('express').Router()
const newslettersController = require('./newsletters.controller.js')
const jsonparser = require('body-parser').json()
    
newsletters
    .route('/newsletters', jsonparser)
    .get(newslettersController.newslettersGetAll)
    .post(newslettersController.newslettersInsert)
    .put(newslettersController.newslettersUpdate)

newsletters
    .route('/newsletters/:newslettersid', jsonparser)
    .get(newslettersController.newslettersGetByID)
    .patch(newslettersController.newslettersPatch)
    .delete(newslettersController.newslettersDeleteByID)
    
exports.module = newsletters;