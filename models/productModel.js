module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    prod_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    prod_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    PUBLISHED: {
      type: DataTypes.BOOLEAN,
    },
  });
  return Product;
};
