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

const onMessage = function(ws, event) {
  let messageFromClien;
  try {
    messageFromClien = JSON.parse(event);
  } catch (e) {
    throw new Error(e);
  }

  const { type } = messageFromClien;
  if (!type) {
    throw new Error("message must have props type");
  }

  const { user: { key }, msg } = messageFromClien;
  switch (type) {
    case 1:
      let person = JSON.parse(this.findUserByKey(key)) ;
      console.log(person)
      let message = createMessage(msg, person);
      this.wsServer.clients.forEach(function each(client) {
        client.send(JSON.stringify(message));
      });
      this.megList.push(message);
  }
};

module.exports = onMessage;
