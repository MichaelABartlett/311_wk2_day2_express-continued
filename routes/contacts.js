const express = require("express");

// this will hold the routes taht the application will respond to
const router = express.Router();

// this controller holds the functions / callback of how to handle the request when they come in
const controller = require("../controllers/contacts");



/*
/GET contacts
/GET contacts/:id
/POST contacts
 */

// start adding the routes,

// route to fatch all comments
router.get("/contacts", controller.list);

// route to get a specific comment by its id
router.get("/contacts/:id", controller.show);

// toure to create a new contact
router.post("/contacts", controller.create)

module.exports = router;