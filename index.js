var server = require("./server");
var router = require("./router");
var fs = require('fs');

server.start(router.route);

function printHello() {
    console.log("Hello Word");
}

var t = setTimeout(printHello, 1000);

clearTimeout(t);

console.trace();