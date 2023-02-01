#!/bin/sh
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

fi

mysqld_safe