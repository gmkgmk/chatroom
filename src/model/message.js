const createMessage = (mes = "", person="", date = new Date()) => {
  let message = {
    type: "mes",
    message: mes,
    date: date,
    person: person
  };
  return message
};

const onMessage = function(ws,event) {
  try {
    const messageFromClien = JSON.parse(event);
    if (messageFromClien.type === 1) {
      const person = messageFromClien.user
      const msg = messageFromClien.msg
      let message = createMessage(msg, person);
   
      this.wsServer.clients.forEach(function each(client) {
        client.send(JSON.stringify(message));
      });
      this.megList.push(message);
    }
  } catch (e) {}
};

module.exports = onMessage;
