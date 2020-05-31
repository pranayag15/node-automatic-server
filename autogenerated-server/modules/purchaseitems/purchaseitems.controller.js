const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: purchaseitemsInsert **********
		module.exports.purchaseitemsInsert =  (req, res) => {
			let sql = "INSERT INTO purchaseitems SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: purchaseitemsInsert **********
 
		//********** START: purchaseitemsUpdate **********
		module.exports.purchaseitemsUpdate= (req, res) => {
			let sql = "REPLACE INTO purchaseitems SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: purchaseitemsUpdate **********
 
		//********** START: purchaseitemsPatch **********
		module.exports.purchaseitemsPatch= (req, res) => {
			let sql = "UPDATE purchaseitems SET ? where productID = ?"
			query(sql, [req.body, req.params.purchaseitemsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: purchaseitemsPatch **********
  
		//********** START: purchaseitemsDeleteByID **********
		module.exports.purchaseitemsDeleteByID= (req, res) => {
			let sql = "DELETE FROM purchaseitems where productID = ?"
			query(sql, req.params.purchaseitemsid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: purchaseitemsDeleteByID //**********

		//********** START: purchaseitemsGetAll //**********
		module.exports.purchaseitemsGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "purchaseitems", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: purchaseitemsGetAll **********
	
		//********** START: purchaseitemsGetByID **********
		module.exports.purchaseitemsGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "purchaseitems", "", 2)
			query(sqlQuery, [req.params.purchaseitemsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: purchaseitemsGetByID **********
    
//********** START: purchaseitemsGrnitemsGetAll **********	
module.exports.purchaseitemsGrnitemsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "purchaseitems","grnitems", 3)
	query(sqlQuery, [req.params.purchaseitemsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: purchaseitemsGrnitemsGetAll **********

//********** START: purchaseitemsGrnitemsGetByID **********	
module.exports.purchaseitemsGrnitemsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "purchaseitems","grnitems", 4)
	query(sqlQuery, [req.params.purchaseitemsid, req.params.grnitemsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: purchaseitemsGrnitemsGetByID **********
    