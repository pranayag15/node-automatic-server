var mysql = require("mysql");

exports.configDB = (sqlConfig) => {
  var connection = mysql.createConnection({
    host: sqlConfig.host,
    user: sqlConfig.user,
    password: sqlConfig.password,
    database: sqlConfig.database,
  });

  connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }

    console.log("SQL connection established successfully");
  });
  return new Promise((resolve, reject) => {
    connection.query(
    `select c.table_name, c.column_name, c.ordinal_position,c.column_key,c.is_nullable, c.data_type, 
    c.column_type,c.extra,c.privileges, c.column_comment,c.column_default,c.data_type,c.character_maximum_length, 
    k.constraint_name, k.referenced_table_name, k.referenced_column_name, 
    s.index_name,s.seq_in_index, v.table_name as isView from information_schema.columns as c 
    left join information_schema.key_column_usage as k on c.column_name=k.column_name and c.table_schema = k.referenced_table_schema and c.table_name = k.table_name 
    left join information_schema.statistics as s on c.column_name = s.column_name and c.table_schema = s.index_schema and c.table_name = s.table_name 
    LEFT JOIN information_schema.VIEWS as v ON c.table_schema = v.table_schema and c.table_name = v.table_name 
    where c.table_schema=? order by c.table_name, c.ordinal_position ;
    `,
      sqlConfig.database,
      function (error, results, fields) {
        if (error) reject(error);

        resolve(results);
      }
    );
  });
};
