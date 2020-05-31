const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: ticketlinesInsert **********
		module.exports.ticketlinesInsert =  (req, res) => {
			let sql = "INSERT INTO ticketlines SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: ticketlinesInsert **********
 
		//********** START: ticketlinesUpdate **********
		module.exports.ticketlinesUpdate= (req, res) => {
			let sql = "REPLACE INTO ticketlines SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: ticketlinesUpdate **********
 
		//********** START: ticketlinesPatch **********
		module.exports.ticketlinesPatch= (req, res) => {
			let sql = "UPDATE ticketlines SET ? where productID = ?"
			query(sql, [req.body, req.params.ticketlinesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: ticketlinesPatch **********
  
		//********** START: ticketlinesDeleteByID **********
		module.exports.ticketlinesDeleteByID= (req, res) => {
			let sql = "DELETE FROM ticketlines where productID = ?"
			query(sql, req.params.ticketlinesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: ticketlinesDeleteByID //**********

		//********** START: ticketlinesGetAll //**********
		module.exports.ticketlinesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "ticketlines", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: ticketlinesGetAll **********
	
		//********** START: ticketlinesGetByID **********
		module.exports.ticketlinesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "ticketlines", "", 2)
			query(sqlQuery, [req.params.ticketlinesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: ticketlinesGetByID **********
    