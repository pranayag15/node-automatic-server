export const ticketlines = require('express').Router()
const ticketlinesController = require('./ticketlines.controller.js')
const jsonparser = require('body-parser').json()
    
ticketlines
    .route('/ticketlines', jsonparser)
    .get(ticketlinesController.ticketlinesGetAll)
    .post(ticketlinesController.ticketlinesInsert)
    .put(ticketlinesController.ticketlinesUpdate)

ticketlines
    .route('/ticketlines/:ticketlinesid', jsonparser)
    .get(ticketlinesController.ticketlinesGetByID)
    .patch(ticketlinesController.ticketlinesPatch)
    .delete(ticketlinesController.ticketlinesDeleteByID)
    
exports.module = ticketlines;