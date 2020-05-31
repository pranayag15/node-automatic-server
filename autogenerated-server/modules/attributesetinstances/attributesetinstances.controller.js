const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: attributesetinstancesInsert **********
		module.exports.attributesetinstancesInsert =  (req, res) => {
			let sql = "INSERT INTO attributesetinstances SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributesetinstancesInsert **********
 
		//********** START: attributesetinstancesUpdate **********
		module.exports.attributesetinstancesUpdate= (req, res) => {
			let sql = "REPLACE INTO attributesetinstances SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributesetinstancesUpdate **********
 
		//********** START: attributesetinstancesPatch **********
		module.exports.attributesetinstancesPatch= (req, res) => {
			let sql = "UPDATE attributesetinstances SET ? where productID = ?"
			query(sql, [req.body, req.params.attributesetinstancesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributesetinstancesPatch **********
  
		//********** START: attributesetinstancesDeleteByID **********
		module.exports.attributesetinstancesDeleteByID= (req, res) => {
			let sql = "DELETE FROM attributesetinstances where productID = ?"
			query(sql, req.params.attributesetinstancesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributesetinstancesDeleteByID //**********

		//********** START: attributesetinstancesGetAll //**********
		module.exports.attributesetinstancesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "attributesetinstances", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributesetinstancesGetAll **********
	
		//********** START: attributesetinstancesGetByID **********
		module.exports.attributesetinstancesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "attributesetinstances", "", 2)
			query(sqlQuery, [req.params.attributesetinstancesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: attributesetinstancesGetByID **********
    
//********** START: attributesetinstancesAttributeinstancesGetAll **********	
module.exports.attributesetinstancesAttributeinstancesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesetinstances","attributeinstances", 3)
	query(sqlQuery, [req.params.attributesetinstancesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: attributesetinstancesAttributeinstancesGetAll **********

//********** START: attributesetinstancesAttributeinstancesGetByID **********	
module.exports.attributesetinstancesAttributeinstancesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesetinstances","attributeinstances", 4)
	query(sqlQuery, [req.params.attributesetinstancesid, req.params.attributeinstancesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: attributesetinstancesAttributeinstancesGetByID **********
    
//********** START: attributesetinstancesPurchaseitemsGetAll **********	
module.exports.attributesetinstancesPurchaseitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesetinstances","purchaseitems", 3)
	query(sqlQuery, [req.params.attributesetinstancesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: attributesetinstancesPurchaseitemsGetAll **********

//********** START: attributesetinstancesPurchaseitemsGetByID **********	
module.exports.attributesetinstancesPurchaseitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesetinstances","purchaseitems", 4)
	query(sqlQuery, [req.params.attributesetinstancesid, req.params.purchaseitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: attributesetinstancesPurchaseitemsGetByID **********
    
//********** START: attributesetinstancesGrnitemsGetAll **********	
module.exports.attributesetinstancesGrnitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesetinstances","grnitems", 3)
	query(sqlQuery, [req.params.attributesetinstancesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: attributesetinstancesGrnitemsGetAll **********

//********** START: attributesetinstancesGrnitemsGetByID **********	
module.exports.attributesetinstancesGrnitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesetinstances","grnitems", 4)
	query(sqlQuery, [req.params.attributesetinstancesid, req.params.grnitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: attributesetinstancesGrnitemsGetByID **********
    
//********** START: attributesetinstancesStockcurrentGetAll **********	
module.exports.attributesetinstancesStockcurrentGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesetinstances","stockcurrent", 3)
	query(sqlQuery, [req.params.attributesetinstancesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: attributesetinstancesStockcurrentGetAll **********

//********** START: attributesetinstancesStockcurrentGetByID **********	
module.exports.attributesetinstancesStockcurrentGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesetinstances","stockcurrent", 4)
	query(sqlQuery, [req.params.attributesetinstancesid, req.params.stockcurrentid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: attributesetinstancesStockcurrentGetByID **********
    
//********** START: attributesetinstancesStockdiaryGetAll **********	
module.exports.attributesetinstancesStockdiaryGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesetinstances","stockdiary", 3)
	query(sqlQuery, [req.params.attributesetinstancesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: attributesetinstancesStockdiaryGetAll **********

//********** START: attributesetinstancesStockdiaryGetByID **********	
module.exports.attributesetinstancesStockdiaryGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesetinstances","stockdiary", 4)
	query(sqlQuery, [req.params.attributesetinstancesid, req.params.stockdiaryid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: attributesetinstancesStockdiaryGetByID **********
    
//********** START: attributesetinstancesTicketlinesGetAll **********	
module.exports.attributesetinstancesTicketlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesetinstances","ticketlines", 3)
	query(sqlQuery, [req.params.attributesetinstancesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: attributesetinstancesTicketlinesGetAll **********

//********** START: attributesetinstancesTicketlinesGetByID **********	
module.exports.attributesetinstancesTicketlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesetinstances","ticketlines", 4)
	query(sqlQuery, [req.params.attributesetinstancesid, req.params.ticketlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: attributesetinstancesTicketlinesGetByID **********
    