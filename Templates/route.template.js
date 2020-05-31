module.exports.routeTemplate = (tableName) => {
    return `export const ${tableName} = require('express').Router()
const ${tableName}Controller = require('./${tableName}.controller.js')
const jsonparser = require('body-parser').json()
    
${tableName}
    .route('/${tableName}', jsonparser)
    .get(${tableName}Controller.${tableName}GetAll)
    .post(${tableName}Controller.${tableName}Insert)
    .put(${tableName}Controller.${tableName}Update)

${tableName}
    .route('/${tableName}/:${tableName}id', jsonparser)
    .get(${tableName}Controller.${tableName}GetByID)
    .patch(${tableName}Controller.${tableName}Patch)
    .delete(${tableName}Controller.${tableName}DeleteByID)
    `
}

module.exports.singleRoute = (startingTable, endingTable) => {
    let capitalizeEndingTable = endingTable[0].toUpperCase() + endingTable.slice(1)
    return `
${startingTable}
    .route('/${startingTable}/:${startingTable}id/${endingTable}', jsonparser)
    .get(${startingTable}Controller.${startingTable}${capitalizeEndingTable}GetAll)

${startingTable}
    .route('/${startingTable}/:${startingTable}id/${endingTable}/:${endingTable}id', jsonparser)
    .get(${startingTable}Controller.${startingTable}${capitalizeEndingTable}GetByID)
    `
}

module.exports.routeEndingExport = (tableName) => {
    return `
exports.module = ${tableName};`
}