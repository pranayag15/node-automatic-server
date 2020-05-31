const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: businessesInsert **********
		module.exports.businessesInsert =  (req, res) => {
			let sql = "INSERT INTO businesses SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: businessesInsert **********
 
		//********** START: businessesUpdate **********
		module.exports.businessesUpdate= (req, res) => {
			let sql = "REPLACE INTO businesses SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: businessesUpdate **********
 
		//********** START: businessesPatch **********
		module.exports.businessesPatch= (req, res) => {
			let sql = "UPDATE businesses SET ? where productID = ?"
			query(sql, [req.body, req.params.businessesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: businessesPatch **********
  
		//********** START: businessesDeleteByID **********
		module.exports.businessesDeleteByID= (req, res) => {
			let sql = "DELETE FROM businesses where productID = ?"
			query(sql, req.params.businessesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: businessesDeleteByID //**********

		//********** START: businessesGetAll //**********
		module.exports.businessesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "businesses", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: businessesGetAll **********
	
		//********** START: businessesGetByID **********
		module.exports.businessesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "businesses", "", 2)
			query(sqlQuery, [req.params.businessesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: businessesGetByID **********
    
//********** START: businessesBlocationsGetAll **********	
module.exports.businessesBlocationsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","blocations", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesBlocationsGetAll **********

//********** START: businessesBlocationsGetByID **********	
module.exports.businessesBlocationsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","blocations", 4)
	query(sqlQuery, [req.params.businessesid, req.params.blocationsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesBlocationsGetByID **********
    
//********** START: businessesPurchasesGetAll **********	
module.exports.businessesPurchasesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","purchases", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesPurchasesGetAll **********

//********** START: businessesPurchasesGetByID **********	
module.exports.businessesPurchasesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","purchases", 4)
	query(sqlQuery, [req.params.businessesid, req.params.purchasesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesPurchasesGetByID **********
    
//********** START: businessesGrnGetAll **********	
module.exports.businessesGrnGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","grn", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesGrnGetAll **********

//********** START: businessesGrnGetByID **********	
module.exports.businessesGrnGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","grn", 4)
	query(sqlQuery, [req.params.businessesid, req.params.grnid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesGrnGetByID **********
    
//********** START: businessesGrnitemsGetAll **********	
module.exports.businessesGrnitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","grnitems", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesGrnitemsGetAll **********

//********** START: businessesGrnitemsGetByID **********	
module.exports.businessesGrnitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","grnitems", 4)
	query(sqlQuery, [req.params.businessesid, req.params.grnitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesGrnitemsGetByID **********
    
//********** START: businessesPurchaseitemsGetAll **********	
module.exports.businessesPurchaseitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","purchaseitems", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesPurchaseitemsGetAll **********

//********** START: businessesPurchaseitemsGetByID **********	
module.exports.businessesPurchaseitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","purchaseitems", 4)
	query(sqlQuery, [req.params.businessesid, req.params.purchaseitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesPurchaseitemsGetByID **********
    
//********** START: businessesStockcurrentGetAll **********	
module.exports.businessesStockcurrentGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","stockcurrent", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesStockcurrentGetAll **********

//********** START: businessesStockcurrentGetByID **********	
module.exports.businessesStockcurrentGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","stockcurrent", 4)
	query(sqlQuery, [req.params.businessesid, req.params.stockcurrentid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesStockcurrentGetByID **********
    
//********** START: businessesStockdiaryGetAll **********	
module.exports.businessesStockdiaryGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","stockdiary", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesStockdiaryGetAll **********

//********** START: businessesStockdiaryGetByID **********	
module.exports.businessesStockdiaryGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","stockdiary", 4)
	query(sqlQuery, [req.params.businessesid, req.params.stockdiaryid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesStockdiaryGetByID **********
    
//********** START: businessesStocklevelGetAll **********	
module.exports.businessesStocklevelGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","stocklevel", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesStocklevelGetAll **********

//********** START: businessesStocklevelGetByID **********	
module.exports.businessesStocklevelGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","stocklevel", 4)
	query(sqlQuery, [req.params.businessesid, req.params.stocklevelid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesStocklevelGetByID **********
    
//********** START: businessesTicketsGetAll **********	
module.exports.businessesTicketsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","tickets", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesTicketsGetAll **********

//********** START: businessesTicketsGetByID **********	
module.exports.businessesTicketsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","tickets", 4)
	query(sqlQuery, [req.params.businessesid, req.params.ticketsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesTicketsGetByID **********
    
//********** START: businessesReceiptsGetAll **********	
module.exports.businessesReceiptsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","receipts", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesReceiptsGetAll **********

//********** START: businessesReceiptsGetByID **********	
module.exports.businessesReceiptsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","receipts", 4)
	query(sqlQuery, [req.params.businessesid, req.params.receiptsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesReceiptsGetByID **********
    
//********** START: businessesQrGetAll **********	
module.exports.businessesQrGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","qr", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesQrGetAll **********

//********** START: businessesQrGetByID **********	
module.exports.businessesQrGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","qr", 4)
	query(sqlQuery, [req.params.businessesid, req.params.qrid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesQrGetByID **********
    
//********** START: businessesTransactionsGetAll **********	
module.exports.businessesTransactionsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","transactions", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesTransactionsGetAll **********

//********** START: businessesTransactionsGetByID **********	
module.exports.businessesTransactionsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","transactions", 4)
	query(sqlQuery, [req.params.businessesid, req.params.transactionsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesTransactionsGetByID **********
    
//********** START: businessesTaxlinesGetAll **********	
module.exports.businessesTaxlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","taxlines", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesTaxlinesGetAll **********

//********** START: businessesTaxlinesGetByID **********	
module.exports.businessesTaxlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","taxlines", 4)
	query(sqlQuery, [req.params.businessesid, req.params.taxlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesTaxlinesGetByID **********
    
//********** START: businessesTicketlinesGetAll **********	
module.exports.businessesTicketlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","ticketlines", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesTicketlinesGetAll **********

//********** START: businessesTicketlinesGetByID **********	
module.exports.businessesTicketlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","ticketlines", 4)
	query(sqlQuery, [req.params.businessesid, req.params.ticketlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesTicketlinesGetByID **********
    
//********** START: businessesUserslocationsGetAll **********	
module.exports.businessesUserslocationsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","userslocations", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesUserslocationsGetAll **********

//********** START: businessesUserslocationsGetByID **********	
module.exports.businessesUserslocationsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","userslocations", 4)
	query(sqlQuery, [req.params.businessesid, req.params.userslocationsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesUserslocationsGetByID **********
    
//********** START: businessesCashreconcillationGetAll **********	
module.exports.businessesCashreconcillationGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","cashreconcillation", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesCashreconcillationGetAll **********

//********** START: businessesCashreconcillationGetByID **********	
module.exports.businessesCashreconcillationGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","cashreconcillation", 4)
	query(sqlQuery, [req.params.businessesid, req.params.cashreconcillationid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesCashreconcillationGetByID **********
    
//********** START: businessesNroleuserslocationsGetAll **********	
module.exports.businessesNroleuserslocationsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","nroleuserslocations", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesNroleuserslocationsGetAll **********

//********** START: businessesNroleuserslocationsGetByID **********	
module.exports.businessesNroleuserslocationsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","nroleuserslocations", 4)
	query(sqlQuery, [req.params.businessesid, req.params.nroleuserslocationsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesNroleuserslocationsGetByID **********
    
//********** START: businessesBusinesspermissionGetAll **********	
module.exports.businessesBusinesspermissionGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","businesspermission", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesBusinesspermissionGetAll **********

//********** START: businessesBusinesspermissionGetByID **********	
module.exports.businessesBusinesspermissionGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","businesspermission", 4)
	query(sqlQuery, [req.params.businessesid, req.params.businesspermissionid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesBusinesspermissionGetByID **********
    
//********** START: businessesMitemsGetAll **********	
module.exports.businessesMitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","mitems", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesMitemsGetAll **********

//********** START: businessesMitemsGetByID **********	
module.exports.businessesMitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","mitems", 4)
	query(sqlQuery, [req.params.businessesid, req.params.mitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesMitemsGetByID **********
    
//********** START: businessesModifiersGetAll **********	
module.exports.businessesModifiersGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","modifiers", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesModifiersGetAll **********

//********** START: businessesModifiersGetByID **********	
module.exports.businessesModifiersGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","modifiers", 4)
	query(sqlQuery, [req.params.businessesid, req.params.modifiersid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesModifiersGetByID **********
    
//********** START: businessesModifiersitemsGetAll **********	
module.exports.businessesModifiersitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","modifiersitems", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesModifiersitemsGetAll **********

//********** START: businessesModifiersitemsGetByID **********	
module.exports.businessesModifiersitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","modifiersitems", 4)
	query(sqlQuery, [req.params.businessesid, req.params.modifiersitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesModifiersitemsGetByID **********
    
//********** START: businessesModifieruseGetAll **********	
module.exports.businessesModifieruseGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","modifieruse", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesModifieruseGetAll **********

//********** START: businessesModifieruseGetByID **********	
module.exports.businessesModifieruseGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","modifieruse", 4)
	query(sqlQuery, [req.params.businessesid, req.params.modifieruseid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesModifieruseGetByID **********
    
//********** START: businessesProductcategoriesGetAll **********	
module.exports.businessesProductcategoriesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","productcategories", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesProductcategoriesGetAll **********

//********** START: businessesProductcategoriesGetByID **********	
module.exports.businessesProductcategoriesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","productcategories", 4)
	query(sqlQuery, [req.params.businessesid, req.params.productcategoriesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesProductcategoriesGetByID **********
    
//********** START: businessesProductsGetAll **********	
module.exports.businessesProductsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","products", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesProductsGetAll **********

//********** START: businessesProductsGetByID **********	
module.exports.businessesProductsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","products", 4)
	query(sqlQuery, [req.params.businessesid, req.params.productsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesProductsGetByID **********
    
//********** START: businessesProductstaxesGetAll **********	
module.exports.businessesProductstaxesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","productstaxes", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesProductstaxesGetAll **********

//********** START: businessesProductstaxesGetByID **********	
module.exports.businessesProductstaxesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","productstaxes", 4)
	query(sqlQuery, [req.params.businessesid, req.params.productstaxesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesProductstaxesGetByID **********
    
//********** START: businessesTaxcategoriesGetAll **********	
module.exports.businessesTaxcategoriesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","taxcategories", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesTaxcategoriesGetAll **********

//********** START: businessesTaxcategoriesGetByID **********	
module.exports.businessesTaxcategoriesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","taxcategories", 4)
	query(sqlQuery, [req.params.businessesid, req.params.taxcategoriesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesTaxcategoriesGetByID **********
    
//********** START: businessesTaxesGetAll **********	
module.exports.businessesTaxesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","taxes", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesTaxesGetAll **********

//********** START: businessesTaxesGetByID **********	
module.exports.businessesTaxesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","taxes", 4)
	query(sqlQuery, [req.params.businessesid, req.params.taxesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesTaxesGetByID **********
    
//********** START: businessesUsersGetAll **********	
module.exports.businessesUsersGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","users", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesUsersGetAll **********

//********** START: businessesUsersGetByID **********	
module.exports.businessesUsersGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","users", 4)
	query(sqlQuery, [req.params.businessesid, req.params.usersid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesUsersGetByID **********
    
//********** START: businessesProductkeysGetAll **********	
module.exports.businessesProductkeysGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","productkeys", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesProductkeysGetAll **********

//********** START: businessesProductkeysGetByID **********	
module.exports.businessesProductkeysGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","productkeys", 4)
	query(sqlQuery, [req.params.businessesid, req.params.productkeysid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesProductkeysGetByID **********
    
//********** START: businessesUsersrolesGetAll **********	
module.exports.businessesUsersrolesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","usersroles", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesUsersrolesGetAll **********

//********** START: businessesUsersrolesGetByID **********	
module.exports.businessesUsersrolesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","usersroles", 4)
	query(sqlQuery, [req.params.businessesid, req.params.usersrolesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesUsersrolesGetByID **********
    
//********** START: businessesVendorsGetAll **********	
module.exports.businessesVendorsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","vendors", 3)
	query(sqlQuery, [req.params.businessesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businessesVendorsGetAll **********

//********** START: businessesVendorsGetByID **********	
module.exports.businessesVendorsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesses","vendors", 4)
	query(sqlQuery, [req.params.businessesid, req.params.vendorsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businessesVendorsGetByID **********
    