module.exports = function(){ 
              return [
	{
		"parent": "attributeinstances",
		"attributeinstances": []
	},
	{
		"parent": "attributes",
		"attributes": [
			"attributeinstances",
			"attributeuse",
			"attributevalues"
		],
		"attributeinstances": [],
		"attributeuse": [],
		"attributevalues": []
	},
	{
		"parent": "attributesetinstances",
		"attributesetinstances": [
			"attributeinstances",
			"purchaseitems",
			"stockcurrent",
			"stockdiary",
			"ticketlines"
		],
		"attributeinstances": [],
		"purchaseitems": [
			"grnitems"
		],
		"grnitems": [],
		"stockcurrent": [],
		"stockdiary": [],
		"ticketlines": []
	},
	{
		"parent": "attributesets",
		"attributesets": [
			"attributesetinstances",
			"attributeuse"
		],
		"attributesetinstances": [
			"attributeinstances",
			"purchaseitems",
			"stockcurrent",
			"stockdiary",
			"ticketlines"
		],
		"attributeinstances": [],
		"purchaseitems": [
			"grnitems"
		],
		"grnitems": [],
		"stockcurrent": [],
		"stockdiary": [],
		"ticketlines": [],
		"attributeuse": []
	},
	{
		"parent": "attributeuse",
		"attributeuse": []
	},
	{
		"parent": "attributevalues",
		"attributevalues": []
	},
	{
		"parent": "blocations",
		"blocations": [
			"purchases",
			"stockcurrent",
			"stockdiary",
			"stocklevel",
			"tickets",
			"userslocations"
		],
		"purchases": [
			"grn",
			"purchaseitems"
		],
		"grn": [
			"grnitems"
		],
		"grnitems": [],
		"purchaseitems": [
			"grnitems"
		],
		"stockcurrent": [],
		"stockdiary": [],
		"stocklevel": [],
		"tickets": [
			"receipts",
			"taxlines",
			"ticketlines"
		],
		"receipts": [
			"qr",
			"transactions"
		],
		"qr": [],
		"transactions": [],
		"taxlines": [],
		"ticketlines": [],
		"userslocations": [
			"cashreconcillation",
			"cashreconcillation",
			"nroleuserslocations",
			"nroleuserslocations"
		],
		"cashreconcillation": [],
		"nroleuserslocations": []
	},
	{
		"parent": "businesses",
		"businesses": [
			"blocations",
			"businesspermission",
			"mitems",
			"modifiers",
			"productcategories",
			"products",
			"taxcategories",
			"users",
			"vendors"
		],
		"blocations": [
			"purchases",
			"stockcurrent",
			"stockdiary",
			"stocklevel",
			"tickets",
			"userslocations"
		],
		"purchases": [
			"grn",
			"purchaseitems"
		],
		"grn": [
			"grnitems"
		],
		"grnitems": [],
		"purchaseitems": [
			"grnitems"
		],
		"stockcurrent": [],
		"stockdiary": [],
		"stocklevel": [],
		"tickets": [
			"receipts",
			"taxlines",
			"ticketlines"
		],
		"receipts": [
			"qr",
			"transactions"
		],
		"qr": [],
		"transactions": [],
		"taxlines": [],
		"ticketlines": [],
		"userslocations": [
			"cashreconcillation",
			"cashreconcillation",
			"nroleuserslocations",
			"nroleuserslocations"
		],
		"cashreconcillation": [],
		"nroleuserslocations": [],
		"businesspermission": [],
		"mitems": [],
		"modifiers": [
			"modifiersitems",
			"modifieruse"
		],
		"modifiersitems": [],
		"modifieruse": [],
		"productcategories": [
			"products"
		],
		"products": [
			"modifieruse",
			"productstaxes",
			"purchaseitems",
			"stockcurrent",
			"stockdiary",
			"stocklevel",
			"ticketlines"
		],
		"productstaxes": [],
		"taxcategories": [
			"taxes"
		],
		"taxes": [
			"productstaxes",
			"taxlines"
		],
		"users": [
			"businesses",
			"businesspermission",
			"grn",
			"productkeys",
			"purchases",
			"tickets",
			"userslocations",
			"usersroles",
			"vendors"
		],
		"productkeys": [],
		"usersroles": [],
		"vendors": [
			"purchases"
		]
	},
	{
		"parent": "businesspermission",
		"businesspermission": []
	},
	{
		"parent": "businesstype",
		"businesstype": [
			"businesses"
		],
		"businesses": [
			"blocations",
			"businesspermission",
			"mitems",
			"modifiers",
			"productcategories",
			"products",
			"taxcategories",
			"users",
			"vendors"
		],
		"blocations": [
			"purchases",
			"stockcurrent",
			"stockdiary",
			"stocklevel",
			"tickets",
			"userslocations"
		],
		"purchases": [
			"grn",
			"purchaseitems"
		],
		"grn": [
			"grnitems"
		],
		"grnitems": [],
		"purchaseitems": [
			"grnitems"
		],
		"stockcurrent": [],
		"stockdiary": [],
		"stocklevel": [],
		"tickets": [
			"receipts",
			"taxlines",
			"ticketlines"
		],
		"receipts": [
			"qr",
			"transactions"
		],
		"qr": [],
		"transactions": [],
		"taxlines": [],
		"ticketlines": [],
		"userslocations": [
			"cashreconcillation",
			"cashreconcillation",
			"nroleuserslocations",
			"nroleuserslocations"
		],
		"cashreconcillation": [],
		"nroleuserslocations": [],
		"businesspermission": [],
		"mitems": [],
		"modifiers": [
			"modifiersitems",
			"modifieruse"
		],
		"modifiersitems": [],
		"modifieruse": [],
		"productcategories": [
			"products"
		],
		"products": [
			"modifieruse",
			"productstaxes",
			"purchaseitems",
			"stockcurrent",
			"stockdiary",
			"stocklevel",
			"ticketlines"
		],
		"productstaxes": [],
		"taxcategories": [
			"taxes"
		],
		"taxes": [
			"productstaxes",
			"taxlines"
		],
		"users": [
			"businesses",
			"businesspermission",
			"grn",
			"productkeys",
			"purchases",
			"tickets",
			"userslocations",
			"usersroles",
			"vendors"
		],
		"productkeys": [],
		"usersroles": [],
		"vendors": [
			"purchases"
		]
	},
	{
		"parent": "cashreconcillation",
		"cashreconcillation": []
	},
	{
		"parent": "closedcash",
		"closedcash": []
	},
	{
		"parent": "demo",
		"demo": []
	},
	{
		"parent": "grn",
		"grn": [
			"grnitems"
		],
		"grnitems": []
	},
	{
		"parent": "grnitems",
		"grnitems": []
	},
	{
		"parent": "hsncodes",
		"hsncodes": []
	},
	{
		"parent": "mitems",
		"mitems": []
	},
	{
		"parent": "modifiers",
		"modifiers": [
			"modifiersitems",
			"modifieruse"
		],
		"modifiersitems": [],
		"modifieruse": []
	},
	{
		"parent": "modifiersitems",
		"modifiersitems": []
	},
	{
		"parent": "modifieruse",
		"modifieruse": []
	},
	{
		"parent": "nbroles",
		"nbroles": [
			"businesspermission"
		],
		"businesspermission": []
	},
	{
		"parent": "newsletters",
		"newsletters": []
	},
	{
		"parent": "nrole",
		"nrole": [
			"nroleuserslocations"
		],
		"nroleuserslocations": []
	},
	{
		"parent": "nroleuserslocations",
		"nroleuserslocations": []
	},
	{
		"parent": "productcategories",
		"productcategories": [
			"products"
		],
		"products": [
			"modifieruse",
			"productstaxes",
			"purchaseitems",
			"stockcurrent",
			"stockdiary",
			"stocklevel",
			"ticketlines"
		],
		"modifieruse": [],
		"productstaxes": [],
		"purchaseitems": [
			"grnitems"
		],
		"grnitems": [],
		"stockcurrent": [],
		"stockdiary": [],
		"stocklevel": [],
		"ticketlines": []
	},
	{
		"parent": "productkeys",
		"productkeys": []
	},
	{
		"parent": "products",
		"products": [
			"modifieruse",
			"productstaxes",
			"purchaseitems",
			"stockcurrent",
			"stockdiary",
			"stocklevel",
			"ticketlines"
		],
		"modifieruse": [],
		"productstaxes": [],
		"purchaseitems": [
			"grnitems"
		],
		"grnitems": [],
		"stockcurrent": [],
		"stockdiary": [],
		"stocklevel": [],
		"ticketlines": []
	},
	{
		"parent": "productstaxes",
		"productstaxes": []
	},
	{
		"parent": "purchaseitems",
		"purchaseitems": [
			"grnitems"
		],
		"grnitems": []
	},
	{
		"parent": "purchases",
		"purchases": [
			"grn",
			"purchaseitems"
		],
		"grn": [
			"grnitems"
		],
		"grnitems": [],
		"purchaseitems": [
			"grnitems"
		]
	},
	{
		"parent": "qr",
		"qr": []
	},
	{
		"parent": "receipts",
		"receipts": [
			"qr",
			"transactions"
		],
		"qr": [],
		"transactions": []
	},
	{
		"parent": "rights",
		"rights": [
			"tablespermissions"
		],
		"tablespermissions": [
			"rolestablepermissions"
		],
		"rolestablepermissions": []
	},
	{
		"parent": "roles",
		"roles": [
			"rolestablepermissions",
			"usersroles"
		],
		"rolestablepermissions": [],
		"usersroles": []
	},
	{
		"parent": "rolestablepermissions",
		"rolestablepermissions": []
	},
	{
		"parent": "stockcurrent",
		"stockcurrent": []
	},
	{
		"parent": "stockdiary",
		"stockdiary": []
	},
	{
		"parent": "stocklevel",
		"stocklevel": []
	},
	{
		"parent": "tables",
		"tables": [
			"tablespermissions"
		],
		"tablespermissions": [
			"rolestablepermissions"
		],
		"rolestablepermissions": []
	},
	{
		"parent": "tablespermissions",
		"tablespermissions": [
			"rolestablepermissions"
		],
		"rolestablepermissions": []
	},
	{
		"parent": "taxcategories",
		"taxcategories": [
			"taxes"
		],
		"taxes": [
			"productstaxes",
			"taxlines"
		],
		"productstaxes": [],
		"taxlines": []
	},
	{
		"parent": "taxes",
		"taxes": [
			"productstaxes",
			"taxlines"
		],
		"productstaxes": [],
		"taxlines": []
	},
	{
		"parent": "taxlines",
		"taxlines": []
	},
	{
		"parent": "ticketlines",
		"ticketlines": []
	},
	{
		"parent": "tickets",
		"tickets": [
			"receipts",
			"taxlines",
			"ticketlines"
		],
		"receipts": [
			"qr",
			"transactions"
		],
		"qr": [],
		"transactions": [],
		"taxlines": [],
		"ticketlines": []
	},
	{
		"parent": "tickettypes",
		"tickettypes": [
			"tickets"
		],
		"tickets": [
			"receipts",
			"taxlines",
			"ticketlines"
		],
		"receipts": [
			"qr",
			"transactions"
		],
		"qr": [],
		"transactions": [],
		"taxlines": [],
		"ticketlines": []
	},
	{
		"parent": "transactions",
		"transactions": []
	},
	{
		"parent": "transactionstatus",
		"transactionstatus": [
			"transactions"
		],
		"transactions": []
	},
	{
		"parent": "transactiontypes",
		"transactiontypes": [
			"transactions"
		],
		"transactions": []
	},
	{
		"parent": "uomconversions",
		"uomconversions": []
	},
	{
		"parent": "uoms",
		"uoms": [
			"uomconversions"
		],
		"uomconversions": []
	},
	{
		"parent": "users",
		"users": [
			"businesses",
			"businesspermission",
			"grn",
			"productkeys",
			"purchases",
			"tickets",
			"userslocations",
			"usersroles",
			"vendors"
		],
		"businesses": [
			"blocations",
			"businesspermission",
			"mitems",
			"modifiers",
			"productcategories",
			"products",
			"taxcategories",
			"users",
			"vendors"
		],
		"blocations": [
			"purchases",
			"stockcurrent",
			"stockdiary",
			"stocklevel",
			"tickets",
			"userslocations"
		],
		"purchases": [
			"grn",
			"purchaseitems"
		],
		"grn": [
			"grnitems"
		],
		"grnitems": [],
		"purchaseitems": [
			"grnitems"
		],
		"stockcurrent": [],
		"stockdiary": [],
		"stocklevel": [],
		"tickets": [
			"receipts",
			"taxlines",
			"ticketlines"
		],
		"receipts": [
			"qr",
			"transactions"
		],
		"qr": [],
		"transactions": [],
		"taxlines": [],
		"ticketlines": [],
		"userslocations": [
			"cashreconcillation",
			"cashreconcillation",
			"nroleuserslocations",
			"nroleuserslocations"
		],
		"cashreconcillation": [],
		"nroleuserslocations": [],
		"businesspermission": [],
		"mitems": [],
		"modifiers": [
			"modifiersitems",
			"modifieruse"
		],
		"modifiersitems": [],
		"modifieruse": [],
		"productcategories": [
			"products"
		],
		"products": [
			"modifieruse",
			"productstaxes",
			"purchaseitems",
			"stockcurrent",
			"stockdiary",
			"stocklevel",
			"ticketlines"
		],
		"productstaxes": [],
		"taxcategories": [
			"taxes"
		],
		"taxes": [
			"productstaxes",
			"taxlines"
		],
		"vendors": [
			"purchases"
		],
		"productkeys": [],
		"usersroles": []
	},
	{
		"parent": "userslocations",
		"userslocations": [
			"cashreconcillation",
			"cashreconcillation",
			"nroleuserslocations",
			"nroleuserslocations"
		],
		"cashreconcillation": [],
		"nroleuserslocations": []
	},
	{
		"parent": "usersroles",
		"usersroles": []
	},
	{
		"parent": "usertypes",
		"usertypes": [
			"users"
		],
		"users": [
			"businesses",
			"businesspermission",
			"grn",
			"productkeys",
			"purchases",
			"tickets",
			"userslocations",
			"usersroles",
			"vendors"
		],
		"businesses": [
			"blocations",
			"businesspermission",
			"mitems",
			"modifiers",
			"productcategories",
			"products",
			"taxcategories",
			"users",
			"vendors"
		],
		"blocations": [
			"purchases",
			"stockcurrent",
			"stockdiary",
			"stocklevel",
			"tickets",
			"userslocations"
		],
		"purchases": [
			"grn",
			"purchaseitems"
		],
		"grn": [
			"grnitems"
		],
		"grnitems": [],
		"purchaseitems": [
			"grnitems"
		],
		"stockcurrent": [],
		"stockdiary": [],
		"stocklevel": [],
		"tickets": [
			"receipts",
			"taxlines",
			"ticketlines"
		],
		"receipts": [
			"qr",
			"transactions"
		],
		"qr": [],
		"transactions": [],
		"taxlines": [],
		"ticketlines": [],
		"userslocations": [
			"cashreconcillation",
			"cashreconcillation",
			"nroleuserslocations",
			"nroleuserslocations"
		],
		"cashreconcillation": [],
		"nroleuserslocations": [],
		"businesspermission": [],
		"mitems": [],
		"modifiers": [
			"modifiersitems",
			"modifieruse"
		],
		"modifiersitems": [],
		"modifieruse": [],
		"productcategories": [
			"products"
		],
		"products": [
			"modifieruse",
			"productstaxes",
			"purchaseitems",
			"stockcurrent",
			"stockdiary",
			"stocklevel",
			"ticketlines"
		],
		"productstaxes": [],
		"taxcategories": [
			"taxes"
		],
		"taxes": [
			"productstaxes",
			"taxlines"
		],
		"vendors": [
			"purchases"
		],
		"productkeys": [],
		"usersroles": []
	},
	{
		"parent": "vendors",
		"vendors": [
			"purchases"
		],
		"purchases": [
			"grn",
			"purchaseitems"
		],
		"grn": [
			"grnitems"
		],
		"grnitems": [],
		"purchaseitems": [
			"grnitems"
		]
	}
]  
          }