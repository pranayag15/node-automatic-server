var tableSchema = require("./tables")()
var colors = require('colors')

// sqlQueryGenerator("dsd", "business")

module.exports.sqlQueryGenerator = (req, parentTable, requiredTable, methods) => {
    let baseQueryString = ""
    let tableString = `FROM `
    let joinString = ""
    let whereString = ""
    console.log(colors.cyan(req.params))
    switch (methods) {
        case 1: {
            baseQueryString+=`SELECT ${parentTable}.*\n`
            tableString+=`${parentTable}\n`
            break;
        }

        case 2: {
            baseQueryString+=`SELECT ${parentTable}.*\n`
            tableString+=`${parentTable}\n`
            whereString+=`WHERE ${parentTable}.${tableSchema[parentTable]["primaryKey"][0]["column_name"]} = ?`
            break;
        }

        case 3: {
            baseQueryString = `SELECT ${requiredTable}.* `
            tableString+=` ${requiredTable}\n`
            let previousTable = requiredTable
            let requiredFk
            var path = findShortestPath(requiredTable, parentTable)
            for (let i = 0; i < path.length; i++) {
                requiredFk = tableSchema[previousTable]["foreignKeys"].find(o => o.referenced_column_table === path[i])   
                joinString+=`INNER JOIN ${path[i]} ON ${previousTable}.${requiredFk["columns_name"]} = ${path[i]}.${requiredFk["referenced_column_name"]}\n`
                previousTable=path[i]
            }
            whereString+=`WHERE ${path[path.length-1]}.${requiredFk["referenced_column_name"]} = ?`
            // console.log(colors.magenta(joinString+whereString))
            break;
        }

        case 4: {
            baseQueryString = `SELECT ${requiredTable}.* `
            tableString+=` ${requiredTable}\n`
            let previousTable = requiredTable
            let requiredFk
            var path = findShortestPath(requiredTable, parentTable)
            for (let i = 0; i < path.length; i++) {
                requiredFk = tableSchema[previousTable]["foreignKeys"].find(o => o.referenced_column_table === path[i])   
                joinString+=`INNER JOIN ${path[i]} on ${previousTable}.${requiredFk["columns_name"]} = ${path[i]}.${requiredFk["referenced_column_name"]}\n`
                previousTable=path[i]
            }
            whereString+=`WHERE ${path[path.length-1]}.${requiredFk["referenced_column_name"]} = ?\n`
            whereString+=`AND ${requiredTable}.${tableSchema[requiredTable]["primaryKey"][0]["column_name"]} = ?`
            // console.log(colors.magenta(joinString+whereString))
            break;
        }
    }

    return baseQueryString + tableString + joinString + whereString


    function findShortestPath (presentTable, requiredTable){
        let paths = []
        findRelation(presentTable, requiredTable, [])
        paths.sort(sortPathsAcoordingToPathLength)
        console.log(colors.blue(paths))

        function findRelation(presentTable, requiredTable, relation) {
            if (presentTable == requiredTable) {
                paths.push([...relation])
                // console.log(colors.yellow(relation))
                return true;
            }
            for (let i = 0; i < tableSchema[presentTable]["foreignKeys"].length; i++) {
                if (tableSchema[presentTable]["foreignKeys"][i]["is_nullable"] == "NO") {
                    relation.push(tableSchema[presentTable]["foreignKeys"][i]["referenced_column_table"])
                    findRelation(tableSchema[presentTable]["foreignKeys"][i]["referenced_column_table"], requiredTable, relation)
                    relation.pop()
                }
            }
        }

        function sortPathsAcoordingToPathLength(x, y){
            if(x.length==y.length)
                return 0;
            else 
                return (x.length < y.length) ? -1 : 1
        }

        return paths[0]
    }
}