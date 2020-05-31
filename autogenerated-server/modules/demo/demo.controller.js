const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: demoInsert **********
		module.exports.demoInsert =  (req, res) => {
			let sql = "INSERT INTO demo SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: demoInsert **********
 
		//********** START: demoUpdate **********
		module.exports.demoUpdate= (req, res) => {
			let sql = "REPLACE INTO demo SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: demoUpdate **********
 
		//********** START: demoPatch **********
		module.exports.demoPatch= (req, res) => {
			let sql = "UPDATE demo SET ? where productID = ?"
			query(sql, [req.body, req.params.demoid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: demoPatch **********
  
		//********** START: demoDeleteByID **********
		module.exports.demoDeleteByID= (req, res) => {
			let sql = "DELETE FROM demo where productID = ?"
			query(sql, req.params.demoid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: demoDeleteByID //**********

		//********** START: demoGetAll //**********
		module.exports.demoGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "demo", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: demoGetAll **********
	
		//********** START: demoGetByID **********
		module.exports.demoGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "demo", "", 2)
			query(sqlQuery, [req.params.demoid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: demoGetByID **********
    