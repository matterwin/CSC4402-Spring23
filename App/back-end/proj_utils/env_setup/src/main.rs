use std::{thread, time};
use time::Duration;
use std::io::{stdout, Write, stdin};
use std::fs::File;
use std::path::Path;

#[derive(Debug)]
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

const DEFAULT_PORT: &str = "8000";
const DEFAULT_APP_URL: &str = "http://localhost";
const DEFAULT_BASE_ROUTE: &str = "api";
const DEFAULT_SQL_HOST: &str = "localhost";
const DEFAULT_SQL_USER: &str = "root";
const DEFAULT_SQL_DATABASE: &str = "movieDatabase";

fn main() {
    let pause_time = time::Duration::from_millis(40);
    
    robot_print(pause_time, "Watup you skanky bastard!!!\n");
    robot_print(pause_time, "Welcome to the environtment configurator 3000!!!\n");
    robot_print(pause_time, "Be sure to just press enter to input the default value (not always allowed)!\n\n");
     
    robot_print(pause_time, "Let's start by configuring the web API\n");
    robot_print(pause_time, &format!("What port [{}]: ", DEFAULT_PORT));
    let port = get_strip_input(Some(String::from(DEFAULT_PORT)))
        .parse::<usize>()
        .unwrap();
    robot_print(pause_time, &format!("What app url [{}]: ", DEFAULT_APP_URL));
    let app_url = get_strip_input(Some(String::from(DEFAULT_APP_URL)));
    robot_print(pause_time, &format!("What api base route [{}]: ", DEFAULT_BASE_ROUTE));
    let api_base_route = get_strip_input(Some(String::from(DEFAULT_BASE_ROUTE)));
    robot_print(pause_time, "What bucket dir: ");
    let bucket_dir = get_strip_input(None);
    robot_print(pause_time, &format!("What SQL host [{}]: ", DEFAULT_SQL_HOST));
    let sql_host = get_strip_input(Some(String::from(DEFAULT_SQL_HOST)));
    robot_print(pause_time, &format!("What SQL user [{}]: ", DEFAULT_SQL_USER));
    let sql_user = get_strip_input(Some(String::from(DEFAULT_SQL_USER)));
    robot_print(pause_time, "What sql password: ");
    let sql_password = get_strip_input(None);
    robot_print(pause_time, &format!("What SQL database [{}]: ", DEFAULT_SQL_DATABASE));
    let sql_database = get_strip_input(Some(String::from(DEFAULT_SQL_DATABASE)));
    robot_print(pause_time, "What sql scripts: ");
    let sql_scripts = get_strip_input(None);
    robot_print(pause_time, "What is env folder path");
    let env_path = get_strip_input(None);

    let new_config = Config {
       port,
       app_url,
       api_base_route,
       bucket_dir,
       sql_host,
       sql_user,
       sql_password,
       sql_database,
       sql_scripts,
    };

    let env_path = Path::new(&env_path);

    if !env_path.is_dir() {
        panic!("env path must be a created folder!");
    } 

    robot_print(pause_time, "Here is your new env configuration: \n\n");
    println!("{:#?}", new_config);

    println!("Path to env folder: {:?}", env_path);

    let mut file = File::create(env_path.join(".env"))
        .expect(&format!("Unable to create .env file at: {:?}", env_path));

    file.write(format!("PORT={}\nAPP_URL={}\nAPI_BASE_ROUTE={}\nBUCKET_DIR={}\nSQL_HOST={}\nSQL_USER={}\nSQL_PASSWORD={}\nSQL_DATABASE={}\nSQL_SCRIPTS={}",
            new_config.port, 
            new_config.app_url,
            new_config.api_base_route,
            new_config.bucket_dir,
            new_config.sql_host,
            new_config.sql_user,
            new_config.sql_password,
            new_config.sql_database,
            new_config.sql_scripts)
        .as_bytes())
        .expect("Error writing to file");
}

fn get_strip_input(default: Option<String>) -> String {
    let mut input = String::new(); 
    stdin()
        .read_line(&mut input)
        .unwrap();
    let mut input = String::from(input.trim());

    if let Some(value) = default {
        input = value; 
    } else {
        if input.len() <= 0 {
            print!("Value is required: ");
            stdout().flush().unwrap();
            return get_strip_input(default);
        }
    }

    return input;
}

fn robot_print(pause_time: Duration, message: &str) {
    for c in message.chars() {
        print!("{c}");
        stdout().flush().unwrap();
        thread::sleep(pause_time);
    }
}
