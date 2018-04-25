start:
	docker-compose up -d

consume:
	docker-compose run consumer node consume /zookeeper
