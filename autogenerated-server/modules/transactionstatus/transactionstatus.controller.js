const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: transactionstatusInsert **********
		module.exports.transactionstatusInsert =  (req, res) => {
			let sql = "INSERT INTO transactionstatus SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: transactionstatusInsert **********
 
		//********** START: transactionstatusUpdate **********
		module.exports.transactionstatusUpdate= (req, res) => {
			let sql = "REPLACE INTO transactionstatus SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: transactionstatusUpdate **********
 
		//********** START: transactionstatusPatch **********
		module.exports.transactionstatusPatch= (req, res) => {
			let sql = "UPDATE transactionstatus SET ? where productID = ?"
			query(sql, [req.body, req.params.transactionstatusid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: transactionstatusPatch **********
  
		//********** START: transactionstatusDeleteByID **********
		module.exports.transactionstatusDeleteByID= (req, res) => {
			let sql = "DELETE FROM transactionstatus where productID = ?"
			query(sql, req.params.transactionstatusid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: transactionstatusDeleteByID //**********

		//********** START: transactionstatusGetAll //**********
		module.exports.transactionstatusGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "transactionstatus", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: transactionstatusGetAll **********
	
		//********** START: transactionstatusGetByID **********
		module.exports.transactionstatusGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "transactionstatus", "", 2)
			query(sqlQuery, [req.params.transactionstatusid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: transactionstatusGetByID **********
    
//********** START: transactionstatusTransactionsGetAll **********	
module.exports.transactionstatusTransactionsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "transactionstatus","transactions", 3)
	query(sqlQuery, [req.params.transactionstatusid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: transactionstatusTransactionsGetAll **********

//********** START: transactionstatusTransactionsGetByID **********	
module.exports.transactionstatusTransactionsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "transactionstatus","transactions", 4)
	query(sqlQuery, [req.params.transactionstatusid, req.params.transactionsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: transactionstatusTransactionsGetByID **********
    