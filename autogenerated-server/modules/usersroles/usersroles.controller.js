const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: usersrolesInsert **********
		module.exports.usersrolesInsert =  (req, res) => {
			let sql = "INSERT INTO usersroles SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: usersrolesInsert **********
 
		//********** START: usersrolesUpdate **********
		module.exports.usersrolesUpdate= (req, res) => {
			let sql = "REPLACE INTO usersroles SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: usersrolesUpdate **********
 
		//********** START: usersrolesPatch **********
		module.exports.usersrolesPatch= (req, res) => {
			let sql = "UPDATE usersroles SET ? where productID = ?"
			query(sql, [req.body, req.params.usersrolesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: usersrolesPatch **********
  
		//********** START: usersrolesDeleteByID **********
		module.exports.usersrolesDeleteByID= (req, res) => {
			let sql = "DELETE FROM usersroles where productID = ?"
			query(sql, req.params.usersrolesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: usersrolesDeleteByID //**********

		//********** START: usersrolesGetAll //**********
		module.exports.usersrolesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "usersroles", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: usersrolesGetAll **********
	
		//********** START: usersrolesGetByID **********
		module.exports.usersrolesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "usersroles", "", 2)
			query(sqlQuery, [req.params.usersrolesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: usersrolesGetByID **********
    