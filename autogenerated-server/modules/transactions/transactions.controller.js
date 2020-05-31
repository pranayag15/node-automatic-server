const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: transactionsInsert **********
		module.exports.transactionsInsert =  (req, res) => {
			let sql = "INSERT INTO transactions SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: transactionsInsert **********
 
		//********** START: transactionsUpdate **********
		module.exports.transactionsUpdate= (req, res) => {
			let sql = "REPLACE INTO transactions SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: transactionsUpdate **********
 
		//********** START: transactionsPatch **********
		module.exports.transactionsPatch= (req, res) => {
			let sql = "UPDATE transactions SET ? where productID = ?"
			query(sql, [req.body, req.params.transactionsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: transactionsPatch **********
  
		//********** START: transactionsDeleteByID **********
		module.exports.transactionsDeleteByID= (req, res) => {
			let sql = "DELETE FROM transactions where productID = ?"
			query(sql, req.params.transactionsid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: transactionsDeleteByID //**********

		//********** START: transactionsGetAll //**********
		module.exports.transactionsGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "transactions", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: transactionsGetAll **********
	
		//********** START: transactionsGetByID **********
		module.exports.transactionsGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "transactions", "", 2)
			query(sqlQuery, [req.params.transactionsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: transactionsGetByID **********
    