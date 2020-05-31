const {sqlQueryGenerator} = require('../../queryGenerator')
const {query} = require('../../config/db')
  
	    //********** START: uomsInsert **********
		module.exports.uomsInsert =  (req, res) => {
			let sql = "INSERT INTO uoms SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: uomsInsert **********
 
		//********** START: uomsUpdate **********
		module.exports.uomsUpdate= (req, res) => {
			let sql = "REPLACE INTO uoms SET ?"
			query(sql, [req.body]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: uomsUpdate **********
 
		//********** START: uomsPatch **********
		module.exports.uomsPatch= (req, res) => {
			let sql = "UPDATE uoms SET ? where productID = ?"
			query(sql, [req.body, req.params.uomsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: uomsPatch **********
  
		//********** START: uomsDeleteByID **********
		module.exports.uomsDeleteByID= (req, res) => {
			let sql = "DELETE FROM uoms where productID = ?"
			query(sql, req.params.uomsid).then((data) => {
					res.status(200).json(data)
			}).catch((err) => {
					res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: uomsDeleteByID //**********

		//********** START: uomsGetAll //**********
		module.exports.uomsGetAll = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "uoms", "", 1)
			query(sqlQuery, []).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
		//********** END: uomsGetAll **********
	
		//********** START: uomsGetByID **********
		module.exports.uomsGetByID = (req, res) => {
			let sqlQuery = sqlQueryGenerator(req, "uoms", "", 2)
			query(sqlQuery, [req.params.uomsid]).then((data) => {
				res.status(200).json(data)
			}).catch((err) => {
				res.status(400).json({message: 'Bad Request', error: err})
			})
		}
        //********** END: uomsGetByID **********
    
//********** START: uomsUomconversionsGetAll **********	
module.exports.uomsUomconversionsGetAll = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "uoms","uomconversions", 3)
	query(sqlQuery, [req.params.uomsid])
		.then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(400).json({message: 'Bad Request', error: err})
        })
}
//********** END: uomsUomconversionsGetAll **********

//********** START: uomsUomconversionsGetByID **********	
module.exports.uomsUomconversionsGetByID = (req, res) => {
	let sqlQuery = sqlQueryGenerator(req, "uoms","uomconversions", 4)
	query(sqlQuery, [req.params.uomsid, req.params.uomconversionsid])
		.then((data) => {
			res.status(200).json(data)
		}).catch((err) => {
			res.status(400).json({message: 'Bad Request', error: err})
		})
}
//********** END: uomsUomconversionsGetByID **********
    