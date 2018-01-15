const createUser = require("./user/createUser");
const UserManage = require("./user/userManage");
const { strMapToAry } = require("../../common/util/tools");
const onConnection = function(socket, io) {
  let personInfo = createUser();

  var person = new UserManage(personInfo);
  const message = {
    type: "userInfo",
    person
  };
  socket.emit("userInfo", message);


  io.local.emit("userList", strMapToAry(this.personList)); //发送给所有人,包括自己
  // socket.broadcast.emit("userList", strMapToAry(this.personList));//发送除自己以外的所有人
  this.personList.set(person.key, person);
  
};
module.exports = onConnection;
