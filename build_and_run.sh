docker build -t blockchain:current  .
docker run -it \
    --name ravend \
    --mount source=ravenchain,target=/root/.raven \
    blockchain:current
