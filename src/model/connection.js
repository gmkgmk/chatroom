const createUser = require("./createUser");

const onConnection = function() {
  console.log("链接");
  let person = createUser(this.id++);
  console.log(person)
  return JSON.stringify(person);
};
module.exports = onConnection;
