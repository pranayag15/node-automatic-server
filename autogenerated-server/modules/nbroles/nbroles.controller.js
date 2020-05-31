const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: nbrolesInsert **********
		module.exports.nbrolesInsert =  (req, res) => {
			let sql = "INSERT INTO nbroles SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: nbrolesInsert **********
 
		//********** START: nbrolesUpdate **********
		module.exports.nbrolesUpdate= (req, res) => {
			let sql = "REPLACE INTO nbroles SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: nbrolesUpdate **********
 
		//********** START: nbrolesPatch **********
		module.exports.nbrolesPatch= (req, res) => {
			let sql = "UPDATE nbroles SET ? where productID = ?"
			query(sql, [req.body, req.params.nbrolesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: nbrolesPatch **********
  
		//********** START: nbrolesDeleteByID **********
		module.exports.nbrolesDeleteByID= (req, res) => {
			let sql = "DELETE FROM nbroles where productID = ?"
			query(sql, req.params.nbrolesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: nbrolesDeleteByID //**********

		//********** START: nbrolesGetAll //**********
		module.exports.nbrolesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "nbroles", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: nbrolesGetAll **********
	
		//********** START: nbrolesGetByID **********
		module.exports.nbrolesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "nbroles", "", 2)
			query(sqlQuery, [req.params.nbrolesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: nbrolesGetByID **********
    
//********** START: nbrolesBusinesspermissionGetAll **********	
module.exports.nbrolesBusinesspermissionGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "nbroles","businesspermission", 3)
	query(sqlQuery, [req.params.nbrolesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: nbrolesBusinesspermissionGetAll **********

//********** START: nbrolesBusinesspermissionGetByID **********	
module.exports.nbrolesBusinesspermissionGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "nbroles","businesspermission", 4)
	query(sqlQuery, [req.params.nbrolesid, req.params.businesspermissionid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: nbrolesBusinesspermissionGetByID **********
    