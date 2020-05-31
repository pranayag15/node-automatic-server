const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: usertypesInsert **********
		module.exports.usertypesInsert =  (req, res) => {
			let sql = "INSERT INTO usertypes SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: usertypesInsert **********
 
		//********** START: usertypesUpdate **********
		module.exports.usertypesUpdate= (req, res) => {
			let sql = "REPLACE INTO usertypes SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: usertypesUpdate **********
 
		//********** START: usertypesPatch **********
		module.exports.usertypesPatch= (req, res) => {
			let sql = "UPDATE usertypes SET ? where productID = ?"
			query(sql, [req.body, req.params.usertypesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: usertypesPatch **********
  
		//********** START: usertypesDeleteByID **********
		module.exports.usertypesDeleteByID= (req, res) => {
			let sql = "DELETE FROM usertypes where productID = ?"
			query(sql, req.params.usertypesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: usertypesDeleteByID //**********

		//********** START: usertypesGetAll //**********
		module.exports.usertypesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "usertypes", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: usertypesGetAll **********
	
		//********** START: usertypesGetByID **********
		module.exports.usertypesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "usertypes", "", 2)
			query(sqlQuery, [req.params.usertypesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: usertypesGetByID **********
    
//********** START: usertypesUsersGetAll **********	
module.exports.usertypesUsersGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","users", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesUsersGetAll **********

//********** START: usertypesUsersGetByID **********	
module.exports.usertypesUsersGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","users", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.usersid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesUsersGetByID **********
    
//********** START: usertypesBusinessesGetAll **********	
module.exports.usertypesBusinessesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","businesses", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesBusinessesGetAll **********

//********** START: usertypesBusinessesGetByID **********	
module.exports.usertypesBusinessesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","businesses", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.businessesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesBusinessesGetByID **********
    
//********** START: usertypesBlocationsGetAll **********	
module.exports.usertypesBlocationsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","blocations", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesBlocationsGetAll **********

//********** START: usertypesBlocationsGetByID **********	
module.exports.usertypesBlocationsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","blocations", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.blocationsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesBlocationsGetByID **********
    
//********** START: usertypesPurchasesGetAll **********	
module.exports.usertypesPurchasesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","purchases", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesPurchasesGetAll **********

//********** START: usertypesPurchasesGetByID **********	
module.exports.usertypesPurchasesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","purchases", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.purchasesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesPurchasesGetByID **********
    
//********** START: usertypesGrnGetAll **********	
module.exports.usertypesGrnGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","grn", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesGrnGetAll **********

//********** START: usertypesGrnGetByID **********	
module.exports.usertypesGrnGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","grn", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.grnid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesGrnGetByID **********
    
//********** START: usertypesGrnitemsGetAll **********	
module.exports.usertypesGrnitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","grnitems", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesGrnitemsGetAll **********

//********** START: usertypesGrnitemsGetByID **********	
module.exports.usertypesGrnitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","grnitems", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.grnitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesGrnitemsGetByID **********
    
//********** START: usertypesPurchaseitemsGetAll **********	
module.exports.usertypesPurchaseitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","purchaseitems", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesPurchaseitemsGetAll **********

//********** START: usertypesPurchaseitemsGetByID **********	
module.exports.usertypesPurchaseitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","purchaseitems", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.purchaseitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesPurchaseitemsGetByID **********
    
//********** START: usertypesStockcurrentGetAll **********	
module.exports.usertypesStockcurrentGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","stockcurrent", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesStockcurrentGetAll **********

//********** START: usertypesStockcurrentGetByID **********	
module.exports.usertypesStockcurrentGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","stockcurrent", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.stockcurrentid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesStockcurrentGetByID **********
    
//********** START: usertypesStockdiaryGetAll **********	
module.exports.usertypesStockdiaryGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","stockdiary", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesStockdiaryGetAll **********

//********** START: usertypesStockdiaryGetByID **********	
module.exports.usertypesStockdiaryGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","stockdiary", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.stockdiaryid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesStockdiaryGetByID **********
    
//********** START: usertypesStocklevelGetAll **********	
module.exports.usertypesStocklevelGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","stocklevel", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesStocklevelGetAll **********

//********** START: usertypesStocklevelGetByID **********	
module.exports.usertypesStocklevelGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","stocklevel", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.stocklevelid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesStocklevelGetByID **********
    
//********** START: usertypesTicketsGetAll **********	
module.exports.usertypesTicketsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","tickets", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesTicketsGetAll **********

//********** START: usertypesTicketsGetByID **********	
module.exports.usertypesTicketsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","tickets", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.ticketsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesTicketsGetByID **********
    
//********** START: usertypesReceiptsGetAll **********	
module.exports.usertypesReceiptsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","receipts", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesReceiptsGetAll **********

//********** START: usertypesReceiptsGetByID **********	
module.exports.usertypesReceiptsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","receipts", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.receiptsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesReceiptsGetByID **********
    
//********** START: usertypesQrGetAll **********	
module.exports.usertypesQrGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","qr", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesQrGetAll **********

//********** START: usertypesQrGetByID **********	
module.exports.usertypesQrGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","qr", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.qrid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesQrGetByID **********
    
//********** START: usertypesTransactionsGetAll **********	
module.exports.usertypesTransactionsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","transactions", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesTransactionsGetAll **********

//********** START: usertypesTransactionsGetByID **********	
module.exports.usertypesTransactionsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","transactions", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.transactionsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesTransactionsGetByID **********
    
//********** START: usertypesTaxlinesGetAll **********	
module.exports.usertypesTaxlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","taxlines", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesTaxlinesGetAll **********

//********** START: usertypesTaxlinesGetByID **********	
module.exports.usertypesTaxlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","taxlines", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.taxlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesTaxlinesGetByID **********
    
//********** START: usertypesTicketlinesGetAll **********	
module.exports.usertypesTicketlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","ticketlines", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesTicketlinesGetAll **********

//********** START: usertypesTicketlinesGetByID **********	
module.exports.usertypesTicketlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","ticketlines", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.ticketlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesTicketlinesGetByID **********
    
//********** START: usertypesUserslocationsGetAll **********	
module.exports.usertypesUserslocationsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","userslocations", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesUserslocationsGetAll **********

//********** START: usertypesUserslocationsGetByID **********	
module.exports.usertypesUserslocationsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","userslocations", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.userslocationsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesUserslocationsGetByID **********
    
//********** START: usertypesCashreconcillationGetAll **********	
module.exports.usertypesCashreconcillationGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","cashreconcillation", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesCashreconcillationGetAll **********

//********** START: usertypesCashreconcillationGetByID **********	
module.exports.usertypesCashreconcillationGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","cashreconcillation", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.cashreconcillationid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesCashreconcillationGetByID **********
    
//********** START: usertypesNroleuserslocationsGetAll **********	
module.exports.usertypesNroleuserslocationsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","nroleuserslocations", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesNroleuserslocationsGetAll **********

//********** START: usertypesNroleuserslocationsGetByID **********	
module.exports.usertypesNroleuserslocationsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","nroleuserslocations", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.nroleuserslocationsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesNroleuserslocationsGetByID **********
    
//********** START: usertypesBusinesspermissionGetAll **********	
module.exports.usertypesBusinesspermissionGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","businesspermission", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesBusinesspermissionGetAll **********

//********** START: usertypesBusinesspermissionGetByID **********	
module.exports.usertypesBusinesspermissionGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","businesspermission", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.businesspermissionid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesBusinesspermissionGetByID **********
    
//********** START: usertypesMitemsGetAll **********	
module.exports.usertypesMitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","mitems", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesMitemsGetAll **********

//********** START: usertypesMitemsGetByID **********	
module.exports.usertypesMitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","mitems", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.mitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesMitemsGetByID **********
    
//********** START: usertypesModifiersGetAll **********	
module.exports.usertypesModifiersGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","modifiers", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesModifiersGetAll **********

//********** START: usertypesModifiersGetByID **********	
module.exports.usertypesModifiersGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","modifiers", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.modifiersid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesModifiersGetByID **********
    
//********** START: usertypesModifiersitemsGetAll **********	
module.exports.usertypesModifiersitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","modifiersitems", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesModifiersitemsGetAll **********

//********** START: usertypesModifiersitemsGetByID **********	
module.exports.usertypesModifiersitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","modifiersitems", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.modifiersitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesModifiersitemsGetByID **********
    
//********** START: usertypesModifieruseGetAll **********	
module.exports.usertypesModifieruseGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","modifieruse", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesModifieruseGetAll **********

//********** START: usertypesModifieruseGetByID **********	
module.exports.usertypesModifieruseGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","modifieruse", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.modifieruseid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesModifieruseGetByID **********
    
//********** START: usertypesProductcategoriesGetAll **********	
module.exports.usertypesProductcategoriesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","productcategories", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesProductcategoriesGetAll **********

//********** START: usertypesProductcategoriesGetByID **********	
module.exports.usertypesProductcategoriesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","productcategories", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.productcategoriesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesProductcategoriesGetByID **********
    
//********** START: usertypesProductsGetAll **********	
module.exports.usertypesProductsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","products", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesProductsGetAll **********

//********** START: usertypesProductsGetByID **********	
module.exports.usertypesProductsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","products", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.productsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesProductsGetByID **********
    
//********** START: usertypesProductstaxesGetAll **********	
module.exports.usertypesProductstaxesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","productstaxes", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesProductstaxesGetAll **********

//********** START: usertypesProductstaxesGetByID **********	
module.exports.usertypesProductstaxesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","productstaxes", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.productstaxesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesProductstaxesGetByID **********
    
//********** START: usertypesTaxcategoriesGetAll **********	
module.exports.usertypesTaxcategoriesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","taxcategories", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesTaxcategoriesGetAll **********

//********** START: usertypesTaxcategoriesGetByID **********	
module.exports.usertypesTaxcategoriesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","taxcategories", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.taxcategoriesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesTaxcategoriesGetByID **********
    
//********** START: usertypesTaxesGetAll **********	
module.exports.usertypesTaxesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","taxes", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesTaxesGetAll **********

//********** START: usertypesTaxesGetByID **********	
module.exports.usertypesTaxesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","taxes", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.taxesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesTaxesGetByID **********
    
//********** START: usertypesVendorsGetAll **********	
module.exports.usertypesVendorsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","vendors", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesVendorsGetAll **********

//********** START: usertypesVendorsGetByID **********	
module.exports.usertypesVendorsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","vendors", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.vendorsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesVendorsGetByID **********
    
//********** START: usertypesProductkeysGetAll **********	
module.exports.usertypesProductkeysGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","productkeys", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesProductkeysGetAll **********

//********** START: usertypesProductkeysGetByID **********	
module.exports.usertypesProductkeysGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","productkeys", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.productkeysid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesProductkeysGetByID **********
    
//********** START: usertypesUsersrolesGetAll **********	
module.exports.usertypesUsersrolesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","usersroles", 3)
	query(sqlQuery, [req.params.usertypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: usertypesUsersrolesGetAll **********

//********** START: usertypesUsersrolesGetByID **********	
module.exports.usertypesUsersrolesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "usertypes","usersroles", 4)
	query(sqlQuery, [req.params.usertypesid, req.params.usersrolesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: usertypesUsersrolesGetByID **********
    