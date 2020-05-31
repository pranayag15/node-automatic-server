export const usertypes = require('express').Router()
const usertypesController = require('./usertypes.controller.js')
const jsonparser = require('body-parser').json()
    
usertypes
    .route('/usertypes', jsonparser)
    .get(usertypesController.usertypesGetAll)
    .post(usertypesController.usertypesInsert)
    .put(usertypesController.usertypesUpdate)

usertypes
    .route('/usertypes/:usertypesid', jsonparser)
    .get(usertypesController.usertypesGetByID)
    .patch(usertypesController.usertypesPatch)
    .delete(usertypesController.usertypesDeleteByID)
    
usertypes
    .route('/usertypes/:usertypesid/users', jsonparser)
    .get(usertypesController.usertypesUsersGetAll)

usertypes
    .route('/usertypes/:usertypesid/users/:usersid', jsonparser)
    .get(usertypesController.usertypesUsersGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/businesses', jsonparser)
    .get(usertypesController.usertypesBusinessesGetAll)

usertypes
    .route('/usertypes/:usertypesid/businesses/:businessesid', jsonparser)
    .get(usertypesController.usertypesBusinessesGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/blocations', jsonparser)
    .get(usertypesController.usertypesBlocationsGetAll)

usertypes
    .route('/usertypes/:usertypesid/blocations/:blocationsid', jsonparser)
    .get(usertypesController.usertypesBlocationsGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/purchases', jsonparser)
    .get(usertypesController.usertypesPurchasesGetAll)

usertypes
    .route('/usertypes/:usertypesid/purchases/:purchasesid', jsonparser)
    .get(usertypesController.usertypesPurchasesGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/grn', jsonparser)
    .get(usertypesController.usertypesGrnGetAll)

usertypes
    .route('/usertypes/:usertypesid/grn/:grnid', jsonparser)
    .get(usertypesController.usertypesGrnGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/grnitems', jsonparser)
    .get(usertypesController.usertypesGrnitemsGetAll)

usertypes
    .route('/usertypes/:usertypesid/grnitems/:grnitemsid', jsonparser)
    .get(usertypesController.usertypesGrnitemsGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/purchaseitems', jsonparser)
    .get(usertypesController.usertypesPurchaseitemsGetAll)

usertypes
    .route('/usertypes/:usertypesid/purchaseitems/:purchaseitemsid', jsonparser)
    .get(usertypesController.usertypesPurchaseitemsGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/stockcurrent', jsonparser)
    .get(usertypesController.usertypesStockcurrentGetAll)

usertypes
    .route('/usertypes/:usertypesid/stockcurrent/:stockcurrentid', jsonparser)
    .get(usertypesController.usertypesStockcurrentGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/stockdiary', jsonparser)
    .get(usertypesController.usertypesStockdiaryGetAll)

usertypes
    .route('/usertypes/:usertypesid/stockdiary/:stockdiaryid', jsonparser)
    .get(usertypesController.usertypesStockdiaryGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/stocklevel', jsonparser)
    .get(usertypesController.usertypesStocklevelGetAll)

usertypes
    .route('/usertypes/:usertypesid/stocklevel/:stocklevelid', jsonparser)
    .get(usertypesController.usertypesStocklevelGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/tickets', jsonparser)
    .get(usertypesController.usertypesTicketsGetAll)

usertypes
    .route('/usertypes/:usertypesid/tickets/:ticketsid', jsonparser)
    .get(usertypesController.usertypesTicketsGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/receipts', jsonparser)
    .get(usertypesController.usertypesReceiptsGetAll)

usertypes
    .route('/usertypes/:usertypesid/receipts/:receiptsid', jsonparser)
    .get(usertypesController.usertypesReceiptsGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/qr', jsonparser)
    .get(usertypesController.usertypesQrGetAll)

usertypes
    .route('/usertypes/:usertypesid/qr/:qrid', jsonparser)
    .get(usertypesController.usertypesQrGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/transactions', jsonparser)
    .get(usertypesController.usertypesTransactionsGetAll)

usertypes
    .route('/usertypes/:usertypesid/transactions/:transactionsid', jsonparser)
    .get(usertypesController.usertypesTransactionsGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/taxlines', jsonparser)
    .get(usertypesController.usertypesTaxlinesGetAll)

usertypes
    .route('/usertypes/:usertypesid/taxlines/:taxlinesid', jsonparser)
    .get(usertypesController.usertypesTaxlinesGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/ticketlines', jsonparser)
    .get(usertypesController.usertypesTicketlinesGetAll)

usertypes
    .route('/usertypes/:usertypesid/ticketlines/:ticketlinesid', jsonparser)
    .get(usertypesController.usertypesTicketlinesGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/userslocations', jsonparser)
    .get(usertypesController.usertypesUserslocationsGetAll)

usertypes
    .route('/usertypes/:usertypesid/userslocations/:userslocationsid', jsonparser)
    .get(usertypesController.usertypesUserslocationsGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/cashreconcillation', jsonparser)
    .get(usertypesController.usertypesCashreconcillationGetAll)

usertypes
    .route('/usertypes/:usertypesid/cashreconcillation/:cashreconcillationid', jsonparser)
    .get(usertypesController.usertypesCashreconcillationGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/nroleuserslocations', jsonparser)
    .get(usertypesController.usertypesNroleuserslocationsGetAll)

usertypes
    .route('/usertypes/:usertypesid/nroleuserslocations/:nroleuserslocationsid', jsonparser)
    .get(usertypesController.usertypesNroleuserslocationsGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/businesspermission', jsonparser)
    .get(usertypesController.usertypesBusinesspermissionGetAll)

usertypes
    .route('/usertypes/:usertypesid/businesspermission/:businesspermissionid', jsonparser)
    .get(usertypesController.usertypesBusinesspermissionGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/mitems', jsonparser)
    .get(usertypesController.usertypesMitemsGetAll)

usertypes
    .route('/usertypes/:usertypesid/mitems/:mitemsid', jsonparser)
    .get(usertypesController.usertypesMitemsGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/modifiers', jsonparser)
    .get(usertypesController.usertypesModifiersGetAll)

usertypes
    .route('/usertypes/:usertypesid/modifiers/:modifiersid', jsonparser)
    .get(usertypesController.usertypesModifiersGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/modifiersitems', jsonparser)
    .get(usertypesController.usertypesModifiersitemsGetAll)

usertypes
    .route('/usertypes/:usertypesid/modifiersitems/:modifiersitemsid', jsonparser)
    .get(usertypesController.usertypesModifiersitemsGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/modifieruse', jsonparser)
    .get(usertypesController.usertypesModifieruseGetAll)

usertypes
    .route('/usertypes/:usertypesid/modifieruse/:modifieruseid', jsonparser)
    .get(usertypesController.usertypesModifieruseGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/productcategories', jsonparser)
    .get(usertypesController.usertypesProductcategoriesGetAll)

usertypes
    .route('/usertypes/:usertypesid/productcategories/:productcategoriesid', jsonparser)
    .get(usertypesController.usertypesProductcategoriesGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/products', jsonparser)
    .get(usertypesController.usertypesProductsGetAll)

usertypes
    .route('/usertypes/:usertypesid/products/:productsid', jsonparser)
    .get(usertypesController.usertypesProductsGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/productstaxes', jsonparser)
    .get(usertypesController.usertypesProductstaxesGetAll)

usertypes
    .route('/usertypes/:usertypesid/productstaxes/:productstaxesid', jsonparser)
    .get(usertypesController.usertypesProductstaxesGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/taxcategories', jsonparser)
    .get(usertypesController.usertypesTaxcategoriesGetAll)

usertypes
    .route('/usertypes/:usertypesid/taxcategories/:taxcategoriesid', jsonparser)
    .get(usertypesController.usertypesTaxcategoriesGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/taxes', jsonparser)
    .get(usertypesController.usertypesTaxesGetAll)

usertypes
    .route('/usertypes/:usertypesid/taxes/:taxesid', jsonparser)
    .get(usertypesController.usertypesTaxesGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/vendors', jsonparser)
    .get(usertypesController.usertypesVendorsGetAll)

usertypes
    .route('/usertypes/:usertypesid/vendors/:vendorsid', jsonparser)
    .get(usertypesController.usertypesVendorsGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/productkeys', jsonparser)
    .get(usertypesController.usertypesProductkeysGetAll)

usertypes
    .route('/usertypes/:usertypesid/productkeys/:productkeysid', jsonparser)
    .get(usertypesController.usertypesProductkeysGetByID)
    
usertypes
    .route('/usertypes/:usertypesid/usersroles', jsonparser)
    .get(usertypesController.usertypesUsersrolesGetAll)

usertypes
    .route('/usertypes/:usertypesid/usersroles/:usersrolesid', jsonparser)
    .get(usertypesController.usertypesUsersrolesGetByID)
    
exports.module = usertypes;