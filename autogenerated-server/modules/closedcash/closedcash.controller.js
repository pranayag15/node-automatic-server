const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: closedcashInsert **********
		module.exports.closedcashInsert =  (req, res) => {
			let sql = "INSERT INTO closedcash SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: closedcashInsert **********
 
		//********** START: closedcashUpdate **********
		module.exports.closedcashUpdate= (req, res) => {
			let sql = "REPLACE INTO closedcash SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: closedcashUpdate **********
 
		//********** START: closedcashPatch **********
		module.exports.closedcashPatch= (req, res) => {
			let sql = "UPDATE closedcash SET ? where productID = ?"
			query(sql, [req.body, req.params.closedcashid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: closedcashPatch **********
  
		//********** START: closedcashDeleteByID **********
		module.exports.closedcashDeleteByID= (req, res) => {
			let sql = "DELETE FROM closedcash where productID = ?"
			query(sql, req.params.closedcashid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: closedcashDeleteByID //**********

		//********** START: closedcashGetAll //**********
		module.exports.closedcashGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "closedcash", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: closedcashGetAll **********
	
		//********** START: closedcashGetByID **********
		module.exports.closedcashGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "closedcash", "", 2)
			query(sqlQuery, [req.params.closedcashid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: closedcashGetByID **********
    