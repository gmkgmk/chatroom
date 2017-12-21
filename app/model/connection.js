const createUser = require("./createUser");

const onConnection = function(ws, req) {
  console.log("链接");
  let person = createUser(this.id++);
  return JSON.stringify(person);
};
module.exports = onConnection;
