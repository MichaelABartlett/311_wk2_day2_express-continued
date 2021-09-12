const express = require("express");

// this will hold the routes that the application will respond to
const router = express.Router();

// this controller holds the functions /callback of how to handle the request when they come in
const commentsController = require("../controllers/comments");



/*
/GET comments
/GET comments/:id
/POST comments
 */

// start adding the routes,

// route to fetch all comments
router.get("/comments", commentsController.list);

// route to get a specific comment by its id
router.get("/comments/:id", commentsController.show);

// route to create a new comment
router.post("/comments", commentsController.create);



module.exports = router;