const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: productstaxesInsert **********
		module.exports.productstaxesInsert =  (req, res) => {
			let sql = "INSERT INTO productstaxes SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productstaxesInsert **********
 
		//********** START: productstaxesUpdate **********
		module.exports.productstaxesUpdate= (req, res) => {
			let sql = "REPLACE INTO productstaxes SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productstaxesUpdate **********
 
		//********** START: productstaxesPatch **********
		module.exports.productstaxesPatch= (req, res) => {
			let sql = "UPDATE productstaxes SET ? where productID = ?"
			query(sql, [req.body, req.params.productstaxesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productstaxesPatch **********
  
		//********** START: productstaxesDeleteByID **********
		module.exports.productstaxesDeleteByID= (req, res) => {
			let sql = "DELETE FROM productstaxes where productID = ?"
			query(sql, req.params.productstaxesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productstaxesDeleteByID //**********

		//********** START: productstaxesGetAll //**********
		module.exports.productstaxesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "productstaxes", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productstaxesGetAll **********
	
		//********** START: productstaxesGetByID **********
		module.exports.productstaxesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "productstaxes", "", 2)
			query(sqlQuery, [req.params.productstaxesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: productstaxesGetByID **********
    