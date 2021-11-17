module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "node_sequelize_api_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acruire: 30000,
    idle: 10000,
  },
};
