#!/bin/bash

# Skript zum Starten des gesamten Projekts für MacOS
# Vorraussetzung: Frontend- und Backendrepository haben das selbe Elternverzeichnis

# Starte die Datenbank
bash start_database_for_mac.sh

sleep 5

# Backend starten
npm install
npm start &

# Frontend starten
cd ../fullstackprojekt-frontend
npm install
npm start &

sleep 5

open http://localhost:4200/