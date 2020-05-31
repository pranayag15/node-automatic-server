export const users = require('express').Router()
const usersController = require('./users.controller.js')
const jsonparser = require('body-parser').json()
    
users
    .route('/users', jsonparser)
    .get(usersController.usersGetAll)
    .post(usersController.usersInsert)
    .put(usersController.usersUpdate)

users
    .route('/users/:usersid', jsonparser)
    .get(usersController.usersGetByID)
    .patch(usersController.usersPatch)
    .delete(usersController.usersDeleteByID)
    
users
    .route('/users/:usersid/businesses', jsonparser)
    .get(usersController.usersBusinessesGetAll)

users
    .route('/users/:usersid/businesses/:businessesid', jsonparser)
    .get(usersController.usersBusinessesGetByID)
    
users
    .route('/users/:usersid/blocations', jsonparser)
    .get(usersController.usersBlocationsGetAll)

users
    .route('/users/:usersid/blocations/:blocationsid', jsonparser)
    .get(usersController.usersBlocationsGetByID)
    
users
    .route('/users/:usersid/purchases', jsonparser)
    .get(usersController.usersPurchasesGetAll)

users
    .route('/users/:usersid/purchases/:purchasesid', jsonparser)
    .get(usersController.usersPurchasesGetByID)
    
users
    .route('/users/:usersid/grn', jsonparser)
    .get(usersController.usersGrnGetAll)

users
    .route('/users/:usersid/grn/:grnid', jsonparser)
    .get(usersController.usersGrnGetByID)
    
users
    .route('/users/:usersid/grnitems', jsonparser)
    .get(usersController.usersGrnitemsGetAll)

users
    .route('/users/:usersid/grnitems/:grnitemsid', jsonparser)
    .get(usersController.usersGrnitemsGetByID)
    
users
    .route('/users/:usersid/purchaseitems', jsonparser)
    .get(usersController.usersPurchaseitemsGetAll)

users
    .route('/users/:usersid/purchaseitems/:purchaseitemsid', jsonparser)
    .get(usersController.usersPurchaseitemsGetByID)
    
users
    .route('/users/:usersid/stockcurrent', jsonparser)
    .get(usersController.usersStockcurrentGetAll)

users
    .route('/users/:usersid/stockcurrent/:stockcurrentid', jsonparser)
    .get(usersController.usersStockcurrentGetByID)
    
users
    .route('/users/:usersid/stockdiary', jsonparser)
    .get(usersController.usersStockdiaryGetAll)

users
    .route('/users/:usersid/stockdiary/:stockdiaryid', jsonparser)
    .get(usersController.usersStockdiaryGetByID)
    
users
    .route('/users/:usersid/stocklevel', jsonparser)
    .get(usersController.usersStocklevelGetAll)

users
    .route('/users/:usersid/stocklevel/:stocklevelid', jsonparser)
    .get(usersController.usersStocklevelGetByID)
    
users
    .route('/users/:usersid/tickets', jsonparser)
    .get(usersController.usersTicketsGetAll)

users
    .route('/users/:usersid/tickets/:ticketsid', jsonparser)
    .get(usersController.usersTicketsGetByID)
    
users
    .route('/users/:usersid/receipts', jsonparser)
    .get(usersController.usersReceiptsGetAll)

users
    .route('/users/:usersid/receipts/:receiptsid', jsonparser)
    .get(usersController.usersReceiptsGetByID)
    
users
    .route('/users/:usersid/qr', jsonparser)
    .get(usersController.usersQrGetAll)

users
    .route('/users/:usersid/qr/:qrid', jsonparser)
    .get(usersController.usersQrGetByID)
    
users
    .route('/users/:usersid/transactions', jsonparser)
    .get(usersController.usersTransactionsGetAll)

users
    .route('/users/:usersid/transactions/:transactionsid', jsonparser)
    .get(usersController.usersTransactionsGetByID)
    
users
    .route('/users/:usersid/taxlines', jsonparser)
    .get(usersController.usersTaxlinesGetAll)

users
    .route('/users/:usersid/taxlines/:taxlinesid', jsonparser)
    .get(usersController.usersTaxlinesGetByID)
    
users
    .route('/users/:usersid/ticketlines', jsonparser)
    .get(usersController.usersTicketlinesGetAll)

users
    .route('/users/:usersid/ticketlines/:ticketlinesid', jsonparser)
    .get(usersController.usersTicketlinesGetByID)
    
users
    .route('/users/:usersid/userslocations', jsonparser)
    .get(usersController.usersUserslocationsGetAll)

users
    .route('/users/:usersid/userslocations/:userslocationsid', jsonparser)
    .get(usersController.usersUserslocationsGetByID)
    
users
    .route('/users/:usersid/cashreconcillation', jsonparser)
    .get(usersController.usersCashreconcillationGetAll)

users
    .route('/users/:usersid/cashreconcillation/:cashreconcillationid', jsonparser)
    .get(usersController.usersCashreconcillationGetByID)
    
users
    .route('/users/:usersid/nroleuserslocations', jsonparser)
    .get(usersController.usersNroleuserslocationsGetAll)

users
    .route('/users/:usersid/nroleuserslocations/:nroleuserslocationsid', jsonparser)
    .get(usersController.usersNroleuserslocationsGetByID)
    
users
    .route('/users/:usersid/businesspermission', jsonparser)
    .get(usersController.usersBusinesspermissionGetAll)

users
    .route('/users/:usersid/businesspermission/:businesspermissionid', jsonparser)
    .get(usersController.usersBusinesspermissionGetByID)
    
users
    .route('/users/:usersid/mitems', jsonparser)
    .get(usersController.usersMitemsGetAll)

users
    .route('/users/:usersid/mitems/:mitemsid', jsonparser)
    .get(usersController.usersMitemsGetByID)
    
users
    .route('/users/:usersid/modifiers', jsonparser)
    .get(usersController.usersModifiersGetAll)

users
    .route('/users/:usersid/modifiers/:modifiersid', jsonparser)
    .get(usersController.usersModifiersGetByID)
    
users
    .route('/users/:usersid/modifiersitems', jsonparser)
    .get(usersController.usersModifiersitemsGetAll)

users
    .route('/users/:usersid/modifiersitems/:modifiersitemsid', jsonparser)
    .get(usersController.usersModifiersitemsGetByID)
    
users
    .route('/users/:usersid/modifieruse', jsonparser)
    .get(usersController.usersModifieruseGetAll)

users
    .route('/users/:usersid/modifieruse/:modifieruseid', jsonparser)
    .get(usersController.usersModifieruseGetByID)
    
users
    .route('/users/:usersid/productcategories', jsonparser)
    .get(usersController.usersProductcategoriesGetAll)

users
    .route('/users/:usersid/productcategories/:productcategoriesid', jsonparser)
    .get(usersController.usersProductcategoriesGetByID)
    
users
    .route('/users/:usersid/products', jsonparser)
    .get(usersController.usersProductsGetAll)

users
    .route('/users/:usersid/products/:productsid', jsonparser)
    .get(usersController.usersProductsGetByID)
    
users
    .route('/users/:usersid/productstaxes', jsonparser)
    .get(usersController.usersProductstaxesGetAll)

users
    .route('/users/:usersid/productstaxes/:productstaxesid', jsonparser)
    .get(usersController.usersProductstaxesGetByID)
    
users
    .route('/users/:usersid/taxcategories', jsonparser)
    .get(usersController.usersTaxcategoriesGetAll)

users
    .route('/users/:usersid/taxcategories/:taxcategoriesid', jsonparser)
    .get(usersController.usersTaxcategoriesGetByID)
    
users
    .route('/users/:usersid/taxes', jsonparser)
    .get(usersController.usersTaxesGetAll)

users
    .route('/users/:usersid/taxes/:taxesid', jsonparser)
    .get(usersController.usersTaxesGetByID)
    
users
    .route('/users/:usersid/vendors', jsonparser)
    .get(usersController.usersVendorsGetAll)

users
    .route('/users/:usersid/vendors/:vendorsid', jsonparser)
    .get(usersController.usersVendorsGetByID)
    
users
    .route('/users/:usersid/productkeys', jsonparser)
    .get(usersController.usersProductkeysGetAll)

users
    .route('/users/:usersid/productkeys/:productkeysid', jsonparser)
    .get(usersController.usersProductkeysGetByID)
    
users
    .route('/users/:usersid/usersroles', jsonparser)
    .get(usersController.usersUsersrolesGetAll)

users
    .route('/users/:usersid/usersroles/:usersrolesid', jsonparser)
    .get(usersController.usersUsersrolesGetByID)
    
exports.module = users;