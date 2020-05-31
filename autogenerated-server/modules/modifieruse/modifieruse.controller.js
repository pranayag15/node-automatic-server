const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: modifieruseInsert **********
		module.exports.modifieruseInsert =  (req, res) => {
			let sql = "INSERT INTO modifieruse SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: modifieruseInsert **********
 
		//********** START: modifieruseUpdate **********
		module.exports.modifieruseUpdate= (req, res) => {
			let sql = "REPLACE INTO modifieruse SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: modifieruseUpdate **********
 
		//********** START: modifierusePatch **********
		module.exports.modifierusePatch= (req, res) => {
			let sql = "UPDATE modifieruse SET ? where productID = ?"
			query(sql, [req.body, req.params.modifieruseid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: modifierusePatch **********
  
		//********** START: modifieruseDeleteByID **********
		module.exports.modifieruseDeleteByID= (req, res) => {
			let sql = "DELETE FROM modifieruse where productID = ?"
			query(sql, req.params.modifieruseid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: modifieruseDeleteByID //**********

		//********** START: modifieruseGetAll //**********
		module.exports.modifieruseGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "modifieruse", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: modifieruseGetAll **********
	
		//********** START: modifieruseGetByID **********
		module.exports.modifieruseGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "modifieruse", "", 2)
			query(sqlQuery, [req.params.modifieruseid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: modifieruseGetByID **********
    