docker build -t blockchain:current  .
docker run -it \
    --name ravencoin \
    --mount source=ravenchain,target=/root/.raven \
    blockchain:current 
