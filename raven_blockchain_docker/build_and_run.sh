docker build -t blockchain:current  .
docker run -d \
    --network raven-net \
    --ip 172.19.0.2 \
    --name ravencoin \
    --mount source=ravenchain,target=/root/.raven \
    blockchain:current 
