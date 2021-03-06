docker stop barmate
docker rm barmate
docker build -t barmate:current  .
docker run -d \
    --restart always \
    --network raven-net \
    --ip 172.19.0.3 \
    -p 4567:4567 \
    --name barmate \
    --mount source=barMate,target=/data-warehouse \
    barmate:current ruby ./app.rb -o 172.19.0.3 
