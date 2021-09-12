
const express = require("express");

// this will hold the routes that the application will respond to
const router = express.Router();

// this controller holds the functions / callbacks of how to handle request when they come in
const vehiclesController = require("../controllers/vehicles");

/*
/GET comments
/GET comments/:id
/POST comments
 */

// start adding the routes,

// route to fetch all vehicles
router.get("/vehicles", vehiclesController.list);

// route to get a specific vehicle by its id
router.get("/vehicles/:id", vehiclesController.show);

// route to create a new vehicle
router.post("/vehicles", vehiclesController.create);


module.exports = router;