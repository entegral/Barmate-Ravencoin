# barmate-server
This repo contains necessary files to start up a new barmate server with ravencoin payment integration


## To operate

* Download this repo to local machine running docker
* Setup docker virtual network, run:
    > ./build-and-run-stack.sh
* Build and run Ravencoin blockchain container:
```
    cd raven_blockchain_docker
    ./build_and_run.sh
```
* After blockchain has downloaded and been indexed (approx. 2-4 hours depending on hardware):
```
    cd barMate
    ./build_and_run.sh
```
* You should now have two docker containers running on the same custom docker-bridge network. You will have to configure your raven.conf file with an RPC username and password in order to start making RPC calls.
