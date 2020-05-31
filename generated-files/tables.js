module.exports = function(){ 
            return {
	"businesses": {
		"primaryKey": [
			{
				"column_name": "businessID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "businessID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "owner",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "businessName",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			},
			{
				"column_name": "address",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "text",
				"column_type": "text"
			},
			{
				"column_name": "landmark",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "text",
				"column_type": "text"
			},
			{
				"column_name": "latitude",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "decimal",
				"column_type": "decimal(9,0)"
			},
			{
				"column_name": "longitude",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "decimal",
				"column_type": "decimal(9,0)"
			},
			{
				"column_name": "city",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "text",
				"column_type": "text"
			},
			{
				"column_name": "pin",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "pan",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			},
			{
				"column_name": "isDelivery",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			},
			{
				"column_name": "paymentmodes",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(50)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "owner",
				"table_name": "businesses",
				"referenced_column_table": "users",
				"referenced_column_name": "userid",
				"column_type": "varbinary(36)",
				"is_nullable": "YES"
			}
		]
	},
	"orderlines": {
		"primaryKey": [
			{
				"column_name": "orderlineID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "orderlineID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "orderId",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "product",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "qtyAsked",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "unit",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "text",
				"column_type": "text"
			},
			{
				"column_name": "productName",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(50)"
			},
			{
				"column_name": "price",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "totalAmount",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "qtyAvailable",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "isAvailable",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "orderId",
				"table_name": "orderlines",
				"referenced_column_table": "orders",
				"referenced_column_name": "orderID",
				"column_type": "varbinary(36)",
				"is_nullable": "YES"
			},
			{
				"columns_name": "product",
				"table_name": "orderlines",
				"referenced_column_table": "products",
				"referenced_column_name": "productid",
				"column_type": "varbinary(36)",
				"is_nullable": "YES"
			}
		]
	},
	"orders": {
		"primaryKey": [
			{
				"column_name": "orderID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "orderID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "business",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "user",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "netAmount",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "isPaid",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			},
			{
				"column_name": "isCancelled",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			},
			{
				"column_name": "isPaymentRequested",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			},
			{
				"column_name": "isActive",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			},
			{
				"column_name": "datetime",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "datetime",
				"column_type": "datetime"
			},
			{
				"column_name": "isModified",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			},
			{
				"column_name": "isDelivery",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(4)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "business",
				"table_name": "orders",
				"referenced_column_table": "businesses",
				"referenced_column_name": "businessid",
				"column_type": "varbinary(36)",
				"is_nullable": "YES"
			},
			{
				"columns_name": "user",
				"table_name": "orders",
				"referenced_column_table": "users",
				"referenced_column_name": "userid",
				"column_type": "varbinary(36)",
				"is_nullable": "YES"
			}
		]
	},
	"products": {
		"primaryKey": [
			{
				"column_name": "productID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "productID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "business",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "name",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(255)"
			},
			{
				"column_name": "price",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "isActive",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			},
			{
				"column_name": "unit",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "text",
				"column_type": "text"
			},
			{
				"column_name": "stock",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "business",
				"table_name": "products",
				"referenced_column_table": "businesses",
				"referenced_column_name": "businessid",
				"column_type": "varbinary(36)",
				"is_nullable": "YES"
			}
		]
	},
	"transactions": {
		"primaryKey": [
			{
				"column_name": "transactionID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "transactionID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "order",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "transactiontype",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "status",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "referenceID",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(50)"
			},
			{
				"column_name": "description",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "text",
				"column_type": "text"
			},
			{
				"column_name": "ecode",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "amount",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "rpayID",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(50)"
			},
			{
				"column_name": "date",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "datetime",
				"column_type": "datetime"
			},
			{
				"column_name": "invoiceID",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(50)"
			},
			{
				"column_name": "paymentLink",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(50)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "order",
				"table_name": "transactions",
				"referenced_column_table": "orders",
				"referenced_column_name": "orderID",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "transactiontype",
				"table_name": "transactions",
				"referenced_column_table": "transactiontypes",
				"referenced_column_name": "transactiontype",
				"column_type": "int(11)",
				"is_nullable": "YES"
			},
			{
				"columns_name": "status",
				"table_name": "transactions",
				"referenced_column_table": "transactionstatus",
				"referenced_column_name": "id",
				"column_type": "int(11)",
				"is_nullable": "YES"
			}
		]
	},
	"transactionstatus": {
		"primaryKey": [
			{
				"column_name": "id",
				"column_key": "PRI",
				"data_type": "int",
				"column_type": "int(11)"
			}
		],
		"columns": [
			{
				"column_name": "id",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "name",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinytext",
				"column_type": "tinytext"
			}
		],
		"foreignKeys": []
	},
	"transactiontypes": {
		"primaryKey": [
			{
				"column_name": "transactiontype",
				"column_key": "PRI",
				"data_type": "int",
				"column_type": "int(11)"
			}
		],
		"columns": [
			{
				"column_name": "transactiontype",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "name",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinytext",
				"column_type": "tinytext"
			}
		],
		"foreignKeys": []
	},
	"users": {
		"primaryKey": [
			{
				"column_name": "userID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "userID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "firstName",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			},
			{
				"column_name": "lastName",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			},
			{
				"column_name": "phone",
				"column_key": "UNI",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(20)"
			},
			{
				"column_name": "address",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(200)"
			},
			{
				"column_name": "landmark",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			},
			{
				"column_name": "city",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(50)"
			},
			{
				"column_name": "latitude",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "decimal",
				"column_type": "decimal(9,0)"
			},
			{
				"column_name": "longitude",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "decimal",
				"column_type": "decimal(9,0)"
			},
			{
				"column_name": "pin",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "isBusinessOwner",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			}
		],
		"foreignKeys": []
	}
}  
        }