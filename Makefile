all : 
<<<<<<< HEAD
	cd ./srcs/ && docker compose up -d --build
=======
	cd ./srcs/ && docker compose up -d --build nginx mariadb wordpress

bonus : all
	cd ./srcs/ && docker compose up -d --build site
>>>>>>> docs : remove useless files and use env variables

stop :
	cd ./srcs/ && docker compose down

<<<<<<< HEAD
re : down all
=======
clean : stop 
	docker volume rm srcs_wordpress_db srcs_wordpress_files

fclean : clean
	docker system prune -af

re : fclean all
>>>>>>> docs : remove useless files and use env variables
