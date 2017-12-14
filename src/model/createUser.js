const uuid = require("uuid");

const createPerson = (id) => {
  const key = uuid.v4();
  const preson = {
    type: "user",
    id: id,
    key: key,
    name: key
  };
  return preson;
};

module.exports = createPerson;
