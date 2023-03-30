const fs = require("fs");
const mysql = require("mysql");

const readSqlFile = (path) => {
  const finalString = fs
    .readFileSync(path)
    .toString()
    .replace(/(\r\n|\n|\r)/gm, " ");

  return finalString;
};

const executeQuery = (path, params, callback, res) => {
  let result = undefined;

  const configSql = {
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
  };

  const connection = mysql.createConnection(configSql);

  console.log(JSON.stringify(configSql));

  connection.connect((err) => {
    if (err) throw err;

    connection.query(readSqlFile(path), params, (error, queryResult) => {
      if (error) {
        console.error(error);
        res.sendStatus(403).send();
      } else {
        callback(queryResult);
      }

      connection.end();
    });
  });
};

module.exports = {
  readSqlFile,
  executeQuery,
};

