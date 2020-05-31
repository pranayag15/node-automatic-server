const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: usersInsert **********
		module.exports.usersInsert =  (req, res) => {
			let sql = "INSERT INTO users SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: usersInsert **********
 
		//********** START: usersUpdate **********
		module.exports.usersUpdate= (req, res) => {
			let sql = "REPLACE INTO users SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: usersUpdate **********
 
		//********** START: usersPatch **********
		module.exports.usersPatch= (req, res) => {
			let sql = "UPDATE users SET ? where productID = ?"
			query(sql, [req.body, req.params.usersid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: usersPatch **********
  
		//********** START: usersDeleteByID **********
		module.exports.usersDeleteByID= (req, res) => {
			let sql = "DELETE FROM users where productID = ?"
			query(sql, req.params.usersid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: usersDeleteByID //**********

		//********** START: usersGetAll //**********
		module.exports.usersGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "users", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: usersGetAll **********
	
		//********** START: usersGetByID **********
		module.exports.usersGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "users", "", 2)
			query(sqlQuery, [req.params.usersid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: usersGetByID **********
    
//********** START: usersBusinessesGetAll **********	
module.exports.usersBusinessesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","businesses", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersBusinessesGetAll **********

//********** START: usersBusinessesGetByID **********	
module.exports.usersBusinessesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","businesses", 4)
	query(sqlQuery, [req.params.usersid, req.params.businessesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersBusinessesGetByID **********
    
//********** START: usersBlocationsGetAll **********	
module.exports.usersBlocationsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","blocations", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersBlocationsGetAll **********

//********** START: usersBlocationsGetByID **********	
module.exports.usersBlocationsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","blocations", 4)
	query(sqlQuery, [req.params.usersid, req.params.blocationsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersBlocationsGetByID **********
    
//********** START: usersPurchasesGetAll **********	
module.exports.usersPurchasesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","purchases", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersPurchasesGetAll **********

//********** START: usersPurchasesGetByID **********	
module.exports.usersPurchasesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","purchases", 4)
	query(sqlQuery, [req.params.usersid, req.params.purchasesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersPurchasesGetByID **********
    
//********** START: usersGrnGetAll **********	
module.exports.usersGrnGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","grn", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersGrnGetAll **********

//********** START: usersGrnGetByID **********	
module.exports.usersGrnGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","grn", 4)
	query(sqlQuery, [req.params.usersid, req.params.grnid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersGrnGetByID **********
    
//********** START: usersGrnitemsGetAll **********	
module.exports.usersGrnitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","grnitems", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersGrnitemsGetAll **********

//********** START: usersGrnitemsGetByID **********	
module.exports.usersGrnitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","grnitems", 4)
	query(sqlQuery, [req.params.usersid, req.params.grnitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersGrnitemsGetByID **********
    
//********** START: usersPurchaseitemsGetAll **********	
module.exports.usersPurchaseitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","purchaseitems", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersPurchaseitemsGetAll **********

//********** START: usersPurchaseitemsGetByID **********	
module.exports.usersPurchaseitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","purchaseitems", 4)
	query(sqlQuery, [req.params.usersid, req.params.purchaseitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersPurchaseitemsGetByID **********
    
//********** START: usersStockcurrentGetAll **********	
module.exports.usersStockcurrentGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","stockcurrent", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersStockcurrentGetAll **********

//********** START: usersStockcurrentGetByID **********	
module.exports.usersStockcurrentGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","stockcurrent", 4)
	query(sqlQuery, [req.params.usersid, req.params.stockcurrentid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersStockcurrentGetByID **********
    
//********** START: usersStockdiaryGetAll **********	
module.exports.usersStockdiaryGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","stockdiary", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersStockdiaryGetAll **********

//********** START: usersStockdiaryGetByID **********	
module.exports.usersStockdiaryGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","stockdiary", 4)
	query(sqlQuery, [req.params.usersid, req.params.stockdiaryid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersStockdiaryGetByID **********
    
//********** START: usersStocklevelGetAll **********	
module.exports.usersStocklevelGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","stocklevel", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersStocklevelGetAll **********

//********** START: usersStocklevelGetByID **********	
module.exports.usersStocklevelGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","stocklevel", 4)
	query(sqlQuery, [req.params.usersid, req.params.stocklevelid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersStocklevelGetByID **********
    
//********** START: usersTicketsGetAll **********	
module.exports.usersTicketsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","tickets", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersTicketsGetAll **********

//********** START: usersTicketsGetByID **********	
module.exports.usersTicketsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","tickets", 4)
	query(sqlQuery, [req.params.usersid, req.params.ticketsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersTicketsGetByID **********
    
//********** START: usersReceiptsGetAll **********	
module.exports.usersReceiptsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","receipts", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersReceiptsGetAll **********

//********** START: usersReceiptsGetByID **********	
module.exports.usersReceiptsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","receipts", 4)
	query(sqlQuery, [req.params.usersid, req.params.receiptsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersReceiptsGetByID **********
    
//********** START: usersQrGetAll **********	
module.exports.usersQrGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","qr", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersQrGetAll **********

//********** START: usersQrGetByID **********	
module.exports.usersQrGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","qr", 4)
	query(sqlQuery, [req.params.usersid, req.params.qrid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersQrGetByID **********
    
//********** START: usersTransactionsGetAll **********	
module.exports.usersTransactionsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","transactions", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersTransactionsGetAll **********

//********** START: usersTransactionsGetByID **********	
module.exports.usersTransactionsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","transactions", 4)
	query(sqlQuery, [req.params.usersid, req.params.transactionsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersTransactionsGetByID **********
    
//********** START: usersTaxlinesGetAll **********	
module.exports.usersTaxlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","taxlines", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersTaxlinesGetAll **********

//********** START: usersTaxlinesGetByID **********	
module.exports.usersTaxlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","taxlines", 4)
	query(sqlQuery, [req.params.usersid, req.params.taxlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersTaxlinesGetByID **********
    
//********** START: usersTicketlinesGetAll **********	
module.exports.usersTicketlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","ticketlines", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersTicketlinesGetAll **********

//********** START: usersTicketlinesGetByID **********	
module.exports.usersTicketlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","ticketlines", 4)
	query(sqlQuery, [req.params.usersid, req.params.ticketlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersTicketlinesGetByID **********
    
//********** START: usersUserslocationsGetAll **********	
module.exports.usersUserslocationsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","userslocations", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersUserslocationsGetAll **********

//********** START: usersUserslocationsGetByID **********	
module.exports.usersUserslocationsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","userslocations", 4)
	query(sqlQuery, [req.params.usersid, req.params.userslocationsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersUserslocationsGetByID **********
    
//********** START: usersCashreconcillationGetAll **********	
module.exports.usersCashreconcillationGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","cashreconcillation", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersCashreconcillationGetAll **********

//********** START: usersCashreconcillationGetByID **********	
module.exports.usersCashreconcillationGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","cashreconcillation", 4)
	query(sqlQuery, [req.params.usersid, req.params.cashreconcillationid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersCashreconcillationGetByID **********
    
//********** START: usersNroleuserslocationsGetAll **********	
module.exports.usersNroleuserslocationsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","nroleuserslocations", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersNroleuserslocationsGetAll **********

//********** START: usersNroleuserslocationsGetByID **********	
module.exports.usersNroleuserslocationsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","nroleuserslocations", 4)
	query(sqlQuery, [req.params.usersid, req.params.nroleuserslocationsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersNroleuserslocationsGetByID **********
    
//********** START: usersBusinesspermissionGetAll **********	
module.exports.usersBusinesspermissionGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","businesspermission", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersBusinesspermissionGetAll **********

//********** START: usersBusinesspermissionGetByID **********	
module.exports.usersBusinesspermissionGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","businesspermission", 4)
	query(sqlQuery, [req.params.usersid, req.params.businesspermissionid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersBusinesspermissionGetByID **********
    
//********** START: usersMitemsGetAll **********	
module.exports.usersMitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","mitems", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersMitemsGetAll **********

//********** START: usersMitemsGetByID **********	
module.exports.usersMitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","mitems", 4)
	query(sqlQuery, [req.params.usersid, req.params.mitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersMitemsGetByID **********
    
//********** START: usersModifiersGetAll **********	
module.exports.usersModifiersGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","modifiers", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersModifiersGetAll **********

//********** START: usersModifiersGetByID **********	
module.exports.usersModifiersGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","modifiers", 4)
	query(sqlQuery, [req.params.usersid, req.params.modifiersid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersModifiersGetByID **********
    
//********** START: usersModifiersitemsGetAll **********	
module.exports.usersModifiersitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","modifiersitems", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersModifiersitemsGetAll **********

//********** START: usersModifiersitemsGetByID **********	
module.exports.usersModifiersitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","modifiersitems", 4)
	query(sqlQuery, [req.params.usersid, req.params.modifiersitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersModifiersitemsGetByID **********
    
//********** START: usersModifieruseGetAll **********	
module.exports.usersModifieruseGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","modifieruse", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersModifieruseGetAll **********

//********** START: usersModifieruseGetByID **********	
module.exports.usersModifieruseGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","modifieruse", 4)
	query(sqlQuery, [req.params.usersid, req.params.modifieruseid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersModifieruseGetByID **********
    
//********** START: usersProductcategoriesGetAll **********	
module.exports.usersProductcategoriesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","productcategories", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersProductcategoriesGetAll **********

//********** START: usersProductcategoriesGetByID **********	
module.exports.usersProductcategoriesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","productcategories", 4)
	query(sqlQuery, [req.params.usersid, req.params.productcategoriesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersProductcategoriesGetByID **********
    
//********** START: usersProductsGetAll **********	
module.exports.usersProductsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","products", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersProductsGetAll **********

//********** START: usersProductsGetByID **********	
module.exports.usersProductsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","products", 4)
	query(sqlQuery, [req.params.usersid, req.params.productsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersProductsGetByID **********
    
//********** START: usersProductstaxesGetAll **********	
module.exports.usersProductstaxesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","productstaxes", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersProductstaxesGetAll **********

//********** START: usersProductstaxesGetByID **********	
module.exports.usersProductstaxesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","productstaxes", 4)
	query(sqlQuery, [req.params.usersid, req.params.productstaxesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersProductstaxesGetByID **********
    
//********** START: usersTaxcategoriesGetAll **********	
module.exports.usersTaxcategoriesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","taxcategories", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersTaxcategoriesGetAll **********

//********** START: usersTaxcategoriesGetByID **********	
module.exports.usersTaxcategoriesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","taxcategories", 4)
	query(sqlQuery, [req.params.usersid, req.params.taxcategoriesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersTaxcategoriesGetByID **********
    
//********** START: usersTaxesGetAll **********	
module.exports.usersTaxesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","taxes", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersTaxesGetAll **********

//********** START: usersTaxesGetByID **********	
module.exports.usersTaxesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","taxes", 4)
	query(sqlQuery, [req.params.usersid, req.params.taxesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersTaxesGetByID **********
    
//********** START: usersVendorsGetAll **********	
module.exports.usersVendorsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","vendors", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersVendorsGetAll **********

//********** START: usersVendorsGetByID **********	
module.exports.usersVendorsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","vendors", 4)
	query(sqlQuery, [req.params.usersid, req.params.vendorsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersVendorsGetByID **********
    
//********** START: usersProductkeysGetAll **********	
module.exports.usersProductkeysGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","productkeys", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersProductkeysGetAll **********

//********** START: usersProductkeysGetByID **********	
module.exports.usersProductkeysGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","productkeys", 4)
	query(sqlQuery, [req.params.usersid, req.params.productkeysid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersProductkeysGetByID **********
    
//********** START: usersUsersrolesGetAll **********	
module.exports.usersUsersrolesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","usersroles", 3)
	query(sqlQuery, [req.params.usersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usersUsersrolesGetAll **********

//********** START: usersUsersrolesGetByID **********	
module.exports.usersUsersrolesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "users","usersroles", 4)
	query(sqlQuery, [req.params.usersid, req.params.usersrolesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usersUsersrolesGetByID **********
    