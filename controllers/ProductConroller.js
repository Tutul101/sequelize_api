const db = require("../models/");

const Product = db.products;
const Review = db.reviews;

// Create product

const addProduct = async (req, res) => {
  let info = {
    prod_title: req.body.prod_title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.PUBLISHED ? req.body.PUBLISHED : false,
  };
  const product = await Product.create(info).catch((err) =>
    console.log(`Error : ${err}`)
  );
  res.status(200).send(product);
};

// Get all products
const getAllProducts = async (req, res) => {
  let products = await Product.findAll({});
  res.status(200).send(products);
};

//Get sinngle product

const getSingleProduct = async (req, res) => {
  let id = req.params.id;
  let products = await Product.findOne({ where: { prod_id: id } });
  res.status(200).send(products);
};

//Update Product

const updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.update(req.body, { where: { prod_id: id } });
  res.status(200).send(`Produdt ${id} is updated successfully`);
};

//Delete Product
const deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(200).send(`Produdt ${id} is deleted successfully`);
};

//Get Published Product
const getPublishedProduct = async (req, res) => {
  const products = await Product.findAll({ Where: { published: true } });
  res.status(200).send(products);
};

module.exports = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getPublishedProduct,
};
