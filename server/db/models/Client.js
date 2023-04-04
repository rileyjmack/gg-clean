const Sequelize = require("sequelize");
const db = require("../db");

const Client = db.define("client", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  companyName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  comments: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
});

module.exports = Client;
