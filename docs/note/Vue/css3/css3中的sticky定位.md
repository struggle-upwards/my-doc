# css3中的sticky定位

**类似fixed定位,strick定位是滚动后的(top,bottom,left,right)达到阈值后不再移动**



```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            height: 10000px;
            margin: 0;
            padding: 0;
        }

        .search {    
            color: white;
            background-color: blue;
            height: 1000px
        }
        .nav {
            background-color: black;
            height: 200px;
            color: white;
            position:sticky;
            top:30px;
        }

    </style>
</head>

<body>
    <div style="height:300px">占位</div>
    <div class="nav">导航栏</div>
    <div class="search">搜索框,登录信息</div>

</body>

</html>
```



![QQ2024430-232427](https://gitee.com/pan-zhi_jian/cloud-imgs/raw/master/img/QQ2024430-232427.gif)