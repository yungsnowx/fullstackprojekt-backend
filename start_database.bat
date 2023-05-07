docker build -t database_container:latest .\DockerizedSQL\

docker run -p 3306:3306 database_container:latest