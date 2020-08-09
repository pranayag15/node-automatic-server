const commander = require("commander");
const cmdHandler = require("../lib/utils/cmd.helper")
const sqlConnection = require("../lib/utils/configdb")
const writeTableJson = require("../lib/tableCoumns.write")
const writeRelations = require("../lib/relations.write")
const mainMagicFunction = require("../lib/server.write.js")
const exec = require("shelljs").exec
const sqlQuery = require("../lib/utils/query.database")
const colors = require('colors')
var fs = require("fs");
var jsonSchema = require("../generated-files/tableSchema.json");
async function start(commander) {
    cmdHandler.handle(commander)
    let startingTime = Date.now()

    sqlConnection.configDB(commander)
        .then(tableJson => {
            console.log(colors.yellow("Table schema writing"));
            return writeQueryData((tableJson))
        })
        // .then(_ => {
        //     exec('cd .. && cd lib && node tableCoumns.write', function(code, stdout, stderr) {
        //         console.log('Program output:', stdout);
        //       });
        
        //       exec('cd .. && cd lib && node relations.write', function(code, stdout, stderr) {
        //         console.log('Program output:', stdout);
        //         if(stderr)
        //         console.log('Program stderr:', stderr);
        //       });

        //       exec('cd .. && cd lib && node relations.write', function(code, stdout, stderr) {
        //         console.log('Program output:', stdout);
        //         if(stderr)
        //         console.log('Program stderr:', stderr);
        //       });
        // })
        .then(_=>{
            console.log(colors.yellow("Table JSON writing"));
            // console.log(jsonSchema)
            return writeTableJson()
        })
        .then(_=>{
            console.log(colors.yellow("Table relations writing"));
            return writeRelations()
        })
        .then(_=>{
            console.log(colors.yellow("writing server"));
            return mainMagicFunction()
        })
        .then(_=>{
            let endingTime = Date.now()
            let totalTime = ((endingTime-startingTime)/(60)).toFixed(2)
            console.log(colors.magenta(`Created server in ${totalTime} seconds`))
            // process.exit()
        })
        .catch(er => {
            console.log(er)
        })

 
    
    // let totalTime = ((endingTime-startingTime)/60).toFixed(2)
    // console.log(colors.magenta(`Created server in ${totalTime} seconds`))
    // process.exit()
}

start(commander)

function writeQueryData(querydata){
    return new Promise((resolve, reject) => {
        fs.readFile("../generated-files/tableSchema.json", "utf-8", (err, data) => {
            if (err) {
              console.log("ERROR", err);
              reject(err);
            }
            fs.writeFile("../generated-files/tableSchema.json", JSON.stringify(querydata, null, '\t'), "utf-8", (error) => {
              if (error) reject(error);
              console.log(colors.cyan("Table schema JSON writing complete."));
              resolve()
            });
          });
    })
}