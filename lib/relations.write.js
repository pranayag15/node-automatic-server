var tableSchema  = require("../generated-files/tables")()
var colors = require('colors')
var fs = require("fs");

function writeRelations(){
    var allRelations = []
    var allTableNameArray = Object.keys(tableSchema)
    for (let index = 0; index <allTableNameArray.length; index++) {
        let allFks = {
            "parent": allTableNameArray[index]
        }
        findTableReach(allTableNameArray[index], allFks)
        allRelations.push(allFks)
    }
    function findTableReach(startingTableName, allFks){
        if(!allFks[startingTableName])
            allFks[startingTableName] = []
        Object.keys(tableSchema).map(tName => {
            tableSchema[tName]["foreignKeys"].map(fk => {
                if(fk["referenced_column_table"] === startingTableName){
                    allFks[startingTableName].push(fk["table_name"])
                    //IMPORTANT:- DETECTING LOOP HERE
                    if(fk["table_name"] != allFks["parent"] && !allFks[fk["table_name"]])
                        findTableReach(fk["table_name"], allFks)
                }
            })
        })
    }
    return new Promise((resolve, reject) => {
        fs.readFile("../generated-files/relations.js", "utf-8", (err, data) => {
            if (err) {
              console.log("ERROR", err);
              reject(err);
            }
            let writeData = `module.exports = function(){ 
                  return ${JSON.stringify(allRelations, null, '\t')}  
              }`;
            fs.writeFile("../generated-files/relations.js", writeData, "utf-8", (error) => {
                if (error) reject(error);
                console.log(colors.cyan("Relations writing complete"));
                resolve()
            });
        });
    })
}


module.exports = writeRelations
// console.log(colors.green(JSON.stringify(allRelations)))





















// [ 'grn', 'purchases', 'blocations', 'businesses', 'users' ]
// [ 'grn', 'purchases', 'vendors', 'businesses', 'users' ]
// [ 'grn', 'purchases', 'vendors', 'users' ]
// [ 'grn', 'purchases', 'users' ]
// [ 'grn', 'users' ]
// [ 'purchaseitems',
//   'purchases',
//   'blocations',
//   'businesses',
//   'users' ]
// [ 'purchaseitems', 'purchases', 'vendors', 'businesses', 'users' ]
// [ 'purchaseitems', 'purchases', 'vendors', 'users' ]
// [ 'purchaseitems', 'purchases', 'users' ]
// [ 'purchaseitems', 'products', 'businesses', 'users' ]
// [ 'purchaseitems',
//   'products',
//   'productcategories',
//   'businesses',
//   'users' ]