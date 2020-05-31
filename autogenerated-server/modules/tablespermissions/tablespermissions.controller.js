const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: tablespermissionsInsert **********
		module.exports.tablespermissionsInsert =  (req, res) => {
			let sql = "INSERT INTO tablespermissions SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: tablespermissionsInsert **********
 
		//********** START: tablespermissionsUpdate **********
		module.exports.tablespermissionsUpdate= (req, res) => {
			let sql = "REPLACE INTO tablespermissions SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: tablespermissionsUpdate **********
 
		//********** START: tablespermissionsPatch **********
		module.exports.tablespermissionsPatch= (req, res) => {
			let sql = "UPDATE tablespermissions SET ? where productID = ?"
			query(sql, [req.body, req.params.tablespermissionsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: tablespermissionsPatch **********
  
		//********** START: tablespermissionsDeleteByID **********
		module.exports.tablespermissionsDeleteByID= (req, res) => {
			let sql = "DELETE FROM tablespermissions where productID = ?"
			query(sql, req.params.tablespermissionsid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: tablespermissionsDeleteByID //**********

		//********** START: tablespermissionsGetAll //**********
		module.exports.tablespermissionsGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "tablespermissions", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: tablespermissionsGetAll **********
	
		//********** START: tablespermissionsGetByID **********
		module.exports.tablespermissionsGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "tablespermissions", "", 2)
			query(sqlQuery, [req.params.tablespermissionsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: tablespermissionsGetByID **********
    
//********** START: tablespermissionsRolestablepermissionsGetAll **********	
module.exports.tablespermissionsRolestablepermissionsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tablespermissions","rolestablepermissions", 3)
	query(sqlQuery, [req.params.tablespermissionsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: tablespermissionsRolestablepermissionsGetAll **********

//********** START: tablespermissionsRolestablepermissionsGetByID **********	
module.exports.tablespermissionsRolestablepermissionsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "tablespermissions","rolestablepermissions", 4)
	query(sqlQuery, [req.params.tablespermissionsid, req.params.rolestablepermissionsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: tablespermissionsRolestablepermissionsGetByID **********
    