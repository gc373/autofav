### auto-favourite Tweets  
create faverite All of TL  
or  
only one user


#### Usage  

##### all user  
need environment variable

```sh environment variable
CONSUMER_KEY
CONSUMER_SECRET
ACCESS_TOKEN_KEY
ACCESS_TOKEN_SECRET
MY_ID
# TARGET_ID (Optional)
```

##### no docker  
```sh
$ clone https://github.com/gc373/autofav.git  
$ cd nodefiles
$ npm install
$ node autofav.js
```  

##### docker
[gc373/autofav](https://hub.docker.com/r/gc373/autofav/)

```sh 
$ docker pull gc373/autofav:latest
$ docker run -it --rm \
    -e CONSUMER_KEY= \
    -e CONSUMER_SECRET= \
    -e ACCESS_TOKEN_KEY= \
    -e ACCESS_TOKEN_SECRET= \
    -e MY_ID= \
    gc373/autofav

```