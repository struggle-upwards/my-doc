`docker-compose`是一个用于定义和运行多容器Docker应用程序的工具。通过一个`docker-compose.yml`文件，你可以配置你的应用服务，然后使用`docker-compose`命令来创建和启动所有服务。以下是一些常用的`docker-compose`命令：

### 基本命令

- **`docker-compose up`**

- - 启动和运行整个应用。默认情况下，`docker-compose up`会尝试自动构建任何尚未构建的镜像。如果你想强制它重新构建镜像，可以使用`--build`选项。



- **`docker-compose down`**

- - 停止并删除容器、网络、卷和镜像创建的`docker-compose up`。



### 构建和镜像管理

- **`docker-compose build`**

- - 构建或重新构建服务中定义的镜像。



- **`docker-compose push`**

- - 将服务镜像推送到Docker Hub或其他镜像仓库。



- **`docker-compose pull`**

- - 拉取服务依赖的镜像。



### 服务管理

- **`docker-compose start`**

- - 启动已经存在的服务容器。



- **`docker-compose stop`**

- - 停止正在运行的容器而不删除它们。与`docker-compose down`不同，不会删除容器和网络。



- **`docker-compose restart`**

- - 重启服务。



- **`docker-compose pause`**

- - 暂停服务中的容器。



- **`docker-compose unpause`**

- - 恢复服务中已暂停的容器。



### 查看服务状态和日志

- **`docker-compose ps`**

- - 列出项目中当前的容器。



- **`docker-compose logs`**

- - 查看服务的日志输出。可以指定服务名称来查看特定服务的日志。



### 运行一次性命令

- **`docker-compose run`**

- - 在一个新容器中运行一个一次性命令。例如，`docker-compose run app bash`会在`app`服务的容器中启动一个新的`bash`会话。



- **`docker-compose exec`**

- - 在运行中的容器上执行命令。与`run`不同，`exec`会在**已经存在且正在运行**的容器中执行命令。



### 其他命令

- **`docker-compose config`**

- - 验证并查看配置。这个命令可以用来检查配置文件的语法是否正确。



- **`docker-compose version`**

- - 显示Docker Compose的版本信息。