const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: taxesInsert **********
		module.exports.taxesInsert =  (req, res) => {
			let sql = "INSERT INTO taxes SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: taxesInsert **********
 
		//********** START: taxesUpdate **********
		module.exports.taxesUpdate= (req, res) => {
			let sql = "REPLACE INTO taxes SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: taxesUpdate **********
 
		//********** START: taxesPatch **********
		module.exports.taxesPatch= (req, res) => {
			let sql = "UPDATE taxes SET ? where productID = ?"
			query(sql, [req.body, req.params.taxesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: taxesPatch **********
  
		//********** START: taxesDeleteByID **********
		module.exports.taxesDeleteByID= (req, res) => {
			let sql = "DELETE FROM taxes where productID = ?"
			query(sql, req.params.taxesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: taxesDeleteByID //**********

		//********** START: taxesGetAll //**********
		module.exports.taxesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "taxes", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: taxesGetAll **********
	
		//********** START: taxesGetByID **********
		module.exports.taxesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "taxes", "", 2)
			query(sqlQuery, [req.params.taxesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: taxesGetByID **********
    
//********** START: taxesProductstaxesGetAll **********	
module.exports.taxesProductstaxesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "taxes","productstaxes", 3)
	query(sqlQuery, [req.params.taxesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: taxesProductstaxesGetAll **********

//********** START: taxesProductstaxesGetByID **********	
module.exports.taxesProductstaxesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "taxes","productstaxes", 4)
	query(sqlQuery, [req.params.taxesid, req.params.productstaxesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: taxesProductstaxesGetByID **********
    
//********** START: taxesTaxlinesGetAll **********	
module.exports.taxesTaxlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "taxes","taxlines", 3)
	query(sqlQuery, [req.params.taxesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: taxesTaxlinesGetAll **********

//********** START: taxesTaxlinesGetByID **********	
module.exports.taxesTaxlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "taxes","taxlines", 4)
	query(sqlQuery, [req.params.taxesid, req.params.taxlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: taxesTaxlinesGetByID **********
    