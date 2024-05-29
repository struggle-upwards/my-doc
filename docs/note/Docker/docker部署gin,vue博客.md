# docker部署gin,vue博客



### 安装nginx

```sh
docker pull nginx
```



### 部署Vue3



**打包vue3项目**

```sh
npm run build
```



**nginx配置(default)**

```sh
server {
    listen       80;
    server_name  8.138.1.95;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri $uri/ @router;
    }
    location @router{
        rewrite ^(.+)$ /index.html last;
    }
    
    location /api/{
        rewrite ^/api/(.*)$ /$1 break;
        proxy_pass  http://8.138.1.95:8080/;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }

}
```



**在web目录下写dockerfile**(和dist同级)

```dockerfile
# 设置基础镜像
FROM nginx
# 定义作者
MAINTAINER zhijianpan
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY dist/  /usr/share/nginx/html/

# 修改default.conf
RUN rm /etc/nginx/conf.d/default.conf
 
ADD default.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]
```





### 部署gin



**编写dockerfile**

```dockerfile
#源镜像
FROM golang:latest

#FROM golang:1.22 as build
#作者
MAINTAINER zhijianpan

# 配置模块代理
ENV GO111MODULE=on
ENV GOPROXY=https://goproxy.cn,direct

## 在docker的根目录下创建相应的使用目录
RUN mkdir -p /www/webapp

## 设置工作目录
WORKDIR /www/webapp

## 将服务器的go工程代码加入到docker容器中
COPY . /www/webapp

#go构建可执行文件
RUN go build main.go

#暴露端口
EXPOSE 8080

RUN chmod +x main
ENTRYPOINT ["./main"]
```



