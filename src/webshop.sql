-- SQL-File für den Webshop
-- Zuletzt geändert: 6.5.2023
-- Version: 2
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
  `bezahlt` tinyint(1),
  `datum` timestamp,
  PRIMARY KEY(bestellID)
);

-- Tabellenstruktur für Tabelle "Kundenadresse"

CREATE TABLE `Kundenadresse` (
  `userID` int(11) UNSIGNED NOT NULL,
  `adresseID` int(11) UNSIGNED NOT NULL,
  PRIMARY KEY(userID, adresseID)
);

-- Tabellenstruktur für Tabelle "Produkt"

CREATE TABLE `Produkt` (
  `produktID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `produktname` varchar(50) NOT NULL,
  `produktbeschreibung` text DEFAULT NULL,
  `preis` decimal(10,2) NOT NULL,
  PRIMARY KEY(produktID)
);

-- Tabellenstruktur für Tabelle "User"

CREATE TABLE `User` (
  `userID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `vorname` varchar(30) NOT NULL,
  `nachname` varchar(30) NOT NULL,
  `email` varchar(60) NOT NULL UNIQUE,
  `passwort` varchar(512) NOT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  PRIMARY KEY(userID)
);

-- Tabellenstruktur für Tabelle "Warenkorb"

CREATE TABLE `Warenkorb` (
  `warenkorbID` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `userID` int(11) UNSIGNED NOT NULL,
  PRIMARY KEY(warenkorbID)
);

-- Tabellenstruktur für Tabelle "Warenkorbinhalt"

CREATE TABLE `Warenkorbinhalt` (
  `warenkorbID` int(10) UNSIGNED NOT NULL,
  `produktID` int(10) UNSIGNED NOT NULL,
  `anzahl` int(11) NOT NULL,
  PRIMARY KEY(warenkorbID, produktID)
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

INSERT INTO `User` (vorname, nachname, email, passwort, isAdmin)
VALUES ("Dimitrios", "Chalatsoglou", "chalatsoglou-dimitrios@web.de", "ilovejenniferaniston", 1);

INSERT INTO `User` (vorname, nachname, email, passwort, isAdmin)
VALUES ("Leon", "Lovelock", "lovelock@forlive.de", "vibesitinman", 0);

INSERT INTO `User` (vorname, nachname, email, passwort, isAdmin)
VALUES ("Bong", "Tsetepe-Muani", "muani@yahoo.de", "gimmesome", 0);

INSERT INTO `User` (vorname, nachname, email, passwort, isAdmin)
VALUES ("Adam", "Helpmme", "helpmme@please.uk", "hello", 0);

INSERT INTO `User` (vorname, nachname, email, passwort, isAdmin)
VALUES ("Aschkobar", "die Nummer Eins", "asche@gmail.com", "wasbleibtistasche", 0);

-- Für Produkt

INSERT INTO `Produkt` (produktname, produktbeschreibung, preis)
VALUES ("MacBookAir", "MacBook Air 2023 mit Apple M2-Chip, 16GB RAM, 256GB SSD" , 1699.99);

INSERT INTO `Produkt` (produktname, produktbeschreibung, preis)
VALUES ("Fitnesshantel", "Fitnesshantel 28kg Leichtmetall" , 14.99);

INSERT INTO `Produkt` (produktname, produktbeschreibung, preis)
VALUES ("Cabanossis-Käse", "Cabanossis mit Käsegeschmack 500g" , 3.99);

-- Für Kundenadresse

INSERT INTO `Kundenadresse` VALUES (1, 1);

INSERT INTO `Kundenadresse` VALUES (1, 2);

INSERT INTO `Kundenadresse` VALUES (1, 3);

INSERT INTO `Kundenadresse` VALUES (2, 4);

INSERT INTO `Kundenadresse` VALUES (3, 5);

INSERT INTO `Kundenadresse` VALUES (4, 5);

INSERT INTO `Kundenadresse` VALUES (5, 4);

-- für Warenkorb

INSERT INTO `Warenkorb` (userID) VALUES (1);

INSERT INTO `Warenkorb` (userID) VALUES (5);

INSERT INTO `Warenkorb` (userID) VALUES (1);

INSERT INTO `Warenkorb` (userID) VALUES (2);

-- Für Warenkorbinhalt

INSERT INTO `Warenkorbinhalt` VALUES (1, 1, 5);

INSERT INTO `Warenkorbinhalt` VALUES (2, 2, 2);

INSERT INTO `Warenkorbinhalt` VALUES (3, 3, 2);

INSERT INTO `Warenkorbinhalt` VALUES (3, 2, 1);

INSERT INTO `Warenkorbinhalt` VALUES (4, 1, 1);

-- Für Bestellung

INSERT INTO `Warenkorbinhalt` (warenkorbID, lieferadresse, rechnungsadresse, bezahlt) 
VALUES (3, 1, 2, 1);