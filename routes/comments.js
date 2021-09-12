const express = require("express");

// this will hold the routes that the application will respond to
const router = express.Router();

// this controller holds the functions /callback of how to handle the request when they come in
const controller = require("../controllers/comments");



/*
/GET comments
/GET comments/:id
/POST comments
 */

// start adding the routes,

// route to fetch all comments
router.get("/comments", controller.list);

// route to get a specific comment by its id
router.get("/comments/:id", controller.show);

// route to create a new comment
router.post("/comments", controller.create);



module.exports = router;