start-zookeeper:
	docker build -t zookeeper-example .

	docker run -it \
		-v `pwd`:/usr/src/zooker zookeeper-example \
		/bin/bash -c "\
			npm install && \
			/usr/src/zooker-service/zookeeper-3.4.10/bin/zkServer.sh start && \
			/bin/bash \
		"
