// We'll be using the https://github.com/theturtle32/WebSocket-Node
// WebSocket implementation
const Koa = require("koa");
const app = new Koa();
const path = require("path");
const fs = require("fs");
const PORT = 8081;
const Socket = require("./src/controller/controlPanel");

let server = app.listen(PORT);
Socket(server);
console.log(`running in ${PORT}`);
