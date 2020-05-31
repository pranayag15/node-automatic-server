const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: rightsInsert **********
		module.exports.rightsInsert =  (req, res) => {
			let sql = "INSERT INTO rights SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: rightsInsert **********
 
		//********** START: rightsUpdate **********
		module.exports.rightsUpdate= (req, res) => {
			let sql = "REPLACE INTO rights SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: rightsUpdate **********
 
		//********** START: rightsPatch **********
		module.exports.rightsPatch= (req, res) => {
			let sql = "UPDATE rights SET ? where productID = ?"
			query(sql, [req.body, req.params.rightsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: rightsPatch **********
  
		//********** START: rightsDeleteByID **********
		module.exports.rightsDeleteByID= (req, res) => {
			let sql = "DELETE FROM rights where productID = ?"
			query(sql, req.params.rightsid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: rightsDeleteByID //**********

		//********** START: rightsGetAll //**********
		module.exports.rightsGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "rights", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: rightsGetAll **********
	
		//********** START: rightsGetByID **********
		module.exports.rightsGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "rights", "", 2)
			query(sqlQuery, [req.params.rightsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: rightsGetByID **********
    
//********** START: rightsTablespermissionsGetAll **********	
module.exports.rightsTablespermissionsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "rights","tablespermissions", 3)
	query(sqlQuery, [req.params.rightsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: rightsTablespermissionsGetAll **********

//********** START: rightsTablespermissionsGetByID **********	
module.exports.rightsTablespermissionsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "rights","tablespermissions", 4)
	query(sqlQuery, [req.params.rightsid, req.params.tablespermissionsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: rightsTablespermissionsGetByID **********
    
//********** START: rightsRolestablepermissionsGetAll **********	
module.exports.rightsRolestablepermissionsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "rights","rolestablepermissions", 3)
	query(sqlQuery, [req.params.rightsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: rightsRolestablepermissionsGetAll **********

//********** START: rightsRolestablepermissionsGetByID **********	
module.exports.rightsRolestablepermissionsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "rights","rolestablepermissions", 4)
	query(sqlQuery, [req.params.rightsid, req.params.rolestablepermissionsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: rightsRolestablepermissionsGetByID **********
    