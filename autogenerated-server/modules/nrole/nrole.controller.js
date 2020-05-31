const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: nroleInsert **********
		module.exports.nroleInsert =  (req, res) => {
			let sql = "INSERT INTO nrole SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: nroleInsert **********
 
		//********** START: nroleUpdate **********
		module.exports.nroleUpdate= (req, res) => {
			let sql = "REPLACE INTO nrole SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: nroleUpdate **********
 
		//********** START: nrolePatch **********
		module.exports.nrolePatch= (req, res) => {
			let sql = "UPDATE nrole SET ? where productID = ?"
			query(sql, [req.body, req.params.nroleid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: nrolePatch **********
  
		//********** START: nroleDeleteByID **********
		module.exports.nroleDeleteByID= (req, res) => {
			let sql = "DELETE FROM nrole where productID = ?"
			query(sql, req.params.nroleid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: nroleDeleteByID //**********

		//********** START: nroleGetAll //**********
		module.exports.nroleGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "nrole", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: nroleGetAll **********
	
		//********** START: nroleGetByID **********
		module.exports.nroleGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "nrole", "", 2)
			query(sqlQuery, [req.params.nroleid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: nroleGetByID **********
    
//********** START: nroleNroleuserslocationsGetAll **********	
module.exports.nroleNroleuserslocationsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "nrole","nroleuserslocations", 3)
	query(sqlQuery, [req.params.nroleid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: nroleNroleuserslocationsGetAll **********

//********** START: nroleNroleuserslocationsGetByID **********	
module.exports.nroleNroleuserslocationsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "nrole","nroleuserslocations", 4)
	query(sqlQuery, [req.params.nroleid, req.params.nroleuserslocationsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: nroleNroleuserslocationsGetByID **********
    