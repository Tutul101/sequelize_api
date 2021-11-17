const dbConfig = require("../config/config");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acruire,
    idle: dbConfig.pool.idle,
  },
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(`ERROR: ${err}`);
  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.products = require("./productModel.js")(sequelize, DataTypes);
db.reviews = require("./reviewModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => console.log("Sync is done"));

module.exports = db;
