all : 
	cd ./srcs/ && docker compose up -d --build nginx mariadb wordpress

bonus : all
	cd ./srcs/ && docker compose up -d --build site

stop :
	cd ./srcs/ && docker compose down

clean : stop 
	docker volume rm srcs_wordpress_db srcs_wordpress_files

fclean : clean
	docker system prune -af

re : fclean all