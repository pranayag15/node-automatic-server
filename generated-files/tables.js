module.exports = function(){ 
            return {
	"attributeinstances": {
		"primaryKey": [
			{
				"column_name": "aintanceID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "aintanceID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "attribute",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "asinstance",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "value",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "attribute",
				"table_name": "attributeinstances",
				"referenced_column_table": "attributes",
				"referenced_column_name": "attributeid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "asinstance",
				"table_name": "attributeinstances",
				"referenced_column_table": "attributesetinstances",
				"referenced_column_name": "asinstanceid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"attributes": {
		"primaryKey": [
			{
				"column_name": "attributeID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "attributeID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "name",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			},
			{
				"column_name": "alias",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			}
		],
		"foreignKeys": []
	},
	"attributesetinstances": {
		"primaryKey": [
			{
				"column_name": "asinstanceID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "asinstanceID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "attributeset",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "attributeset",
				"table_name": "attributesetinstances",
				"referenced_column_table": "attributesets",
				"referenced_column_name": "attributesetid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"attributesets": {
		"primaryKey": [
			{
				"column_name": "attributesetID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "attributesetID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "name",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			},
			{
				"column_name": "alias",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			}
		],
		"foreignKeys": []
	},
	"attributeuse": {
		"primaryKey": [
			{
				"column_name": "attributeset",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "attribute",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "attributeset",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "attribute",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "attributeset",
				"table_name": "attributeuse",
				"referenced_column_table": "attributesets",
				"referenced_column_name": "attributesetid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "attribute",
				"table_name": "attributeuse",
				"referenced_column_table": "attributes",
				"referenced_column_name": "attributeid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"attributevalues": {
		"primaryKey": [
			{
				"column_name": "attributevalueID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "attributevalueID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "attribute",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "value",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(150)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "attribute",
				"table_name": "attributevalues",
				"referenced_column_table": "attributes",
				"referenced_column_name": "attributeid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"blocations": {
		"primaryKey": [
			{
				"column_name": "blocationID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "blocationID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "business",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "pocName",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			},
			{
				"column_name": "pocEmail",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			},
			{
				"column_name": "pocPhone",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "bigint",
				"column_type": "bigint(20)"
			},
			{
				"column_name": "name",
				"column_key": "UNI",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			},
			{
				"column_name": "address",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "text",
				"column_type": "text"
			},
			{
				"column_name": "city",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			},
			{
				"column_name": "state",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			},
			{
				"column_name": "pincode",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "landmark",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(255)"
			},
			{
				"column_name": "bio",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "text",
				"column_type": "text"
			},
			{
				"column_name": "latitude",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "decimal",
				"column_type": "decimal(9,6)"
			},
			{
				"column_name": "longitude",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "decimal",
				"column_type": "decimal(9,6)"
			},
			{
				"column_name": "url",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(2083)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "business",
				"table_name": "blocations",
				"referenced_column_table": "businesses",
				"referenced_column_name": "businessid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
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
				"column_name": "businesstype",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "owner",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "name",
				"column_key": "UNI",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			},
			{
				"column_name": "website",
				"column_key": "",
				"is_nullable": "YES",
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
				"column_name": "city",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			},
			{
				"column_name": "state",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			},
			{
				"column_name": "pincode",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "country",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			},
			{
				"column_name": "bio",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "text",
				"column_type": "text"
			},
			{
				"column_name": "canModifyOrder",
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
			},
			{
				"column_name": "paymentModesUsers",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(50)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "businesstype",
				"table_name": "businesses",
				"referenced_column_table": "businesstype",
				"referenced_column_name": "businesstypeid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "owner",
				"table_name": "businesses",
				"referenced_column_table": "users",
				"referenced_column_name": "userid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"businesspermission": {
		"primaryKey": [
			{
				"column_name": "brole",
				"column_key": "PRI",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "user",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "business",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "brole",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "user",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "business",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "permission",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "brole",
				"table_name": "businesspermission",
				"referenced_column_table": "nbroles",
				"referenced_column_name": "nbroleid",
				"column_type": "int(11)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "user",
				"table_name": "businesspermission",
				"referenced_column_table": "users",
				"referenced_column_name": "userid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "business",
				"table_name": "businesspermission",
				"referenced_column_table": "businesses",
				"referenced_column_name": "businessid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"businesstype": {
		"primaryKey": [
			{
				"column_name": "businesstypeID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "businesstypeID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "name",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			}
		],
		"foreignKeys": []
	},
	"cashreconcillation": {
		"primaryKey": [
			{
				"column_name": "id",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "id",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "employee",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "location",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "date",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "datetime",
				"column_type": "datetime"
			},
			{
				"column_name": "startCash",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "cashCollected",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "cashSubmitted",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "difference",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "reason",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			},
			{
				"column_name": "dayEnded",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "employee",
				"table_name": "cashreconcillation",
				"referenced_column_table": "userslocations",
				"referenced_column_name": "user",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "location",
				"table_name": "cashreconcillation",
				"referenced_column_table": "userslocations",
				"referenced_column_name": "location",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"closedcash": {
		"primaryKey": [
			{
				"column_name": "id",
				"column_key": "PRI",
				"data_type": "varchar",
				"column_type": "varchar(36)"
			}
		],
		"columns": [
			{
				"column_name": "id",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(36)"
			}
		],
		"foreignKeys": []
	},
	"demo": {
		"primaryKey": [],
		"columns": [
			{
				"column_name": "name",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(255)"
			},
			{
				"column_name": "companyName",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(255)"
			},
			{
				"column_name": "address",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "text",
				"column_type": "text"
			},
			{
				"column_name": "phone",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "int",
				"column_type": "int(12)"
			},
			{
				"column_name": "city",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(50)"
			},
			{
				"column_name": "message",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "text",
				"column_type": "text"
			},
			{
				"column_name": "date",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "timestamp",
				"column_type": "timestamp"
			},
			{
				"column_name": "email",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(255)"
			}
		],
		"foreignKeys": []
	},
	"grn": {
		"primaryKey": [
			{
				"column_name": "grnID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "grnID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "purchase",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "grnAmount",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "time",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "datetime",
				"column_type": "datetime"
			},
			{
				"column_name": "vendorInvoiceId",
				"column_key": "",
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
				"column_name": "remark",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "purchase",
				"table_name": "grn",
				"referenced_column_table": "purchases",
				"referenced_column_name": "purchaseid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "user",
				"table_name": "grn",
				"referenced_column_table": "users",
				"referenced_column_name": "userid",
				"column_type": "varbinary(36)",
				"is_nullable": "YES"
			}
		]
	},
	"grnitems": {
		"primaryKey": [],
		"columns": [
			{
				"column_name": "grn",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "purchaseItem",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "unitsRecieved",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "grn",
				"table_name": "grnitems",
				"referenced_column_table": "grn",
				"referenced_column_name": "grnid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "purchaseItem",
				"table_name": "grnitems",
				"referenced_column_table": "purchaseitems",
				"referenced_column_name": "purchaseitemid",
				"column_type": "varbinary(36)",
				"is_nullable": "YES"
			}
		]
	},
	"hsncodes": {
		"primaryKey": [
			{
				"column_name": "hsncodeID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "hsncodeID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "hsnname",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			}
		],
		"foreignKeys": []
	},
	"mitems": {
		"primaryKey": [
			{
				"column_name": "mitemID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "mitemID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "business",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "name",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			},
			{
				"column_name": "price",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "double",
				"column_type": "double"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "business",
				"table_name": "mitems",
				"referenced_column_table": "businesses",
				"referenced_column_name": "businessid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"modifiers": {
		"primaryKey": [
			{
				"column_name": "modifierID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "modifierID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "business",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "name",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			},
			{
				"column_name": "allowMultiple",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "business",
				"table_name": "modifiers",
				"referenced_column_table": "businesses",
				"referenced_column_name": "businessid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"modifiersitems": {
		"primaryKey": [
			{
				"column_name": "modifier",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "mitem",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "modifier",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "mitem",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "modifier",
				"table_name": "modifiersitems",
				"referenced_column_table": "modifiers",
				"referenced_column_name": "modifierid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"modifieruse": {
		"primaryKey": [
			{
				"column_name": "modifier",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "product",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "modifier",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "product",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "modifier",
				"table_name": "modifieruse",
				"referenced_column_table": "modifiers",
				"referenced_column_name": "modifierid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "product",
				"table_name": "modifieruse",
				"referenced_column_table": "products",
				"referenced_column_name": "productid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"nbroles": {
		"primaryKey": [
			{
				"column_name": "nbroleID",
				"column_key": "PRI",
				"data_type": "int",
				"column_type": "int(11)"
			}
		],
		"columns": [
			{
				"column_name": "nbroleID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "name",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(20)"
			}
		],
		"foreignKeys": []
	},
	"newsletters": {
		"primaryKey": [],
		"columns": [
			{
				"column_name": "email",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			},
			{
				"column_name": "date",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "timestamp",
				"column_type": "timestamp"
			}
		],
		"foreignKeys": []
	},
	"nrole": {
		"primaryKey": [
			{
				"column_name": "roleID",
				"column_key": "PRI",
				"data_type": "int",
				"column_type": "int(11)"
			}
		],
		"columns": [
			{
				"column_name": "roleID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "name",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(20)"
			}
		],
		"foreignKeys": []
	},
	"nroleuserslocations": {
		"primaryKey": [
			{
				"column_name": "role",
				"column_key": "PRI",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "user",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "location",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "role",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "user",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "location",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "permission",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "role",
				"table_name": "nroleuserslocations",
				"referenced_column_table": "nrole",
				"referenced_column_name": "roleid",
				"column_type": "int(11)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "user",
				"table_name": "nroleuserslocations",
				"referenced_column_table": "userslocations",
				"referenced_column_name": "user",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "location",
				"table_name": "nroleuserslocations",
				"referenced_column_table": "userslocations",
				"referenced_column_name": "location",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"productcategories": {
		"primaryKey": [
			{
				"column_name": "productcategoryID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "productcategoryID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "business",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "name",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(255)"
			},
			{
				"column_name": "parent",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "business",
				"table_name": "productcategories",
				"referenced_column_table": "businesses",
				"referenced_column_name": "businessid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"productkeys": {
		"primaryKey": [
			{
				"column_name": "productkeysid",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "productkeysid",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "businessId",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "razorpay",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(36)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "businessId",
				"table_name": "productkeys",
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
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "productcategory",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "hsncode",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "name",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(255)"
			},
			{
				"column_name": "barcode",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			},
			{
				"column_name": "price",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "description",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "text",
				"column_type": "text"
			},
			{
				"column_name": "code",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			},
			{
				"column_name": "isMRP",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			},
			{
				"column_name": "manufacturer",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "text",
				"column_type": "text"
			},
			{
				"column_name": "brand",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "text",
				"column_type": "text"
			},
			{
				"column_name": "cost",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "mrp",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "productType",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "text",
				"column_type": "text"
			},
			{
				"column_name": "size",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(20)"
			},
			{
				"column_name": "alias",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			},
			{
				"column_name": "veg",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			},
			{
				"column_name": "isQuantityFloatable",
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
			}
		],
		"foreignKeys": [
			{
				"columns_name": "business",
				"table_name": "products",
				"referenced_column_table": "businesses",
				"referenced_column_name": "businessid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "productcategory",
				"table_name": "products",
				"referenced_column_table": "productcategories",
				"referenced_column_name": "productcategoryid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"productstaxes": {
		"primaryKey": [
			{
				"column_name": "product",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "tax",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "product",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "tax",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "product",
				"table_name": "productstaxes",
				"referenced_column_table": "products",
				"referenced_column_name": "productid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "tax",
				"table_name": "productstaxes",
				"referenced_column_table": "taxes",
				"referenced_column_name": "taxid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"purchaseitems": {
		"primaryKey": [
			{
				"column_name": "purchaseItemID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "purchaseItemID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "purchase",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "line",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "product",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "asinstance",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "units",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "mrp",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "cp",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "unitsleft",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "purchase",
				"table_name": "purchaseitems",
				"referenced_column_table": "purchases",
				"referenced_column_name": "purchaseid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "product",
				"table_name": "purchaseitems",
				"referenced_column_table": "products",
				"referenced_column_name": "productid",
				"column_type": "varbinary(36)",
				"is_nullable": "YES"
			},
			{
				"columns_name": "asinstance",
				"table_name": "purchaseitems",
				"referenced_column_table": "attributesetinstances",
				"referenced_column_name": "asinstanceid",
				"column_type": "varbinary(36)",
				"is_nullable": "YES"
			}
		]
	},
	"purchases": {
		"primaryKey": [
			{
				"column_name": "purchaseID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "purchaseID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "location",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "description",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "text",
				"column_type": "text"
			},
			{
				"column_name": "vendor",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "dueDate",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "date",
				"column_type": "date"
			},
			{
				"column_name": "amount",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "time",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "timestamp",
				"column_type": "timestamp"
			},
			{
				"column_name": "status",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(4)"
			},
			{
				"column_name": "isDeleted",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(4)"
			},
			{
				"column_name": "user",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "location",
				"table_name": "purchases",
				"referenced_column_table": "blocations",
				"referenced_column_name": "blocationid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "vendor",
				"table_name": "purchases",
				"referenced_column_table": "vendors",
				"referenced_column_name": "vendorid",
				"column_type": "varbinary(36)",
				"is_nullable": "YES"
			},
			{
				"columns_name": "user",
				"table_name": "purchases",
				"referenced_column_table": "users",
				"referenced_column_name": "userid",
				"column_type": "varbinary(36)",
				"is_nullable": "YES"
			}
		]
	},
	"qr": {
		"primaryKey": [
			{
				"column_name": "qrID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "qrID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "receipt",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "code",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "longblob",
				"column_type": "longblob"
			},
			{
				"column_name": "isPaid",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			},
			{
				"column_name": "accepted",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			},
			{
				"column_name": "prepared",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			},
			{
				"column_name": "status",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			},
			{
				"column_name": "guard",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "datetime",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "timestamp",
				"column_type": "timestamp"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "receipt",
				"table_name": "qr",
				"referenced_column_table": "receipts",
				"referenced_column_name": "receiptid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"receipts": {
		"primaryKey": [
			{
				"column_name": "receiptID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "ticket",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "receiptID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "ticket",
				"column_key": "PRI",
				"is_nullable": "NO",
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
				"column_name": "taxAmount",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "finalAmount",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "roundedAmount",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "datetime",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "timestamp",
				"column_type": "timestamp"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "ticket",
				"table_name": "receipts",
				"referenced_column_table": "tickets",
				"referenced_column_name": "ticketid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"rights": {
		"primaryKey": [
			{
				"column_name": "rightID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "rightID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"foreignKeys": []
	},
	"roles": {
		"primaryKey": [
			{
				"column_name": "roleID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "roleID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"foreignKeys": []
	},
	"rolestablepermissions": {
		"primaryKey": [
			{
				"column_name": "role",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "tablepermission",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "role",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "tablepermission",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "role",
				"table_name": "rolestablepermissions",
				"referenced_column_table": "roles",
				"referenced_column_name": "roleid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "tablepermission",
				"table_name": "rolestablepermissions",
				"referenced_column_table": "tablespermissions",
				"referenced_column_name": "id",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"stockcurrent": {
		"primaryKey": [],
		"columns": [
			{
				"column_name": "location",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "product",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "asinstance",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "units",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "double",
				"column_type": "double"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "location",
				"table_name": "stockcurrent",
				"referenced_column_table": "blocations",
				"referenced_column_name": "blocationid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "product",
				"table_name": "stockcurrent",
				"referenced_column_table": "products",
				"referenced_column_name": "productid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "asinstance",
				"table_name": "stockcurrent",
				"referenced_column_table": "attributesetinstances",
				"referenced_column_name": "asinstanceid",
				"column_type": "varbinary(36)",
				"is_nullable": "YES"
			}
		]
	},
	"stockdiary": {
		"primaryKey": [
			{
				"column_name": "id",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "id",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "location",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "product",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "asinstance",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "units",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "double",
				"column_type": "double"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "location",
				"table_name": "stockdiary",
				"referenced_column_table": "blocations",
				"referenced_column_name": "blocationid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "product",
				"table_name": "stockdiary",
				"referenced_column_table": "products",
				"referenced_column_name": "productid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "asinstance",
				"table_name": "stockdiary",
				"referenced_column_table": "attributesetinstances",
				"referenced_column_name": "asinstanceid",
				"column_type": "varbinary(36)",
				"is_nullable": "YES"
			}
		]
	},
	"stocklevel": {
		"primaryKey": [
			{
				"column_name": "prodcut",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "location",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "prodcut",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "location",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "min",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "max",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "double",
				"column_type": "double"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "prodcut",
				"table_name": "stocklevel",
				"referenced_column_table": "products",
				"referenced_column_name": "productid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "location",
				"table_name": "stocklevel",
				"referenced_column_table": "blocations",
				"referenced_column_name": "blocationid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"tables": {
		"primaryKey": [
			{
				"column_name": "tableID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "tableID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"foreignKeys": []
	},
	"tablespermissions": {
		"primaryKey": [
			{
				"column_name": "id",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "id",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "right",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "tables",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "right",
				"table_name": "tablespermissions",
				"referenced_column_table": "rights",
				"referenced_column_name": "rightid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "tables",
				"table_name": "tablespermissions",
				"referenced_column_table": "tables",
				"referenced_column_name": "tableid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"taxcategories": {
		"primaryKey": [
			{
				"column_name": "taxcategoryID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "taxcategoryID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "business",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "name",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "business",
				"table_name": "taxcategories",
				"referenced_column_table": "businesses",
				"referenced_column_name": "businessid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"taxes": {
		"primaryKey": [
			{
				"column_name": "taxID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "taxID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "taxcategory",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "name",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			},
			{
				"column_name": "percentage",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "double",
				"column_type": "double"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "taxcategory",
				"table_name": "taxes",
				"referenced_column_table": "taxcategories",
				"referenced_column_name": "taxcategoryid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"taxlines": {
		"primaryKey": [
			{
				"column_name": "taxlineID",
				"column_key": "PRI",
				"data_type": "varchar",
				"column_type": "varchar(36)"
			}
		],
		"columns": [
			{
				"column_name": "taxlineID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(36)"
			},
			{
				"column_name": "ticket",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "tax",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "amount",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "double",
				"column_type": "double"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "ticket",
				"table_name": "taxlines",
				"referenced_column_table": "tickets",
				"referenced_column_name": "ticketid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "tax",
				"table_name": "taxlines",
				"referenced_column_table": "taxes",
				"referenced_column_name": "taxid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"ticketlines": {
		"primaryKey": [
			{
				"column_name": "ticket",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "line",
				"column_key": "PRI",
				"data_type": "int",
				"column_type": "int(11)"
			}
		],
		"columns": [
			{
				"column_name": "ticket",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "line",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "product",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "productName",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(50)"
			},
			{
				"column_name": "units",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "preTax",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "totalPreTax",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "taxAmnt",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "totalTax",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "taxname",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(30)"
			},
			{
				"column_name": "taxPercent",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "asinstance",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "ticket",
				"table_name": "ticketlines",
				"referenced_column_table": "tickets",
				"referenced_column_name": "ticketid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "product",
				"table_name": "ticketlines",
				"referenced_column_table": "products",
				"referenced_column_name": "productid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "asinstance",
				"table_name": "ticketlines",
				"referenced_column_table": "attributesetinstances",
				"referenced_column_name": "asinstanceid",
				"column_type": "varbinary(36)",
				"is_nullable": "YES"
			}
		]
	},
	"tickets": {
		"primaryKey": [
			{
				"column_name": "ticketID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "ticketID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "employee",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "customer",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "tickettype",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "location",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "device",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "int",
				"column_type": "int(11)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "employee",
				"table_name": "tickets",
				"referenced_column_table": "users",
				"referenced_column_name": "userid",
				"column_type": "varbinary(36)",
				"is_nullable": "YES"
			},
			{
				"columns_name": "tickettype",
				"table_name": "tickets",
				"referenced_column_table": "tickettypes",
				"referenced_column_name": "tickettypeid",
				"column_type": "int(11)",
				"is_nullable": "YES"
			},
			{
				"columns_name": "location",
				"table_name": "tickets",
				"referenced_column_table": "blocations",
				"referenced_column_name": "blocationid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"tickettypes": {
		"primaryKey": [
			{
				"column_name": "tickettypeID",
				"column_key": "PRI",
				"data_type": "int",
				"column_type": "int(11)"
			}
		],
		"columns": [
			{
				"column_name": "tickettypeID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "name",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(50)"
			}
		],
		"foreignKeys": []
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
				"column_name": "transactiontype",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "receipt",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "rpayID",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(50)"
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
				"is_nullable": "NO",
				"data_type": "double",
				"column_type": "double"
			},
			{
				"column_name": "status",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "int",
				"column_type": "int(11)"
			},
			{
				"column_name": "date",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "datetime",
				"column_type": "datetime"
			},
			{
				"column_name": "paymentLink",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(50)"
			},
			{
				"column_name": "invoiceID",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(50)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "transactiontype",
				"table_name": "transactions",
				"referenced_column_table": "transactiontypes",
				"referenced_column_name": "transactiontype",
				"column_type": "int(11)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "receipt",
				"table_name": "transactions",
				"referenced_column_table": "receipts",
				"referenced_column_name": "receiptid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
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
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(50)"
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
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(15)"
			}
		],
		"foreignKeys": []
	},
	"uomconversions": {
		"primaryKey": [
			{
				"column_name": "uconversionID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "uconversionID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "from",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "to",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "from",
				"table_name": "uomconversions",
				"referenced_column_table": "uoms",
				"referenced_column_name": "uomid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"uoms": {
		"primaryKey": [
			{
				"column_name": "uomID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "uomID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
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
				"column_name": "business",
				"column_key": "MUL",
				"is_nullable": "YES",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "usertype",
				"column_key": "MUL",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "firstName",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			},
			{
				"column_name": "LastName",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			},
			{
				"column_name": "userName",
				"column_key": "UNI",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			},
			{
				"column_name": "email",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			},
			{
				"column_name": "password",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(255)"
			},
			{
				"column_name": "phone",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(20)"
			},
			{
				"column_name": "isactive",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			},
			{
				"column_name": "isblocked",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			},
			{
				"column_name": "data1",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			},
			{
				"column_name": "data2",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "tinyint",
				"column_type": "tinyint(1)"
			},
			{
				"column_name": "profile",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "blob",
				"column_type": "blob"
			},
			{
				"column_name": "verificationToken",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			},
			{
				"column_name": "gstin",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(50)"
			},
			{
				"column_name": "fcmtoken",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(36)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "business",
				"table_name": "users",
				"referenced_column_table": "businesses",
				"referenced_column_name": "businessid",
				"column_type": "varbinary(36)",
				"is_nullable": "YES"
			},
			{
				"columns_name": "usertype",
				"table_name": "users",
				"referenced_column_table": "usertypes",
				"referenced_column_name": "usertypeid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"userslocations": {
		"primaryKey": [
			{
				"column_name": "location",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "user",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "location",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "user",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "location",
				"table_name": "userslocations",
				"referenced_column_table": "blocations",
				"referenced_column_name": "blocationid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "user",
				"table_name": "userslocations",
				"referenced_column_table": "users",
				"referenced_column_name": "userid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"usersroles": {
		"primaryKey": [
			{
				"column_name": "user",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "role",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "user",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "role",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "user",
				"table_name": "usersroles",
				"referenced_column_table": "users",
				"referenced_column_name": "userid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			},
			{
				"columns_name": "role",
				"table_name": "usersroles",
				"referenced_column_table": "roles",
				"referenced_column_name": "roleid",
				"column_type": "varbinary(36)",
				"is_nullable": "NO"
			}
		]
	},
	"usertypes": {
		"primaryKey": [
			{
				"column_name": "usertypeID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "usertypeID",
				"column_key": "PRI",
				"is_nullable": "NO",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			},
			{
				"column_name": "value",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			}
		],
		"foreignKeys": []
	},
	"vendors": {
		"primaryKey": [
			{
				"column_name": "vendorID",
				"column_key": "PRI",
				"data_type": "varbinary",
				"column_type": "varbinary(36)"
			}
		],
		"columns": [
			{
				"column_name": "vendorID",
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
				"column_name": "name",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			},
			{
				"column_name": "companyType",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			},
			{
				"column_name": "pan",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(50)"
			},
			{
				"column_name": "website",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			},
			{
				"column_name": "email",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(60)"
			},
			{
				"column_name": "pocName",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(100)"
			},
			{
				"column_name": "phone",
				"column_key": "",
				"is_nullable": "NO",
				"data_type": "varchar",
				"column_type": "varchar(20)"
			},
			{
				"column_name": "address",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "text",
				"column_type": "text"
			},
			{
				"column_name": "gstin",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(50)"
			},
			{
				"column_name": "creditperiod",
				"column_key": "",
				"is_nullable": "YES",
				"data_type": "varchar",
				"column_type": "varchar(50)"
			}
		],
		"foreignKeys": [
			{
				"columns_name": "business",
				"table_name": "vendors",
				"referenced_column_table": "businesses",
				"referenced_column_name": "businessid",
				"column_type": "varbinary(36)",
				"is_nullable": "YES"
			},
			{
				"columns_name": "user",
				"table_name": "vendors",
				"referenced_column_table": "users",
				"referenced_column_name": "userid",
				"column_type": "varbinary(36)",
				"is_nullable": "YES"
			}
		]
	}
}  
        }