const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: vendorsInsert **********
		module.exports.vendorsInsert =  (req, res) => {
			let sql = "INSERT INTO vendors SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: vendorsInsert **********
 
		//********** START: vendorsUpdate **********
		module.exports.vendorsUpdate= (req, res) => {
			let sql = "REPLACE INTO vendors SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: vendorsUpdate **********
 
		//********** START: vendorsPatch **********
		module.exports.vendorsPatch= (req, res) => {
			let sql = "UPDATE vendors SET ? where productID = ?"
			query(sql, [req.body, req.params.vendorsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: vendorsPatch **********
  
		//********** START: vendorsDeleteByID **********
		module.exports.vendorsDeleteByID= (req, res) => {
			let sql = "DELETE FROM vendors where productID = ?"
			query(sql, req.params.vendorsid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: vendorsDeleteByID //**********

		//********** START: vendorsGetAll //**********
		module.exports.vendorsGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "vendors", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: vendorsGetAll **********
	
		//********** START: vendorsGetByID **********
		module.exports.vendorsGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "vendors", "", 2)
			query(sqlQuery, [req.params.vendorsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: vendorsGetByID **********
    
//********** START: vendorsPurchasesGetAll **********	
module.exports.vendorsPurchasesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "vendors","purchases", 3)
	query(sqlQuery, [req.params.vendorsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: vendorsPurchasesGetAll **********

//********** START: vendorsPurchasesGetByID **********	
module.exports.vendorsPurchasesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "vendors","purchases", 4)
	query(sqlQuery, [req.params.vendorsid, req.params.purchasesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: vendorsPurchasesGetByID **********
    
//********** START: vendorsGrnGetAll **********	
module.exports.vendorsGrnGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "vendors","grn", 3)
	query(sqlQuery, [req.params.vendorsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: vendorsGrnGetAll **********

//********** START: vendorsGrnGetByID **********	
module.exports.vendorsGrnGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "vendors","grn", 4)
	query(sqlQuery, [req.params.vendorsid, req.params.grnid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: vendorsGrnGetByID **********
    
//********** START: vendorsGrnitemsGetAll **********	
module.exports.vendorsGrnitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "vendors","grnitems", 3)
	query(sqlQuery, [req.params.vendorsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: vendorsGrnitemsGetAll **********

//********** START: vendorsGrnitemsGetByID **********	
module.exports.vendorsGrnitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "vendors","grnitems", 4)
	query(sqlQuery, [req.params.vendorsid, req.params.grnitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: vendorsGrnitemsGetByID **********
    
//********** START: vendorsPurchaseitemsGetAll **********	
module.exports.vendorsPurchaseitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "vendors","purchaseitems", 3)
	query(sqlQuery, [req.params.vendorsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: vendorsPurchaseitemsGetAll **********

//********** START: vendorsPurchaseitemsGetByID **********	
module.exports.vendorsPurchaseitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "vendors","purchaseitems", 4)
	query(sqlQuery, [req.params.vendorsid, req.params.purchaseitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: vendorsPurchaseitemsGetByID **********
    