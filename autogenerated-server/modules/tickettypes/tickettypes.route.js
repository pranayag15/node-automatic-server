export const tickettypes = require('express').Router()
const tickettypesController = require('./tickettypes.controller.js')
const jsonparser = require('body-parser').json()
    
tickettypes
    .route('/tickettypes', jsonparser)
    .get(tickettypesController.tickettypesGetAll)
    .post(tickettypesController.tickettypesInsert)
    .put(tickettypesController.tickettypesUpdate)

tickettypes
    .route('/tickettypes/:tickettypesid', jsonparser)
    .get(tickettypesController.tickettypesGetByID)
    .patch(tickettypesController.tickettypesPatch)
    .delete(tickettypesController.tickettypesDeleteByID)
    
tickettypes
    .route('/tickettypes/:tickettypesid/tickets', jsonparser)
    .get(tickettypesController.tickettypesTicketsGetAll)

tickettypes
    .route('/tickettypes/:tickettypesid/tickets/:ticketsid', jsonparser)
    .get(tickettypesController.tickettypesTicketsGetByID)
    
tickettypes
    .route('/tickettypes/:tickettypesid/receipts', jsonparser)
    .get(tickettypesController.tickettypesReceiptsGetAll)

tickettypes
    .route('/tickettypes/:tickettypesid/receipts/:receiptsid', jsonparser)
    .get(tickettypesController.tickettypesReceiptsGetByID)
    
tickettypes
    .route('/tickettypes/:tickettypesid/qr', jsonparser)
    .get(tickettypesController.tickettypesQrGetAll)

tickettypes
    .route('/tickettypes/:tickettypesid/qr/:qrid', jsonparser)
    .get(tickettypesController.tickettypesQrGetByID)
    
tickettypes
    .route('/tickettypes/:tickettypesid/transactions', jsonparser)
    .get(tickettypesController.tickettypesTransactionsGetAll)

tickettypes
    .route('/tickettypes/:tickettypesid/transactions/:transactionsid', jsonparser)
    .get(tickettypesController.tickettypesTransactionsGetByID)
    
tickettypes
    .route('/tickettypes/:tickettypesid/taxlines', jsonparser)
    .get(tickettypesController.tickettypesTaxlinesGetAll)

tickettypes
    .route('/tickettypes/:tickettypesid/taxlines/:taxlinesid', jsonparser)
    .get(tickettypesController.tickettypesTaxlinesGetByID)
    
tickettypes
    .route('/tickettypes/:tickettypesid/ticketlines', jsonparser)
    .get(tickettypesController.tickettypesTicketlinesGetAll)

tickettypes
    .route('/tickettypes/:tickettypesid/ticketlines/:ticketlinesid', jsonparser)
    .get(tickettypesController.tickettypesTicketlinesGetByID)
    
exports.module = tickettypes;