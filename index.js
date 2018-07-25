var fs = require("fs");

// **************************************************************************************
// 异步读取
fs.readFile('input.txt',function (err,data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取：" + data.toString());
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取：" + data.toString());

console.log("程序执行完毕");
// **************************************************************************************
// 异步打开文件方式

console.log("准备打开文件");
fs.open('input.txt','r+',function (err,fd) {
    if (err) {
         return console.error(err);
    }
    console.log("文件打开成功");
});
// **************************************************************************************
// 获取文件信息

console.log("准备打开文件");
console.log("准备打开文件！");
fs.stat('input.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("读取文件信息成功！");
   
   // 检测文件类型
   console.log("是否为文件(isFile) ? " + stats.isFile());
   console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
});
// **************************************************************************************
// 写入文件

console.log("准备写入文件");
fs.writeFile('write.txt', '我是通 过fs.writeFile 写入文件的内容',  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
   console.log("--------我是分割线-------------")
   console.log("读取写入的数据！");
   fs.readFile('write.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("异步读取文件数据: " + data.toString());
   });
});
// **************************************************************************************
// 读取文件

var buf = new Buffer.alloc(1024);

console.log("读取文件----------准备打开已存在的文件！");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("读取文件----------文件打开成功！");
   console.log("读取文件----------准备读取文件：");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + "取文件----------字节被读取");
      
      // 仅输出读取的字节
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }

     // 关闭文件
      fs.close(fd,function () {
          if (err) {
              console.log(err);
          }
          console.log("取文件----------关闭文件成功");
      });
   });
});
// **************************************************************************************
// 截取文件

var buf1 = new Buffer.alloc(1024);

console.log("截取文件----------打开文件");
fs.open('input.txt','r+',function (err,fd) {
    if (err) {
        console.error(err);
    }
    console.log("截取文件----------文件打开成功");
    console.log("截取文件----------截取了10字节后的文件内容");

    // 截取文件
    fs.ftruncate(fd,10,function (err) {
        if (err) {
            console.log(err);
        }
        console.log("截取文件----------文件截取成功");
        console.log("截取文件----------读取相同的文件");
        fs.read(fd,buf1,0,buf1.length,0,function (err,bytes) {
            if (err) {
                console.log(err);
            }

            // 仅仅输出读取的文件内容
            if (bytes > 0) {
                console.log(buf1.slice(0,bytes).toString());
            }

            // 关闭文件
            fs.close(fd,function (err) {
                if (err) {
                    console.log(err);
                }
                console.log("截取文件----------关闭文件成功");
            });
        });
    });
});
// **************************************************************************************
// 删除文件

console.log("删除文件----------准备删除文件");
fs.unlink('write.txt',function (err) {
    if (err) {
        return console.error(err);
    }

    console.log("删除文件----------文件删除成功");
});
// **************************************************************************************
// 创建目录
console.log("创建目录----------/temp/test");
fs.mkdir("/tmp/test/",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("创建目录----------创建目录成功");
});

















