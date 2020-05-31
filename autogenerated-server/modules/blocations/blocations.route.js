export const blocations = require('express').Router()
const blocationsController = require('./blocations.controller.js')
const jsonparser = require('body-parser').json()
    
blocations
    .route('/blocations', jsonparser)
    .get(blocationsController.blocationsGetAll)
    .post(blocationsController.blocationsInsert)
    .put(blocationsController.blocationsUpdate)

blocations
    .route('/blocations/:blocationsid', jsonparser)
    .get(blocationsController.blocationsGetByID)
    .patch(blocationsController.blocationsPatch)
    .delete(blocationsController.blocationsDeleteByID)
    
blocations
    .route('/blocations/:blocationsid/purchases', jsonparser)
    .get(blocationsController.blocationsPurchasesGetAll)

blocations
    .route('/blocations/:blocationsid/purchases/:purchasesid', jsonparser)
    .get(blocationsController.blocationsPurchasesGetByID)
    
blocations
    .route('/blocations/:blocationsid/grn', jsonparser)
    .get(blocationsController.blocationsGrnGetAll)

blocations
    .route('/blocations/:blocationsid/grn/:grnid', jsonparser)
    .get(blocationsController.blocationsGrnGetByID)
    
blocations
    .route('/blocations/:blocationsid/grnitems', jsonparser)
    .get(blocationsController.blocationsGrnitemsGetAll)

blocations
    .route('/blocations/:blocationsid/grnitems/:grnitemsid', jsonparser)
    .get(blocationsController.blocationsGrnitemsGetByID)
    
blocations
    .route('/blocations/:blocationsid/purchaseitems', jsonparser)
    .get(blocationsController.blocationsPurchaseitemsGetAll)

blocations
    .route('/blocations/:blocationsid/purchaseitems/:purchaseitemsid', jsonparser)
    .get(blocationsController.blocationsPurchaseitemsGetByID)
    
blocations
    .route('/blocations/:blocationsid/stockcurrent', jsonparser)
    .get(blocationsController.blocationsStockcurrentGetAll)

blocations
    .route('/blocations/:blocationsid/stockcurrent/:stockcurrentid', jsonparser)
    .get(blocationsController.blocationsStockcurrentGetByID)
    
blocations
    .route('/blocations/:blocationsid/stockdiary', jsonparser)
    .get(blocationsController.blocationsStockdiaryGetAll)

blocations
    .route('/blocations/:blocationsid/stockdiary/:stockdiaryid', jsonparser)
    .get(blocationsController.blocationsStockdiaryGetByID)
    
blocations
    .route('/blocations/:blocationsid/stocklevel', jsonparser)
    .get(blocationsController.blocationsStocklevelGetAll)

blocations
    .route('/blocations/:blocationsid/stocklevel/:stocklevelid', jsonparser)
    .get(blocationsController.blocationsStocklevelGetByID)
    
blocations
    .route('/blocations/:blocationsid/tickets', jsonparser)
    .get(blocationsController.blocationsTicketsGetAll)

blocations
    .route('/blocations/:blocationsid/tickets/:ticketsid', jsonparser)
    .get(blocationsController.blocationsTicketsGetByID)
    
blocations
    .route('/blocations/:blocationsid/receipts', jsonparser)
    .get(blocationsController.blocationsReceiptsGetAll)

blocations
    .route('/blocations/:blocationsid/receipts/:receiptsid', jsonparser)
    .get(blocationsController.blocationsReceiptsGetByID)
    
blocations
    .route('/blocations/:blocationsid/qr', jsonparser)
    .get(blocationsController.blocationsQrGetAll)

blocations
    .route('/blocations/:blocationsid/qr/:qrid', jsonparser)
    .get(blocationsController.blocationsQrGetByID)
    
blocations
    .route('/blocations/:blocationsid/transactions', jsonparser)
    .get(blocationsController.blocationsTransactionsGetAll)

blocations
    .route('/blocations/:blocationsid/transactions/:transactionsid', jsonparser)
    .get(blocationsController.blocationsTransactionsGetByID)
    
blocations
    .route('/blocations/:blocationsid/taxlines', jsonparser)
    .get(blocationsController.blocationsTaxlinesGetAll)

blocations
    .route('/blocations/:blocationsid/taxlines/:taxlinesid', jsonparser)
    .get(blocationsController.blocationsTaxlinesGetByID)
    
blocations
    .route('/blocations/:blocationsid/ticketlines', jsonparser)
    .get(blocationsController.blocationsTicketlinesGetAll)

blocations
    .route('/blocations/:blocationsid/ticketlines/:ticketlinesid', jsonparser)
    .get(blocationsController.blocationsTicketlinesGetByID)
    
blocations
    .route('/blocations/:blocationsid/userslocations', jsonparser)
    .get(blocationsController.blocationsUserslocationsGetAll)

blocations
    .route('/blocations/:blocationsid/userslocations/:userslocationsid', jsonparser)
    .get(blocationsController.blocationsUserslocationsGetByID)
    
blocations
    .route('/blocations/:blocationsid/cashreconcillation', jsonparser)
    .get(blocationsController.blocationsCashreconcillationGetAll)

blocations
    .route('/blocations/:blocationsid/cashreconcillation/:cashreconcillationid', jsonparser)
    .get(blocationsController.blocationsCashreconcillationGetByID)
    
blocations
    .route('/blocations/:blocationsid/nroleuserslocations', jsonparser)
    .get(blocationsController.blocationsNroleuserslocationsGetAll)

blocations
    .route('/blocations/:blocationsid/nroleuserslocations/:nroleuserslocationsid', jsonparser)
    .get(blocationsController.blocationsNroleuserslocationsGetByID)
    
exports.module = blocations;