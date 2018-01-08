const createUser = require("./user/createUser");
const UserManage = require("./user/userManage");

const onConnection = function(ws, req) {
  let personInfo = createUser();
  var person = new UserManage(personInfo);

  this.personList.push(person);
  const message = {
    type: "userInfo",
    person
  };
  ws.send(JSON.stringify(message));
};
module.exports = onConnection;
