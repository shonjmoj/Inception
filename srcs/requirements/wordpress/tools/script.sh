cp -r /wordpress/* /var/www/
service php7.3-fpm start
service php7.3-fpm stop
/usr/sbin/php-fpm7.3 -FR