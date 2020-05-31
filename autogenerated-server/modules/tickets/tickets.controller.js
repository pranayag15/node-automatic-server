const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: ticketsInsert **********
		module.exports.ticketsInsert =  (req, res) => {
			let sql = "INSERT INTO tickets SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: ticketsInsert **********
 
		//********** START: ticketsUpdate **********
		module.exports.ticketsUpdate= (req, res) => {
			let sql = "REPLACE INTO tickets SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: ticketsUpdate **********
 
		//********** START: ticketsPatch **********
		module.exports.ticketsPatch= (req, res) => {
			let sql = "UPDATE tickets SET ? where productID = ?"
			query(sql, [req.body, req.params.ticketsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: ticketsPatch **********
  
		//********** START: ticketsDeleteByID **********
		module.exports.ticketsDeleteByID= (req, res) => {
			let sql = "DELETE FROM tickets where productID = ?"
			query(sql, req.params.ticketsid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: ticketsDeleteByID //**********

		//********** START: ticketsGetAll //**********
		module.exports.ticketsGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "tickets", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: ticketsGetAll **********
	
		//********** START: ticketsGetByID **********
		module.exports.ticketsGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "tickets", "", 2)
			query(sqlQuery, [req.params.ticketsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: ticketsGetByID **********
    
//********** START: ticketsReceiptsGetAll **********	
module.exports.ticketsReceiptsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickets","receipts", 3)
	query(sqlQuery, [req.params.ticketsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: ticketsReceiptsGetAll **********

//********** START: ticketsReceiptsGetByID **********	
module.exports.ticketsReceiptsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickets","receipts", 4)
	query(sqlQuery, [req.params.ticketsid, req.params.receiptsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: ticketsReceiptsGetByID **********
    
//********** START: ticketsQrGetAll **********	
module.exports.ticketsQrGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickets","qr", 3)
	query(sqlQuery, [req.params.ticketsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: ticketsQrGetAll **********

//********** START: ticketsQrGetByID **********	
module.exports.ticketsQrGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickets","qr", 4)
	query(sqlQuery, [req.params.ticketsid, req.params.qrid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: ticketsQrGetByID **********
    
//********** START: ticketsTransactionsGetAll **********	
module.exports.ticketsTransactionsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickets","transactions", 3)
	query(sqlQuery, [req.params.ticketsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: ticketsTransactionsGetAll **********

//********** START: ticketsTransactionsGetByID **********	
module.exports.ticketsTransactionsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickets","transactions", 4)
	query(sqlQuery, [req.params.ticketsid, req.params.transactionsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: ticketsTransactionsGetByID **********
    
//********** START: ticketsTaxlinesGetAll **********	
module.exports.ticketsTaxlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickets","taxlines", 3)
	query(sqlQuery, [req.params.ticketsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: ticketsTaxlinesGetAll **********

//********** START: ticketsTaxlinesGetByID **********	
module.exports.ticketsTaxlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickets","taxlines", 4)
	query(sqlQuery, [req.params.ticketsid, req.params.taxlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: ticketsTaxlinesGetByID **********
    
//********** START: ticketsTicketlinesGetAll **********	
module.exports.ticketsTicketlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickets","ticketlines", 3)
	query(sqlQuery, [req.params.ticketsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: ticketsTicketlinesGetAll **********

//********** START: ticketsTicketlinesGetByID **********	
module.exports.ticketsTicketlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tickets","ticketlines", 4)
	query(sqlQuery, [req.params.ticketsid, req.params.ticketlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: ticketsTicketlinesGetByID **********
    