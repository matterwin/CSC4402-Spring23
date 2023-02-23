## Required Dependencies
1. NodejS: https://nodejs.org/en/download/
2. MySql: https://moodle.lsu.edu/pluginfile.php/2063071/mod_resource/content/0/Steps%20to%20install%20MySQL.pdf
3. Postman: https://www.postman.com/downloads/

## How to Run
1. Ensure you are in the back-end folder on your cli
2. Run `npm install`
3. Set .env variables according to your credentials you made when installing mysql
4. Open MySql Workbench and CopyPast/Run sql/createDatabase.sql and createSchema.sql
5. You can now run `npm start` or `npm run watch`

## How to Make Request with Postman
1. Open Postman and in the top left click import
2. Open the file `CSC4404MovieWebiste.postman_collection.json`
3. Run project with `npm start`

## Extra
If you want to the project to refresh when you save run `npm run watch`