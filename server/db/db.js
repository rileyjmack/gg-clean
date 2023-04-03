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

const db = new Sequelize(`postgres://localhost:5432/${databaseName}`, config);

console.log(db);
module.exports = db;
