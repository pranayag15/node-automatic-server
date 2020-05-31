const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: transactiontypesInsert **********
		module.exports.transactiontypesInsert =  (req, res) => {
			let sql = "INSERT INTO transactiontypes SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: transactiontypesInsert **********
 
		//********** START: transactiontypesUpdate **********
		module.exports.transactiontypesUpdate= (req, res) => {
			let sql = "REPLACE INTO transactiontypes SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: transactiontypesUpdate **********
 
		//********** START: transactiontypesPatch **********
		module.exports.transactiontypesPatch= (req, res) => {
			let sql = "UPDATE transactiontypes SET ? where productID = ?"
			query(sql, [req.body, req.params.transactiontypesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: transactiontypesPatch **********
  
		//********** START: transactiontypesDeleteByID **********
		module.exports.transactiontypesDeleteByID= (req, res) => {
			let sql = "DELETE FROM transactiontypes where productID = ?"
			query(sql, req.params.transactiontypesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: transactiontypesDeleteByID //**********

		//********** START: transactiontypesGetAll //**********
		module.exports.transactiontypesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "transactiontypes", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: transactiontypesGetAll **********
	
		//********** START: transactiontypesGetByID **********
		module.exports.transactiontypesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "transactiontypes", "", 2)
			query(sqlQuery, [req.params.transactiontypesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: transactiontypesGetByID **********
    
//********** START: transactiontypesTransactionsGetAll **********	
module.exports.transactiontypesTransactionsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "transactiontypes","transactions", 3)
	query(sqlQuery, [req.params.transactiontypesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: transactiontypesTransactionsGetAll **********

//********** START: transactiontypesTransactionsGetByID **********	
module.exports.transactiontypesTransactionsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "transactiontypes","transactions", 4)
	query(sqlQuery, [req.params.transactiontypesid, req.params.transactionsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: transactiontypesTransactionsGetByID **********
    