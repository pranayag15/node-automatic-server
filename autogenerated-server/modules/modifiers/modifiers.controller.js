const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: modifiersInsert **********
		module.exports.modifiersInsert =  (req, res) => {
			let sql = "INSERT INTO modifiers SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: modifiersInsert **********
 
		//********** START: modifiersUpdate **********
		module.exports.modifiersUpdate= (req, res) => {
			let sql = "REPLACE INTO modifiers SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: modifiersUpdate **********
 
		//********** START: modifiersPatch **********
		module.exports.modifiersPatch= (req, res) => {
			let sql = "UPDATE modifiers SET ? where productID = ?"
			query(sql, [req.body, req.params.modifiersid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: modifiersPatch **********
  
		//********** START: modifiersDeleteByID **********
		module.exports.modifiersDeleteByID= (req, res) => {
			let sql = "DELETE FROM modifiers where productID = ?"
			query(sql, req.params.modifiersid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: modifiersDeleteByID //**********

		//********** START: modifiersGetAll //**********
		module.exports.modifiersGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "modifiers", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: modifiersGetAll **********
	
		//********** START: modifiersGetByID **********
		module.exports.modifiersGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "modifiers", "", 2)
			query(sqlQuery, [req.params.modifiersid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: modifiersGetByID **********
    
//********** START: modifiersModifiersitemsGetAll **********	
module.exports.modifiersModifiersitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "modifiers","modifiersitems", 3)
	query(sqlQuery, [req.params.modifiersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: modifiersModifiersitemsGetAll **********

//********** START: modifiersModifiersitemsGetByID **********	
module.exports.modifiersModifiersitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "modifiers","modifiersitems", 4)
	query(sqlQuery, [req.params.modifiersid, req.params.modifiersitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: modifiersModifiersitemsGetByID **********
    
//********** START: modifiersModifieruseGetAll **********	
module.exports.modifiersModifieruseGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "modifiers","modifieruse", 3)
	query(sqlQuery, [req.params.modifiersid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: modifiersModifieruseGetAll **********

//********** START: modifiersModifieruseGetByID **********	
module.exports.modifiersModifieruseGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "modifiers","modifieruse", 4)
	query(sqlQuery, [req.params.modifiersid, req.params.modifieruseid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: modifiersModifieruseGetByID **********
    