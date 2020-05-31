const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: taxcategoriesInsert **********
		module.exports.taxcategoriesInsert =  (req, res) => {
			let sql = "INSERT INTO taxcategories SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: taxcategoriesInsert **********
 
		//********** START: taxcategoriesUpdate **********
		module.exports.taxcategoriesUpdate= (req, res) => {
			let sql = "REPLACE INTO taxcategories SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: taxcategoriesUpdate **********
 
		//********** START: taxcategoriesPatch **********
		module.exports.taxcategoriesPatch= (req, res) => {
			let sql = "UPDATE taxcategories SET ? where productID = ?"
			query(sql, [req.body, req.params.taxcategoriesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: taxcategoriesPatch **********
  
		//********** START: taxcategoriesDeleteByID **********
		module.exports.taxcategoriesDeleteByID= (req, res) => {
			let sql = "DELETE FROM taxcategories where productID = ?"
			query(sql, req.params.taxcategoriesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: taxcategoriesDeleteByID //**********

		//********** START: taxcategoriesGetAll //**********
		module.exports.taxcategoriesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "taxcategories", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: taxcategoriesGetAll **********
	
		//********** START: taxcategoriesGetByID **********
		module.exports.taxcategoriesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "taxcategories", "", 2)
			query(sqlQuery, [req.params.taxcategoriesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: taxcategoriesGetByID **********
    
//********** START: taxcategoriesTaxesGetAll **********	
module.exports.taxcategoriesTaxesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "taxcategories","taxes", 3)
	query(sqlQuery, [req.params.taxcategoriesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: taxcategoriesTaxesGetAll **********

//********** START: taxcategoriesTaxesGetByID **********	
module.exports.taxcategoriesTaxesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "taxcategories","taxes", 4)
	query(sqlQuery, [req.params.taxcategoriesid, req.params.taxesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: taxcategoriesTaxesGetByID **********
    
//********** START: taxcategoriesProductstaxesGetAll **********	
module.exports.taxcategoriesProductstaxesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "taxcategories","productstaxes", 3)
	query(sqlQuery, [req.params.taxcategoriesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: taxcategoriesProductstaxesGetAll **********

//********** START: taxcategoriesProductstaxesGetByID **********	
module.exports.taxcategoriesProductstaxesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "taxcategories","productstaxes", 4)
	query(sqlQuery, [req.params.taxcategoriesid, req.params.productstaxesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: taxcategoriesProductstaxesGetByID **********
    
//********** START: taxcategoriesTaxlinesGetAll **********	
module.exports.taxcategoriesTaxlinesGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "taxcategories","taxlines", 3)
	query(sqlQuery, [req.params.taxcategoriesid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: taxcategoriesTaxlinesGetAll **********

//********** START: taxcategoriesTaxlinesGetByID **********	
module.exports.taxcategoriesTaxlinesGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "taxcategories","taxlines", 4)
	query(sqlQuery, [req.params.taxcategoriesid, req.params.taxlinesid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: taxcategoriesTaxlinesGetByID **********
    