const createMessage = (mes = "", person = "", date = new Date()) => {
  let message = {
    type: "mes",
    message: mes,
    date: date,
    person: person,
    time: new Date()
  };
  return message;
};
const onMessage = (socket, io) => {
  socket.on("client:postAll", msg => {
    const message = createMessage(msg.msg,msg.person);
    io.local.emit("server:message", message);
  });
};

// const onMessage = function(ws, event) {
//   // let messageFromClien;
//   // try {
//   //   messageFromClien = JSON.parse(event);
//   // } catch (e) {
//   //   throw new Error(e);
//   // }

//   // const { type } = messageFromClien;
//   // if (!type) {
//   //   throw new Error("message must have props type");
//   // }

//   // const { user: { key }, msg } = messageFromClien;
//   // var person = this.findUserByKey(key);
//   // var message = createMessage(msg, person);
//   // switch (type) {
//   //   case "socket:Group":
//   //     this.wsServer.clients.forEach(function each(client) {
//   //       client.send(JSON.stringify(message));
//   //     });
//   //     this.megList.push(message);

//   //     break;
//   //   case "socket:single":
//   //     this.wsServer.clients.forEach(function each(client) {
//   //       client.send(JSON.stringify(message));
//   //     });
//   //     this.megList.push(message);
//   //     break;
//   //   default:
//   //     person = null;
//   //     message = null;
//   // }
// };

module.exports = onMessage;
