const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: productkeysInsert **********
		module.exports.productkeysInsert =  (req, res) => {
			let sql = "INSERT INTO productkeys SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productkeysInsert **********
 
		//********** START: productkeysUpdate **********
		module.exports.productkeysUpdate= (req, res) => {
			let sql = "REPLACE INTO productkeys SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productkeysUpdate **********
 
		//********** START: productkeysPatch **********
		module.exports.productkeysPatch= (req, res) => {
			let sql = "UPDATE productkeys SET ? where productID = ?"
			query(sql, [req.body, req.params.productkeysid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productkeysPatch **********
  
		//********** START: productkeysDeleteByID **********
		module.exports.productkeysDeleteByID= (req, res) => {
			let sql = "DELETE FROM productkeys where productID = ?"
			query(sql, req.params.productkeysid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productkeysDeleteByID //**********

		//********** START: productkeysGetAll //**********
		module.exports.productkeysGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "productkeys", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: productkeysGetAll **********
	
		//********** START: productkeysGetByID **********
		module.exports.productkeysGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "productkeys", "", 2)
			query(sqlQuery, [req.params.productkeysid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: productkeysGetByID **********
    