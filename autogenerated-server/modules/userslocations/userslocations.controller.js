const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: userslocationsInsert **********
		module.exports.userslocationsInsert =  (req, res) => {
			let sql = "INSERT INTO userslocations SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: userslocationsInsert **********
 
		//********** START: userslocationsUpdate **********
		module.exports.userslocationsUpdate= (req, res) => {
			let sql = "REPLACE INTO userslocations SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: userslocationsUpdate **********
 
		//********** START: userslocationsPatch **********
		module.exports.userslocationsPatch= (req, res) => {
			let sql = "UPDATE userslocations SET ? where productID = ?"
			query(sql, [req.body, req.params.userslocationsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: userslocationsPatch **********
  
		//********** START: userslocationsDeleteByID **********
		module.exports.userslocationsDeleteByID= (req, res) => {
			let sql = "DELETE FROM userslocations where productID = ?"
			query(sql, req.params.userslocationsid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: userslocationsDeleteByID //**********

		//********** START: userslocationsGetAll //**********
		module.exports.userslocationsGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "userslocations", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: userslocationsGetAll **********
	
		//********** START: userslocationsGetByID **********
		module.exports.userslocationsGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "userslocations", "", 2)
			query(sqlQuery, [req.params.userslocationsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: userslocationsGetByID **********
    
//********** START: userslocationsCashreconcillationGetAll **********	
module.exports.userslocationsCashreconcillationGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "userslocations","cashreconcillation", 3)
	query(sqlQuery, [req.params.userslocationsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: userslocationsCashreconcillationGetAll **********

//********** START: userslocationsCashreconcillationGetByID **********	
module.exports.userslocationsCashreconcillationGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "userslocations","cashreconcillation", 4)
	query(sqlQuery, [req.params.userslocationsid, req.params.cashreconcillationid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: userslocationsCashreconcillationGetByID **********
    
//********** START: userslocationsNroleuserslocationsGetAll **********	
module.exports.userslocationsNroleuserslocationsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "userslocations","nroleuserslocations", 3)
	query(sqlQuery, [req.params.userslocationsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: userslocationsNroleuserslocationsGetAll **********

//********** START: userslocationsNroleuserslocationsGetByID **********	
module.exports.userslocationsNroleuserslocationsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "userslocations","nroleuserslocations", 4)
	query(sqlQuery, [req.params.userslocationsid, req.params.nroleuserslocationsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: userslocationsNroleuserslocationsGetByID **********
    