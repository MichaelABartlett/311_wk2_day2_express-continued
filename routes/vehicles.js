
const express = require("express");

// this will hold the routes that the application will respond to
const router = express.Router();

// this controller holds the functions / callbacks of how to handle request when they come in
const controller = require("../controllers/vehicles");

/*
/GET comments
/GET comments/:id
/POST comments
 */

// start adding the routes,

// route to fetch all vehicles
router.get("/vehicles", controller.list);

// route to get a specific vehicle by its id
router.get("/vehicles/:id", controller.show);

// route to create a new vehicle
router.post("/vehicles", controller.create);


module.exports = router;