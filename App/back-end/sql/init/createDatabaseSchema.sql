DROP DATABASE movieDatabase; 
CREATE DATABASE movieDatabase;
USE movieDatabase;

CREATE TABLE testTable(
    id INT UNIQUE NOT NULL AUTO_INCREMENT,
    testMessage VARCHAR(255) NOT NULL,
    
    PRIMARY KEY (id)
);

CREATE TABLE userAuthTable(
    id INT UNIQUE NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    
    PRIMARY KEY (id)
);

-- NOTE: this does not delete the image files
--       when resetting you should delete all files in BUCKET_DIR/movie
CREATE TABLE movieTable (
    id INT UNIQUE NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) UNIQUE NOT NULL,
    description VARCHAR(255) NOT NULL,
    length TIME NOT NULL,
    releaseDate DATE NOT NULL,
    genre VARCHAR(255) NOT NULL,
    filepath VARCHAR(1024) NOT NULL,

    PRIMARY KEY (id)
);


CREATE TABLE movieReviewTable (
    userId INT NOT NULL,
    movieId INT NOT NULL,

    review VARCHAR(1024) NOT NULL,
    rating DECIMAL(2, 1) NOT NULL,
    date DATETIME NOT NULL,

    PRIMARY KEY (userId, movieId),
    FOREIGN KEY (userId) REFERENCES userAuthTable(id) ON DELETE CASCADE,
    FOREIGN KEY (movieId) REFERENCES movieTable(id) ON DELETE CASCADE
);
