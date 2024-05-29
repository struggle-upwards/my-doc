# docker 部署ollama



```sh
ollama run llama3
```



```sh
# 拉取镜像
docker pull ghcr.io/open-webui/open-webui:main
```



```sh
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

