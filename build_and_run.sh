docker build -t blockchain:current  .
docker run -it \
    --mount source=ravenchain,target=/root/.raven \
    blockchain:current
