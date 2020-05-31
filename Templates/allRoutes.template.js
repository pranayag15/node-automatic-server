module.exports.importDataTemplate = (tableName) => {
    return `const {${tableName}} = require('../modules/${tableName}/${tableName}.route.js')
`
}

module.exports.exportDataTemplate = (tableName) => {
    return `router.use('/', ${tableName})
`
}

module.exports.routerTemplate = (importData, exportData) => {
    return `var express = require('express')
var router = express.Router()

${importData}

${exportData}   
    
module.exports = router`
}