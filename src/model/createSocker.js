const WebSocket = require("ws");

class createWebsocket {
  constructor({ server, onConnection, onMessage, onClose, onError }) {
    this.megList = [];
    this.id = 0;
    this.personList = [];

    this.wsServer = new WebSocket.Server({ server });
    this.onConnection = onConnection;
    this.onMessage = onMessage;
    this.onClose = onClose;
    this.onError = onError;
    this.init();
  }
  init() {
    this.wsServer.on("connection", (ws)=> {
      ws.on("message",  this.onMessage.bind(this,ws));
      ws.on("close",  this.onClose);
      ws.on("error",  this.onError);
      
      let newPerson = this.onConnection();
      ws.send(newPerson);
      this.wsServer.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(newPerson);
        }
      });
    });
  }
}

module.exports = createWebsocket;
