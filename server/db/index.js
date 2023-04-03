//this is the access point for all things database related!

const db = require("./db");
const Client = require("./models/Client");

//associations could go here!

module.exports = {
  db,
  models: {
    Client,
  },
};
