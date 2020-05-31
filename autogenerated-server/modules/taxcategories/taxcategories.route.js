export const taxcategories = require('express').Router()
const taxcategoriesController = require('./taxcategories.controller.js')
const jsonparser = require('body-parser').json()
    
taxcategories
    .route('/taxcategories', jsonparser)
    .get(taxcategoriesController.taxcategoriesGetAll)
    .post(taxcategoriesController.taxcategoriesInsert)
    .put(taxcategoriesController.taxcategoriesUpdate)

taxcategories
    .route('/taxcategories/:taxcategoriesid', jsonparser)
    .get(taxcategoriesController.taxcategoriesGetByID)
    .patch(taxcategoriesController.taxcategoriesPatch)
    .delete(taxcategoriesController.taxcategoriesDeleteByID)
    
taxcategories
    .route('/taxcategories/:taxcategoriesid/taxes', jsonparser)
    .get(taxcategoriesController.taxcategoriesTaxesGetAll)

taxcategories
    .route('/taxcategories/:taxcategoriesid/taxes/:taxesid', jsonparser)
    .get(taxcategoriesController.taxcategoriesTaxesGetByID)
    
taxcategories
    .route('/taxcategories/:taxcategoriesid/productstaxes', jsonparser)
    .get(taxcategoriesController.taxcategoriesProductstaxesGetAll)

taxcategories
    .route('/taxcategories/:taxcategoriesid/productstaxes/:productstaxesid', jsonparser)
    .get(taxcategoriesController.taxcategoriesProductstaxesGetByID)
    
taxcategories
    .route('/taxcategories/:taxcategoriesid/taxlines', jsonparser)
    .get(taxcategoriesController.taxcategoriesTaxlinesGetAll)

taxcategories
    .route('/taxcategories/:taxcategoriesid/taxlines/:taxlinesid', jsonparser)
    .get(taxcategoriesController.taxcategoriesTaxlinesGetByID)
    
exports.module = taxcategories;