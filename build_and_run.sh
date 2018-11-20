docker build -t blockchain:current  .
docker run -it \
    -p 8766:8766 \
    --name ravencoin \
    --mount source=ravenchain,target=/root/.raven \
    blockchain:current 
