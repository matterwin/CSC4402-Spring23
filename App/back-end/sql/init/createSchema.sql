DROP TABLE testTable;
DROP TABLE userAuthTable;

CREATE TABLE testTable(
    id INT NOT NULL AUTO_INCREMENT,
    testMessage VARCHAR(255),
    
    PRIMARY KEY (id)
);

CREATE TABLE userAuthTable(
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255),
    password VARCHAR(255),

    PRIMARY KEY (id)
);