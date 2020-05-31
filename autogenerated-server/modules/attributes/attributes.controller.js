const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: attributesInsert **********
		module.exports.attributesInsert =  (req, res) => {
			let sql = "INSERT INTO attributes SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributesInsert **********
 
		//********** START: attributesUpdate **********
		module.exports.attributesUpdate= (req, res) => {
			let sql = "REPLACE INTO attributes SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributesUpdate **********
 
		//********** START: attributesPatch **********
		module.exports.attributesPatch= (req, res) => {
			let sql = "UPDATE attributes SET ? where productID = ?"
			query(sql, [req.body, req.params.attributesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributesPatch **********
  
		//********** START: attributesDeleteByID **********
		module.exports.attributesDeleteByID= (req, res) => {
			let sql = "DELETE FROM attributes where productID = ?"
			query(sql, req.params.attributesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributesDeleteByID //**********

		//********** START: attributesGetAll //**********
		module.exports.attributesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "attributes", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributesGetAll **********
	
		//********** START: attributesGetByID **********
		module.exports.attributesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "attributes", "", 2)
			query(sqlQuery, [req.params.attributesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: attributesGetByID **********
    
//********** START: attributesAttributeinstancesGetAll **********	
module.exports.attributesAttributeinstancesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributes","attributeinstances", 3)
	query(sqlQuery, [req.params.attributesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: attributesAttributeinstancesGetAll **********

//********** START: attributesAttributeinstancesGetByID **********	
module.exports.attributesAttributeinstancesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributes","attributeinstances", 4)
	query(sqlQuery, [req.params.attributesid, req.params.attributeinstancesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: attributesAttributeinstancesGetByID **********
    
//********** START: attributesAttributeuseGetAll **********	
module.exports.attributesAttributeuseGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributes","attributeuse", 3)
	query(sqlQuery, [req.params.attributesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: attributesAttributeuseGetAll **********

//********** START: attributesAttributeuseGetByID **********	
module.exports.attributesAttributeuseGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributes","attributeuse", 4)
	query(sqlQuery, [req.params.attributesid, req.params.attributeuseid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: attributesAttributeuseGetByID **********
    
//********** START: attributesAttributevaluesGetAll **********	
module.exports.attributesAttributevaluesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributes","attributevalues", 3)
	query(sqlQuery, [req.params.attributesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: attributesAttributevaluesGetAll **********

//********** START: attributesAttributevaluesGetByID **********	
module.exports.attributesAttributevaluesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "attributes","attributevalues", 4)
	query(sqlQuery, [req.params.attributesid, req.params.attributevaluesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: attributesAttributevaluesGetByID **********
    