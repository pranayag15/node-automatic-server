const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: rolestablepermissionsInsert **********
		module.exports.rolestablepermissionsInsert =  (req, res) => {
			let sql = "INSERT INTO rolestablepermissions SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: rolestablepermissionsInsert **********
 
		//********** START: rolestablepermissionsUpdate **********
		module.exports.rolestablepermissionsUpdate= (req, res) => {
			let sql = "REPLACE INTO rolestablepermissions SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: rolestablepermissionsUpdate **********
 
		//********** START: rolestablepermissionsPatch **********
		module.exports.rolestablepermissionsPatch= (req, res) => {
			let sql = "UPDATE rolestablepermissions SET ? where productID = ?"
			query(sql, [req.body, req.params.rolestablepermissionsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: rolestablepermissionsPatch **********
  
		//********** START: rolestablepermissionsDeleteByID **********
		module.exports.rolestablepermissionsDeleteByID= (req, res) => {
			let sql = "DELETE FROM rolestablepermissions where productID = ?"
			query(sql, req.params.rolestablepermissionsid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: rolestablepermissionsDeleteByID //**********

		//********** START: rolestablepermissionsGetAll //**********
		module.exports.rolestablepermissionsGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "rolestablepermissions", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: rolestablepermissionsGetAll **********
	
		//********** START: rolestablepermissionsGetByID **********
		module.exports.rolestablepermissionsGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "rolestablepermissions", "", 2)
			query(sqlQuery, [req.params.rolestablepermissionsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: rolestablepermissionsGetByID **********
    