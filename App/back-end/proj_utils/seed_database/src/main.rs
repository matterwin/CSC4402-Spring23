use dotenv;
use serde::Deserialize;
use mysql::*;
use mysql::prelude::*;
use std::fs;
use std::path::Path;

const CREATE_DB_REL_PATH: &str = "init/createDatabaseSchema.sql";
const SEED_DB_REL_PATH: &str = "init/seedDatabase.sql";
const IMAGES_DIR_REL: &str = "images";

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
   let sql_scripts_path_buf = Path::new(sql_scripts).join(CREATE_DB_REL_PATH);
   let create_schema_abs_path = sql_scripts_path_buf
       .to_str()
       .expect("Unable to create absolute path to create database schema");

   println!("Creating schema with script at file path: {}", create_schema_abs_path); 

   let sql_string = fs::read_to_string(create_schema_abs_path)
       .expect("Unable to read file to string to create database schema"); 

   conn.query_drop(sql_string)
       .expect("Unable to execute query to create database schema");
}

fn seed_database(conn: &mut PooledConn, sql_scripts: &str) {
   let sql_scripts_path_buf = Path::new(sql_scripts).join(SEED_DB_REL_PATH);
   let seed_database_abs_path = sql_scripts_path_buf
       .to_str()
       .expect("Unable to create absolute path to seed database");

   println!("Seeding database with script at filepath: {}", seed_database_abs_path);

   let sql_string = fs::read_to_string(seed_database_abs_path)
       .expect("Unable to read file to string to seed database");
   conn.query_drop(sql_string)
       .expect("Unable to execute query to seed database");
}

fn copy_images(bucket_dir: &str) {
    let bucket_path = Path::new(bucket_dir);
    let images_path = Path::new(IMAGES_DIR_REL);

    if !bucket_path.is_dir() {
        panic!("bucket_dir is not a folder");
    } else if !images_path.is_dir() {
        panic!("images_dir is not a folder");
    }

    println!("Removing old image files and uploading new ones");

    // NOTE: removing old movie folder
    fs::remove_dir_all(bucket_dir).unwrap();
    fs::create_dir(bucket_dir).unwrap();

    let paths = fs::read_dir(IMAGES_DIR_REL).unwrap();

    for path in paths {
        // let file_str = path.unwrap().path().into_os_string().into_string().unwrap();
        //let file_path = Path::new(&file_str); 
        //let file_movie_folder = file_path.file_stem().unwrap().to_str().unwrap();
        let file_path = path
            .unwrap()
            .path();
        let file_stem = file_path
            .file_stem()
            .unwrap()
            .to_str()
            .unwrap();
        let src_abs_file_path = Path::new(file_path
            .as_os_str()
            .to_str()
            .unwrap())
            .to_owned();
        let file_stem_string = String::from(file_stem);
        let dest_abs_folder = Path::new(bucket_dir)
            .join(&file_stem_string)
            .to_str()
            .unwrap()
            .to_owned();
        let dest_abs_file_path = Path::new(&dest_abs_folder)
            .join(file_path.file_name().unwrap())
            .to_str()
            .unwrap()
            .to_owned();

        fs::create_dir(dest_abs_folder).unwrap();
        
        println!("Copying: {:?} to: {:?}", src_abs_file_path, dest_abs_file_path);

        fs::copy(src_abs_file_path, dest_abs_file_path).unwrap();
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
