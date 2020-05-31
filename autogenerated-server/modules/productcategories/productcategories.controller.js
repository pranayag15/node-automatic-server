const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: productcategoriesInsert **********
		module.exports.productcategoriesInsert =  (req, res) => {
			let sql = "INSERT INTO productcategories SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productcategoriesInsert **********
 
		//********** START: productcategoriesUpdate **********
		module.exports.productcategoriesUpdate= (req, res) => {
			let sql = "REPLACE INTO productcategories SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productcategoriesUpdate **********
 
		//********** START: productcategoriesPatch **********
		module.exports.productcategoriesPatch= (req, res) => {
			let sql = "UPDATE productcategories SET ? where productID = ?"
			query(sql, [req.body, req.params.productcategoriesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productcategoriesPatch **********
  
		//********** START: productcategoriesDeleteByID **********
		module.exports.productcategoriesDeleteByID= (req, res) => {
			let sql = "DELETE FROM productcategories where productID = ?"
			query(sql, req.params.productcategoriesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productcategoriesDeleteByID //**********

		//********** START: productcategoriesGetAll //**********
		module.exports.productcategoriesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "productcategories", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productcategoriesGetAll **********
	
		//********** START: productcategoriesGetByID **********
		module.exports.productcategoriesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "productcategories", "", 2)
			query(sqlQuery, [req.params.productcategoriesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: productcategoriesGetByID **********
    
//********** START: productcategoriesProductsGetAll **********	
module.exports.productcategoriesProductsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "productcategories","products", 3)
	query(sqlQuery, [req.params.productcategoriesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: productcategoriesProductsGetAll **********

//********** START: productcategoriesProductsGetByID **********	
module.exports.productcategoriesProductsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "productcategories","products", 4)
	query(sqlQuery, [req.params.productcategoriesid, req.params.productsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: productcategoriesProductsGetByID **********
    
//********** START: productcategoriesModifieruseGetAll **********	
module.exports.productcategoriesModifieruseGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "productcategories","modifieruse", 3)
	query(sqlQuery, [req.params.productcategoriesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: productcategoriesModifieruseGetAll **********

//********** START: productcategoriesModifieruseGetByID **********	
module.exports.productcategoriesModifieruseGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "productcategories","modifieruse", 4)
	query(sqlQuery, [req.params.productcategoriesid, req.params.modifieruseid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: productcategoriesModifieruseGetByID **********
    
//********** START: productcategoriesProductstaxesGetAll **********	
module.exports.productcategoriesProductstaxesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "productcategories","productstaxes", 3)
	query(sqlQuery, [req.params.productcategoriesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: productcategoriesProductstaxesGetAll **********

//********** START: productcategoriesProductstaxesGetByID **********	
module.exports.productcategoriesProductstaxesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "productcategories","productstaxes", 4)
	query(sqlQuery, [req.params.productcategoriesid, req.params.productstaxesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: productcategoriesProductstaxesGetByID **********
    
//********** START: productcategoriesPurchaseitemsGetAll **********	
module.exports.productcategoriesPurchaseitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "productcategories","purchaseitems", 3)
	query(sqlQuery, [req.params.productcategoriesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: productcategoriesPurchaseitemsGetAll **********

//********** START: productcategoriesPurchaseitemsGetByID **********	
module.exports.productcategoriesPurchaseitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "productcategories","purchaseitems", 4)
	query(sqlQuery, [req.params.productcategoriesid, req.params.purchaseitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: productcategoriesPurchaseitemsGetByID **********
    
//********** START: productcategoriesGrnitemsGetAll **********	
module.exports.productcategoriesGrnitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "productcategories","grnitems", 3)
	query(sqlQuery, [req.params.productcategoriesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: productcategoriesGrnitemsGetAll **********

//********** START: productcategoriesGrnitemsGetByID **********	
module.exports.productcategoriesGrnitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "productcategories","grnitems", 4)
	query(sqlQuery, [req.params.productcategoriesid, req.params.grnitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: productcategoriesGrnitemsGetByID **********
    
//********** START: productcategoriesStockcurrentGetAll **********	
module.exports.productcategoriesStockcurrentGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "productcategories","stockcurrent", 3)
	query(sqlQuery, [req.params.productcategoriesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: productcategoriesStockcurrentGetAll **********

//********** START: productcategoriesStockcurrentGetByID **********	
module.exports.productcategoriesStockcurrentGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "productcategories","stockcurrent", 4)
	query(sqlQuery, [req.params.productcategoriesid, req.params.stockcurrentid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: productcategoriesStockcurrentGetByID **********
    
//********** START: productcategoriesStockdiaryGetAll **********	
module.exports.productcategoriesStockdiaryGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "productcategories","stockdiary", 3)
	query(sqlQuery, [req.params.productcategoriesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: productcategoriesStockdiaryGetAll **********

//********** START: productcategoriesStockdiaryGetByID **********	
module.exports.productcategoriesStockdiaryGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "productcategories","stockdiary", 4)
	query(sqlQuery, [req.params.productcategoriesid, req.params.stockdiaryid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: productcategoriesStockdiaryGetByID **********
    
//********** START: productcategoriesStocklevelGetAll **********	
module.exports.productcategoriesStocklevelGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "productcategories","stocklevel", 3)
	query(sqlQuery, [req.params.productcategoriesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: productcategoriesStocklevelGetAll **********

//********** START: productcategoriesStocklevelGetByID **********	
module.exports.productcategoriesStocklevelGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "productcategories","stocklevel", 4)
	query(sqlQuery, [req.params.productcategoriesid, req.params.stocklevelid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: productcategoriesStocklevelGetByID **********
    
//********** START: productcategoriesTicketlinesGetAll **********	
module.exports.productcategoriesTicketlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "productcategories","ticketlines", 3)
	query(sqlQuery, [req.params.productcategoriesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: productcategoriesTicketlinesGetAll **********

//********** START: productcategoriesTicketlinesGetByID **********	
module.exports.productcategoriesTicketlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "productcategories","ticketlines", 4)
	query(sqlQuery, [req.params.productcategoriesid, req.params.ticketlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: productcategoriesTicketlinesGetByID **********
    