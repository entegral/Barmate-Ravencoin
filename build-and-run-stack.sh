docker stop ravencoin barmate
docker rm ravencoin barmate
docker network rm raven-net

docker network create \
  --driver=bridge \
  --subnet=172.19.0.0/16 \
  raven-net 
echo 'docker network configured. Run the ravend docker then start the barmate docker.'