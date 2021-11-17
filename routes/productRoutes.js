const ProductController = require("../controllers/ProductConroller");
const router = require("express").Router();

router.post("/addProduct", ProductController.addProduct);
router.get("/getAllProduct", ProductController.getAllProducts);
router.get("/published", ProductController.getPublishedProduct);

router.get("/getProduct/:id", ProductController.getSingleProduct);
router.put("/updateProduct/:id", ProductController.updateProduct);
router.delete("/deleteProduct/:id", ProductController.deleteProduct);

module.exports = router;
