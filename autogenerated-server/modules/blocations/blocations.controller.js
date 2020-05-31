const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: blocationsInsert **********
		module.exports.blocationsInsert =  (req, res) => {
			let sql = "INSERT INTO blocations SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: blocationsInsert **********
 
		//********** START: blocationsUpdate **********
		module.exports.blocationsUpdate= (req, res) => {
			let sql = "REPLACE INTO blocations SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: blocationsUpdate **********
 
		//********** START: blocationsPatch **********
		module.exports.blocationsPatch= (req, res) => {
			let sql = "UPDATE blocations SET ? where productID = ?"
			query(sql, [req.body, req.params.blocationsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: blocationsPatch **********
  
		//********** START: blocationsDeleteByID **********
		module.exports.blocationsDeleteByID= (req, res) => {
			let sql = "DELETE FROM blocations where productID = ?"
			query(sql, req.params.blocationsid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: blocationsDeleteByID //**********

		//********** START: blocationsGetAll //**********
		module.exports.blocationsGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "blocations", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: blocationsGetAll **********
	
		//********** START: blocationsGetByID **********
		module.exports.blocationsGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "blocations", "", 2)
			query(sqlQuery, [req.params.blocationsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: blocationsGetByID **********
    
//********** START: blocationsPurchasesGetAll **********	
module.exports.blocationsPurchasesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","purchases", 3)
	query(sqlQuery, [req.params.blocationsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: blocationsPurchasesGetAll **********

//********** START: blocationsPurchasesGetByID **********	
module.exports.blocationsPurchasesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","purchases", 4)
	query(sqlQuery, [req.params.blocationsid, req.params.purchasesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: blocationsPurchasesGetByID **********
    
//********** START: blocationsGrnGetAll **********	
module.exports.blocationsGrnGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","grn", 3)
	query(sqlQuery, [req.params.blocationsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: blocationsGrnGetAll **********

//********** START: blocationsGrnGetByID **********	
module.exports.blocationsGrnGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","grn", 4)
	query(sqlQuery, [req.params.blocationsid, req.params.grnid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: blocationsGrnGetByID **********
    
//********** START: blocationsGrnitemsGetAll **********	
module.exports.blocationsGrnitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","grnitems", 3)
	query(sqlQuery, [req.params.blocationsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: blocationsGrnitemsGetAll **********

//********** START: blocationsGrnitemsGetByID **********	
module.exports.blocationsGrnitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","grnitems", 4)
	query(sqlQuery, [req.params.blocationsid, req.params.grnitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: blocationsGrnitemsGetByID **********
    
//********** START: blocationsPurchaseitemsGetAll **********	
module.exports.blocationsPurchaseitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","purchaseitems", 3)
	query(sqlQuery, [req.params.blocationsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: blocationsPurchaseitemsGetAll **********

//********** START: blocationsPurchaseitemsGetByID **********	
module.exports.blocationsPurchaseitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","purchaseitems", 4)
	query(sqlQuery, [req.params.blocationsid, req.params.purchaseitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: blocationsPurchaseitemsGetByID **********
    
//********** START: blocationsStockcurrentGetAll **********	
module.exports.blocationsStockcurrentGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","stockcurrent", 3)
	query(sqlQuery, [req.params.blocationsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: blocationsStockcurrentGetAll **********

//********** START: blocationsStockcurrentGetByID **********	
module.exports.blocationsStockcurrentGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","stockcurrent", 4)
	query(sqlQuery, [req.params.blocationsid, req.params.stockcurrentid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: blocationsStockcurrentGetByID **********
    
//********** START: blocationsStockdiaryGetAll **********	
module.exports.blocationsStockdiaryGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","stockdiary", 3)
	query(sqlQuery, [req.params.blocationsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: blocationsStockdiaryGetAll **********

//********** START: blocationsStockdiaryGetByID **********	
module.exports.blocationsStockdiaryGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","stockdiary", 4)
	query(sqlQuery, [req.params.blocationsid, req.params.stockdiaryid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: blocationsStockdiaryGetByID **********
    
//********** START: blocationsStocklevelGetAll **********	
module.exports.blocationsStocklevelGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","stocklevel", 3)
	query(sqlQuery, [req.params.blocationsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: blocationsStocklevelGetAll **********

//********** START: blocationsStocklevelGetByID **********	
module.exports.blocationsStocklevelGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","stocklevel", 4)
	query(sqlQuery, [req.params.blocationsid, req.params.stocklevelid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: blocationsStocklevelGetByID **********
    
//********** START: blocationsTicketsGetAll **********	
module.exports.blocationsTicketsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","tickets", 3)
	query(sqlQuery, [req.params.blocationsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: blocationsTicketsGetAll **********

//********** START: blocationsTicketsGetByID **********	
module.exports.blocationsTicketsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","tickets", 4)
	query(sqlQuery, [req.params.blocationsid, req.params.ticketsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: blocationsTicketsGetByID **********
    
//********** START: blocationsReceiptsGetAll **********	
module.exports.blocationsReceiptsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","receipts", 3)
	query(sqlQuery, [req.params.blocationsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: blocationsReceiptsGetAll **********

//********** START: blocationsReceiptsGetByID **********	
module.exports.blocationsReceiptsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","receipts", 4)
	query(sqlQuery, [req.params.blocationsid, req.params.receiptsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: blocationsReceiptsGetByID **********
    
//********** START: blocationsQrGetAll **********	
module.exports.blocationsQrGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","qr", 3)
	query(sqlQuery, [req.params.blocationsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: blocationsQrGetAll **********

//********** START: blocationsQrGetByID **********	
module.exports.blocationsQrGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","qr", 4)
	query(sqlQuery, [req.params.blocationsid, req.params.qrid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: blocationsQrGetByID **********
    
//********** START: blocationsTransactionsGetAll **********	
module.exports.blocationsTransactionsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","transactions", 3)
	query(sqlQuery, [req.params.blocationsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: blocationsTransactionsGetAll **********

//********** START: blocationsTransactionsGetByID **********	
module.exports.blocationsTransactionsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","transactions", 4)
	query(sqlQuery, [req.params.blocationsid, req.params.transactionsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: blocationsTransactionsGetByID **********
    
//********** START: blocationsTaxlinesGetAll **********	
module.exports.blocationsTaxlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","taxlines", 3)
	query(sqlQuery, [req.params.blocationsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: blocationsTaxlinesGetAll **********

//********** START: blocationsTaxlinesGetByID **********	
module.exports.blocationsTaxlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","taxlines", 4)
	query(sqlQuery, [req.params.blocationsid, req.params.taxlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: blocationsTaxlinesGetByID **********
    
//********** START: blocationsTicketlinesGetAll **********	
module.exports.blocationsTicketlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","ticketlines", 3)
	query(sqlQuery, [req.params.blocationsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: blocationsTicketlinesGetAll **********

//********** START: blocationsTicketlinesGetByID **********	
module.exports.blocationsTicketlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","ticketlines", 4)
	query(sqlQuery, [req.params.blocationsid, req.params.ticketlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: blocationsTicketlinesGetByID **********
    
//********** START: blocationsUserslocationsGetAll **********	
module.exports.blocationsUserslocationsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","userslocations", 3)
	query(sqlQuery, [req.params.blocationsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: blocationsUserslocationsGetAll **********

//********** START: blocationsUserslocationsGetByID **********	
module.exports.blocationsUserslocationsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","userslocations", 4)
	query(sqlQuery, [req.params.blocationsid, req.params.userslocationsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: blocationsUserslocationsGetByID **********
    
//********** START: blocationsCashreconcillationGetAll **********	
module.exports.blocationsCashreconcillationGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","cashreconcillation", 3)
	query(sqlQuery, [req.params.blocationsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: blocationsCashreconcillationGetAll **********

//********** START: blocationsCashreconcillationGetByID **********	
module.exports.blocationsCashreconcillationGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","cashreconcillation", 4)
	query(sqlQuery, [req.params.blocationsid, req.params.cashreconcillationid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: blocationsCashreconcillationGetByID **********
    
//********** START: blocationsNroleuserslocationsGetAll **********	
module.exports.blocationsNroleuserslocationsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","nroleuserslocations", 3)
	query(sqlQuery, [req.params.blocationsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: blocationsNroleuserslocationsGetAll **********

//********** START: blocationsNroleuserslocationsGetByID **********	
module.exports.blocationsNroleuserslocationsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "blocations","nroleuserslocations", 4)
	query(sqlQuery, [req.params.blocationsid, req.params.nroleuserslocationsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: blocationsNroleuserslocationsGetByID **********
    