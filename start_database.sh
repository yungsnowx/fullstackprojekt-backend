#!/bin/bash

#Image bauen

docker build -t database_container:latest ./DockerizedSQL/

#Container laufen lassen

docker run -p 3306:3306 database_container:latest