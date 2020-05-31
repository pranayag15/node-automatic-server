export const businesses = require('express').Router()
const businessesController = require('./businesses.controller.js')
const jsonparser = require('body-parser').json()
    
businesses
    .route('/businesses', jsonparser)
    .get(businessesController.businessesGetAll)
    .post(businessesController.businessesInsert)
    .put(businessesController.businessesUpdate)

businesses
    .route('/businesses/:businessesid', jsonparser)
    .get(businessesController.businessesGetByID)
    .patch(businessesController.businessesPatch)
    .delete(businessesController.businessesDeleteByID)
    
businesses
    .route('/businesses/:businessesid/blocations', jsonparser)
    .get(businessesController.businessesBlocationsGetAll)

businesses
    .route('/businesses/:businessesid/blocations/:blocationsid', jsonparser)
    .get(businessesController.businessesBlocationsGetByID)
    
businesses
    .route('/businesses/:businessesid/purchases', jsonparser)
    .get(businessesController.businessesPurchasesGetAll)

businesses
    .route('/businesses/:businessesid/purchases/:purchasesid', jsonparser)
    .get(businessesController.businessesPurchasesGetByID)
    
businesses
    .route('/businesses/:businessesid/grn', jsonparser)
    .get(businessesController.businessesGrnGetAll)

businesses
    .route('/businesses/:businessesid/grn/:grnid', jsonparser)
    .get(businessesController.businessesGrnGetByID)
    
businesses
    .route('/businesses/:businessesid/grnitems', jsonparser)
    .get(businessesController.businessesGrnitemsGetAll)

businesses
    .route('/businesses/:businessesid/grnitems/:grnitemsid', jsonparser)
    .get(businessesController.businessesGrnitemsGetByID)
    
businesses
    .route('/businesses/:businessesid/purchaseitems', jsonparser)
    .get(businessesController.businessesPurchaseitemsGetAll)

businesses
    .route('/businesses/:businessesid/purchaseitems/:purchaseitemsid', jsonparser)
    .get(businessesController.businessesPurchaseitemsGetByID)
    
businesses
    .route('/businesses/:businessesid/stockcurrent', jsonparser)
    .get(businessesController.businessesStockcurrentGetAll)

businesses
    .route('/businesses/:businessesid/stockcurrent/:stockcurrentid', jsonparser)
    .get(businessesController.businessesStockcurrentGetByID)
    
businesses
    .route('/businesses/:businessesid/stockdiary', jsonparser)
    .get(businessesController.businessesStockdiaryGetAll)

businesses
    .route('/businesses/:businessesid/stockdiary/:stockdiaryid', jsonparser)
    .get(businessesController.businessesStockdiaryGetByID)
    
businesses
    .route('/businesses/:businessesid/stocklevel', jsonparser)
    .get(businessesController.businessesStocklevelGetAll)

businesses
    .route('/businesses/:businessesid/stocklevel/:stocklevelid', jsonparser)
    .get(businessesController.businessesStocklevelGetByID)
    
businesses
    .route('/businesses/:businessesid/tickets', jsonparser)
    .get(businessesController.businessesTicketsGetAll)

businesses
    .route('/businesses/:businessesid/tickets/:ticketsid', jsonparser)
    .get(businessesController.businessesTicketsGetByID)
    
businesses
    .route('/businesses/:businessesid/receipts', jsonparser)
    .get(businessesController.businessesReceiptsGetAll)

businesses
    .route('/businesses/:businessesid/receipts/:receiptsid', jsonparser)
    .get(businessesController.businessesReceiptsGetByID)
    
businesses
    .route('/businesses/:businessesid/qr', jsonparser)
    .get(businessesController.businessesQrGetAll)

businesses
    .route('/businesses/:businessesid/qr/:qrid', jsonparser)
    .get(businessesController.businessesQrGetByID)
    
businesses
    .route('/businesses/:businessesid/transactions', jsonparser)
    .get(businessesController.businessesTransactionsGetAll)

businesses
    .route('/businesses/:businessesid/transactions/:transactionsid', jsonparser)
    .get(businessesController.businessesTransactionsGetByID)
    
businesses
    .route('/businesses/:businessesid/taxlines', jsonparser)
    .get(businessesController.businessesTaxlinesGetAll)

businesses
    .route('/businesses/:businessesid/taxlines/:taxlinesid', jsonparser)
    .get(businessesController.businessesTaxlinesGetByID)
    
businesses
    .route('/businesses/:businessesid/ticketlines', jsonparser)
    .get(businessesController.businessesTicketlinesGetAll)

businesses
    .route('/businesses/:businessesid/ticketlines/:ticketlinesid', jsonparser)
    .get(businessesController.businessesTicketlinesGetByID)
    
businesses
    .route('/businesses/:businessesid/userslocations', jsonparser)
    .get(businessesController.businessesUserslocationsGetAll)

businesses
    .route('/businesses/:businessesid/userslocations/:userslocationsid', jsonparser)
    .get(businessesController.businessesUserslocationsGetByID)
    
businesses
    .route('/businesses/:businessesid/cashreconcillation', jsonparser)
    .get(businessesController.businessesCashreconcillationGetAll)

businesses
    .route('/businesses/:businessesid/cashreconcillation/:cashreconcillationid', jsonparser)
    .get(businessesController.businessesCashreconcillationGetByID)
    
businesses
    .route('/businesses/:businessesid/nroleuserslocations', jsonparser)
    .get(businessesController.businessesNroleuserslocationsGetAll)

businesses
    .route('/businesses/:businessesid/nroleuserslocations/:nroleuserslocationsid', jsonparser)
    .get(businessesController.businessesNroleuserslocationsGetByID)
    
businesses
    .route('/businesses/:businessesid/businesspermission', jsonparser)
    .get(businessesController.businessesBusinesspermissionGetAll)

businesses
    .route('/businesses/:businessesid/businesspermission/:businesspermissionid', jsonparser)
    .get(businessesController.businessesBusinesspermissionGetByID)
    
businesses
    .route('/businesses/:businessesid/mitems', jsonparser)
    .get(businessesController.businessesMitemsGetAll)

businesses
    .route('/businesses/:businessesid/mitems/:mitemsid', jsonparser)
    .get(businessesController.businessesMitemsGetByID)
    
businesses
    .route('/businesses/:businessesid/modifiers', jsonparser)
    .get(businessesController.businessesModifiersGetAll)

businesses
    .route('/businesses/:businessesid/modifiers/:modifiersid', jsonparser)
    .get(businessesController.businessesModifiersGetByID)
    
businesses
    .route('/businesses/:businessesid/modifiersitems', jsonparser)
    .get(businessesController.businessesModifiersitemsGetAll)

businesses
    .route('/businesses/:businessesid/modifiersitems/:modifiersitemsid', jsonparser)
    .get(businessesController.businessesModifiersitemsGetByID)
    
businesses
    .route('/businesses/:businessesid/modifieruse', jsonparser)
    .get(businessesController.businessesModifieruseGetAll)

businesses
    .route('/businesses/:businessesid/modifieruse/:modifieruseid', jsonparser)
    .get(businessesController.businessesModifieruseGetByID)
    
businesses
    .route('/businesses/:businessesid/productcategories', jsonparser)
    .get(businessesController.businessesProductcategoriesGetAll)

businesses
    .route('/businesses/:businessesid/productcategories/:productcategoriesid', jsonparser)
    .get(businessesController.businessesProductcategoriesGetByID)
    
businesses
    .route('/businesses/:businessesid/products', jsonparser)
    .get(businessesController.businessesProductsGetAll)

businesses
    .route('/businesses/:businessesid/products/:productsid', jsonparser)
    .get(businessesController.businessesProductsGetByID)
    
businesses
    .route('/businesses/:businessesid/productstaxes', jsonparser)
    .get(businessesController.businessesProductstaxesGetAll)

businesses
    .route('/businesses/:businessesid/productstaxes/:productstaxesid', jsonparser)
    .get(businessesController.businessesProductstaxesGetByID)
    
businesses
    .route('/businesses/:businessesid/taxcategories', jsonparser)
    .get(businessesController.businessesTaxcategoriesGetAll)

businesses
    .route('/businesses/:businessesid/taxcategories/:taxcategoriesid', jsonparser)
    .get(businessesController.businessesTaxcategoriesGetByID)
    
businesses
    .route('/businesses/:businessesid/taxes', jsonparser)
    .get(businessesController.businessesTaxesGetAll)

businesses
    .route('/businesses/:businessesid/taxes/:taxesid', jsonparser)
    .get(businessesController.businessesTaxesGetByID)
    
businesses
    .route('/businesses/:businessesid/users', jsonparser)
    .get(businessesController.businessesUsersGetAll)

businesses
    .route('/businesses/:businessesid/users/:usersid', jsonparser)
    .get(businessesController.businessesUsersGetByID)
    
businesses
    .route('/businesses/:businessesid/productkeys', jsonparser)
    .get(businessesController.businessesProductkeysGetAll)

businesses
    .route('/businesses/:businessesid/productkeys/:productkeysid', jsonparser)
    .get(businessesController.businessesProductkeysGetByID)
    
businesses
    .route('/businesses/:businessesid/usersroles', jsonparser)
    .get(businessesController.businessesUsersrolesGetAll)

businesses
    .route('/businesses/:businessesid/usersroles/:usersrolesid', jsonparser)
    .get(businessesController.businessesUsersrolesGetByID)
    
businesses
    .route('/businesses/:businessesid/vendors', jsonparser)
    .get(businessesController.businessesVendorsGetAll)

businesses
    .route('/businesses/:businessesid/vendors/:vendorsid', jsonparser)
    .get(businessesController.businessesVendorsGetByID)
    
exports.module = businesses;