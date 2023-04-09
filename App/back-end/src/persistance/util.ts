import fs from 'fs';
import mysql from 'mysql';
import { type Response } from 'express';

export const readSqlFile = (path: string): string => {
  const finalString = fs
    .readFileSync(path)
    .toString()
    .replace(/(\r\n|\n|\r)/gm, ' ');

  return finalString;
};

export const executeQuery = async (
  res: Response,
  path: string,
  params?: string[],
): Promise<any> => {
  const configSql = {
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
  };

  const connection = mysql.createConnection(configSql);

  return await new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err !== null) {
        res.status(500).send();
        reject(err);
      }

      if (params === undefined) {
        connection.query(readSqlFile(path), (error, queryResult) => {
          if (error !== null) {
            res.status(500).send();
            reject(error);
          } else {
            resolve(queryResult);
          }

          connection.end();
        });
      } else {
        connection.query(readSqlFile(path), params, (error, queryResult) => {
          if (error !== null) {
            res.status(400).send();
            reject(error);
          } else {
            resolve(queryResult);
          }

          connection.end();
        });
      }
    });
  });
};
