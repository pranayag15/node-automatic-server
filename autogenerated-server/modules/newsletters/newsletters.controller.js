const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: newslettersInsert **********
		module.exports.newslettersInsert =  (req, res) => {
			let sql = "INSERT INTO newsletters SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: newslettersInsert **********
 
		//********** START: newslettersUpdate **********
		module.exports.newslettersUpdate= (req, res) => {
			let sql = "REPLACE INTO newsletters SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: newslettersUpdate **********
 
		//********** START: newslettersPatch **********
		module.exports.newslettersPatch= (req, res) => {
			let sql = "UPDATE newsletters SET ? where productID = ?"
			query(sql, [req.body, req.params.newslettersid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: newslettersPatch **********
  
		//********** START: newslettersDeleteByID **********
		module.exports.newslettersDeleteByID= (req, res) => {
			let sql = "DELETE FROM newsletters where productID = ?"
			query(sql, req.params.newslettersid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: newslettersDeleteByID //**********

		//********** START: newslettersGetAll //**********
		module.exports.newslettersGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "newsletters", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: newslettersGetAll **********
	
		//********** START: newslettersGetByID **********
		module.exports.newslettersGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "newsletters", "", 2)
			query(sqlQuery, [req.params.newslettersid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: newslettersGetByID **********
    