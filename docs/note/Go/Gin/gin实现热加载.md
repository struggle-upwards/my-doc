# gin实现热加载



### 一、热加载是什么 

热加载：当我们对代码进行修改时，程序能够自动重新加载并执行，这在我们开发中是非常便利的，可以快速进行代码测试，省去了每次手动重新编译。

### 二、使用Air进行热加载

*`地址：https://github.com/cosmtrek/air`*

具有以下特性：

- 彩色日志输出
- 自定义构建或二进制命令
- 支持忽略子目录
- 启动后支持监听新目录
- 更好的构建过程

#### 安装

```sh
go get -u github.com/cosmtrek/air
```

#### 使用

```sh
# 初始化
cd project  &&  air -c .air.conf
# 启动热加载
air
# 启动热加载 带打印log
air -d
```

#### air.conf 的配置文件

```sh
root = "."
tmp_dir = "tmp"
 
[build]
# Just plain old shell command. You could use `make` as well.
cmd = "go build -o ./tmp/main ."
# Binary file yields from `cmd`.
bin = "tmp/main"
# Customize binary.
full_bin = "APP_ENV=dev APP_USER=air ./tmp/main"
# Watch these filename extensions.
include_ext = ["go", "tpl", "tmpl", "html"]
# Ignore these filename extensions or directories.
exclude_dir = ["assets", "tmp", "vendor", "frontend/node_modules"]
# Watch these directories if you specified.
include_dir = []
# Exclude files.
exclude_file = []
# This log file places in your tmp_dir.
log = "air.log"
# It's not necessary to trigger build each time file changes if it's too frequent.
delay = 1000 # ms
# Stop running old binary when build errors occur.
stop_on_error = true
# Send Interrupt signal before killing process (windows does not support this feature)
send_interrupt = false
# Delay after sending Interrupt signal
kill_delay = 500 # ms
 
[log]
# Show log time
time = false
 
[color]
# Customize each part's color. If no color found, use the raw app log.
main = "magenta"
watcher = "cyan"
build = "yellow"
runner = "green"
 
[misc]
# Delete tmp directory on exit
clean_on_exit = true
```

### 三、使用Fresh进行热加载

*`地址：https://github.com/gravityblast/fresh`* 

Fresh 是一个命令行工具，每次保存 Go 或模版文件时，该工具都会生成或重新启动 Web 应用程序。Fresh 将监视文件事件，并且每次创建 / 修改 / 删除文件时，Fresh 都会生成并重新启动应用程序。如果 go build 返回错误，它会将记录在 tmp 文件夹中。

安装

```
go get github.com/pilu/fresh
```

使用

```
cd project && fresh
```

### 四、使用bee进行热加载

*`地址：https://github.com/beego/bee`*

bee 是 beego 框架的热编译工具，同样可以对 GIN 框架进行热编译，使用起来很方便，功能也有很多

安装

```sh
$ go get -u github.com/beego/bee
```

使用

```sh
cd project && bee run
```

### 五、使用gowatch进行热加载

*地址：https://github.com/silenceper/gowatch*

Go 程序热编译工具，通过监听当前目录下的相关文件变动，进行实时编译。

安装

```sh
go get -u github.com/silenceper/gowatch
```

使用

安装完成后可以直接使用 gowatch 命令，命令行参数如下：

- -o : 非必须，指定 build 的目标文件路径
- -p : 非必须，指定需要 build 的 package（也可以是单个文件）
- -args: 非必须，指定程序运行时参数，例如：-args=’-host=:8080,-name=demo’
- -v: 非必须，显示 gowatch 版本信息

```sh
$ gowatch -o ./bin/demo -p ./cmd/demo
```



gowatch 可以修改配置文件`gowatch.yml`

大部分情况下，不需要更改配置，直接执行`gowatch`命令就能满足的大部分的需要，但是也提供了一些配置用于自定义，在执行目录下创建`gowatch.yml`文件:，gowatch.yml 配置示例

```sh
# 当前目录执行下生成的可执行文件的名字，默认是当前目录名
appname: "test"
# 指定编译后的目标文件目录
output: /bin/demo
# 需要追加监听的文件名后缀，默认只有'.go'文件
watch_exts:
    - .yml
# 需要监听的目录，默认只有当前目录
watch_paths:
    - ../pk
# 在执行命令时，需要增加的其他参数
cmd_args:
    - arg1=val1
# 在构建命令时，需要增加的其他参数
build_args:
    - -race
# 需要增加环境变量，默认已加载当前环境变量
envs:
    - a=b
# 是否监听 ‘vendor’ 文件夹下的文件改变
vendor_watch: false
# 不需要监听的目录名字
excluded_paths:
    - path
# main 包路径，也可以是单个文件，多个文件使用逗号分隔
build_pkg: ""
# build tags
build_tags: ""
 
# 是否禁止自动运行
disable_run: false
```



### 六、使用 gin 进行热加载

*`地址: https://github.com/codegangsta/gin`*

`gin`是用于实时重新加载 Go Web 应用程序的简单命令行实用程序。只需`gin`在您的应用程序目录中运行，您的网络应用程序将 `gin`作为代理提供。`gin`检测到更改后，将自动重新编译您的代码。您的应用在下次收到 HTTP 请求时将重新启动。

`gin` 坚持 “沉默就是黄金” 的原则，因此，只有在出现编译器错误或在错误发生后成功进行编译时，它才会抱怨。

安装

```sh
go install github.com/codegangsta/gin@latest
```

使用

```sh
gin run main.go
```

Options:

```
--laddr value, -l value       listening address for the proxy server
--port value, -p value        port for the proxy server (default: 3000)
--appPort value, -a value     port for the Go web server (default: 3001)
--bin value, -b value         name of generated binary file (default: "gin-bin")
--path value, -t value        Path to watch files from (default: ".")
--build value, -d value       Path to build files from (defaults to same value as --path)
--excludeDir value, -x value  Relative directories to exclude
--immediate, -i               run the server immediately after it's built
--all                         reloads whenever any file changes, as opposed to reloading only on .go file change
--godep, -g                   use godep when building
--buildArgs value             Additional go build arguments
--certFile value              TLS Certificate
--keyFile value               TLS Certificate Key
--logPrefix value             Setup custom log prefix
--notifications               enable desktop notifications
--help, -h                    show help
--version, -v                 print the version 
```

### 七、使用 realize进行热加载

*`地址：https://github.com/oxequa/realize`*

realize 是 Golang 的实时重载和任务运行器。它主要功能如下：

- 高性能实时刷新。
- 同时管理多个项目。
- 通过自定义扩展名和路径观看。
- 支持所有 Go 命令。
- 在不同的 Go 版本之间切换。
- 项目的自定义环境变量。
- 在文件更改前后或全局执行自定义命令。
- 将日志和错误导出到外部文件。
- 分步项目初始化。
- 重新设计的面板，显示构建错误，控制台输出和警告。

安装

```sh
go get github.com/oxequa/realize
```

使用

```sh
# 首先进行初始化
realize init
# 执行项目
realize start
# 添加命令
realize add
# 删除命令
realize init
```

Options:

```sh
--name="name"               -> Run by name on existing configuration
--path="realize/server"     -> Custom Path (if not specified takes the working directory name)
--generate                  -> Enable go generate
--fmt                       -> Enable go fmt
--test                      -> Enable go test
--vet                       -> Enable go vet
--install                   -> Enable go install
--build                     -> Enable go build
--run                       -> Enable go run
--server                    -> Enable the web server
--open                      -> Open web ui in default browser
--no-config                 -> Ignore an existing config / skip the creation of a new one
```

Examples:

```sh
realize start
realize start --path="mypath"
realize start --name="realize" --build
realize start --path="realize" --run --no-config
realize start --install --test --fmt --no-config
realize start --path="/Users/username/go/src/github.com/oxequa/realize-examples/coin/"
```