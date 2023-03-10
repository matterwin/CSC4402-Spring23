const fs = require('fs');
const mysql = require('mysql');

const readSqlFile = (path) => {
    const finalString = fs.readFileSync(path).toString()
    .replace(/(\r\n|\n|\r)/gm," ");

    return finalString;
}

const executeQuery = (path, params, callback) => {
    let result = undefined;

    const connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    });

    connection.connect((err) => {
        if(err) throw err;
    
        connection.query(readSqlFile(path), params, (error, queryResult) => {
            if(error) throw error;
            callback(queryResult);
        });
    })
}

module.exports = {
    readSqlFile,
    executeQuery,
}