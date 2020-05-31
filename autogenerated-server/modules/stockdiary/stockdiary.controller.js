const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: stockdiaryInsert **********
		module.exports.stockdiaryInsert =  (req, res) => {
			let sql = "INSERT INTO stockdiary SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: stockdiaryInsert **********
 
		//********** START: stockdiaryUpdate **********
		module.exports.stockdiaryUpdate= (req, res) => {
			let sql = "REPLACE INTO stockdiary SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: stockdiaryUpdate **********
 
		//********** START: stockdiaryPatch **********
		module.exports.stockdiaryPatch= (req, res) => {
			let sql = "UPDATE stockdiary SET ? where productID = ?"
			query(sql, [req.body, req.params.stockdiaryid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: stockdiaryPatch **********
  
		//********** START: stockdiaryDeleteByID **********
		module.exports.stockdiaryDeleteByID= (req, res) => {
			let sql = "DELETE FROM stockdiary where productID = ?"
			query(sql, req.params.stockdiaryid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: stockdiaryDeleteByID //**********

		//********** START: stockdiaryGetAll //**********
		module.exports.stockdiaryGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "stockdiary", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: stockdiaryGetAll **********
	
		//********** START: stockdiaryGetByID **********
		module.exports.stockdiaryGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "stockdiary", "", 2)
			query(sqlQuery, [req.params.stockdiaryid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: stockdiaryGetByID **********
    