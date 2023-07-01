-- SQL-File für den Webshop
-- Zuletzt geändert: 6.5.2023
-- Version: 4
-- Autor: Dimitrios Chalatsoglou

-- Tabellenstruktur für Tabelle "Adresse"

CREATE TABLE `Adresse` (
  `adresseID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `strasse` varchar(150) DEFAULT NULL,
  `hausnummer` varchar(5) DEFAULT NULL,
  `ort` varchar(50) DEFAULT NULL,
  `plz` varchar(10) DEFAULT NULL,
  `land` varchar(100) DEFAULT NULL,
  PRIMARY KEY(adresseID)
);

-- Tabellenstruktur für Tabelle "Bestellung"

CREATE TABLE `Bestellung` (
  `bestellID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `warenkorbID` int(11) UNSIGNED NOT NULL,
  `lieferadresse` int(11) UNSIGNED NOT NULL,
  `rechnungsadresse` int(11) UNSIGNED NOT NULL,
  `bezahlt` tinyint(1) DEFAULT NULL,
  `datum` timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(bestellID)
);

-- Tabellenstruktur für Tabelle "Kundenadresse"

CREATE TABLE `Kundenadresse` (
  `userID` varchar(30) NOT NULL,
  `adresseID` int(11) UNSIGNED NOT NULL,
  PRIMARY KEY(userID, adresseID)
);

-- Tabellenstruktur für Tabelle "Produkt"

CREATE TABLE `Produkt` (
  `produktID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `produktname` varchar(50) NOT NULL,
  `produktbeschreibung` text DEFAULT NULL,
  `preis` decimal(10,2) NOT NULL,
  `bild` varchar(100),
  PRIMARY KEY(produktID)
);

-- Tabellenstruktur für Tabelle "User"

CREATE TABLE `User` (
  `userID` varchar(30) NOT NULL,
  `vorname` varchar(30) NOT NULL,
  `nachname` varchar(30) NOT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  PRIMARY KEY(userID)
);

-- Tabellenstruktur für Tabelle "Warenkorb"

CREATE TABLE `Warenkorb` (
  `warenkorbID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `userID` varchar(30) NOT NULL,
  `istAktiv` tinyint(1) DEFAULT 1,
  PRIMARY KEY(warenkorbID)
);

-- Tabellenstruktur für Tabelle "Warenkorbinhalt"

CREATE TABLE `Warenkorbinhalt` (
  `warenkorbinhaltID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `warenkorbID` int(10) UNSIGNED NOT NULL,
  `produktID` int(10) UNSIGNED NOT NULL,
  `anzahl` int(11) NOT NULL,
  PRIMARY KEY(warenkorbinhaltID)
);

-- Fremdschlüssel

ALTER TABLE `Bestellung` 
  ADD FOREIGN KEY (`lieferadresse`) REFERENCES `Adresse`(`adresseID`)
  ON DELETE CASCADE ON UPDATE CASCADE,
  ADD FOREIGN KEY (`rechnungsadresse`) REFERENCES `Adresse`(`adresseID`)
  ON DELETE CASCADE ON UPDATE CASCADE,
  ADD FOREIGN KEY (`warenkorbID`) REFERENCES `Warenkorb`(`warenkorbID`)
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Kundenadresse` 
  ADD FOREIGN KEY (`adresseID`) REFERENCES `Adresse`(`adresseID`)
  ON DELETE CASCADE ON UPDATE CASCADE,
  ADD FOREIGN KEY (`userID`) REFERENCES `User`(`userID`)
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Warenkorb` 
  ADD FOREIGN KEY (`userID`) REFERENCES `User`(`userID`)
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Warenkorbinhalt` 
  ADD FOREIGN KEY (`warenkorbID`) REFERENCES `Warenkorb`(`warenkorbID`)
  ON DELETE CASCADE ON UPDATE CASCADE,
  ADD FOREIGN KEY (`produktID`) REFERENCES `Produkt`(`produktID`)
  ON DELETE CASCADE ON UPDATE CASCADE;

-- TESTDATEN

-- Für Adresse

INSERT INTO `Adresse` (strasse, hausnummer, ort, plz, land)
VALUES ("Wormser Strasse", 109, "Frankenthal", "67227", "Deutschland");

INSERT INTO `Adresse` (strasse, hausnummer, ort, plz, land)
VALUES ("Wormser Strasse", 38, "Frankenthal", "67227", "Deutschland");

INSERT INTO `Adresse` (strasse, hausnummer, ort, plz, land)
VALUES ("Wormser Strasse", 28, "Frankenthal", "67227", "Deutschland");

INSERT INTO `Adresse` (strasse, hausnummer, ort, plz, land)
VALUES ("Carl-Zuckmayer-Straße", 4, "Mannheim", "68169", "Deutschland");

INSERT INTO `Adresse` (strasse, hausnummer, ort, plz, land)
VALUES ("Schiffbauerdamm", 5, "Wismar", "23966", "Deutschland");

INSERT INTO `Adresse` (strasse, hausnummer, ort, plz, land)
VALUES ("Treforest Road", 16, "Coventry", "CV3 1FN", "England");

-- Für User

INSERT INTO `User` (userID, vorname, nachname, isAdmin)
VALUES ("1", "Dimitrios", "Chalatsoglou", 1);

INSERT INTO `User` (userID, vorname, nachname, isAdmin)
VALUES ("2", "Leon", "Lovelock", 0);

INSERT INTO `User` (userID, vorname, nachname, isAdmin)
VALUES ("3", "Bong", "Tsetepe-Muani", 0);

INSERT INTO `User` (userID, vorname, nachname, isAdmin)
VALUES ("4", "Adam", "Helpmme", 0);

INSERT INTO `User` (userID, vorname, nachname, isAdmin)
VALUES ("5", "Aschkobar", "die Nummer Eins", 0);

INSERT INTO `User` (userID, vorname, nachname, isAdmin)
VALUES ("1MQSIfgsdchAZCG23YJWXTei2UL2", "Marcel", "F", 1);

INSERT INTO `User` (userID, vorname, nachname, isAdmin)
VALUES ("wjBwf8v4RreBYIk4FlYlnVyp9Ih2", "Kaan", "D", 1);

INSERT INTO `User` (userID, vorname, nachname, isAdmin)
VALUES ("znQcOGQvf2Q1YacafQUd4iozOw32", "Dimitrios", "C", 1);

INSERT INTO `User` (userID, vorname, nachname, isAdmin)
VALUES ("Oapbs8pap7N3apKek4Q2Je6YnW63", "Eren", "Y", 1);

-- Für Produkt

INSERT INTO `Produkt` (produktname, produktbeschreibung, preis, bild)
VALUES ("MaMa Mia", "Mango-Maracuja-Schorle" , 3.49, "../images/MangoMaracuja.png");

INSERT INTO `Produkt` (produktname, produktbeschreibung, preis, bild)
VALUES ("Sour Cherry", "Apfel-Kirsch-Schorle" , 3.49, "../images/ApfelKirsch.png");

INSERT INTO `Produkt` (produktname, produktbeschreibung, preis, bild)
VALUES ("Red Wild", "Beerenmix-Schorle" , 3.49, "../images/Beerenmix.png");

INSERT INTO `Produkt` (produktname, produktbeschreibung, preis, bild)
VALUES ("Gold Lime", "Ginger Ale-Schorle mit Limettenschuss" , 3.49, "../images/GingerAleLimette.png");

INSERT INTO `Produkt` (produktname, produktbeschreibung, preis, bild)
VALUES ("Juicy Grenade", "Organgen-Granatapfel-Schorle" , 3.49, "../images/OrgangeGranatapfel.png");

INSERT INTO `Produkt` (produktname, produktbeschreibung, preis, bild)
VALUES ("Mint Hint", "Zitronenlimonade mit frischer Minze" , 3.49, "../images/ZitroneMinze.png");

-- Für Kundenadresse

INSERT INTO `Kundenadresse` VALUES ("1", 1);

INSERT INTO `Kundenadresse` VALUES ("1", 2);

INSERT INTO `Kundenadresse` VALUES ("1", 3);

INSERT INTO `Kundenadresse` VALUES ("2", 4);

INSERT INTO `Kundenadresse` VALUES ("3", 5);

INSERT INTO `Kundenadresse` VALUES ("4", 5);

INSERT INTO `Kundenadresse` VALUES ("5", 4);

INSERT INTO `Kundenadresse` VALUES ("1MQSIfgsdchAZCG23YJWXTei2UL2", 4);

INSERT INTO `Kundenadresse` VALUES ("wjBwf8v4RreBYIk4FlYlnVyp9Ih2", 2);

INSERT INTO `Kundenadresse` VALUES ("znQcOGQvf2Q1YacafQUd4iozOw32", 3);

INSERT INTO `Kundenadresse` VALUES ("Oapbs8pap7N3apKek4Q2Je6YnW63", 1);

-- für Warenkorb

INSERT INTO `Warenkorb` (userID) VALUES ("1");

INSERT INTO `Warenkorb` (userID) VALUES ("5");

INSERT INTO `Warenkorb` (userID) VALUES ("1");

INSERT INTO `Warenkorb` (userID) VALUES ("2");

INSERT INTO `Warenkorb` (userID) VALUES ("1MQSIfgsdchAZCG23YJWXTei2UL2");

INSERT INTO `Warenkorb` (userID) VALUES ("wjBwf8v4RreBYIk4FlYlnVyp9Ih2");

INSERT INTO `Warenkorb` (userID) VALUES ("znQcOGQvf2Q1YacafQUd4iozOw32");

INSERT INTO `Warenkorb` (userID) VALUES ("Oapbs8pap7N3apKek4Q2Je6YnW63");

-- Für Warenkorbinhalt

INSERT INTO `Warenkorbinhalt` VALUES (1, 1, 1, 5);

INSERT INTO `Warenkorbinhalt` VALUES (2, 2, 2, 2);

INSERT INTO `Warenkorbinhalt` VALUES (3, 3, 3, 2);

INSERT INTO `Warenkorbinhalt` VALUES (4, 3, 2, 1);

INSERT INTO `Warenkorbinhalt` VALUES (5, 4, 1, 1);

-- Für Bestellung

INSERT INTO `Bestellung` (warenkorbID, lieferadresse, rechnungsadresse, bezahlt) 
VALUES (3, 1, 2, 1);