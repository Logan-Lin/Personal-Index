docker stop index_$1
docker rm index_$1

docker rmi linyan/index:py3.7-$1
docker build -t linyan/index:py3.7-$1 .

docker run -d -p $2:8080 -v $PWD:/workdir --restart always --name index_$1 linyan/index:py3.7-$1