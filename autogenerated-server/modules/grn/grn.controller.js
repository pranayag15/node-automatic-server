const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: grnInsert **********
		module.exports.grnInsert =  (req, res) => {
			let sql = "INSERT INTO grn SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: grnInsert **********
 
		//********** START: grnUpdate **********
		module.exports.grnUpdate= (req, res) => {
			let sql = "REPLACE INTO grn SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: grnUpdate **********
 
		//********** START: grnPatch **********
		module.exports.grnPatch= (req, res) => {
			let sql = "UPDATE grn SET ? where productID = ?"
			query(sql, [req.body, req.params.grnid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: grnPatch **********
  
		//********** START: grnDeleteByID **********
		module.exports.grnDeleteByID= (req, res) => {
			let sql = "DELETE FROM grn where productID = ?"
			query(sql, req.params.grnid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: grnDeleteByID //**********

		//********** START: grnGetAll //**********
		module.exports.grnGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "grn", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: grnGetAll **********
	
		//********** START: grnGetByID **********
		module.exports.grnGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "grn", "", 2)
			query(sqlQuery, [req.params.grnid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: grnGetByID **********
    
//********** START: grnGrnitemsGetAll **********	
module.exports.grnGrnitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "grn","grnitems", 3)
	query(sqlQuery, [req.params.grnid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: grnGrnitemsGetAll **********

//********** START: grnGrnitemsGetByID **********	
module.exports.grnGrnitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "grn","grnitems", 4)
	query(sqlQuery, [req.params.grnid, req.params.grnitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: grnGrnitemsGetByID **********
    