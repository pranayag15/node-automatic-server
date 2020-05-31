const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: nroleuserslocationsInsert **********
		module.exports.nroleuserslocationsInsert =  (req, res) => {
			let sql = "INSERT INTO nroleuserslocations SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: nroleuserslocationsInsert **********
 
		//********** START: nroleuserslocationsUpdate **********
		module.exports.nroleuserslocationsUpdate= (req, res) => {
			let sql = "REPLACE INTO nroleuserslocations SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: nroleuserslocationsUpdate **********
 
		//********** START: nroleuserslocationsPatch **********
		module.exports.nroleuserslocationsPatch= (req, res) => {
			let sql = "UPDATE nroleuserslocations SET ? where productID = ?"
			query(sql, [req.body, req.params.nroleuserslocationsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: nroleuserslocationsPatch **********
  
		//********** START: nroleuserslocationsDeleteByID **********
		module.exports.nroleuserslocationsDeleteByID= (req, res) => {
			let sql = "DELETE FROM nroleuserslocations where productID = ?"
			query(sql, req.params.nroleuserslocationsid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: nroleuserslocationsDeleteByID //**********

		//********** START: nroleuserslocationsGetAll //**********
		module.exports.nroleuserslocationsGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "nroleuserslocations", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: nroleuserslocationsGetAll **********
	
		//********** START: nroleuserslocationsGetByID **********
		module.exports.nroleuserslocationsGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "nroleuserslocations", "", 2)
			query(sqlQuery, [req.params.nroleuserslocationsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: nroleuserslocationsGetByID **********
    