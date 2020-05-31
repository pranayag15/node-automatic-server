const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: productsInsert **********
		module.exports.productsInsert =  (req, res) => {
			let sql = "INSERT INTO products SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productsInsert **********
 
		//********** START: productsUpdate **********
		module.exports.productsUpdate= (req, res) => {
			let sql = "REPLACE INTO products SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productsUpdate **********
 
		//********** START: productsPatch **********
		module.exports.productsPatch= (req, res) => {
			let sql = "UPDATE products SET ? where productID = ?"
			query(sql, [req.body, req.params.productsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productsPatch **********
  
		//********** START: productsDeleteByID **********
		module.exports.productsDeleteByID= (req, res) => {
			let sql = "DELETE FROM products where productID = ?"
			query(sql, req.params.productsid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productsDeleteByID //**********

		//********** START: productsGetAll //**********
		module.exports.productsGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "products", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productsGetAll **********
	
		//********** START: productsGetByID **********
		module.exports.productsGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "products", "", 2)
			query(sqlQuery, [req.params.productsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: productsGetByID **********
    
//********** START: productsModifieruseGetAll **********	
module.exports.productsModifieruseGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "products","modifieruse", 3)
	query(sqlQuery, [req.params.productsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: productsModifieruseGetAll **********

//********** START: productsModifieruseGetByID **********	
module.exports.productsModifieruseGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "products","modifieruse", 4)
	query(sqlQuery, [req.params.productsid, req.params.modifieruseid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: productsModifieruseGetByID **********
    
//********** START: productsProductstaxesGetAll **********	
module.exports.productsProductstaxesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "products","productstaxes", 3)
	query(sqlQuery, [req.params.productsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: productsProductstaxesGetAll **********

//********** START: productsProductstaxesGetByID **********	
module.exports.productsProductstaxesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "products","productstaxes", 4)
	query(sqlQuery, [req.params.productsid, req.params.productstaxesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: productsProductstaxesGetByID **********
    
//********** START: productsPurchaseitemsGetAll **********	
module.exports.productsPurchaseitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "products","purchaseitems", 3)
	query(sqlQuery, [req.params.productsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: productsPurchaseitemsGetAll **********

//********** START: productsPurchaseitemsGetByID **********	
module.exports.productsPurchaseitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "products","purchaseitems", 4)
	query(sqlQuery, [req.params.productsid, req.params.purchaseitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: productsPurchaseitemsGetByID **********
    
//********** START: productsGrnitemsGetAll **********	
module.exports.productsGrnitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "products","grnitems", 3)
	query(sqlQuery, [req.params.productsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: productsGrnitemsGetAll **********

//********** START: productsGrnitemsGetByID **********	
module.exports.productsGrnitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "products","grnitems", 4)
	query(sqlQuery, [req.params.productsid, req.params.grnitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: productsGrnitemsGetByID **********
    
//********** START: productsStockcurrentGetAll **********	
module.exports.productsStockcurrentGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "products","stockcurrent", 3)
	query(sqlQuery, [req.params.productsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: productsStockcurrentGetAll **********

//********** START: productsStockcurrentGetByID **********	
module.exports.productsStockcurrentGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "products","stockcurrent", 4)
	query(sqlQuery, [req.params.productsid, req.params.stockcurrentid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: productsStockcurrentGetByID **********
    
//********** START: productsStockdiaryGetAll **********	
module.exports.productsStockdiaryGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "products","stockdiary", 3)
	query(sqlQuery, [req.params.productsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: productsStockdiaryGetAll **********

//********** START: productsStockdiaryGetByID **********	
module.exports.productsStockdiaryGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "products","stockdiary", 4)
	query(sqlQuery, [req.params.productsid, req.params.stockdiaryid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: productsStockdiaryGetByID **********
    
//********** START: productsStocklevelGetAll **********	
module.exports.productsStocklevelGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "products","stocklevel", 3)
	query(sqlQuery, [req.params.productsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: productsStocklevelGetAll **********

//********** START: productsStocklevelGetByID **********	
module.exports.productsStocklevelGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "products","stocklevel", 4)
	query(sqlQuery, [req.params.productsid, req.params.stocklevelid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: productsStocklevelGetByID **********
    
//********** START: productsTicketlinesGetAll **********	
module.exports.productsTicketlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "products","ticketlines", 3)
	query(sqlQuery, [req.params.productsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: productsTicketlinesGetAll **********

//********** START: productsTicketlinesGetByID **********	
module.exports.productsTicketlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "products","ticketlines", 4)
	query(sqlQuery, [req.params.productsid, req.params.ticketlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: productsTicketlinesGetByID **********
    