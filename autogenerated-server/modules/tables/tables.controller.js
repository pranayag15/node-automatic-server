const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: tablesInsert **********
		module.exports.tablesInsert =  (req, res) => {
			let sql = "INSERT INTO tables SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: tablesInsert **********
 
		//********** START: tablesUpdate **********
		module.exports.tablesUpdate= (req, res) => {
			let sql = "REPLACE INTO tables SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: tablesUpdate **********
 
		//********** START: tablesPatch **********
		module.exports.tablesPatch= (req, res) => {
			let sql = "UPDATE tables SET ? where productID = ?"
			query(sql, [req.body, req.params.tablesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: tablesPatch **********
  
		//********** START: tablesDeleteByID **********
		module.exports.tablesDeleteByID= (req, res) => {
			let sql = "DELETE FROM tables where productID = ?"
			query(sql, req.params.tablesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: tablesDeleteByID //**********

		//********** START: tablesGetAll //**********
		module.exports.tablesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "tables", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: tablesGetAll **********
	
		//********** START: tablesGetByID **********
		module.exports.tablesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "tables", "", 2)
			query(sqlQuery, [req.params.tablesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: tablesGetByID **********
    
//********** START: tablesTablespermissionsGetAll **********	
module.exports.tablesTablespermissionsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tables","tablespermissions", 3)
	query(sqlQuery, [req.params.tablesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: tablesTablespermissionsGetAll **********

//********** START: tablesTablespermissionsGetByID **********	
module.exports.tablesTablespermissionsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tables","tablespermissions", 4)
	query(sqlQuery, [req.params.tablesid, req.params.tablespermissionsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: tablesTablespermissionsGetByID **********
    
//********** START: tablesRolestablepermissionsGetAll **********	
module.exports.tablesRolestablepermissionsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tables","rolestablepermissions", 3)
	query(sqlQuery, [req.params.tablesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: tablesRolestablepermissionsGetAll **********

//********** START: tablesRolestablepermissionsGetByID **********	
module.exports.tablesRolestablepermissionsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tables","rolestablepermissions", 4)
	query(sqlQuery, [req.params.tablesid, req.params.rolestablepermissionsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: tablesRolestablepermissionsGetByID **********
    