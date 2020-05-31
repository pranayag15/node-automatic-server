const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: receiptsInsert **********
		module.exports.receiptsInsert =  (req, res) => {
			let sql = "INSERT INTO receipts SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: receiptsInsert **********
 
		//********** START: receiptsUpdate **********
		module.exports.receiptsUpdate= (req, res) => {
			let sql = "REPLACE INTO receipts SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: receiptsUpdate **********
 
		//********** START: receiptsPatch **********
		module.exports.receiptsPatch= (req, res) => {
			let sql = "UPDATE receipts SET ? where productID = ?"
			query(sql, [req.body, req.params.receiptsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: receiptsPatch **********
  
		//********** START: receiptsDeleteByID **********
		module.exports.receiptsDeleteByID= (req, res) => {
			let sql = "DELETE FROM receipts where productID = ?"
			query(sql, req.params.receiptsid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: receiptsDeleteByID //**********

		//********** START: receiptsGetAll //**********
		module.exports.receiptsGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "receipts", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: receiptsGetAll **********
	
		//********** START: receiptsGetByID **********
		module.exports.receiptsGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "receipts", "", 2)
			query(sqlQuery, [req.params.receiptsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: receiptsGetByID **********
    
//********** START: receiptsQrGetAll **********	
module.exports.receiptsQrGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "receipts","qr", 3)
	query(sqlQuery, [req.params.receiptsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: receiptsQrGetAll **********

//********** START: receiptsQrGetByID **********	
module.exports.receiptsQrGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "receipts","qr", 4)
	query(sqlQuery, [req.params.receiptsid, req.params.qrid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: receiptsQrGetByID **********
    
//********** START: receiptsTransactionsGetAll **********	
module.exports.receiptsTransactionsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "receipts","transactions", 3)
	query(sqlQuery, [req.params.receiptsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: receiptsTransactionsGetAll **********

//********** START: receiptsTransactionsGetByID **********	
module.exports.receiptsTransactionsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "receipts","transactions", 4)
	query(sqlQuery, [req.params.receiptsid, req.params.transactionsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: receiptsTransactionsGetByID **********
    