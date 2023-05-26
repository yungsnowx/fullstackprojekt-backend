#!/bin/bash

#Docker Daemon starten

open --background -a Docker

#Image bauen

docker build -t database_container:latest ./DockerizedSQL/

#Container laufen lassen

docker run -d -p 3306:3306 database_container:latest