const socketIo = require("socket.io");
class createWebsocket {
  constructor({ server, onConnection, onMessage, onClose, onError }) {
    this.personList = new Map();
    this.io = socketIo(server);

    this.onConnection = onConnection;
    this.onMessage = onMessage;
    this.onClose = onClose;
    this.onError = onError;
    this.init();
  }
  init() {
    this.io.on("connection", socket => {
      this.onConnection.call(this, socket, this.io);
      this.onMessage(socket, this.io);
      // 断开连接
      socket.on("disconnecting", this.onClose);
      // 发生错误
      socket.on("error", this.onError);
    });
  }
  findUserByKey(key) {
    let user = {};
    this.personList.forEach(item => {
      if (item.key === key) {
        user = item;
      }
    });
    return user;
  }
}

module.exports = createWebsocket;
