@echo off
setlocal enabledelayedexpansion

start "" "C:\Programme\Docker\Docker\Docker Desktop.exe"

echo Docker wird gestartet...

:loop
docker info >nul 2>&1
if errorlevel 1 (
    timeout /t 1 >nul
    goto loop
)

echo Docker ist bereit

echo Image wird erstellt...

docker build -t database_container:latest .\DockerizedSQL\

echo Datenbank wird hochgefahren...

docker run --name "MariaDB" -d -p 3306:3306 database_container:latest

echo Datenbank ist bereit