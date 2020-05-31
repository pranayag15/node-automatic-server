const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: stockcurrentInsert **********
		module.exports.stockcurrentInsert =  (req, res) => {
			let sql = "INSERT INTO stockcurrent SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: stockcurrentInsert **********
 
		//********** START: stockcurrentUpdate **********
		module.exports.stockcurrentUpdate= (req, res) => {
			let sql = "REPLACE INTO stockcurrent SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: stockcurrentUpdate **********
 
		//********** START: stockcurrentPatch **********
		module.exports.stockcurrentPatch= (req, res) => {
			let sql = "UPDATE stockcurrent SET ? where productID = ?"
			query(sql, [req.body, req.params.stockcurrentid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: stockcurrentPatch **********
  
		//********** START: stockcurrentDeleteByID **********
		module.exports.stockcurrentDeleteByID= (req, res) => {
			let sql = "DELETE FROM stockcurrent where productID = ?"
			query(sql, req.params.stockcurrentid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: stockcurrentDeleteByID //**********

		//********** START: stockcurrentGetAll //**********
		module.exports.stockcurrentGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "stockcurrent", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: stockcurrentGetAll **********
	
		//********** START: stockcurrentGetByID **********
		module.exports.stockcurrentGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "stockcurrent", "", 2)
			query(sqlQuery, [req.params.stockcurrentid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: stockcurrentGetByID **********
    