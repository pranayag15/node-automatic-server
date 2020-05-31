const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: modifiersitemsInsert **********
		module.exports.modifiersitemsInsert =  (req, res) => {
			let sql = "INSERT INTO modifiersitems SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: modifiersitemsInsert **********
 
		//********** START: modifiersitemsUpdate **********
		module.exports.modifiersitemsUpdate= (req, res) => {
			let sql = "REPLACE INTO modifiersitems SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: modifiersitemsUpdate **********
 
		//********** START: modifiersitemsPatch **********
		module.exports.modifiersitemsPatch= (req, res) => {
			let sql = "UPDATE modifiersitems SET ? where productID = ?"
			query(sql, [req.body, req.params.modifiersitemsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: modifiersitemsPatch **********
  
		//********** START: modifiersitemsDeleteByID **********
		module.exports.modifiersitemsDeleteByID= (req, res) => {
			let sql = "DELETE FROM modifiersitems where productID = ?"
			query(sql, req.params.modifiersitemsid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: modifiersitemsDeleteByID //**********

		//********** START: modifiersitemsGetAll //**********
		module.exports.modifiersitemsGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "modifiersitems", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: modifiersitemsGetAll **********
	
		//********** START: modifiersitemsGetByID **********
		module.exports.modifiersitemsGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "modifiersitems", "", 2)
			query(sqlQuery, [req.params.modifiersitemsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: modifiersitemsGetByID **********
    