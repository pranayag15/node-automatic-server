"use strict";
const program = require("commander");
const colors = require("colors");

program.on("--help", () => {
  console.log("");
  console.log("  Examples:".blue);
  console.log("");
  console.log("    $ xmysql -u username -p password -d databaseSchema".blue);
  console.log("");
});

program
  .option("-h, --host <n>", "hostname of database / localhost by default")
  .option("-u, --user <n>", "username of database / root by default")
  .option("-p, --password <n>", "password of database / empty by default")
  .option("-d, --database <n>", "database schema name")
  .option(
    "-r, --ipAddress <n>",
    "IP interface of your server / localhost by default"
  )
  .option("-n, --portNumber <n>", "port number for app / 3000 by default")
  .option("-o, --port <n>", "port number for mysql / 3306 by default")
  .parse(process.argv);

function processInvalidArguments(program) {
  let err = "";

  if (!program.password) {
    err += "Error: password for database is missing\n";
  }

  if (!program.database) {
    err += "Error: database name is missing\n";
  }

  if (err !== "") {
    program.outputHelp();
    console.log(err.red);
  }
}

exports.handle = (program) => {
  /**************** START : default values ****************/
  program.ipAddress = program.ipAddress || "localhost";
  program.portNumber = program.portNumber || 3000;
  program.port = program.port || 3306;
  program.user = program.user || "root";
  program.password = program.password || "";
  program.host = program.host || "localhost";

  /**************** END : default values ****************/

  if (program.database && program.host && program.user) {
    //console.log('Starting server at:', 'http://' + program.host + ':' + program.portNumber)
  } else {
    processInvalidArguments(program);
    process.exit(1);
  }
};
