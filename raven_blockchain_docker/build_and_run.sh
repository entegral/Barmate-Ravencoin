docker stop ravencoin
docker rm ravencoin
docker build -t ravencoin:current  .
docker run -d \
    --restart always \
    --network raven-net \
    --ip 172.19.0.2 \
    --name ravencoin \
    --mount source=ravenchain,target=/root/.raven \
    ravencoin:current 
