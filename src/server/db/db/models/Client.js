const Sequelize = require("sequelize");
const db = require("..");

const Client = db.define("client", {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  companyName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },

  phoneNumber: {
    type: Sequelize.STRING,
  },

  comments: {
    type: Sequelize.TEXT,
  },
});

module.exports = Client;
