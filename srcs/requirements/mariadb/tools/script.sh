#!/bin/sh
<<<<<<< HEAD
if [ ! -d "/var/lib/mysql/wordpress_db" ]; then
    service mysql start

    mysql -e "CREATE DATABASE wordpress_db;"

    mysql -e "CREATE USER 'shonjmoj'@'localhost' IDENTIFIED BY '123';"
    mysql -e "GRANT ALL PRIVILEGES ON *.* TO 'shonjmoj'@'localhost' WITH GRANT OPTION;"
    mysql -e "CREATE USER 'shonjmoj'@'%' IDENTIFIED BY '123';"
    mysql -e "GRANT ALL PRIVILEGES ON *.* TO 'shonjmoj'@'%' WITH GRANT OPTION;"
    mysql -e "FLUSH PRIVILEGES;"

    mysql wordpress_db < db.sql

    service mysql stop
=======

if [ ! -d "/var/lib/mysql/$DB_NAME" ]; then
    service mysql restart

    echo "Creating database..."
    mysql -e "CREATE DATABASE $DB_NAME;"
    
    echo "Add tables to the database..."
    mysql $DB_NAME < wordpress.sql
    
    echo "Create $MYSQL_USER for localhost..."
    mysql -e "CREATE USER '$MYSQL_USER'@'localhost' IDENTIFIED BY '$MYSQL_PASSWORD';"
    echo "GRANT $MYSQL_USER for localhost..."
    mysql -e "GRANT ALL PRIVILEGES ON *.* TO '$MYSQL_USER'@'localhost' WITH GRANT OPTION;"
    echo "Create $MYSQL_USER for %..."
    mysql -e "CREATE USER '$MYSQL_USER'@'%' IDENTIFIED BY '$MYSQL_PASSWORD';"
    echo "GRANT $MYSQL_USER for %..."
    mysql -e "GRANT ALL PRIVILEGES ON *.* TO '$MYSQL_USER'@'%' WITH GRANT OPTION;"
    echo "FLUSH PRIVILEGES..."
    mysql -e "FLUSH PRIVILEGES;"
    echo "UPDATE root password..."
    echo "FLUSH PRIVILEGES; ALTER USER 'root'@'localhost' IDENTIFIED BY '$MYSQL_ROOT_PASSWORD';" | mysql -u root
    pkill mysqld

>>>>>>> docs : remove useless files and use env variables
fi

mysqld_safe