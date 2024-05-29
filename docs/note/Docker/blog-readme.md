

# blog启动服务



### 使用docker分开管理服务

```sh
cd web

docker build -t vue-image . 

docker run -p 3000:80 -d --name blog-vue vue-image


cd ../server

docker build -t gin-image .

docker run --name blog-gin -p 8080:8080 -d gin-image
```



### 使用docker-compose一起管理服务



**docker-compose.yml**

```dockerfile
version: '3.8'

services:
  web:
    build:
      context: ./web
      dockerfile: Dockerfile
    ports:
      - "3000:80"
    container_name: blog-vue

  server:
    build:
      context: ./server
      dockerfile: Dockerfile
    ports:
      - "8080:8080"
    container_name: blog-gin
```



```dockerfile
docker-compose down
docker rmi blog_web blog_server

# 构建容器
docker-compose build

# 启动容器
docker-compose up -d

# 更新容器并重启
docker-compose up --build
```

