### sass中的占位选择器(%)和@extend 代码

未使用@extend复用占位选择器

![image-20240426135728101](https://gitee.com/pan-zhi_jian/cloud-imgs/raw/master/img/image-20240426135728101.png)

在其他选择器中使用@extend复用占位选择器属性

![image-20240426135922282](https://gitee.com/pan-zhi_jian/cloud-imgs/raw/master/img/image-20240426135922282.png)

>如果不使用@extend方法，就不会复用%选择器中的属性
>
>作用：当选择器中有许多代码重复的时候，可以使用%选择器，把重复的属性归并到一个选择器当中，再使用@extend %选择器进行复用.