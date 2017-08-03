### require.js例子图片
![image](https://github.com/Summer-Lin/require.js/blob/master/images/20170803175003.png)
![image](https://github.com/Summer-Lin/require.js/blob/master/images/GIF.gif)
![image](https://github.com/Summer-Lin/require.js/blob/master/images/20170803175037.png)

### 快速入门require.js

```
1、先配置main.js //因为require全部配置都在这里

2、在.html引入  require.js 和 main.js两个文件

3、在script 标签 用 require([],function(){}),把所需引进来
```
![image](https://github.com/Summer-Lin/require.js/blob/master/images/20170803180520.png)


### require.js例子结构

```
- require
    - css       //bootstrap.css
    - images    //忽略
    - js
        - plugin //插件
        - a.js
        - b.js
        - c.js
        - main.js
    index1.html //例子1
    index2.html //例子2，用bootstrap
    index3.html //例子3，把c.js引入到b.js，然后显示出来



```

### 学习require.js链接
[segmentfault总结](https://segmentfault.com/a/1190000002390643)

[阮一峰老师总结](http://www.ruanyifeng.com/blog/2012/11/require_js.html)
