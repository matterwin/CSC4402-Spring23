use dotenv;
use serde::Deserialize;
use mysql::*;
use mysql::prelude::*;
use std::fs;
use std::path::Path;

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
   println!("Seeding database with script at filepath: {}", seed_database_filepath);

   let sql_string = fs::read_to_string(seed_database_filepath); 
   conn.query_drop(sql_string.unwrap()).unwrap();
}

fn copy_images(bucket_dir: &str) {
    let images_str = "images";
    let bucket_path = Path::new(bucket_dir);
    let images_path = Path::new(images_str);

    if !bucket_path.is_dir() {
        panic!("bucket_dir is not a folder");
    } else if !images_path.is_dir() {
        panic!("images_dir is not a folder");
    }

    println!("Removing old image files and uploading new ones");

    // NOTE: removing old movie folder
    fs::remove_dir_all(bucket_dir).unwrap();
    fs::create_dir(bucket_dir).unwrap();

    let paths = fs::read_dir(images_str).unwrap();

    for path in paths {
        let file_str = path.unwrap().path().into_os_string().into_string().unwrap();
        let file_path = Path::new(&file_str); 
        
        let bucket_file = format!("{}/{}", bucket_dir, file_path.file_name().unwrap().to_str().unwrap());
        let bucket_file_path = Path::new(&bucket_file);

        println!("Copying: {:?} to: {:?}", file_path, bucket_file_path);

        fs::copy(file_path, bucket_file_path).unwrap();
    }
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
    seed_database(&mut conn, &config.sql_scripts);
    copy_images(&config.bucket_dir);

    Ok(())
}
