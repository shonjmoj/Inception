all : 
	cd ./srcs/ && docker compose up -d --build

stop :
	cd ./srcs/ && docker compose down

re : down all