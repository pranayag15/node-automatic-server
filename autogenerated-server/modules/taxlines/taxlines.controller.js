const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: taxlinesInsert **********
		module.exports.taxlinesInsert =  (req, res) => {
			let sql = "INSERT INTO taxlines SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: taxlinesInsert **********
 
		//********** START: taxlinesUpdate **********
		module.exports.taxlinesUpdate= (req, res) => {
			let sql = "REPLACE INTO taxlines SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: taxlinesUpdate **********
 
		//********** START: taxlinesPatch **********
		module.exports.taxlinesPatch= (req, res) => {
			let sql = "UPDATE taxlines SET ? where productID = ?"
			query(sql, [req.body, req.params.taxlinesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: taxlinesPatch **********
  
		//********** START: taxlinesDeleteByID **********
		module.exports.taxlinesDeleteByID= (req, res) => {
			let sql = "DELETE FROM taxlines where productID = ?"
			query(sql, req.params.taxlinesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: taxlinesDeleteByID //**********

		//********** START: taxlinesGetAll //**********
		module.exports.taxlinesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "taxlines", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: taxlinesGetAll **********
	
		//********** START: taxlinesGetByID **********
		module.exports.taxlinesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "taxlines", "", 2)
			query(sqlQuery, [req.params.taxlinesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: taxlinesGetByID **********
    