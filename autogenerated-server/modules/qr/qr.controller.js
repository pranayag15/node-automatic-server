const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: qrInsert **********
		module.exports.qrInsert =  (req, res) => {
			let sql = "INSERT INTO qr SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: qrInsert **********
 
		//********** START: qrUpdate **********
		module.exports.qrUpdate= (req, res) => {
			let sql = "REPLACE INTO qr SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: qrUpdate **********
 
		//********** START: qrPatch **********
		module.exports.qrPatch= (req, res) => {
			let sql = "UPDATE qr SET ? where productID = ?"
			query(sql, [req.body, req.params.qrid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: qrPatch **********
  
		//********** START: qrDeleteByID **********
		module.exports.qrDeleteByID= (req, res) => {
			let sql = "DELETE FROM qr where productID = ?"
			query(sql, req.params.qrid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: qrDeleteByID //**********

		//********** START: qrGetAll //**********
		module.exports.qrGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "qr", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: qrGetAll **********
	
		//********** START: qrGetByID **********
		module.exports.qrGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "qr", "", 2)
			query(sqlQuery, [req.params.qrid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: qrGetByID **********
    