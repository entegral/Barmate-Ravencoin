docker stop ravencoin barmate
docker rm ravencoin barmate
echo 'containers stopped and removed.'
docker network rm raven-net
echo "docker network 'raven-net' removed"