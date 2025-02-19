const express = require("express");

// this will hold the routes that the application will respond to
const router = express.Router();

// this controller holds the functions / callback of how to handle the request when the come in
const productController = require("../controllers/products");

/*
/GET comments
/GET comments/:id
/POST comments
 */

// start adding the routes,

// route to fetch all the products
router.get("/products", productController.list);

// route to get a specific product by its id
router.get("/products/:id", productController.show);

// route to create a new product
router.post("/products", productController.create);

module.exports = router;