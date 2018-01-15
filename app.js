/*
 * @Author: guo.mk 
 * @Date: 2017-12-19 17:22:45 
 * @Last Modified by: guo.mk
 * @Last Modified time: 2018-01-09 21:07:24
 */
const Koa = require("koa");
const app = new Koa();
const path = require("path");
const koaStatic = require("koa-static");

const PORT = 8080;

const server = app.listen(PORT);
app.use(koaStatic("./src"));

console.log(`running in ${PORT}`);

const create = require("./app/controller/controlPanel");
const httpServer = require('http').Server(app.callback());
create(server);
