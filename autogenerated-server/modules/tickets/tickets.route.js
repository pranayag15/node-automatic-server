export const tickets = require('express').Router()
const ticketsController = require('./tickets.controller.js')
const jsonparser = require('body-parser').json()
    
tickets
    .route('/tickets', jsonparser)
    .get(ticketsController.ticketsGetAll)
    .post(ticketsController.ticketsInsert)
    .put(ticketsController.ticketsUpdate)

tickets
    .route('/tickets/:ticketsid', jsonparser)
    .get(ticketsController.ticketsGetByID)
    .patch(ticketsController.ticketsPatch)
    .delete(ticketsController.ticketsDeleteByID)
    
tickets
    .route('/tickets/:ticketsid/receipts', jsonparser)
    .get(ticketsController.ticketsReceiptsGetAll)

tickets
    .route('/tickets/:ticketsid/receipts/:receiptsid', jsonparser)
    .get(ticketsController.ticketsReceiptsGetByID)
    
tickets
    .route('/tickets/:ticketsid/qr', jsonparser)
    .get(ticketsController.ticketsQrGetAll)

tickets
    .route('/tickets/:ticketsid/qr/:qrid', jsonparser)
    .get(ticketsController.ticketsQrGetByID)
    
tickets
    .route('/tickets/:ticketsid/transactions', jsonparser)
    .get(ticketsController.ticketsTransactionsGetAll)

tickets
    .route('/tickets/:ticketsid/transactions/:transactionsid', jsonparser)
    .get(ticketsController.ticketsTransactionsGetByID)
    
tickets
    .route('/tickets/:ticketsid/taxlines', jsonparser)
    .get(ticketsController.ticketsTaxlinesGetAll)

tickets
    .route('/tickets/:ticketsid/taxlines/:taxlinesid', jsonparser)
    .get(ticketsController.ticketsTaxlinesGetByID)
    
tickets
    .route('/tickets/:ticketsid/ticketlines', jsonparser)
    .get(ticketsController.ticketsTicketlinesGetAll)

tickets
    .route('/tickets/:ticketsid/ticketlines/:ticketlinesid', jsonparser)
    .get(ticketsController.ticketsTicketlinesGetByID)
    
exports.module = tickets;