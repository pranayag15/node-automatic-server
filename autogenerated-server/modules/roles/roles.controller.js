const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: rolesInsert **********
		module.exports.rolesInsert =  (req, res) => {
			let sql = "INSERT INTO roles SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: rolesInsert **********
 
		//********** START: rolesUpdate **********
		module.exports.rolesUpdate= (req, res) => {
			let sql = "REPLACE INTO roles SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: rolesUpdate **********
 
		//********** START: rolesPatch **********
		module.exports.rolesPatch= (req, res) => {
			let sql = "UPDATE roles SET ? where productID = ?"
			query(sql, [req.body, req.params.rolesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: rolesPatch **********
  
		//********** START: rolesDeleteByID **********
		module.exports.rolesDeleteByID= (req, res) => {
			let sql = "DELETE FROM roles where productID = ?"
			query(sql, req.params.rolesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: rolesDeleteByID //**********

		//********** START: rolesGetAll //**********
		module.exports.rolesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "roles", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: rolesGetAll **********
	
		//********** START: rolesGetByID **********
		module.exports.rolesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "roles", "", 2)
			query(sqlQuery, [req.params.rolesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: rolesGetByID **********
    
//********** START: rolesRolestablepermissionsGetAll **********	
module.exports.rolesRolestablepermissionsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "roles","rolestablepermissions", 3)
	query(sqlQuery, [req.params.rolesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: rolesRolestablepermissionsGetAll **********

//********** START: rolesRolestablepermissionsGetByID **********	
module.exports.rolesRolestablepermissionsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "roles","rolestablepermissions", 4)
	query(sqlQuery, [req.params.rolesid, req.params.rolestablepermissionsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: rolesRolestablepermissionsGetByID **********
    
//********** START: rolesUsersrolesGetAll **********	
module.exports.rolesUsersrolesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "roles","usersroles", 3)
	query(sqlQuery, [req.params.rolesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: rolesUsersrolesGetAll **********

//********** START: rolesUsersrolesGetByID **********	
module.exports.rolesUsersrolesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "roles","usersroles", 4)
	query(sqlQuery, [req.params.rolesid, req.params.usersrolesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: rolesUsersrolesGetByID **********
    