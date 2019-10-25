--
-- This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @author kvlinden
-- @version Summer, 2015
--

-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS House;
DROP TABLE IF EXISTS Hotel;
DROP TABLE IF EXISTS Property;
DROP TABLE IF EXISTS PlayerStatus;
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;

-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY, 
	time timestamp
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY, 
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer
	);

CREATE TABLE Property (
	ID integer PRIMARY KEY,
	playerID integer REFERENCES Player(ID),
	name varchar(50)
	);

CREATE TABLE House (
	propertyID integer REFERENCES Property(ID),
	playerID integer REFERENCES Player(ID)
	);

CREATE TABLE Hotel (
	propertyID integer REFERENCES Property(ID),
	playerID integer REFERENCES Player(ID)
	);

CREATE TABLE PlayerStatus (
	playerID integer REFERENCES Player(ID),
	cash integer,
	location varchar(50)
	);


-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON Property TO PUBLIC;
GRANT SELECT ON House TO PUBLIC;
GRANT SELECT ON Hotel TO PUBLIC;
GRANT SELECT ON PlayerStatus TO PUBLIC;

-- Add sample records.
INSERT INTO Game VALUES (1, '2006-06-27 08:00:00');
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00');
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00');

INSERT INTO Player VALUES (1, 'me@calvin.edu', 'Jonathan');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');

INSERT INTO PlayerGame VALUES (1, 1, 0.00);
INSERT INTO PlayerGame VALUES (1, 2, 0.00);
INSERT INTO PlayerGame VALUES (1, 3, 2350.00);
INSERT INTO PlayerGame VALUES (2, 1, 1000.00);
INSERT INTO PlayerGame VALUES (2, 2, 0.00);
INSERT INTO PlayerGame VALUES (2, 3, 500.00);
INSERT INTO PlayerGame VALUES (3, 2, 0.00);
INSERT INTO PlayerGame VALUES (3, 3, 5500.00);

INSERT INTO Property VALUES (1, 1, 'Park Place');
INSERT INTO Property VALUES (2, 2, 'Boardwalk');
INSERT INTO Property VALUES (3, 1, 'Illinois Ave');

INSERT INTO House VALUES (1, 1);
INSERT INTO House VALUES (2, 2);

INSERT INTO Hotel VALUES (3, 1);

INSERT INTO PlayerStatus VALUES (3, 3000000, 'Jail');

-- Lab 8 SQL
-- retrieve list of games, ordered by date from recent to oldest
--SELECT *
--FROM Game
--ORDER BY time DESC;

-- retrieve list of all games from the past week
--SELECT *
--FROM Game
--WHERE time BETWEEN
--	NOW() 
--	AND NOW()::DATE-EXTRACT(DOW FROM NOW())::INTEGER-7 ;


-- retrieve list of players who have names
--SELECT *
--FROM Player
--WHERE name IS NOT NULL;

-- retrieve list of player IDs for players with game scores higher than 2000
--SELECT *
--FROM PlayerGame
--WHERE score > 2000;

-- retrieve list of players with gmail accounts
--SELECT *
--FROM Player
--WHERE emailAddress LIKE '%gmail%';

-- retrieve all "The King" game scores in decreasing order
--SELECT score
--FROM Player, PlayerGame
--WHERE Player.ID = PlayerGame.playerID
  --AND Player.name = 'The King'
--ORDER BY score DESC;

-- retrieve name of winner of game on 2006-06-28 13:20:00
--SELECT name as winner
--FROM Player, PlayerGame, Game
--WHERE Game.time = '2006-06-28 13:20:00'
--AND Player.ID = PlayerGame.playerID
--AND Game.ID = PlayerGame.gameID
--ORDER BY score DESC
--LIMIT 1;

-- what does P1.ID < P2.ID do in the last example query?
-- this is comparing the two players' IDs to make sure that they are different players even though they share a name

-- you may want to join a table to itself if a row contains a reference to another row in the same table,
-- like a table of family member information where each person has a reference to the ID of their parents





