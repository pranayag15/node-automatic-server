const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: uomconversionsInsert **********
		module.exports.uomconversionsInsert =  (req, res) => {
			let sql = "INSERT INTO uomconversions SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: uomconversionsInsert **********
 
		//********** START: uomconversionsUpdate **********
		module.exports.uomconversionsUpdate= (req, res) => {
			let sql = "REPLACE INTO uomconversions SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: uomconversionsUpdate **********
 
		//********** START: uomconversionsPatch **********
		module.exports.uomconversionsPatch= (req, res) => {
			let sql = "UPDATE uomconversions SET ? where productID = ?"
			query(sql, [req.body, req.params.uomconversionsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: uomconversionsPatch **********
  
		//********** START: uomconversionsDeleteByID **********
		module.exports.uomconversionsDeleteByID= (req, res) => {
			let sql = "DELETE FROM uomconversions where productID = ?"
			query(sql, req.params.uomconversionsid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: uomconversionsDeleteByID //**********

		//********** START: uomconversionsGetAll //**********
		module.exports.uomconversionsGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "uomconversions", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: uomconversionsGetAll **********
	
		//********** START: uomconversionsGetByID **********
		module.exports.uomconversionsGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "uomconversions", "", 2)
			query(sqlQuery, [req.params.uomconversionsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: uomconversionsGetByID **********
    