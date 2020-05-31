const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: mitemsInsert **********
		module.exports.mitemsInsert =  (req, res) => {
			let sql = "INSERT INTO mitems SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: mitemsInsert **********
 
		//********** START: mitemsUpdate **********
		module.exports.mitemsUpdate= (req, res) => {
			let sql = "REPLACE INTO mitems SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: mitemsUpdate **********
 
		//********** START: mitemsPatch **********
		module.exports.mitemsPatch= (req, res) => {
			let sql = "UPDATE mitems SET ? where productID = ?"
			query(sql, [req.body, req.params.mitemsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: mitemsPatch **********
  
		//********** START: mitemsDeleteByID **********
		module.exports.mitemsDeleteByID= (req, res) => {
			let sql = "DELETE FROM mitems where productID = ?"
			query(sql, req.params.mitemsid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: mitemsDeleteByID //**********

		//********** START: mitemsGetAll //**********
		module.exports.mitemsGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "mitems", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: mitemsGetAll **********
	
		//********** START: mitemsGetByID **********
		module.exports.mitemsGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "mitems", "", 2)
			query(sqlQuery, [req.params.mitemsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: mitemsGetByID **********
    