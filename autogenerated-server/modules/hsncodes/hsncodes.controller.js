const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: hsncodesInsert **********
		module.exports.hsncodesInsert =  (req, res) => {
			let sql = "INSERT INTO hsncodes SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: hsncodesInsert **********
 
		//********** START: hsncodesUpdate **********
		module.exports.hsncodesUpdate= (req, res) => {
			let sql = "REPLACE INTO hsncodes SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: hsncodesUpdate **********
 
		//********** START: hsncodesPatch **********
		module.exports.hsncodesPatch= (req, res) => {
			let sql = "UPDATE hsncodes SET ? where productID = ?"
			query(sql, [req.body, req.params.hsncodesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: hsncodesPatch **********
  
		//********** START: hsncodesDeleteByID **********
		module.exports.hsncodesDeleteByID= (req, res) => {
			let sql = "DELETE FROM hsncodes where productID = ?"
			query(sql, req.params.hsncodesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: hsncodesDeleteByID //**********

		//********** START: hsncodesGetAll //**********
		module.exports.hsncodesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "hsncodes", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: hsncodesGetAll **********
	
		//********** START: hsncodesGetByID **********
		module.exports.hsncodesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "hsncodes", "", 2)
			query(sqlQuery, [req.params.hsncodesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: hsncodesGetByID **********
    