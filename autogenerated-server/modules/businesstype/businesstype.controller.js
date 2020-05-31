const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: businesstypeInsert **********
		module.exports.businesstypeInsert =  (req, res) => {
			let sql = "INSERT INTO businesstype SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: businesstypeInsert **********
 
		//********** START: businesstypeUpdate **********
		module.exports.businesstypeUpdate= (req, res) => {
			let sql = "REPLACE INTO businesstype SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: businesstypeUpdate **********
 
		//********** START: businesstypePatch **********
		module.exports.businesstypePatch= (req, res) => {
			let sql = "UPDATE businesstype SET ? where productID = ?"
			query(sql, [req.body, req.params.businesstypeid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: businesstypePatch **********
  
		//********** START: businesstypeDeleteByID **********
		module.exports.businesstypeDeleteByID= (req, res) => {
			let sql = "DELETE FROM businesstype where productID = ?"
			query(sql, req.params.businesstypeid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: businesstypeDeleteByID //**********

		//********** START: businesstypeGetAll //**********
		module.exports.businesstypeGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "businesstype", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: businesstypeGetAll **********
	
		//********** START: businesstypeGetByID **********
		module.exports.businesstypeGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "businesstype", "", 2)
			query(sqlQuery, [req.params.businesstypeid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: businesstypeGetByID **********
    
//********** START: businesstypeBusinessesGetAll **********	
module.exports.businesstypeBusinessesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","businesses", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeBusinessesGetAll **********

//********** START: businesstypeBusinessesGetByID **********	
module.exports.businesstypeBusinessesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","businesses", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.businessesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeBusinessesGetByID **********
    
//********** START: businesstypeBlocationsGetAll **********	
module.exports.businesstypeBlocationsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","blocations", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeBlocationsGetAll **********

//********** START: businesstypeBlocationsGetByID **********	
module.exports.businesstypeBlocationsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","blocations", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.blocationsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeBlocationsGetByID **********
    
//********** START: businesstypePurchasesGetAll **********	
module.exports.businesstypePurchasesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","purchases", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypePurchasesGetAll **********

//********** START: businesstypePurchasesGetByID **********	
module.exports.businesstypePurchasesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","purchases", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.purchasesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypePurchasesGetByID **********
    
//********** START: businesstypeGrnGetAll **********	
module.exports.businesstypeGrnGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","grn", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeGrnGetAll **********

//********** START: businesstypeGrnGetByID **********	
module.exports.businesstypeGrnGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","grn", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.grnid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeGrnGetByID **********
    
//********** START: businesstypeGrnitemsGetAll **********	
module.exports.businesstypeGrnitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","grnitems", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeGrnitemsGetAll **********

//********** START: businesstypeGrnitemsGetByID **********	
module.exports.businesstypeGrnitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","grnitems", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.grnitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeGrnitemsGetByID **********
    
//********** START: businesstypePurchaseitemsGetAll **********	
module.exports.businesstypePurchaseitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","purchaseitems", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypePurchaseitemsGetAll **********

//********** START: businesstypePurchaseitemsGetByID **********	
module.exports.businesstypePurchaseitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","purchaseitems", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.purchaseitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypePurchaseitemsGetByID **********
    
//********** START: businesstypeStockcurrentGetAll **********	
module.exports.businesstypeStockcurrentGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","stockcurrent", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeStockcurrentGetAll **********

//********** START: businesstypeStockcurrentGetByID **********	
module.exports.businesstypeStockcurrentGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","stockcurrent", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.stockcurrentid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeStockcurrentGetByID **********
    
//********** START: businesstypeStockdiaryGetAll **********	
module.exports.businesstypeStockdiaryGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","stockdiary", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeStockdiaryGetAll **********

//********** START: businesstypeStockdiaryGetByID **********	
module.exports.businesstypeStockdiaryGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","stockdiary", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.stockdiaryid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeStockdiaryGetByID **********
    
//********** START: businesstypeStocklevelGetAll **********	
module.exports.businesstypeStocklevelGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","stocklevel", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeStocklevelGetAll **********

//********** START: businesstypeStocklevelGetByID **********	
module.exports.businesstypeStocklevelGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","stocklevel", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.stocklevelid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeStocklevelGetByID **********
    
//********** START: businesstypeTicketsGetAll **********	
module.exports.businesstypeTicketsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","tickets", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeTicketsGetAll **********

//********** START: businesstypeTicketsGetByID **********	
module.exports.businesstypeTicketsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","tickets", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.ticketsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeTicketsGetByID **********
    
//********** START: businesstypeReceiptsGetAll **********	
module.exports.businesstypeReceiptsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","receipts", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeReceiptsGetAll **********

//********** START: businesstypeReceiptsGetByID **********	
module.exports.businesstypeReceiptsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","receipts", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.receiptsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeReceiptsGetByID **********
    
//********** START: businesstypeQrGetAll **********	
module.exports.businesstypeQrGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","qr", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeQrGetAll **********

//********** START: businesstypeQrGetByID **********	
module.exports.businesstypeQrGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","qr", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.qrid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeQrGetByID **********
    
//********** START: businesstypeTransactionsGetAll **********	
module.exports.businesstypeTransactionsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","transactions", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeTransactionsGetAll **********

//********** START: businesstypeTransactionsGetByID **********	
module.exports.businesstypeTransactionsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","transactions", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.transactionsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeTransactionsGetByID **********
    
//********** START: businesstypeTaxlinesGetAll **********	
module.exports.businesstypeTaxlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","taxlines", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeTaxlinesGetAll **********

//********** START: businesstypeTaxlinesGetByID **********	
module.exports.businesstypeTaxlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","taxlines", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.taxlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeTaxlinesGetByID **********
    
//********** START: businesstypeTicketlinesGetAll **********	
module.exports.businesstypeTicketlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","ticketlines", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeTicketlinesGetAll **********

//********** START: businesstypeTicketlinesGetByID **********	
module.exports.businesstypeTicketlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","ticketlines", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.ticketlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeTicketlinesGetByID **********
    
//********** START: businesstypeUserslocationsGetAll **********	
module.exports.businesstypeUserslocationsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","userslocations", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeUserslocationsGetAll **********

//********** START: businesstypeUserslocationsGetByID **********	
module.exports.businesstypeUserslocationsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","userslocations", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.userslocationsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeUserslocationsGetByID **********
    
//********** START: businesstypeCashreconcillationGetAll **********	
module.exports.businesstypeCashreconcillationGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","cashreconcillation", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeCashreconcillationGetAll **********

//********** START: businesstypeCashreconcillationGetByID **********	
module.exports.businesstypeCashreconcillationGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","cashreconcillation", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.cashreconcillationid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeCashreconcillationGetByID **********
    
//********** START: businesstypeNroleuserslocationsGetAll **********	
module.exports.businesstypeNroleuserslocationsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","nroleuserslocations", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeNroleuserslocationsGetAll **********

//********** START: businesstypeNroleuserslocationsGetByID **********	
module.exports.businesstypeNroleuserslocationsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","nroleuserslocations", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.nroleuserslocationsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeNroleuserslocationsGetByID **********
    
//********** START: businesstypeBusinesspermissionGetAll **********	
module.exports.businesstypeBusinesspermissionGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","businesspermission", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeBusinesspermissionGetAll **********

//********** START: businesstypeBusinesspermissionGetByID **********	
module.exports.businesstypeBusinesspermissionGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","businesspermission", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.businesspermissionid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeBusinesspermissionGetByID **********
    
//********** START: businesstypeMitemsGetAll **********	
module.exports.businesstypeMitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","mitems", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeMitemsGetAll **********

//********** START: businesstypeMitemsGetByID **********	
module.exports.businesstypeMitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","mitems", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.mitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeMitemsGetByID **********
    
//********** START: businesstypeModifiersGetAll **********	
module.exports.businesstypeModifiersGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","modifiers", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeModifiersGetAll **********

//********** START: businesstypeModifiersGetByID **********	
module.exports.businesstypeModifiersGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","modifiers", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.modifiersid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeModifiersGetByID **********
    
//********** START: businesstypeModifiersitemsGetAll **********	
module.exports.businesstypeModifiersitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","modifiersitems", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeModifiersitemsGetAll **********

//********** START: businesstypeModifiersitemsGetByID **********	
module.exports.businesstypeModifiersitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","modifiersitems", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.modifiersitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeModifiersitemsGetByID **********
    
//********** START: businesstypeModifieruseGetAll **********	
module.exports.businesstypeModifieruseGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","modifieruse", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeModifieruseGetAll **********

//********** START: businesstypeModifieruseGetByID **********	
module.exports.businesstypeModifieruseGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","modifieruse", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.modifieruseid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeModifieruseGetByID **********
    
//********** START: businesstypeProductcategoriesGetAll **********	
module.exports.businesstypeProductcategoriesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","productcategories", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeProductcategoriesGetAll **********

//********** START: businesstypeProductcategoriesGetByID **********	
module.exports.businesstypeProductcategoriesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","productcategories", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.productcategoriesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeProductcategoriesGetByID **********
    
//********** START: businesstypeProductsGetAll **********	
module.exports.businesstypeProductsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","products", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeProductsGetAll **********

//********** START: businesstypeProductsGetByID **********	
module.exports.businesstypeProductsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","products", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.productsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeProductsGetByID **********
    
//********** START: businesstypeProductstaxesGetAll **********	
module.exports.businesstypeProductstaxesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","productstaxes", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeProductstaxesGetAll **********

//********** START: businesstypeProductstaxesGetByID **********	
module.exports.businesstypeProductstaxesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","productstaxes", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.productstaxesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeProductstaxesGetByID **********
    
//********** START: businesstypeTaxcategoriesGetAll **********	
module.exports.businesstypeTaxcategoriesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","taxcategories", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeTaxcategoriesGetAll **********

//********** START: businesstypeTaxcategoriesGetByID **********	
module.exports.businesstypeTaxcategoriesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","taxcategories", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.taxcategoriesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeTaxcategoriesGetByID **********
    
//********** START: businesstypeTaxesGetAll **********	
module.exports.businesstypeTaxesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","taxes", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeTaxesGetAll **********

//********** START: businesstypeTaxesGetByID **********	
module.exports.businesstypeTaxesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","taxes", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.taxesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeTaxesGetByID **********
    
//********** START: businesstypeUsersGetAll **********	
module.exports.businesstypeUsersGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","users", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeUsersGetAll **********

//********** START: businesstypeUsersGetByID **********	
module.exports.businesstypeUsersGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","users", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.usersid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeUsersGetByID **********
    
//********** START: businesstypeProductkeysGetAll **********	
module.exports.businesstypeProductkeysGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","productkeys", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeProductkeysGetAll **********

//********** START: businesstypeProductkeysGetByID **********	
module.exports.businesstypeProductkeysGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","productkeys", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.productkeysid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeProductkeysGetByID **********
    
//********** START: businesstypeUsersrolesGetAll **********	
module.exports.businesstypeUsersrolesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","usersroles", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeUsersrolesGetAll **********

//********** START: businesstypeUsersrolesGetByID **********	
module.exports.businesstypeUsersrolesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","usersroles", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.usersrolesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeUsersrolesGetByID **********
    
//********** START: businesstypeVendorsGetAll **********	
module.exports.businesstypeVendorsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","vendors", 3)
	query(sqlQuery, [req.params.businesstypeid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: businesstypeVendorsGetAll **********

//********** START: businesstypeVendorsGetByID **********	
module.exports.businesstypeVendorsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "businesstype","vendors", 4)
	query(sqlQuery, [req.params.businesstypeid, req.params.vendorsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: businesstypeVendorsGetByID **********
    