const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: attributevaluesInsert **********
		module.exports.attributevaluesInsert =  (req, res) => {
			let sql = "INSERT INTO attributevalues SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributevaluesInsert **********
 
		//********** START: attributevaluesUpdate **********
		module.exports.attributevaluesUpdate= (req, res) => {
			let sql = "REPLACE INTO attributevalues SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributevaluesUpdate **********
 
		//********** START: attributevaluesPatch **********
		module.exports.attributevaluesPatch= (req, res) => {
			let sql = "UPDATE attributevalues SET ? where productID = ?"
			query(sql, [req.body, req.params.attributevaluesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributevaluesPatch **********
  
		//********** START: attributevaluesDeleteByID **********
		module.exports.attributevaluesDeleteByID= (req, res) => {
			let sql = "DELETE FROM attributevalues where productID = ?"
			query(sql, req.params.attributevaluesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributevaluesDeleteByID //**********

		//********** START: attributevaluesGetAll //**********
		module.exports.attributevaluesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "attributevalues", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributevaluesGetAll **********
	
		//********** START: attributevaluesGetByID **********
		module.exports.attributevaluesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "attributevalues", "", 2)
			query(sqlQuery, [req.params.attributevaluesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: attributevaluesGetByID **********
    