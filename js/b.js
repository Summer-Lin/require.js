// 定义b.js模块，并把c.js引进来，因为c.js有返回一个变量，
// 所以b.js得在函数设置个变量c(这里变量名随意，对应即可)
//引进几个模块，函数小括号里面顺序要有几个变量，才能引用正确
define(['c'],function (c) {
    var b = "这是bbbbbbbbbb.js模块,把c.js引进来：：：：：：" + c
    return b
})