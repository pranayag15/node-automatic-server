export const taxlines = require('express').Router()
const taxlinesController = require('./taxlines.controller.js')
const jsonparser = require('body-parser').json()
    
taxlines
    .route('/taxlines', jsonparser)
    .get(taxlinesController.taxlinesGetAll)
    .post(taxlinesController.taxlinesInsert)
    .put(taxlinesController.taxlinesUpdate)

taxlines
    .route('/taxlines/:taxlinesid', jsonparser)
    .get(taxlinesController.taxlinesGetByID)
    .patch(taxlinesController.taxlinesPatch)
    .delete(taxlinesController.taxlinesDeleteByID)
    
exports.module = taxlines;