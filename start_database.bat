docker build -t database_container:latest .\DockerizedSQL\

docker run -d -p 3306:3306 database_container:latest