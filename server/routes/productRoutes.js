const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
//   searchProducts,
//   getProductsByCategory,
 getSingleProduct,
} = require("../controllers/productController");

router.post("/", addProduct);
router.get("/", getProducts);
router.get("/:id", getSingleProduct);
// router.get("/search", searchProducts);
// router.get("/category/:category", getProductsByCategory);
module.exports = router;