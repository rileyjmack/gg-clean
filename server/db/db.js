const Sequelize = require("sequelize");
const pkg = require("../../package.json");

const databaseName = pkg.name;

const config = {
  logging: false,
};

if (process.env.LOGGING === "true") {
  delete config.logging;
}

if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const db = new Sequelize(
  "postgres://lucca2_user:28jyxldSP1BmiZG4g55RqWxkfpAH4KxJ@dpg-ch192j33cv203bo38gig-a/lucca2"
);

module.exports = db;
