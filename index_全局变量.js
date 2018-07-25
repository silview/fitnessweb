var server = require("./server");
var router = require("./router");
 
server.start(router.route);
// ****************************************************************************************
// 全局变量
// ****************************************************************************************

// 输出本文件路径
console.log(__dirname);
// 输出本文件目录
console.log(__filename);
// 延时2000mS执行printHello
console.time("执行printHello");
function printHello(){
    console.time("执行printHello");
    console.log("Hello,world");
    // 输出当前目录
    console.log("当前目录：" + process.cwd);
    // 当前版本
    console.log("当前版本：" + process.version);
    // 内存使用情况
    console.log(process.memoryUsage());
    console.trace("测试过程调用路径");
    console.timeEnd("执行printHello");
}
// 设置定时器2000mS
var t1 = setTimeout(printHello,2000);
// 取消定时器
// clearTimeout(t1);

// 每间隔3S执行一次
var t2 = setInterval(printHello,3000);
// 取消定时
// clearInterval();

