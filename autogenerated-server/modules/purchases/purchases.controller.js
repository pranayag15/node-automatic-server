const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: purchasesInsert **********
		module.exports.purchasesInsert =  (req, res) => {
			let sql = "INSERT INTO purchases SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: purchasesInsert **********
 
		//********** START: purchasesUpdate **********
		module.exports.purchasesUpdate= (req, res) => {
			let sql = "REPLACE INTO purchases SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: purchasesUpdate **********
 
		//********** START: purchasesPatch **********
		module.exports.purchasesPatch= (req, res) => {
			let sql = "UPDATE purchases SET ? where productID = ?"
			query(sql, [req.body, req.params.purchasesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: purchasesPatch **********
  
		//********** START: purchasesDeleteByID **********
		module.exports.purchasesDeleteByID= (req, res) => {
			let sql = "DELETE FROM purchases where productID = ?"
			query(sql, req.params.purchasesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: purchasesDeleteByID //**********

		//********** START: purchasesGetAll //**********
		module.exports.purchasesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "purchases", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: purchasesGetAll **********
	
		//********** START: purchasesGetByID **********
		module.exports.purchasesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "purchases", "", 2)
			query(sqlQuery, [req.params.purchasesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: purchasesGetByID **********
    
//********** START: purchasesGrnGetAll **********	
module.exports.purchasesGrnGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "purchases","grn", 3)
	query(sqlQuery, [req.params.purchasesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: purchasesGrnGetAll **********

//********** START: purchasesGrnGetByID **********	
module.exports.purchasesGrnGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "purchases","grn", 4)
	query(sqlQuery, [req.params.purchasesid, req.params.grnid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: purchasesGrnGetByID **********
    
//********** START: purchasesGrnitemsGetAll **********	
module.exports.purchasesGrnitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "purchases","grnitems", 3)
	query(sqlQuery, [req.params.purchasesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: purchasesGrnitemsGetAll **********

//********** START: purchasesGrnitemsGetByID **********	
module.exports.purchasesGrnitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "purchases","grnitems", 4)
	query(sqlQuery, [req.params.purchasesid, req.params.grnitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: purchasesGrnitemsGetByID **********
    
//********** START: purchasesPurchaseitemsGetAll **********	
module.exports.purchasesPurchaseitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "purchases","purchaseitems", 3)
	query(sqlQuery, [req.params.purchasesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: purchasesPurchaseitemsGetAll **********

//********** START: purchasesPurchaseitemsGetByID **********	
module.exports.purchasesPurchaseitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "purchases","purchaseitems", 4)
	query(sqlQuery, [req.params.purchasesid, req.params.purchaseitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: purchasesPurchaseitemsGetByID **********
    