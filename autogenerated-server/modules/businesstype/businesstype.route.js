export const businesstype = require('express').Router()
const businesstypeController = require('./businesstype.controller.js')
const jsonparser = require('body-parser').json()
    
businesstype
    .route('/businesstype', jsonparser)
    .get(businesstypeController.businesstypeGetAll)
    .post(businesstypeController.businesstypeInsert)
    .put(businesstypeController.businesstypeUpdate)

businesstype
    .route('/businesstype/:businesstypeid', jsonparser)
    .get(businesstypeController.businesstypeGetByID)
    .patch(businesstypeController.businesstypePatch)
    .delete(businesstypeController.businesstypeDeleteByID)
    
businesstype
    .route('/businesstype/:businesstypeid/businesses', jsonparser)
    .get(businesstypeController.businesstypeBusinessesGetAll)

businesstype
    .route('/businesstype/:businesstypeid/businesses/:businessesid', jsonparser)
    .get(businesstypeController.businesstypeBusinessesGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/blocations', jsonparser)
    .get(businesstypeController.businesstypeBlocationsGetAll)

businesstype
    .route('/businesstype/:businesstypeid/blocations/:blocationsid', jsonparser)
    .get(businesstypeController.businesstypeBlocationsGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/purchases', jsonparser)
    .get(businesstypeController.businesstypePurchasesGetAll)

businesstype
    .route('/businesstype/:businesstypeid/purchases/:purchasesid', jsonparser)
    .get(businesstypeController.businesstypePurchasesGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/grn', jsonparser)
    .get(businesstypeController.businesstypeGrnGetAll)

businesstype
    .route('/businesstype/:businesstypeid/grn/:grnid', jsonparser)
    .get(businesstypeController.businesstypeGrnGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/grnitems', jsonparser)
    .get(businesstypeController.businesstypeGrnitemsGetAll)

businesstype
    .route('/businesstype/:businesstypeid/grnitems/:grnitemsid', jsonparser)
    .get(businesstypeController.businesstypeGrnitemsGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/purchaseitems', jsonparser)
    .get(businesstypeController.businesstypePurchaseitemsGetAll)

businesstype
    .route('/businesstype/:businesstypeid/purchaseitems/:purchaseitemsid', jsonparser)
    .get(businesstypeController.businesstypePurchaseitemsGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/stockcurrent', jsonparser)
    .get(businesstypeController.businesstypeStockcurrentGetAll)

businesstype
    .route('/businesstype/:businesstypeid/stockcurrent/:stockcurrentid', jsonparser)
    .get(businesstypeController.businesstypeStockcurrentGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/stockdiary', jsonparser)
    .get(businesstypeController.businesstypeStockdiaryGetAll)

businesstype
    .route('/businesstype/:businesstypeid/stockdiary/:stockdiaryid', jsonparser)
    .get(businesstypeController.businesstypeStockdiaryGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/stocklevel', jsonparser)
    .get(businesstypeController.businesstypeStocklevelGetAll)

businesstype
    .route('/businesstype/:businesstypeid/stocklevel/:stocklevelid', jsonparser)
    .get(businesstypeController.businesstypeStocklevelGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/tickets', jsonparser)
    .get(businesstypeController.businesstypeTicketsGetAll)

businesstype
    .route('/businesstype/:businesstypeid/tickets/:ticketsid', jsonparser)
    .get(businesstypeController.businesstypeTicketsGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/receipts', jsonparser)
    .get(businesstypeController.businesstypeReceiptsGetAll)

businesstype
    .route('/businesstype/:businesstypeid/receipts/:receiptsid', jsonparser)
    .get(businesstypeController.businesstypeReceiptsGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/qr', jsonparser)
    .get(businesstypeController.businesstypeQrGetAll)

businesstype
    .route('/businesstype/:businesstypeid/qr/:qrid', jsonparser)
    .get(businesstypeController.businesstypeQrGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/transactions', jsonparser)
    .get(businesstypeController.businesstypeTransactionsGetAll)

businesstype
    .route('/businesstype/:businesstypeid/transactions/:transactionsid', jsonparser)
    .get(businesstypeController.businesstypeTransactionsGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/taxlines', jsonparser)
    .get(businesstypeController.businesstypeTaxlinesGetAll)

businesstype
    .route('/businesstype/:businesstypeid/taxlines/:taxlinesid', jsonparser)
    .get(businesstypeController.businesstypeTaxlinesGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/ticketlines', jsonparser)
    .get(businesstypeController.businesstypeTicketlinesGetAll)

businesstype
    .route('/businesstype/:businesstypeid/ticketlines/:ticketlinesid', jsonparser)
    .get(businesstypeController.businesstypeTicketlinesGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/userslocations', jsonparser)
    .get(businesstypeController.businesstypeUserslocationsGetAll)

businesstype
    .route('/businesstype/:businesstypeid/userslocations/:userslocationsid', jsonparser)
    .get(businesstypeController.businesstypeUserslocationsGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/cashreconcillation', jsonparser)
    .get(businesstypeController.businesstypeCashreconcillationGetAll)

businesstype
    .route('/businesstype/:businesstypeid/cashreconcillation/:cashreconcillationid', jsonparser)
    .get(businesstypeController.businesstypeCashreconcillationGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/nroleuserslocations', jsonparser)
    .get(businesstypeController.businesstypeNroleuserslocationsGetAll)

businesstype
    .route('/businesstype/:businesstypeid/nroleuserslocations/:nroleuserslocationsid', jsonparser)
    .get(businesstypeController.businesstypeNroleuserslocationsGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/businesspermission', jsonparser)
    .get(businesstypeController.businesstypeBusinesspermissionGetAll)

businesstype
    .route('/businesstype/:businesstypeid/businesspermission/:businesspermissionid', jsonparser)
    .get(businesstypeController.businesstypeBusinesspermissionGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/mitems', jsonparser)
    .get(businesstypeController.businesstypeMitemsGetAll)

businesstype
    .route('/businesstype/:businesstypeid/mitems/:mitemsid', jsonparser)
    .get(businesstypeController.businesstypeMitemsGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/modifiers', jsonparser)
    .get(businesstypeController.businesstypeModifiersGetAll)

businesstype
    .route('/businesstype/:businesstypeid/modifiers/:modifiersid', jsonparser)
    .get(businesstypeController.businesstypeModifiersGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/modifiersitems', jsonparser)
    .get(businesstypeController.businesstypeModifiersitemsGetAll)

businesstype
    .route('/businesstype/:businesstypeid/modifiersitems/:modifiersitemsid', jsonparser)
    .get(businesstypeController.businesstypeModifiersitemsGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/modifieruse', jsonparser)
    .get(businesstypeController.businesstypeModifieruseGetAll)

businesstype
    .route('/businesstype/:businesstypeid/modifieruse/:modifieruseid', jsonparser)
    .get(businesstypeController.businesstypeModifieruseGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/productcategories', jsonparser)
    .get(businesstypeController.businesstypeProductcategoriesGetAll)

businesstype
    .route('/businesstype/:businesstypeid/productcategories/:productcategoriesid', jsonparser)
    .get(businesstypeController.businesstypeProductcategoriesGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/products', jsonparser)
    .get(businesstypeController.businesstypeProductsGetAll)

businesstype
    .route('/businesstype/:businesstypeid/products/:productsid', jsonparser)
    .get(businesstypeController.businesstypeProductsGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/productstaxes', jsonparser)
    .get(businesstypeController.businesstypeProductstaxesGetAll)

businesstype
    .route('/businesstype/:businesstypeid/productstaxes/:productstaxesid', jsonparser)
    .get(businesstypeController.businesstypeProductstaxesGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/taxcategories', jsonparser)
    .get(businesstypeController.businesstypeTaxcategoriesGetAll)

businesstype
    .route('/businesstype/:businesstypeid/taxcategories/:taxcategoriesid', jsonparser)
    .get(businesstypeController.businesstypeTaxcategoriesGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/taxes', jsonparser)
    .get(businesstypeController.businesstypeTaxesGetAll)

businesstype
    .route('/businesstype/:businesstypeid/taxes/:taxesid', jsonparser)
    .get(businesstypeController.businesstypeTaxesGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/users', jsonparser)
    .get(businesstypeController.businesstypeUsersGetAll)

businesstype
    .route('/businesstype/:businesstypeid/users/:usersid', jsonparser)
    .get(businesstypeController.businesstypeUsersGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/productkeys', jsonparser)
    .get(businesstypeController.businesstypeProductkeysGetAll)

businesstype
    .route('/businesstype/:businesstypeid/productkeys/:productkeysid', jsonparser)
    .get(businesstypeController.businesstypeProductkeysGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/usersroles', jsonparser)
    .get(businesstypeController.businesstypeUsersrolesGetAll)

businesstype
    .route('/businesstype/:businesstypeid/usersroles/:usersrolesid', jsonparser)
    .get(businesstypeController.businesstypeUsersrolesGetByID)
    
businesstype
    .route('/businesstype/:businesstypeid/vendors', jsonparser)
    .get(businesstypeController.businesstypeVendorsGetAll)

businesstype
    .route('/businesstype/:businesstypeid/vendors/:vendorsid', jsonparser)
    .get(businesstypeController.businesstypeVendorsGetByID)
    
exports.module = businesstype;