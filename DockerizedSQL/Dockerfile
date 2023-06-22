FROM mariadb:10.11.3

# Setze Umgebungsvariablen für MariaDB

ENV MYSQL_ROOT_PASSWORD=my-secret-pw 
ENV MYSQL_DATABASE=Webshop 
ENV MYSQL_USER=myuser 
ENV MYSQL_PASSWORD=mypassword  

# Kopiere das SQL-Skript in den Container 

COPY ./webshop.sql /docker-entrypoint-initdb.d/  

# Port-Nummer von MariaDB 

EXPOSE 3306  

# Starte den Container mit dem SQL-Skript 

CMD ["mysqld"]