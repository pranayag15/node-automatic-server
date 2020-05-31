const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: grnitemsInsert **********
		module.exports.grnitemsInsert =  (req, res) => {
			let sql = "INSERT INTO grnitems SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: grnitemsInsert **********
 
		//********** START: grnitemsUpdate **********
		module.exports.grnitemsUpdate= (req, res) => {
			let sql = "REPLACE INTO grnitems SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: grnitemsUpdate **********
 
		//********** START: grnitemsPatch **********
		module.exports.grnitemsPatch= (req, res) => {
			let sql = "UPDATE grnitems SET ? where productID = ?"
			query(sql, [req.body, req.params.grnitemsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: grnitemsPatch **********
  
		//********** START: grnitemsDeleteByID **********
		module.exports.grnitemsDeleteByID= (req, res) => {
			let sql = "DELETE FROM grnitems where productID = ?"
			query(sql, req.params.grnitemsid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: grnitemsDeleteByID //**********

		//********** START: grnitemsGetAll //**********
		module.exports.grnitemsGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "grnitems", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: grnitemsGetAll **********
	
		//********** START: grnitemsGetByID **********
		module.exports.grnitemsGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "grnitems", "", 2)
			query(sqlQuery, [req.params.grnitemsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: grnitemsGetByID **********
    