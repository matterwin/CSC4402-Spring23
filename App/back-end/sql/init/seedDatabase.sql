SET FOREIGN_KEY_CHECKS=0;

use movieDatabase;

INSERT INTO testTable (id, testMessage) VALUES (1, "testMessage1");
INSERT INTO testTable (id, testMessage) VALUES (2, "testMessage2");
INSERT INTO testTable (id, testMessage) VALUES (3, "testMessage3");
INSERT INTO testTable (id, testMessage) VALUES (4, "testMessage4");
INSERT INTO testTable (id, testMessage) VALUES (5, "testMessage5");
INSERT INTO testTable (id, testMessage) VALUES (6, "testMessage6");
INSERT INTO testTable (id, testMessage) VALUES (7, "testMessage7");
INSERT INTO testTable (id, testMessage) VALUES (8, "testMessage8");
INSERT INTO testTable (id, testMessage) VALUES (9, "testMessage9");
INSERT INTO testTable (id, testMessage) VALUES (10, "testMessage10");

INSERT INTO userAuthTable (id, username, email, password) VALUES (1, "bubbly_snowflake", "bubbly_snowflake@gmail.com", "bubbly_snowflake_password");
INSERT INTO userAuthTable (id, username, email, password) VALUES (2, "kristy_honey", "kristy_honey@gmail.com", "kristy_honey_password");
INSERT INTO userAuthTable (id, username, email, password) VALUES (3, "sweet_kristy", "sweet_kristy@gmail.com", "sweet_kristy_password");
INSERT INTO userAuthTable (id, username, email, password) VALUES (4, "bubbles", "bubbles@gmail.com", "bubbles_password");
INSERT INTO userAuthTable (id, username, email, password) VALUES (5, "buddy", "buddy@gmail.com", "buddy_password");
INSERT INTO userAuthTable (id, username, email, password) VALUES (6, "justin_beiber", "justin_beiber@gmail.com", "justint_beiber_password");
INSERT INTO userAuthTable (id, username, email, password) VALUES (7, "monster_hunter", "monster_hunter@gmail.com", "monster_hunter_password");
INSERT INTO userAuthTable (id, username, email, password) VALUES (8, "fakeyboi", "fakeyboi@gmail.com", "fakeyboi_password");
INSERT INTO userAuthTable (id, username, email, password) VALUES (9, "john", "john@gmail.com", "john_password");
INSERT INTO userAuthTable (id, username, email, password) VALUES (10, "rustey", "rustey@gmail.com", "rustey_password");

INSERT INTO movieTable (id, name, description, length, releaseDate, genre, filepath) VALUES (1, "
