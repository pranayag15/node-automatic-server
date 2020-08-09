var jsonSchema = require("../generated-files/tableSchema.json");
const colors  = require('colors')
var fs = require("fs");

// writeTableJson()

function writeTableJson(){
  let relations = {};
  for (let i = 0; i < jsonSchema.length; i++) {
    let object = jsonSchema[i];
    let tableName = object["TABLE_NAME"];
    if (!relations[tableName]) {
      relations[tableName] = {
        primaryKey: [],
        columns: [],
        foreignKeys: [],
      };
    }
    //Adding Primary key
    if (object["INDEX_NAME"] == "PRIMARY") {
      let pk = {
        column_name: object.COLUMN_NAME,
        column_key: object.COLUMN_KEY,
        data_type: object.DATA_TYPE,
        column_type: object.COLUMN_TYPE,
      };
      let found = relations[tableName]["primaryKey"].find(o => (o.column_name === pk.column_name))
      if(found == undefined)
          relations[tableName]["primaryKey"].push(pk)
    }
    //Adding Foreign keys
    if (relations[tableName] && object["referenced_table_name"] != null) {
      let fk = {
        columns_name: object.COLUMN_NAME,
        table_name: object.TABLE_NAME,
        referenced_column_table: object.referenced_table_name,
        referenced_column_name: object.referenced_column_name,
        column_type: object.COLUMN_TYPE,
        is_nullable: object.IS_NULLABLE,
      };
      let found = relations[tableName]["foreignKeys"].find(o => (o.referenced_column_name === fk.referenced_column_name) && (o.referenced_column_table === fk.referenced_column_table))
      if(found == undefined)
          relations[tableName]["foreignKeys"].push(fk)
          
    }
    //Adding Columns
    let column = {
        "column_name": object.COLUMN_NAME,
        "column_key": object.COLUMN_KEY,
        "is_nullable": object.IS_NULLABLE,
        "data_type": object.DATA_TYPE,
        "column_type":object.COLUMN_TYPE
    }
    let found =  relations[tableName]["columns"].find(o => (o.column_name === column.column_name))
    if(found == undefined)
          relations[tableName]["columns"].push(column)
  }
  // console.log(JSON.stringify(relations))
  return new Promise((resolve, reject) => {
    fs.readFile("../generated-files/tables.js", "utf-8", (err, data) => {
      if (err) {
        console.log("ERROR", err);
        reject(err);
      }
      let writeData = `module.exports = function(){ 
            return ${JSON.stringify(relations, null, '\t')}  
        }`;
      fs.writeFile("../generated-files/tables.js", writeData, "utf-8", (error) => {
        if (error) reject(error);
        console.log(colors.cyan("Table json writing complete"));
        resolve()
      });
    });
  })
}

// writeTableJson()
module.exports = writeTableJson
// console.log(JSON.stringify(relations));
