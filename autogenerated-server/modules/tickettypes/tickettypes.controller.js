const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: tickettypesInsert **********
		module.exports.tickettypesInsert =  (req, res) => {
			let sql = "INSERT INTO tickettypes SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: tickettypesInsert **********
 
		//********** START: tickettypesUpdate **********
		module.exports.tickettypesUpdate= (req, res) => {
			let sql = "REPLACE INTO tickettypes SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: tickettypesUpdate **********
 
		//********** START: tickettypesPatch **********
		module.exports.tickettypesPatch= (req, res) => {
			let sql = "UPDATE tickettypes SET ? where productID = ?"
			query(sql, [req.body, req.params.tickettypesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: tickettypesPatch **********
  
		//********** START: tickettypesDeleteByID **********
		module.exports.tickettypesDeleteByID= (req, res) => {
			let sql = "DELETE FROM tickettypes where productID = ?"
			query(sql, req.params.tickettypesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: tickettypesDeleteByID //**********

		//********** START: tickettypesGetAll //**********
		module.exports.tickettypesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "tickettypes", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: tickettypesGetAll **********
	
		//********** START: tickettypesGetByID **********
		module.exports.tickettypesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "tickettypes", "", 2)
			query(sqlQuery, [req.params.tickettypesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: tickettypesGetByID **********
    
//********** START: tickettypesTicketsGetAll **********	
module.exports.tickettypesTicketsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickettypes","tickets", 3)
	query(sqlQuery, [req.params.tickettypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: tickettypesTicketsGetAll **********

//********** START: tickettypesTicketsGetByID **********	
module.exports.tickettypesTicketsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickettypes","tickets", 4)
	query(sqlQuery, [req.params.tickettypesid, req.params.ticketsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: tickettypesTicketsGetByID **********
    
//********** START: tickettypesReceiptsGetAll **********	
module.exports.tickettypesReceiptsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickettypes","receipts", 3)
	query(sqlQuery, [req.params.tickettypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: tickettypesReceiptsGetAll **********

//********** START: tickettypesReceiptsGetByID **********	
module.exports.tickettypesReceiptsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickettypes","receipts", 4)
	query(sqlQuery, [req.params.tickettypesid, req.params.receiptsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: tickettypesReceiptsGetByID **********
    
//********** START: tickettypesQrGetAll **********	
module.exports.tickettypesQrGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickettypes","qr", 3)
	query(sqlQuery, [req.params.tickettypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: tickettypesQrGetAll **********

//********** START: tickettypesQrGetByID **********	
module.exports.tickettypesQrGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickettypes","qr", 4)
	query(sqlQuery, [req.params.tickettypesid, req.params.qrid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: tickettypesQrGetByID **********
    
//********** START: tickettypesTransactionsGetAll **********	
module.exports.tickettypesTransactionsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickettypes","transactions", 3)
	query(sqlQuery, [req.params.tickettypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: tickettypesTransactionsGetAll **********

//********** START: tickettypesTransactionsGetByID **********	
module.exports.tickettypesTransactionsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickettypes","transactions", 4)
	query(sqlQuery, [req.params.tickettypesid, req.params.transactionsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: tickettypesTransactionsGetByID **********
    
//********** START: tickettypesTaxlinesGetAll **********	
module.exports.tickettypesTaxlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickettypes","taxlines", 3)
	query(sqlQuery, [req.params.tickettypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: tickettypesTaxlinesGetAll **********

//********** START: tickettypesTaxlinesGetByID **********	
module.exports.tickettypesTaxlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickettypes","taxlines", 4)
	query(sqlQuery, [req.params.tickettypesid, req.params.taxlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: tickettypesTaxlinesGetByID **********
    
//********** START: tickettypesTicketlinesGetAll **********	
module.exports.tickettypesTicketlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickettypes","ticketlines", 3)
	query(sqlQuery, [req.params.tickettypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: tickettypesTicketlinesGetAll **********

//********** START: tickettypesTicketlinesGetByID **********	
module.exports.tickettypesTicketlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickettypes","ticketlines", 4)
	query(sqlQuery, [req.params.tickettypesid, req.params.ticketlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: tickettypesTicketlinesGetByID **********
    