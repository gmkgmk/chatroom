const createWebsocket = require("../model/createSocker");
const onConnection = require("../model/connection");
const onMessage = require("../model/message");
const onClose = require("../model/close");
const onError = require("../model/Error");


const create = server => {
  console.log("執行一次");
  
  new createWebsocket({
    server,
    onConnection,
    onMessage,
    onClose,
    onError
  });
};

module.exports = create;
