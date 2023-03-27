use dotenv;
use serde::Deserialize;
use mysql::*;
use mysql::prelude::*;
use std::fs;

#[derive(Deserialize, Debug)]
#[allow(dead_code)]
struct Config {
    port: usize,
    app_url: String,
    api_base_route: String,
    bucket_dir: String,
    sql_host: String,
    sql_user: String,
    sql_password: String,
    sql_database: String,
    sql_scripts: String,
}

fn init_database_schema(conn: &mut PooledConn, sql_scripts: &str) {
   let create_database_schema_filepath = format!("{}/init/createDatabaseSchema.sql", sql_scripts);
   println!("Creating database schema with script at filepath: {}", create_database_schema_filepath);

   let sql_string = fs::read_to_string(create_database_schema_filepath); 
   conn.query_drop(sql_string.unwrap()).unwrap();
}

fn seed_database(conn: &mut PooledConn, sql_scripts: &str) {
   let seed_database_filepath = format!("{}/init/seedDatabase.sql", sql_scripts);
   println!("Creating database schema with script at filepath: {}", seed_database_filepath);

   let sql_string = fs::read_to_string(seed_database_filepath); 
   conn.query_drop(sql_string.unwrap()).unwrap();
}

fn main() -> std::result::Result<(), Box<dyn std::error::Error>> {
    dotenv::dotenv().ok();

    let config = match envy::from_env::<Config>() {
        Ok(config) => config,
        Err(error) => panic!("{:#?}", error),
    };

    println!("{:#?}", config);

    // NOTE: building sql connection String
    let opts = OptsBuilder::new()
        .user(Some(config.sql_user))
        .pass(Some(config.sql_password))
        .ip_or_hostname(Some(config.sql_host))
        .db_name(Some(config.sql_database));

    let pool = Pool::new(opts)?;  
    let mut conn = pool.get_conn()?;
    
    init_database_schema(&mut conn, &config.sql_scripts); 

    Ok(())
}
