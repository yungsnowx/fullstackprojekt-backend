#!/bin/bash

#Docker Daemon starten

open --background -a Docker

#Warten bis Docker hochgefahren ist

echo "------------------"
echo "Warten auf Docker..."
echo "------------------"

spin='-\|/'
i=0

until docker info >& /dev/null;
do
    i=$(( (i+1)%4 ))
    printf "\r${spin:$i:1}"
    sleep 0.1
done

echo "------------------"
echo "Docker ist bereit!"
echo "------------------"
sleep 1

#Image bauen

echo "------------------"
echo "Image wird gebaut..."
echo "--------------------"

docker build -t database_container:latest ./DockerizedSQL/

echo "------------------"
echo "Image wurde gebaut!"
echo "-------------------"

#Container laufen lassen

echo "------------------"
echo "Datenbank wird hochgefahren..."
echo "------------------------------"

docker run --name "MariaDB" -d -p 3306:3306 database_container:latest

echo "------------------"
echo "Datenbank ist bereit"
echo "--------------------"