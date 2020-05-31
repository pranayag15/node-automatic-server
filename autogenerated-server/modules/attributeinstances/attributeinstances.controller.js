const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: attributeinstancesInsert **********
		module.exports.attributeinstancesInsert =  (req, res) => {
			let sql = "INSERT INTO attributeinstances SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributeinstancesInsert **********
 
		//********** START: attributeinstancesUpdate **********
		module.exports.attributeinstancesUpdate= (req, res) => {
			let sql = "REPLACE INTO attributeinstances SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributeinstancesUpdate **********
 
		//********** START: attributeinstancesPatch **********
		module.exports.attributeinstancesPatch= (req, res) => {
			let sql = "UPDATE attributeinstances SET ? where productID = ?"
			query(sql, [req.body, req.params.attributeinstancesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributeinstancesPatch **********
  
		//********** START: attributeinstancesDeleteByID **********
		module.exports.attributeinstancesDeleteByID= (req, res) => {
			let sql = "DELETE FROM attributeinstances where productID = ?"
			query(sql, req.params.attributeinstancesid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributeinstancesDeleteByID //**********

		//********** START: attributeinstancesGetAll //**********
		module.exports.attributeinstancesGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "attributeinstances", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: attributeinstancesGetAll **********
	
		//********** START: attributeinstancesGetByID **********
		module.exports.attributeinstancesGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "attributeinstances", "", 2)
			query(sqlQuery, [req.params.attributeinstancesid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: attributeinstancesGetByID **********
    