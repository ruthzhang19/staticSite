// 使用 require 指令来载入nodejs的 http 模块，并将实例化的 HTTP 赋值给变量 http
const http = require("http");

// 使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口，函数通过 request, response 参数来接收和响应数据
http.createServer(function (request, response) {
    // 发送 HTTP 头部  状态值: 200 : OK 内容类型: text/plain, 编码为utf-8，避免中文乱码
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

    // 发送响应数据 "写代码很快乐"
    response.end('写代码很快乐\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://localhost:8888/ ')
