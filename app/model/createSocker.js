const WebSocket = require("ws");

class createWebsocket {
  constructor({ server, onConnection, onMessage, onClose, onError }) {
    this.megList = [];
    this.id = 0;
    this.personList = [];
    this.person = {};

    this.wsServer = new WebSocket.Server({
      server
    });
    this.onConnection = onConnection;
    this.onMessage = onMessage;
    this.onClose = onClose;
    this.onError = onError;
    this.init();
  }
  init() {
    this.wsServer.on("connection", (ws, req) => {
      ws.on("message", this.onMessage.bind(this, ws));
      ws.on("close", this.onClose);
      ws.on("error", this.onError);
      // 连接以后建立用户并发送给前端
      this.createPerson.call(this, ws);

      this.onConnection.call(this, ws);
      this.wsServer.clients.forEach(client => {
        if (client.readyState) {
          const message = JSON.stringify({
            type: "userlist",
            personList: this.personList
          });
          client.send(message);
        }
      });
    });
  }
  createPerson(ws) {}
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
