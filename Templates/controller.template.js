module.exports.controllerTemplate = (tableName) => {
    return `const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: ${tableName}Insert **********
		module.exports.${tableName}Insert =  (req, res) => {
			let sql = "INSERT INTO ${tableName} SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: ${tableName}Insert **********
 
		//********** START: ${tableName}Update **********
		module.exports.${tableName}Update= (req, res) => {
			let sql = "REPLACE INTO ${tableName} SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: ${tableName}Update **********
 
		//********** START: ${tableName}Patch **********
		module.exports.${tableName}Patch= (req, res) => {
			let sql = "UPDATE ${tableName} SET ? where productID = ?"
			query(sql, [req.body, req.params.${tableName}id]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: ${tableName}Patch **********
  
		//********** START: ${tableName}DeleteByID **********
		module.exports.${tableName}DeleteByID= (req, res) => {
			let sql = "DELETE FROM ${tableName} where productID = ?"
			query(sql, req.params.${tableName}id).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: ${tableName}DeleteByID //**********

		//********** START: ${tableName}GetAll //**********
		module.exports.${tableName}GetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "${tableName}", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: ${tableName}GetAll **********
	
		//********** START: ${tableName}GetByID **********
		module.exports.${tableName}GetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "${tableName}", "", 2)
			query(sqlQuery, [req.params.${tableName}id]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: ${tableName}GetByID **********
    `
}

module.exports.relationGetController = (startingTable, endingTable) => {
    let capitalizeEndingTable = endingTable[0].toUpperCase() + endingTable.slice(1)
    return `
//********** START: ${startingTable}${capitalizeEndingTable}GetAll **********	
module.exports.${startingTable}${capitalizeEndingTable}GetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "${startingTable}","${endingTable}", 3)
	query(sqlQuery, [req.params.${startingTable}id])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: ${startingTable}${capitalizeEndingTable}GetAll **********

//********** START: ${startingTable}${capitalizeEndingTable}GetByID **********	
module.exports.${startingTable}${capitalizeEndingTable}GetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "${startingTable}","${endingTable}", 4)
	query(sqlQuery, [req.params.${startingTable}id, req.params.${endingTable}id])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: ${startingTable}${capitalizeEndingTable}GetByID **********
    `
}