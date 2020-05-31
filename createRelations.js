var tableSchema  = require("./tables")()
var colors = require('colors')
var fs = require("fs");

var relation = []
var paths = []
// findRelation("taxlines", "businesses", relation)
function findRelation(presentTable, requiedTable, relation){
    if(presentTable == requiedTable){
        paths.push([...relation])
        console.log(colors.yellow(relation))
        return true;
    }
    for (let i = 0; i < tableSchema[presentTable]["foreignKeys"].length; i++) {
        if(tableSchema[presentTable]["foreignKeys"][i]["is_nullable"] == "NO"){
            relation.push(tableSchema[presentTable]["foreignKeys"][i]["referenced_column_table"])
            findRelation(tableSchema[presentTable]["foreignKeys"][i]["referenced_column_table"], requiedTable, relation)
            relation.pop()
        }
    }
}
console.log(paths, "allll")

// var allFks = {
//     "parent": "usertypes"
// }
// findTableReach("usertypes", allFks)

var allRelations = []
var allTableNameArray = Object.keys(tableSchema)
for (let index = 0; index <allTableNameArray.length; index++) {
    let allFks = {
        "parent": allTableNameArray[index]
    }
    findTableReach(allTableNameArray[index], allFks)
    allRelations.push(allFks)
}
// readAndWriteRelations(allRelations)
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

function readAndWriteRelations(allRelations){
    fs.readFile("./relations.js", "utf-8", (err, data) => {
        if (err) {
          console.log("ERROR", err);
          throw err;
        }
        let writeData = `module.exports = function(){ 
              return ${JSON.stringify(allRelations, null, '\t')}  
          }`;
        fs.writeFile("./relations.js", writeData, "utf-8", (error) => {
          if (error) throw error;
          console.log("writing complete");
        });
    });
}


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