const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: attributesetsInsert **********
		module.exports.attributesetsInsert =  (req, res) => {
			let sql = "INSERT INTO attributesets SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributesetsInsert **********
 
		//********** START: attributesetsUpdate **********
		module.exports.attributesetsUpdate= (req, res) => {
			let sql = "REPLACE INTO attributesets SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributesetsUpdate **********
 
		//********** START: attributesetsPatch **********
		module.exports.attributesetsPatch= (req, res) => {
			let sql = "UPDATE attributesets SET ? where productID = ?"
			query(sql, [req.body, req.params.attributesetsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributesetsPatch **********
  
		//********** START: attributesetsDeleteByID **********
		module.exports.attributesetsDeleteByID= (req, res) => {
			let sql = "DELETE FROM attributesets where productID = ?"
			query(sql, req.params.attributesetsid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributesetsDeleteByID //**********

		//********** START: attributesetsGetAll //**********
		module.exports.attributesetsGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "attributesets", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributesetsGetAll **********
	
		//********** START: attributesetsGetByID **********
		module.exports.attributesetsGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "attributesets", "", 2)
			query(sqlQuery, [req.params.attributesetsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: attributesetsGetByID **********
    
//********** START: attributesetsAttributesetinstancesGetAll **********	
module.exports.attributesetsAttributesetinstancesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesets","attributesetinstances", 3)
	query(sqlQuery, [req.params.attributesetsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: attributesetsAttributesetinstancesGetAll **********

//********** START: attributesetsAttributesetinstancesGetByID **********	
module.exports.attributesetsAttributesetinstancesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesets","attributesetinstances", 4)
	query(sqlQuery, [req.params.attributesetsid, req.params.attributesetinstancesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: attributesetsAttributesetinstancesGetByID **********
    
//********** START: attributesetsAttributeinstancesGetAll **********	
module.exports.attributesetsAttributeinstancesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesets","attributeinstances", 3)
	query(sqlQuery, [req.params.attributesetsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: attributesetsAttributeinstancesGetAll **********

//********** START: attributesetsAttributeinstancesGetByID **********	
module.exports.attributesetsAttributeinstancesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesets","attributeinstances", 4)
	query(sqlQuery, [req.params.attributesetsid, req.params.attributeinstancesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: attributesetsAttributeinstancesGetByID **********
    
//********** START: attributesetsPurchaseitemsGetAll **********	
module.exports.attributesetsPurchaseitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesets","purchaseitems", 3)
	query(sqlQuery, [req.params.attributesetsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: attributesetsPurchaseitemsGetAll **********

//********** START: attributesetsPurchaseitemsGetByID **********	
module.exports.attributesetsPurchaseitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesets","purchaseitems", 4)
	query(sqlQuery, [req.params.attributesetsid, req.params.purchaseitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: attributesetsPurchaseitemsGetByID **********
    
//********** START: attributesetsGrnitemsGetAll **********	
module.exports.attributesetsGrnitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesets","grnitems", 3)
	query(sqlQuery, [req.params.attributesetsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: attributesetsGrnitemsGetAll **********

//********** START: attributesetsGrnitemsGetByID **********	
module.exports.attributesetsGrnitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesets","grnitems", 4)
	query(sqlQuery, [req.params.attributesetsid, req.params.grnitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: attributesetsGrnitemsGetByID **********
    
//********** START: attributesetsStockcurrentGetAll **********	
module.exports.attributesetsStockcurrentGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesets","stockcurrent", 3)
	query(sqlQuery, [req.params.attributesetsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: attributesetsStockcurrentGetAll **********

//********** START: attributesetsStockcurrentGetByID **********	
module.exports.attributesetsStockcurrentGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesets","stockcurrent", 4)
	query(sqlQuery, [req.params.attributesetsid, req.params.stockcurrentid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: attributesetsStockcurrentGetByID **********
    
//********** START: attributesetsStockdiaryGetAll **********	
module.exports.attributesetsStockdiaryGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesets","stockdiary", 3)
	query(sqlQuery, [req.params.attributesetsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: attributesetsStockdiaryGetAll **********

//********** START: attributesetsStockdiaryGetByID **********	
module.exports.attributesetsStockdiaryGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesets","stockdiary", 4)
	query(sqlQuery, [req.params.attributesetsid, req.params.stockdiaryid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: attributesetsStockdiaryGetByID **********
    
//********** START: attributesetsTicketlinesGetAll **********	
module.exports.attributesetsTicketlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesets","ticketlines", 3)
	query(sqlQuery, [req.params.attributesetsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: attributesetsTicketlinesGetAll **********

//********** START: attributesetsTicketlinesGetByID **********	
module.exports.attributesetsTicketlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesets","ticketlines", 4)
	query(sqlQuery, [req.params.attributesetsid, req.params.ticketlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: attributesetsTicketlinesGetByID **********
    
//********** START: attributesetsAttributeuseGetAll **********	
module.exports.attributesetsAttributeuseGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesets","attributeuse", 3)
	query(sqlQuery, [req.params.attributesetsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: attributesetsAttributeuseGetAll **********

//********** START: attributesetsAttributeuseGetByID **********	
module.exports.attributesetsAttributeuseGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributesets","attributeuse", 4)
	query(sqlQuery, [req.params.attributesetsid, req.params.attributeuseid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: attributesetsAttributeuseGetByID **********
    