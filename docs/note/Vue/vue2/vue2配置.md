#### node16.16.0安装vue2及其脚手架vue-cli2

**node指定淘宝镜像**

```
 npm config set registry https://registry.npmmirror.com
```



**全局安装**

```
npm install -g vue@2.7.16 
npm install -g @vue/cli@4.0.0
npm install -g webpack@3.5.2
npm install vue-router@3.5.1
```

**查看vue和vue-cli版本**

```
npm list vue //查看vue版本
vue -V //查看vue-cli版本
```

**开发环境安装**

```
npm install -D @vue/cli@3.5.1
npm install -D webpack@3.5.2
npm install -D vue-router@3.5.1
```

**element-ui**

```
npm i element-ui -S
npm install less@3.0.4 --save
npm install less-loader@5.0.0 --save
```




```
//在main.js导入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
```



