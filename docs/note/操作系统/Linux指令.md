# Linux指令






```sh
# 安装pakeage包
yum install package

# 端口扫描
netstat -ano | grep 80
netstat -ano | findstr 80(windows)

# 根据PID结束进程
kill <PID>
# 根据PID强制结束进程
kill -9 <PID> 
taskkill /pid <PID> (/f)(windows)
```

