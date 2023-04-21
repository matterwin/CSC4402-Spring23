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
INSERT INTO userAuthTable (id, username, email, password) VALUES (6, "justin_beiber", "justin_beiber@gmail.com", "justin_beiber_password");
INSERT INTO userAuthTable (id, username, email, password) VALUES (7, "monster_hunter", "monster_hunter@gmail.com", "monster_hunter_password");
INSERT INTO userAuthTable (id, username, email, password) VALUES (8, "fakeyboi", "fakeyboi@gmail.com", "fakeyboi_password");
INSERT INTO userAuthTable (id, username, email, password) VALUES (9, "john", "john@gmail.com", "john_password");
INSERT INTO userAuthTable (id, username, email, password) VALUES (10, "rustey", "rustey@gmail.com", "rustey_password");

INSERT INTO movieTable (id, name, description, length, releaseDate, genre, filepath) VALUES (1, "Cocaine Bear", "An oddball group of cops, criminals, tourists and teens converge on a Georgia forest where a huge black bear goes on a murderous rampage after unintentionally ingesting cocaine.", "1:25:0","2023-2-4","Comedy", "/movie/movie1/movie1.jpg");
INSERT INTO movieTable (id, name, description, length, releaseDate, genre, filepath) VALUES (2, "Inception", "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.", "2:28:0","2010-7-16", "Action", "/movie/movie2/movie2.jpg");
INSERT INTO movieTable (id, name, description, length, releaseDate, genre, filepath) VALUES (3, "Tenet", "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.", "2:30:0","2020-8-3","Action", "/movie/movie3/movie3.jpg");
INSERT INTO movieTable (id, name, description, length, releaseDate, genre, filepath) VALUES (4, "The Sixth Sense", "A frightened, withdrawn Philadelphia boy who communicates with spirits seeks the help of a disheartened child psychologist.", "1:47:0", "1999-8-6", "Thriller", "/movie/movie4/movie4.jpg");
INSERT INTO movieTable (id, name, description, length, releaseDate, genre, filepath) VALUES (5, "The Dark Knight", "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", "2:23:0","2008-7-18","Action", "/movie/movie5/movie5.jpg");

INSERT INTO movieReviewTable (userId, movieId, review, rating, date) VALUES (1, 1, "I first groaned and rolled my eyes when I heard they made a film about a bear on cocaine, named Cocaine Bear. I Googled the name to look for the trailer, and stumbled on the Wikipedia page where I learned this movie is loosely based on actual events, and that's what sold me to give it a watch. If the fact a bear actually found and did cocaine for months isn't funny enough alone to give this film a watch, I don't know what is.", 1.0, "1000-01-01 00:00:00");
INSERT INTO movieReviewTable (userId, movieId, review, rating, date) VALUES (2, 1, "There are jokes, but they're cringey. There is action. But the CGI is mixed. What there isn't is anything to get invested in. There's all these characters you won't care about. Mostly walking around the woods talking. Then there's the bear. Who gets a couple of good kills in before it passes out.", 5.0, "1000-01-01 00:00:00");
INSERT INTO movieReviewTable (userId, movieId, review, rating, date) VALUES (3, 2, "When you wake up from a good dream, you feel the reality is harsh. When you wake up after a bad dream, you will be sentimentally attached to the beauty of reality. But as long as life is good, reality and dreams don't matter.", 4.5, "1000-01-01 00:00:00");
INSERT INTO movieReviewTable (userId, movieId, review, rating, date) VALUES (4, 2, "The 20th Century had Casablanca, Star Wars, the Godfather, Blade Runner, and others - this is the first of the 21st Century masterpieces. Truly in awe at how amazing this movie is, an astounding show of all aspects of films. Amazing story and cinematography accompanied with actors worthy of telling the tale. Remarkable and breathtaking.", 3.5, "1000-01-01 00:00:00");
INSERT INTO movieReviewTable (userId, movieId, review, rating, date) VALUES (5, 3, "I had big expectations for Tenet, since I first watched the trailer. Instead, the movie is very confusing and maybe in order to understand it, I need to watch it more than once. I managed to follow halfway through it, but then I was completely lost. Except the main two characters Neil and The Protagonist, the rest of the cast is pretty flat and Kat is really annoying, especially towards the end. At least actors were good enough to maintain the whole thing afloat.", 2.2,"1000-01-01 00:00:00");
INSERT INTO movieReviewTable (userId, movieId, review, rating, date) VALUES (6, 3, "This is the first movie I have legitimately HATED in quite some time. The 2 and a half hour bore fest has almost zero winning elements. It's got a very effective music score. Outside of that, the movie has a couple of MILDLY amusing combat scenes occurring in reverse, as advertised, and one impressive death scene. That aside, what does Tenet really consist of?", 3.4,"1000-01-01 00:00:00");
INSERT INTO movieReviewTable (userId, movieId, review, rating, date) VALUES (7, 4, "A perfect balance. Sad, but not self-pitying. Triumphant, but not cheesy. Frightening, but never grotesque. Shocking, but not gimmicky. Touching without being cheap. Visually it is stunning. There are some truly amazing shots, the attention to color is appreciated. Haley Joel Osment as Cole is extraordinary. What a promising career ahead of him. Bruce Willis, as a workaholic child psychologist, ought to be extremely proud of this, as it may be some of his best work. Tender, brooding, regretful, determined. Perfect. Toni Collette, is really phenomenal. I think she gets overlooked, but with any less talented actress, the film would have certainly suffered.", 4.1,"1000-01-01 00:00:00");
INSERT INTO movieReviewTable (userId, movieId, review, rating, date) VALUES (8, 4, "The Sixth Sense is a brilliant film, plain and simple. It is unique in that it relies on imagination and psychology to scare you and make you think twice about the world around you. The director did a fabulous job constructing the imagery of the film, and I genuinely did not know about the ending until it was revealed. Quite a shock! The Sixth Sense goes in my book as the single greatest psychological horror film I have ever seen. Anyone who bashes it are simply not giving it a chance or don't fully realize the complex dialog and imagery around them. Brilliant", 3.7,"1000-01-01 00:00:00");
INSERT INTO movieReviewTable (userId, movieId, review, rating, date) VALUES (9, 5, "It is just what you want for the best movie. Great story great acting, thrilling twist. Just watched Joker in 2019, I just has to come back and give dark knight a 10. And thanks to Heath Ledger for the exceptional performs.", 2.3,"1000-01-01 00:00:00");
INSERT INTO movieReviewTable (userId, movieId, review, rating, date) VALUES (10, 6, "What can I say, it was made by Christopher Nolan so it has to be good. Amazing action. Amazing characters. Amazing director. The Dark Knight has everything. I have no problems with this movie. But the thing keeping me back from giving this movie a 10 is that something about it just didn't fully connect with me.", 2.6,"1000-01-01 00:00:00");
