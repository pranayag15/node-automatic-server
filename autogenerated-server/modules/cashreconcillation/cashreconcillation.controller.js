const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: cashreconcillationInsert **********
		module.exports.cashreconcillationInsert =  (req, res) => {
			let sql = "INSERT INTO cashreconcillation SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: cashreconcillationInsert **********
 
		//********** START: cashreconcillationUpdate **********
		module.exports.cashreconcillationUpdate= (req, res) => {
			let sql = "REPLACE INTO cashreconcillation SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: cashreconcillationUpdate **********
 
		//********** START: cashreconcillationPatch **********
		module.exports.cashreconcillationPatch= (req, res) => {
			let sql = "UPDATE cashreconcillation SET ? where productID = ?"
			query(sql, [req.body, req.params.cashreconcillationid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: cashreconcillationPatch **********
  
		//********** START: cashreconcillationDeleteByID **********
		module.exports.cashreconcillationDeleteByID= (req, res) => {
			let sql = "DELETE FROM cashreconcillation where productID = ?"
			query(sql, req.params.cashreconcillationid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: cashreconcillationDeleteByID //**********

		//********** START: cashreconcillationGetAll //**********
		module.exports.cashreconcillationGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "cashreconcillation", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: cashreconcillationGetAll **********
	
		//********** START: cashreconcillationGetByID **********
		module.exports.cashreconcillationGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "cashreconcillation", "", 2)
			query(sqlQuery, [req.params.cashreconcillationid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: cashreconcillationGetByID **********
    