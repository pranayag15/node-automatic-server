const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: attributeuseInsert **********
		module.exports.attributeuseInsert =  (req, res) => {
			let sql = "INSERT INTO attributeuse SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributeuseInsert **********
 
		//********** START: attributeuseUpdate **********
		module.exports.attributeuseUpdate= (req, res) => {
			let sql = "REPLACE INTO attributeuse SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributeuseUpdate **********
 
		//********** START: attributeusePatch **********
		module.exports.attributeusePatch= (req, res) => {
			let sql = "UPDATE attributeuse SET ? where productID = ?"
			query(sql, [req.body, req.params.attributeuseid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributeusePatch **********
  
		//********** START: attributeuseDeleteByID **********
		module.exports.attributeuseDeleteByID= (req, res) => {
			let sql = "DELETE FROM attributeuse where productID = ?"
			query(sql, req.params.attributeuseid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributeuseDeleteByID //**********

		//********** START: attributeuseGetAll //**********
		module.exports.attributeuseGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "attributeuse", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributeuseGetAll **********
	
		//********** START: attributeuseGetByID **********
		module.exports.attributeuseGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "attributeuse", "", 2)
			query(sqlQuery, [req.params.attributeuseid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: attributeuseGetByID **********
    