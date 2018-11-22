docker stop ravencoin barmate
docker rm ravencoin barmate
docker network rm raven-net

docker network create \
  --driver=bridge \
  --subnet=172.19.0.0/16 \
  raven-net 
cd barMate
./build-docker
cd ../raven_blockchain_docker
./build_and_run.sh