const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: businesspermissionInsert **********
		module.exports.businesspermissionInsert =  (req, res) => {
			let sql = "INSERT INTO businesspermission SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: businesspermissionInsert **********
 
		//********** START: businesspermissionUpdate **********
		module.exports.businesspermissionUpdate= (req, res) => {
			let sql = "REPLACE INTO businesspermission SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: businesspermissionUpdate **********
 
		//********** START: businesspermissionPatch **********
		module.exports.businesspermissionPatch= (req, res) => {
			let sql = "UPDATE businesspermission SET ? where productID = ?"
			query(sql, [req.body, req.params.businesspermissionid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: businesspermissionPatch **********
  
		//********** START: businesspermissionDeleteByID **********
		module.exports.businesspermissionDeleteByID= (req, res) => {
			let sql = "DELETE FROM businesspermission where productID = ?"
			query(sql, req.params.businesspermissionid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: businesspermissionDeleteByID //**********

		//********** START: businesspermissionGetAll //**********
		module.exports.businesspermissionGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "businesspermission", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: businesspermissionGetAll **********
	
		//********** START: businesspermissionGetByID **********
		module.exports.businesspermissionGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "businesspermission", "", 2)
			query(sqlQuery, [req.params.businesspermissionid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: businesspermissionGetByID **********
    