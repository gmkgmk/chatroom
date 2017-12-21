/*
 * @Author: guo.mk 
 * @Date: 2017-12-19 17:22:45 
 * @Last Modified by:   guo.mk 
 * @Last Modified time: 2017-12-19 17:22:45 
 */
// We'll be using the https://github.com/theturtle32/WebSocket-Node
// WebSocket implementation
const Koa = require("koa");
const app = new Koa();
const path = require("path");
const fs = require("fs");
const PORT = 8080;
const Socket = require("./app/controller/controlPanel");

let server = app.listen(PORT);
Socket(server);
console.log(`running in ${PORT}`);
