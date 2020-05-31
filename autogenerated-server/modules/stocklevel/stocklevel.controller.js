const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: stocklevelInsert **********
		module.exports.stocklevelInsert =  (req, res) => {
			let sql = "INSERT INTO stocklevel SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: stocklevelInsert **********
 
		//********** START: stocklevelUpdate **********
		module.exports.stocklevelUpdate= (req, res) => {
			let sql = "REPLACE INTO stocklevel SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: stocklevelUpdate **********
 
		//********** START: stocklevelPatch **********
		module.exports.stocklevelPatch= (req, res) => {
			let sql = "UPDATE stocklevel SET ? where productID = ?"
			query(sql, [req.body, req.params.stocklevelid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: stocklevelPatch **********
  
		//********** START: stocklevelDeleteByID **********
		module.exports.stocklevelDeleteByID= (req, res) => {
			let sql = "DELETE FROM stocklevel where productID = ?"
			query(sql, req.params.stocklevelid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: stocklevelDeleteByID //**********

		//********** START: stocklevelGetAll //**********
		module.exports.stocklevelGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "stocklevel", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: stocklevelGetAll **********
	
		//********** START: stocklevelGetByID **********
		module.exports.stocklevelGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "stocklevel", "", 2)
			query(sqlQuery, [req.params.stocklevelid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: stocklevelGetByID **********
    