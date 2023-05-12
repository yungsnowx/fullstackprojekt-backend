#!/bin/bash

#Docker Daemon starten

systemctl --user start docker-desktop

#Image bauen

docker build -t database_container:latest ./DockerizedSQL/

#Container laufen lassen

docker run -d -p 3306:3306 database_container:latest